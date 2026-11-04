#!/usr/bin/env python3
"""Standalone CLI tool to check & refresh live welcome offers in app.js by combining the Official Issuer Page with US Credit Card Guide, Doctor of Credit, and Frequent Miler."""

import argparse
import collections
import datetime
import html
import json
import os
import re
import struct
import subprocess
import zlib

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
APP_JS_PATH = os.path.join(BASE_DIR, 'app.js')

USER_AGENT = (
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 '
    '(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
)

DOC_MASTER_URL = (
    'https://www.doctorofcredit.com/best-current-credit-card-sign-bonuses/'
)
FM_MASTER_URL = 'https://frequentmiler.com/best-credit-card-offers/'

# Per-card regex patterns tailored to each issuer's official HTML page structure
CARD_PATTERNS = {
    'amex-platinum': (
        r'As High As\s*([\d,]+)\s*(?:Membership Rewards|points)',
        (
            r'spend\s*(\$[\d,]+)\s*(?:or'
            r' more\s*)?in(?:\s*eligible)?\s*purchases.*?within the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} MR Points',
    ),
    'amex-platinum-schwab': (
        r'Earn\s*([\d,]+)\s*Membership Rewards',
        (
            r'spend\s*(\$[\d,]+)\s*(?:or'
            r' more\s*)?in(?:\s*eligible)?\s*purchases.*?within the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} MR Points',
    ),
    'amex-platinum-ms': (
        r'Earn\s*([\d,]+)\s*Membership Rewards',
        (
            r'spend\s*(\$[\d,]+)\s*(?:or'
            r' more\s*)?in(?:\s*eligible)?\s*purchases.*?within the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} MR Points',
    ),
    'amex-gold': (
        r'As High As\s*([\d,]+)\s*(?:Membership Rewards|points)',
        (
            r'spend\s*(\$[\d,]+)\s*(?:or'
            r' more\s*)?in(?:\s*eligible)?\s*purchases.*?within the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} MR Points',
    ),
    'delta-reserve': (
        (
            r'Earn\s*(?:[\d,]+\s+)?([\d,]+)\s*Bonus\s*Miles\s*after you use'
            r' your new Card to make\s*\$5,000'
        ),
        (
            r'make\s*(\$5,000)\s*in\s*purchases\s*within the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} SkyMiles',
    ),
    'delta-platinum': (
        (
            r'Earn\s*(?:[\d,]+\s+)?([\d,]+)\s*Bonus\s*Miles\s*after you use'
            r' your new Card to make\s*\$3,000'
        ),
        (
            r'make\s*(\$3,000)\s*in\s*purchases\s*within the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} SkyMiles',
    ),
    'delta-gold': (
        (
            r'Earn\s*(?:[\d,]+\s+)?([\d,]+)\s*Bonus\s*Miles\s*after you use'
            r' your new Card to make\s*\$2,000'
        ),
        (
            r'make\s*(\$2,000)\s*in\s*purchases\s*within the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} SkyMiles',
    ),
    'chase-sapphire-reserve': (
        r'Earn\s*([\d,]+)\s*(?:bonus\s*)?points\s*after you spend',
        (
            r'after you spend\s*(\$[\d,]+)\s*in purchases in the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} UR Points',
    ),
    'chase-sapphire-preferred': (
        r'New Cardmember Bonus\s*[\u2013-]\s*([\d,]+)\s*Points',
        (
            r'make\s*(\$[\d,]+)\s*in purchases during the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} UR Points',
    ),
    'chase-freedom-flex': (
        r'Earn\s*a\s*(\$[\d,]+)\s*bonus',
        (
            r'after you spend\s*(\$[\d,]+)\s*on purchases in the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} UR Points',
    ),
    'united-club': (
        r'New Cardmember Bonus\s*[\u2013-]\s*([\d,]+)\s*Miles',
        (
            r'after you spend\s*(\$[\d,]+)\s*on purchases in the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} MileagePlus Miles',
    ),
    'united-quest': (
        r'New Cardmember Bonus\s*[\u2013-]\s*([\d,]+)\s*Miles',
        (
            r'after you spend\s*(\$[\d,]+)\s*on purchases in the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} MileagePlus Miles + 500 PQP',
    ),
    'united-explorer': (
        r'New Cardmember Bonus\s*[\u2013-]\s*([\d,]+)\s*Miles',
        (
            r'after you spend\s*(\$[\d,]+)\s*on purchases in the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} MileagePlus Miles',
    ),
    'citi-strata-elite': (
        r'Earn\s*([\d,]+)\s*bonus\s*points',
        r'after spending\s*(\$[\d,]+)\s*in the first\s*(\d+\s*months)',
        '{amt} ThankYou Points',
    ),
    'citi-strata-premier': (
        r'Earn\s*([\d,]+)\s*bonus\s*points',
        r'after spending\s*(\$[\d,]+)\s*in the first\s*(\d+\s*months)',
        '{amt} ThankYou Points',
    ),
    'citi-strata': (
        r'Earn\s*([\d,]+)\s*bonus\s*points',
        r'after spending\s*(\$[\d,]+)\s*in the first\s*(\d+\s*months)',
        '{amt} ThankYou Points',
    ),
    'citi-aa-executive': (
        r'Earn\s*([\d,]+)\s*American Airlines AAdvantage\s*bonus\s*miles',
        r'after spending\s*(\$[\d,]+)\s*within the first\s*(\d+\s*months)',
        '{amt} AAdvantage Miles',
    ),
    'citi-aa-globe': (
        r'Earn\s*([\d,]+)\s*American Airlines AAdvantage\s*bonus\s*miles',
        r'after spending\s*(\$[\d,]+)\s*within the first\s*(\d+\s*months)',
        '{amt} AAdvantage Miles',
    ),
    'citi-aa-platinum-select': (
        r'Earn\s*([\d,]+)\s*American Airlines AAdvantage\s*bonus\s*miles',
        r'after spending\s*(\$[\d,]+)\s*within the first\s*(\d+\s*months)',
        '{amt} AAdvantage Miles',
    ),
    'capital-one-venture-x': (
        r'Earn\s*([\d,]+)\s*bonus\s*miles\s*once\s*you\s*spend',
        r'spend\s*(\$[\d,]+)\s*on purchases within the first\s*(\d+\s*months)',
        '{amt} Capital One Miles',
    ),
    'bofa-premium-elite': (
        r'([\d,]+)\s*online\s*bonus\s*points\s*offer',
        r'at least\s*(\$[\d,]+)\s*in purchases in the first\s*(\d+\s*days)',
        '{amt} BofA Rewards Points',
    ),
    'bofa-premium-rewards': (
        r'([\d,]+)\s*online\s*bonus\s*points\s*offer',
        r'at least\s*(\$[\d,]+)\s*in purchases in the first\s*(\d+\s*days)',
        '{amt} BofA Rewards Points',
    ),
    'atmos-summit': (
        r'([\d,]+)\s*bonus\s*points',
        (
            r'spend\s*(\$[\d,]+)\s*or more on purchases within the'
            r' first\s*(\d+\s*days)'
        ),
        '{amt} Atmos Points + Global Companion Award',
    ),
    'atmos-ascent': (
        r'([\d,]+)\s*bonus\s*points',
        (
            r'spend\s*(\$[\d,]+)\s*or more on purchases within the'
            r' first\s*(\d+\s*days)'
        ),
        '{amt} Atmos Points + $99 Companion Fare',
    ),
    'wf-autograph-journey': (
        r'Earn\s*([\d,]+)\s*bonus\s*points',
        (
            r'when you spend\s*(\$[\d,]+)\s*in purchases in the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} Wells Fargo Rewards Points',
    ),
    'wf-premier-autograph': (
        r'Earn\s*([\d,]+)\s*bonus\s*points',
        (
            r'when you spend\s*(\$[\d,]+)\s*in purchases in the'
            r' first\s*(\d+\s*months)'
        ),
        '{amt} Wells Fargo Rewards Points',
    ),
    'jetblue-premier': (
        r'Earn\s*([\d,]+)\s*bonus\s*points',
        r'spend\s*(\$[\d,]+)\s*on\s*purchases\s*in\s*the\s*first\s*(\d+\s*days)',
        '{amt} TrueBlue Points + 5 Tiles',
    ),
}

# 1. US Credit Card Guide per-card English review URLs
USCCG_URLS = {
    'amex-platinum': 'https://www.uscreditcardguide.com/amex-platinum-card/',
    'amex-platinum-schwab': (
        'https://www.uscreditcardguide.com/amex-platinum-card-for-schwab/'
    ),
    'amex-platinum-ms': (
        'https://www.uscreditcardguide.com/amex-platinum-card-for-morgan-stanley/'
    ),
    'amex-gold': (
        'https://www.uscreditcardguide.com/amex-premier-rewards-gold-card/'
    ),
    'delta-reserve': (
        'https://www.uscreditcardguide.com/amex-delta-reserve-credit-card/'
    ),
    'delta-platinum': (
        'https://www.uscreditcardguide.com/amex-platinum-delta-skymiles-credit-card/'
    ),
    'delta-gold': (
        'https://www.uscreditcardguide.com/amex-gold-delta-skymiles-credit-card/'
    ),
    'chase-sapphire-reserve': (
        'https://www.uscreditcardguide.com/chase-sapphire-reserve-credit-card/'
    ),
    'chase-sapphire-preferred': (
        'https://www.uscreditcardguide.com/chase-sapphire-preferred-credit-card/'
    ),
    'chase-freedom-flex': (
        'https://www.uscreditcardguide.com/chase-freedom-flex-credit-card/'
    ),
    'united-club': (
        'https://www.uscreditcardguide.com/united-mileageplus-club-credit-card/'
    ),
    'united-quest': (
        'https://www.uscreditcardguide.com/chase-ua-quest-credit-card/'
    ),
    'united-explorer': (
        'https://www.uscreditcardguide.com/chase-united-mileageplus-explorer-credit-card/'
    ),
    'citi-strata-elite': (
        'https://www.uscreditcardguide.com/citi-strata-elite-credit-card/'
    ),
    'citi-strata-premier': (
        'https://www.uscreditcardguide.com/citi-thankyou-premier-credit-card/'
    ),
    'citi-aa-executive': (
        'https://www.uscreditcardguide.com/citi-aadvantage-executive-credit-card/'
    ),
    'citi-aa-globe': (
        'https://www.uscreditcardguide.com/citi-aadvantage-globe-credit-card/'
    ),
    'citi-aa-platinum-select': (
        'https://www.uscreditcardguide.com/citi-aadvantage-platinum-select-credit-card/'
    ),
    'capital-one-venture-x': (
        'https://www.uscreditcardguide.com/capital-one-venture-x-credit-card/'
    ),
    'bofa-premium-elite': (
        'https://www.uscreditcardguide.com/boa-premium-rewards-elite-credit-card/'
    ),
    'bofa-premium-rewards': (
        'https://www.uscreditcardguide.com/boa-premium-rewards-credit-card/'
    ),
    'atmos-summit': (
        'https://www.uscreditcardguide.com/boa-alaska-atmos-summit-credit-card/'
    ),
    'atmos-ascent': (
        'https://www.uscreditcardguide.com/boa-alaska-atmos-ascent-credit-card/'
    ),
    'wf-autograph-journey': (
        'https://www.uscreditcardguide.com/wells-fargo-autograph-journey-credit-card/'
    ),
    'wf-premier-autograph': (
        'https://www.uscreditcardguide.com/wells-fargo-premier-autograph-credit-card/'
    ),
    'jetblue-premier': (
        'https://www.uscreditcardguide.com/barclays-jetblue-premier-credit-card/'
    ),
}

# CreditIntro / USCCG historical offer PNG step-chart specs:
# card_id -> (creditintro_slug, chart_start_ym, left_tick_step_pts, right_tick_step_usd)
CREDITINTRO_CHARTS = {
    'amex-platinum': ('amex-platinum', '2013-11', 25000, 2500),
    'amex-platinum-schwab': (
        'amex-platinum-for-Schwab',
        '2016-05',
        25000,
        5000,
    ),
    'amex-platinum-ms': (
        'amex-platinum-for-morgan-stanley',
        '2017-07',
        25000,
        5000,
    ),
    'amex-gold': ('amex-premier-rewards-gold', '2015-01', 20000, 2000),
    'delta-reserve': ('amex-delta-reserve', '2015-01', 20000, 5000),
    'delta-platinum': ('amex-platinum-delta-skymiles', '2015-01', 20000, 2000),
    'delta-gold': ('amex-gold-delta-skymiles', '2015-01', 20000, 2000),
    'chase-sapphire-reserve': (
        'chase-sapphire-reserve',
        '2016-08',
        25000,
        2000,
    ),
    'chase-sapphire-preferred': (
        'chase-sapphire-preferred',
        '2013-10',
        20000,
        2000,
    ),
    'chase-freedom-flex': ('chase-freedom-flex', '2020-09', 5000, 200),
    'united-club': ('chase-united-mileageplus-club', '2015-01', 20000, 2000),
    'united-quest': ('chase-united-quest', '2021-04', 20000, 2000),
    'united-explorer': (
        'chase-united-mileageplus-explorer',
        '2015-01',
        20000,
        2000,
    ),
    'citi-strata-elite': ('citi-strata-elite', '2025-08', 20000, 2000),
    'citi-strata-premier': ('citi-thankyou-premier', '2015-01', 20000, 2000),
    'citi-strata': ('citi-strata', '2025-08', 5000, 500),
    'citi-custom-cash': ('citi-custom-cash', '2021-06', 5000, 500),
    'citi-aa-executive': ('citi-aadvantage-executive', '2014-01', 20000, 5000),
    'citi-aa-globe': ('citi-aadvantage-globe', '2025-10', 20000, 2000),
    'citi-aa-platinum-select': (
        'citi-aadvantage-platinum-select',
        '2014-10',
        20000,
        2000,
    ),
    'capital-one-venture-x': ('capital-one-venture-x', '2021-11', 20000, 5000),
    'bofa-premium-elite': ('boa-premium-rewards-elite', '2021-11', 20000, 2000),
    'bofa-premium-rewards': ('boa-premium-rewards', '2017-09', 10000, 2000),
    'atmos-summit': ('boa-alaska-atmos-summit', '2025-08', 20000, 2000),
    'atmos-ascent': ('boa-alaska-atmos-ascent', '2025-08', 20000, 2000),
    'wf-autograph-journey': (
        'wells-fargo-autograph-journey',
        '2024-03',
        10000,
        2000,
    ),
    'wf-premier-autograph': (
        'wells-fargo-premier-autograph',
        '2026-02',
        20000,
        2000,
    ),
    'jetblue-premier': (
        'barclays-jetblue-premier',
        '2025-02',
        20000,
        2000,
    ),
}

# Search phrases to locate each card on Doctor of Credit & Frequent Miler master pages
COMMUNITY_CARD_ALIASES = {
    'amex-platinum': (
        r'(?:American'
        r' Express|Amex)\s+(?:The\s+)?Platinum(?!\s*(?:for\s*Schwab|Exclusively\s*for\s*Morgan\s*Stanley|for\s*Morgan\s*Stanley|Business))'
    ),
    'amex-platinum-schwab': r'Charles Schwab\s*Platinum|Schwab\s*Platinum',
    'amex-platinum-ms': r'Morgan Stanley\s*Platinum|Platinum.*?Morgan Stanley',
    'amex-gold': r'(?:American Express|Amex)\s+Gold(?!\s*Business)',
    'delta-reserve': r'Delta SkyMiles\s*(?:®\s*)?Reserve(?!\s*Business)',
    'delta-platinum': r'Delta SkyMiles\s*(?:®\s*)?Platinum(?!\s*Business)',
    'delta-gold': r'Delta SkyMiles\s*(?:®\s*)?Gold(?!\s*Business)',
    'chase-sapphire-reserve': r'Chase Sapphire Reserve(?!\s*Business)',
    'chase-sapphire-preferred': r'Chase Sapphire Preferred',
    'chase-freedom-flex': r'Chase Freedom Flex',
    'united-club': r'United Club(?:\s*Infinite|\s*Card)(?!\s*Business)',
    'united-quest': r'United Quest',
    'united-explorer': r'United(?:\s*MileagePlus)?\s*Explorer(?!\s*Business)',
    'citi-strata-elite': r'Citi Strata Elite',
    'citi-strata-premier': r'Citi Strata Premier',
    'citi-strata': r'Citi Strata\s*Card',
    'citi-aa-executive': r'AAdvantage\s*(?:®\s*)?Executive',
    'citi-aa-globe': r'AAdvantage\s*(?:®\s*)?Globe',
    'citi-aa-platinum-select': r'AAdvantage\s*(?:®\s*)?Platinum Select',
    'capital-one-venture-x': r'Capital One Venture X(?!\s*Business)',
    'bofa-premium-elite': r'Premium Rewards Elite',
    'bofa-premium-rewards': r'Bank of America Premium Rewards(?!\s*Elite)',
    'atmos-summit': r'Atmos(?:\s*Rewards)?\s*Summit',
    'atmos-ascent': (
        r'Atmos(?:\s*Rewards)?\s*Ascent|Alaska Airlines Visa Signature'
    ),
    'wf-autograph-journey': r'Autograph Journey',
    'wf-premier-autograph': r'Premier Autograph',
    'jetblue-premier': r'JetBlue Premier',
}


def fetch_html(url, cache_file=None):
  """Fetches URL content via curl or reads from local cache if available."""
  if cache_file and os.path.exists(cache_file):
    with open(cache_file, 'r', encoding='utf-8', errors='ignore') as f:
      return f.read()

  cmd = [
      'curl',
      '-sL',
      '--compressed',
      '--max-time',
      '20',
      '-A',
      USER_AGENT,
      url,
  ]
  res = subprocess.run(cmd, capture_output=True, text=True, check=False)
  return res.stdout or ''


def strip_tags(raw_html):
  """Strips HTML comments/tags and collapses whitespace for regex matching."""
  no_comments = re.sub(r'<!--.*?-->', ' ', raw_html, flags=re.S)
  text = html.unescape(no_comments)
  text = re.sub(r'<[^>]+>', ' ', text)
  return re.sub(r'\s+', ' ', text)


def parse_number(num_str):
  """Extracts an integer from a comma-formatted string."""
  digits = re.sub(r'[^\d]', '', str(num_str or ''))
  return int(digits) if digits else 0


def extract_bonus_numbers(snippet):
  """Extracts point/mile amounts (e.g.

  100,000 or 100k) in range [10000, 300000].
  """
  vals = []
  for token in re.findall(r'\b(\d{2,3}(?:,\d{3}|k))\b', snippet, re.I):
    if token.lower().endswith('k'):
      num = int(token[:-1]) * 1000
    else:
      num = parse_number(token)
    if 10000 <= num <= 300000:
      vals.append(num)
  return vals


def extract_usccg_offer(cid, chart_eras=None):
  """Fetches US Credit Card Guide's current numeric offer amount, excluding any AU bonus."""
  # Cross-check the latest era from the USCCG / CreditIntro step chart first if available
  # (chart_eras already has the 10k AU bonus subtracted for United cards)
  chart_cur = None
  if chart_eras:
    last_era = chart_eras[-1]
    chart_cur = last_era.get('bonus')

  url = USCCG_URLS.get(cid)
  if not url:
    return chart_cur
  raw_html = fetch_html(url)
  if not raw_html:
    return chart_cur
  # Check if the active body offer explicitly splits out an Authorized User (AU) bonus
  clean_text = strip_tags(raw_html)
  au_split = re.search(
      r'offer:\s*(?:earn|get)\s*([\d,]+)\s*[^.]{0,120}?\.\s*Earn\s*(?:\d+(?:,\d{3}|k))\s*more\s*(?:miles|points)\s*when\s*you\s*add\s*an\s*authorized\s*user',
      clean_text,
      re.I,
  )
  if au_split:
    return parse_number(au_split.group(1))

  title_m = re.search(r'<title>(.*?)</title>', raw_html, re.I | re.S)
  if title_m:
    title_text = html.unescape(title_m.group(1))
    m = re.search(r'\b(\d{2,3})k\s*(?:\+[^)]*?)?Offer\b', title_text, re.I)
    if m:
      title_val = int(m.group(1)) * 1000
      # If the step chart shows a newer/lower active offer than an outdated article paragraph, prefer the chart
      if chart_cur and chart_cur < title_val:
        return chart_cur
      return title_val
  return chart_cur


def extract_master_page_offer(cid, master_text):
  """Extracts the numeric bonus amount near a card's title on DoC or Frequent Miler, excluding AU bonuses."""
  if not master_text:
    return None
  alias_pattern = COMMUNITY_CARD_ALIASES.get(cid)
  if not alias_pattern:
    return None
  matches = []
  for m in re.finditer(alias_pattern, master_text, re.I):
    prefix = master_text[max(0, m.start() - 35) : m.start()]
    suffix_head = master_text[m.end() : m.end() + 35]
    if re.search(r'\bBusiness\b', prefix + ' ' + suffix_head, re.I):
      continue
    # Skip DoC Table-of-Contents lines ('1.15. ...') if the full body entry exists,
    # or check the body text after 'Read our review' for Authorized User requirements
    full_after = master_text[m.end() : m.end() + 240]
    if re.search(
        r'\b\d+\.\d+\.', master_text[max(0, m.start() - 25) : m.start()]
    ):
      continue
    if re.search(r'authorized\s+user', full_after, re.I):
      continue
    window = master_text[m.end() : m.end() + 140]
    # Stop before the next numbered TOC item, 'Read our review', or 'Recent better offer' / 'Expired'
    window = re.split(
        r'\b\d+\.\d+\.|Read our review|Recent better offer|\bExpired\b',
        window,
        maxsplit=1,
        flags=re.I,
    )[0]
    vals = extract_bonus_numbers(window)
    if vals:
      matches.append(max(vals[:2]))
  if matches:
    return max(matches)
  return None


def combine_offers(template, issuer_amt_str, comm_amounts):
  """Combines Official Issuer Page offer with (USCCG, DoC, FM) using Max/Consensus (Option B).

  Args:
    template: Offer formatting string for the card (e.g. '{amt} UR pts').
    issuer_amt_str: Raw string matched from the official bank page (e.g.
      '100,000' or '$250'), or None.
    comm_amounts: Dict mapping {'USCCG': int|None, 'DoC': int|None, 'FM':
      int|None}.

  Returns:
    Tuple of (winning_offer_text, winning_numeric_amount,
    winning_badge_or_none).
  """
  issuer_num = parse_number(issuer_amt_str) if issuer_amt_str else 0
  # Cash-denominated bonus (e.g. Freedom Flex '$250') is < 1000
  is_cash_bonus = bool(issuer_amt_str and '$' in issuer_amt_str)

  valid_comm = {
      src: val
      for src, val in comm_amounts.items()
      if isinstance(val, int) and val >= 1000
  }
  max_comm_num = max(valid_comm.values()) if valid_comm else 0
  min_comm_num = min(valid_comm.values()) if valid_comm else 0

  if is_cash_bonus:
    pts_num = issuer_num * 100
    return template.format(amt=f'{pts_num:,}'), pts_num, None

  # Case 1: Community tracker(s) found a strictly higher offer than the official landing page
  if max_comm_num > issuer_num:
    winning_sources = [
        src for src, val in valid_comm.items() if val == max_comm_num
    ]
    base_text = template.format(amt=f'{max_comm_num:,}')
    # Tag 'via ...' when a community tracker beats the live bank page OR beats other trackers
    if issuer_num > 0 or max_comm_num > min_comm_num:
      src_tag = '/'.join(winning_sources)
      return base_text, max_comm_num, f'via {src_tag}'
    return base_text, max_comm_num, None

  # Case 2: Official page matched or exceeded community trackers
  if issuer_amt_str:
    return template.format(amt=issuer_amt_str), issuer_num, None

  return None, 0, None


def parse_catalog_cards(js_text):
  """Extracts top-level card blocks from CARDS_CATALOG in app.js."""
  cards = []
  pattern = re.compile(
      r"\{\s*id:\s*'([^']+)',\s*order:\s*\d+"
      r".*?name:\s*'([^']+)'"
      r".*?officialUrl:\s*'([^']+)'"
      r".*?offerCurrency:\s*'([^']+)'"
      r".*?defaultOfferText:\s*'([^']+)'"
      r"(?:,\s*offerBadge:\s*'([^']+)')?"
      r",\s*defaultOfferSpend:\s*'([^']+)'"
      r",\s*historicalHighText:\s*'([^']+)'",
      re.S,
  )
  for m in pattern.finditer(js_text):
    cards.append({
        'id': m.group(1),
        'name': m.group(2),
        'url': m.group(3),
        'currency': m.group(4),
        'saved_offer': m.group(5),
        'saved_badge': m.group(6),
        'saved_spend': m.group(7),
        'saved_hist': m.group(8),
    })
  return cards


def fmt_k(val):
  """Formats a numeric bonus like 100000 as '100k' or None as '—'."""
  if not val:
    return '—'
  return f'{val // 1000}k'


def decode_png_rgb(data):
  """Decodes a PNG byte buffer into (width, height, bpp, rows) using stdlib only."""
  pos, chunks, w, h, bpp = 8, [], 0, 0, 4
  while pos < len(data):
    length, ctype = struct.unpack('>I4s', data[pos : pos + 8])
    cdata = data[pos + 8 : pos + 8 + length]
    pos += 12 + length
    if ctype == b'IHDR':
      w, h, _, ctype_id = struct.unpack('>IIBB', cdata[:10])
      bpp = 4 if ctype_id == 6 else 3
    elif ctype == b'IDAT':
      chunks.append(cdata)
  raw = zlib.decompress(b''.join(chunks))
  stride, rows, prev, idx = w * bpp, [], bytearray(w * bpp), 0
  for _ in range(h):
    ftype = raw[idx]
    row = bytearray(raw[idx + 1 : idx + 1 + stride])
    idx += 1 + stride
    if ftype == 1:
      for i in range(bpp, stride):
        row[i] = (row[i] + row[i - bpp]) & 0xFF
    elif ftype == 2:
      for i in range(stride):
        row[i] = (row[i] + prev[i]) & 0xFF
    elif ftype == 3:
      for i in range(stride):
        a = row[i - bpp] if i >= bpp else 0
        row[i] = (row[i] + ((a + prev[i]) >> 1)) & 0xFF
    elif ftype == 4:
      for i in range(stride):
        a = row[i - bpp] if i >= bpp else 0
        b = prev[i]
        c = prev[i - bpp] if i >= bpp else 0
        p = a + b - c
        pa, pb, pc = abs(p - a), abs(p - b), abs(p - c)
        pr = a if (pa <= pb and pa <= pc) else (b if pb <= pc else c)
        row[i] = (row[i] + pr) & 0xFF
    rows.append(row)
    prev = row
  return w, h, bpp, rows


# Cards where CreditIntro's step chart bundles a +10,000 mile Authorized User (AU)
# bonus into 2025+ offers: card_id -> (min_start_ym, min_chart_bonus_with_au).
# We subtract 10,000 from matching chart eras so the chart and all UI readouts
# reflect the base sign-up bonus only.
AU_BONUS_CHART_RULES = {
    'united-club': ('2025-03', 90000),
    'united-quest': ('2025-03', 80000),
    'united-explorer': ('2025-02', 70000),
}


def classify_offer_era(idx, total_eras, bonus, max_bonus, mode_bonus):
  """Derives a factual label for an offer segment from its numeric rank."""
  if idx == total_eras - 1:
    return (
        'Current Offer (All-Time High)'
        if bonus == max_bonus and max_bonus > mode_bonus
        else 'Current Active Offer'
    )
  if idx == 0:
    return (
        'Launch / Peak Offer'
        if bonus == max_bonus and max_bonus > mode_bonus
        else 'Initial Tracked Offer'
    )
  if bonus == max_bonus and max_bonus > mode_bonus:
    return 'All-Time High Offer'
  if bonus == mode_bonus:
    return 'Standard Baseline'
  if bonus > mode_bonus:
    return 'Elevated Offer'
  return 'Reduced Offer'


def parse_creditintro_chart(cid, end_ym=None, png_cache_dir=None):
  """Downloads & parses a CreditIntro historical offers PNG step chart into eras."""
  if cid not in CREDITINTRO_CHARTS:
    return []
  slug, start_ym, l_step, r_step = CREDITINTRO_CHARTS[cid]
  if not end_ym:
    end_ym = datetime.date.today().strftime('%Y-%m')

  png_bytes = b''
  cache_path = (
      os.path.join(png_cache_dir, f'{cid}.png') if png_cache_dir else None
  )
  if cache_path and os.path.exists(cache_path):
    with open(cache_path, 'rb') as f:
      png_bytes = f.read()
  else:
    url = f'https://www.creditintro.com/credit-card/{slug}/historical-offers/'
    cmd = ['curl', '-sL', '--max-time', '20', '-A', USER_AGENT, url]
    res = subprocess.run(cmd, capture_output=True, check=False)
    png_bytes = res.stdout or b''
    if cache_path and png_bytes.startswith(b'\x89PNG'):
      os.makedirs(png_cache_dir, exist_ok=True)
      with open(cache_path, 'wb') as f:
        f.write(png_bytes)

  if not png_bytes.startswith(b'\x89PNG'):
    return []

  w, h, bpp, rows = decode_png_rgb(png_bytes)
  black_rows = [
      y
      for y in range(h)
      if sum(
          1
          for x in range(w)
          if rows[y][x * bpp] < 30
          and rows[y][x * bpp + 1] < 30
          and rows[y][x * bpp + 2] < 30
      )
      > 400
  ]
  black_cols = [
      x
      for x in range(w)
      if sum(
          1
          for y in range(h)
          if rows[y][x * bpp] < 30
          and rows[y][x * bpp + 1] < 30
          and rows[y][x * bpp + 2] < 30
      )
      > 200
  ]
  if not black_rows or not black_cols:
    return []

  y_top, y_bot = black_rows[0], black_rows[-1]
  x_left, x_right = black_cols[0], black_cols[-1]
  l_ticks = [
      y for y in range(y_top, y_bot + 1) if rows[y][(x_left - 2) * bpp] < 50
  ]
  r_ticks = [
      y for y in range(y_top, y_bot + 1) if rows[y][(x_right + 2) * bpp] < 50
  ]
  if len(l_ticks) < 2 or len(r_ticks) < 2:
    return []

  dy_l = (l_ticks[-1] - l_ticks[0]) / (len(l_ticks) - 1)
  dy_r = (r_ticks[-1] - r_ticks[0]) / (len(r_ticks) - 1)
  sp_quantum = 500 if r_step >= 1000 else 100

  sy, sm = map(int, start_ym.split('-'))
  ey, em = map(int, end_ym.split('-'))
  start_mos = sy * 12 + (sm - 1)
  total_mos = max(1, (ey * 12 + (em - 1)) - start_mos)

  raw_pts = []
  for x in range(x_left + 1, x_right):
    by, oy = None, None
    for y in range(y_top + 10, y_bot + 1):
      if y < y_top + 38 and (x_left + 45) <= x <= (x_right - 45):
        continue
      r, g, b = rows[y][x * bpp], rows[y][x * bpp + 1], rows[y][x * bpp + 2]
      if by is None and b - r > 35 and r < 185:
        by = y
      if oy is None and r - b > 60 and r > 175:
        oy = y
    if by is None:
      continue
    pts = int(round((y_bot - by) / dy_l * l_step / 5000.0) * 5000)
    sp = (
        int(
            round((y_bot - oy) / dy_r * r_step / float(sp_quantum)) * sp_quantum
        )
        if oy is not None
        else 0
    )
    raw_pts.append((x, pts, sp))

  segs = []
  for x, pts, sp in raw_pts:
    if (
        not segs
        or segs[-1][2] != pts
        or (sp > 0 and segs[-1][3] > 0 and segs[-1][3] != sp)
    ):
      segs.append([x, x, pts, sp, 1])
    else:
      segs[-1][1] = x
      if sp > 0:
        segs[-1][3] = sp
      segs[-1][4] += 1

  cleaned = []
  for seg in segs:
    if seg[4] < 5 and cleaned:
      cleaned[-1][1] = seg[1]
      cleaned[-1][4] += seg[4]
    elif cleaned and cleaned[-1][2] == seg[2] and cleaned[-1][3] == seg[3]:
      cleaned[-1][1] = seg[1]
      cleaned[-1][4] += seg[4]
    else:
      cleaned.append(seg)

  if not cleaned:
    return []

  au_rule = AU_BONUS_CHART_RULES.get(cid)
  raw_eras = []
  for i, (x0, x1, pts, sp, px_w) in enumerate(cleaned):
    m0 = start_mos + int(round((x0 - x_left) / (x_right - x_left) * total_mos))
    m1 = start_mos + int(round((x1 - x_left) / (x_right - x_left) * total_mos))
    s_str = (
        raw_eras[-1]['end']
        if raw_eras
        else f'{m0 // 12:04d}-{(m0 % 12) + 1:02d}'
    )
    e_str = (
        end_ym
        if i == len(cleaned) - 1
        else f'{m1 // 12:04d}-{(m1 % 12) + 1:02d}'
    )
    if e_str <= s_str:
      continue
    # Subtract the bundled +10,000-mile AU bonus on post-refresh United eras
    if au_rule and s_str >= au_rule[0] and pts >= au_rule[1]:
      pts -= 10000
    if (
        raw_eras
        and raw_eras[-1]['bonus'] == pts
        and raw_eras[-1]['spend'] == sp
    ):
      raw_eras[-1]['end'] = e_str
      raw_eras[-1]['px_w'] += px_w
    else:
      raw_eras.append({
          'start': s_str,
          'end': e_str,
          'bonus': pts,
          'spend': sp,
          'px_w': px_w,
      })

  if raw_eras and raw_eras[-1]['end'] != end_ym:
    raw_eras[-1]['end'] = end_ym

  # Compute duration-weighted mode bonus and max bonus after AU normalization
  bonus_weights = collections.Counter()
  max_bonus = 0
  for e in raw_eras:
    bonus_weights[e['bonus']] += e['px_w']
    if e['bonus'] > max_bonus:
      max_bonus = e['bonus']
  mode_bonus = bonus_weights.most_common(1)[0][0] if bonus_weights else 0

  eras = []
  for i, e in enumerate(raw_eras):
    note = classify_offer_era(
        i,
        len(raw_eras),
        e['bonus'],
        max_bonus,
        mode_bonus,
    )
    eras.append({
        'start': e['start'],
        'end': e['end'],
        'bonus': e['bonus'],
        'spend': e['spend'],
        'note': note,
    })
  return eras


def format_spend_short(spend):
  """Formats a numeric spend like 6000 as '$6k', 3500 as '$3.5k', or 500 as '$500'."""
  if not spend:
    return '$0'
  if spend >= 1000:
    if spend % 1000 == 0:
      return f'${spend // 1000}k'
    return f'${spend / 1000:.1f}k'
  return f'${spend}'


def format_ym_label(ym_str):
  """Formats '2026-04' as 'Apr 2026'."""
  y, m = map(int, ym_str.split('-'))
  return datetime.date(y, m, 1).strftime('%b %Y')


def format_historical_high(eras):
  """Formats the peak era of a card's history as 'Now' or '<bonus> (<spend> • <Mon YYYY>)'."""
  if not eras:
    return 'None'
  peak_era = eras[0]
  for e in eras:
    if e['bonus'] >= peak_era['bonus']:
      peak_era = e
  if peak_era is eras[-1]:
    return 'Now'
  bonus_str = f"{peak_era['bonus']:,}"
  spend_str = format_spend_short(peak_era.get('spend', 0))
  date_str = format_ym_label(peak_era['start'])
  return f'{bonus_str} ({spend_str} • {date_str})'


def update_app_js_offer_history(js_text, history_map):
  """Replaces or inserts the CARD_OFFER_HISTORY block and syncs historicalHighText in app.js."""
  json_payload = json.dumps(history_map, indent=2)
  indented = '\n'.join(
      ('  ' + line if line else '') for line in json_payload.splitlines()
  )
  block = (
      '  // BEGIN_CARD_OFFER_HISTORY\n'
      f'  const CARD_OFFER_HISTORY = {indented.lstrip()};\n'
      '  // END_CARD_OFFER_HISTORY'
  )
  pattern = re.compile(
      r'  // BEGIN_CARD_OFFER_HISTORY.*?  // END_CARD_OFFER_HISTORY', re.S
  )
  if pattern.search(js_text):
    js_text = pattern.sub(lambda _: block, js_text, count=1)
  else:
    js_text = js_text.replace(
        '  const CARDS_CATALOG = [',
        block + '\n\n  const CARDS_CATALOG = [',
        1,
    )

  for cid, eras in history_map.items():
    if not eras:
      continue
    high_str = format_historical_high(eras)
    card_pat = re.compile(
        r"(\{\s*id:\s*'"
        + re.escape(cid)
        + r"',\s*order:\s*[\d.]+.*?historicalHighText:\s*')([^']*)(')",
        re.S,
    )
    js_text = card_pat.sub(
        lambda m, hs=high_str: m.group(1) + hs + m.group(3),
        js_text,
        count=1,
    )
  return js_text


def main():
  parser = argparse.ArgumentParser(
      description=(
          'Check & refresh live credit card offers and CreditIntro historical '
          'offer step charts in app.js.'
      )
  )
  parser.add_argument(
      '--apply',
      action='store_true',
      help='Write combined best offers directly into app.js.',
  )
  parser.add_argument(
      '--refresh-history',
      action='store_true',
      help=(
          'Fetch & parse CreditIntro historical offer PNG charts and update '
          'CARD_OFFER_HISTORY in app.js.'
      ),
  )
  parser.add_argument(
      '--history-only',
      action='store_true',
      help=(
          'Only refresh CreditIntro historical offer PNG charts in app.js '
          '(skip scraping live bank/community pages).'
      ),
  )
  parser.add_argument(
      '--png-cache-dir',
      default=None,
      help=(
          'Optional directory to cache/read CreditIntro PNG charts (<id>.png).'
      ),
  )
  parser.add_argument(
      '--issuer-only',
      action='store_true',
      help=(
          'Only check official bank URLs (skip USCCG, DoC, and Frequent Miler).'
      ),
  )
  parser.add_argument(
      '--cache-dir',
      default=None,
      help='Optional directory of cached HTML files (<card_id>.html).',
  )
  args = parser.parse_args()

  with open(APP_JS_PATH, 'r', encoding='utf-8') as f:
    js_text = f.read()

  if args.refresh_history or args.history_only:
    print(
        'Parsing CreditIntro historical offer step charts (26 cards)...',
        flush=True,
    )
    end_ym = datetime.date.today().strftime('%Y-%m')
    history_map = {}
    for cid in CREDITINTRO_CHARTS:
      eras = parse_creditintro_chart(
          cid, end_ym=end_ym, png_cache_dir=args.png_cache_dir
      )
      if eras:
        history_map[cid] = eras
        peak_pts = max(e['bonus'] for e in eras)
        cur_era = eras[-1]
        print(
            f'  {cid:26s} -> {len(eras):2d} eras ({eras[0]["start"]} to'
            f' {cur_era["end"]}) | Peak: {peak_pts:7,d} | Current:'
            f' {cur_era["bonus"]:7,d} (${cur_era["spend"]:,})'
        )
    js_text = update_app_js_offer_history(js_text, history_map)
    with open(APP_JS_PATH, 'w', encoding='utf-8') as f:
      f.write(js_text)
    print(
        f'Updated CARD_OFFER_HISTORY ({len(history_map)} cards) in'
        f' {APP_JS_PATH}.\n'
    )
    if args.history_only:
      return

  m_hist = re.search(
      r'const CARD_OFFER_HISTORY = (\{.*?\});\n  // END_CARD_OFFER_HISTORY',
      js_text,
      re.S,
  )
  saved_history_map = json.loads(m_hist.group(1)) if m_hist else {}

  cards = parse_catalog_cards(js_text)
  now_label = datetime.date.today().strftime('%b %Y')
  updated_count = 0

  doc_text = ''
  fm_text = ''
  if not args.issuer_only:
    print(
        'Fetching Doctor of Credit & Frequent Miler master offer lists...',
        flush=True,
    )
    raw_doc = strip_tags(fetch_html(DOC_MASTER_URL))
    # Restrict DoC to Section 1 (Personal Cards) so Business cards and Removed changelog items are excluded
    doc_sec1 = re.split(
        r'\b2\.1\.\s+|Business\s+Cards\s+Below\s+are\s+the\s+best\s+business',
        raw_doc,
        maxsplit=1,
    )
    doc_text = doc_sec1[0]
    fm_text = strip_tags(fetch_html(FM_MASTER_URL))

  print(
      f"{'Card':24s} | {'Saved Offer':26s} | {'Issuer':10s} |"
      f" {'USCCG/DoC/FM':18s} | {'Combined Best':28s} | Status"
  )
  print('-' * 125)

  for c in cards:
    cid = c['id']
    if cid not in CARD_PATTERNS:
      print(
          f"{c['name'][:24]:24s} | {c['saved_offer'][:26]:26s} |"
          f" {'—':10s} | {'—':18s} | {'(No bonus / static)':28s} | SKIP"
      )
      continue

    amt_regex, spend_regex, template = CARD_PATTERNS[cid]
    cache_file = (
        os.path.join(args.cache_dir, f'{cid}.html') if args.cache_dir else None
    )
    raw_html = fetch_html(c['url'], cache_file=cache_file)
    clean_text = strip_tags(raw_html)

    amt_match = re.search(amt_regex, clean_text, re.I)
    spend_match = re.search(spend_regex, clean_text, re.I)
    issuer_amt_str = amt_match.group(1) if amt_match else None

    comm_amounts = {'USCCG': None, 'DoC': None, 'FM': None}
    if not args.issuer_only:
      comm_amounts['USCCG'] = extract_usccg_offer(
          cid, chart_eras=saved_history_map.get(cid)
      )
      comm_amounts['DoC'] = extract_master_page_offer(cid, doc_text)
      comm_amounts['FM'] = extract_master_page_offer(cid, fm_text)

    comm_col = (
        f"{fmt_k(comm_amounts['USCCG'])}/{fmt_k(comm_amounts['DoC'])}/{fmt_k(comm_amounts['FM'])}"
        if not args.issuer_only
        else '(--issuer-only)'
    )
    issuer_col = issuer_amt_str if issuer_amt_str else '—'

    combined_text, combined_num, combined_badge = combine_offers(
        template, issuer_amt_str, comm_amounts
    )

    if not combined_text:
      print(
          f"{c['name'][:24]:24s} | {c['saved_offer'][:26]:26s} |"
          f' {issuer_col[:10]:10s} | {comm_col[:18]:18s} |'
          f" {'(Could not parse)':28s} | KEEP"
      )
      continue

    live_spend_text = (
        f'{spend_match.group(1)} in {spend_match.group(2)}'
        if spend_match
        else c['saved_spend']
    )

    changed = combined_text != c['saved_offer']
    status = 'CHANGED' if changed else 'OK'
    print(
        f"{c['name'][:24]:24s} | {c['saved_offer'][:26]:26s} |"
        f' {issuer_col[:10]:10s} | {comm_col[:18]:18s} |'
        f' {combined_text[:28]:28s} | {status}'
    )

    if changed and args.apply:
      hist_num = parse_number(c['saved_hist'])
      new_hist = c['saved_hist']
      if combined_num > hist_num and combined_num >= 1000:
        new_hist = f"{combined_num:,} {c['currency']} (Active • {now_label})"

      block_pattern = re.compile(
          rf"(id:\s*'{re.escape(cid)}'.*?defaultOfferText:\s*')"
          rf"{re.escape(c['saved_offer'])}"
          rf"(',\s*defaultOfferSpend:\s*')"
          rf"{re.escape(c['saved_spend'])}"
          rf"(',\s*historicalHighText:\s*')"
          rf"{re.escape(c['saved_hist'])}"
          rf"(')",
          re.S,
      )
      js_text, n = block_pattern.subn(
          rf'\g<1>{combined_text}\g<2>{live_spend_text}\g<3>{new_hist}\g<4>',
          js_text,
          count=1,
      )
      if n > 0:
        updated_count += 1

  if args.apply and updated_count > 0:
    with open(APP_JS_PATH, 'w', encoding='utf-8') as f:
      f.write(js_text)
    print(f'\nUpdated {updated_count} card(s) in {APP_JS_PATH}.')
  elif args.apply:
    print('\nAll combined offers already match app.js.')


if __name__ == '__main__':
  main()
