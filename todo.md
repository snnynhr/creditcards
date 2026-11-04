# Credit Card Portfolio — Feature Roadmap & TODOs

This document tracks planned enhancements, additional card metadata, and interactive portfolio tools for the Credit Card Portfolio application.

---

## 1. Editable Point Currency Valuations (`¢/pt`) & Live 1st-Year ROI
- [ ] Add `currencyValuations` (in cents per point) to `valuations.json` and browser `localStorage` with sensible defaults:
  - `UR Points`: `1.8`
  - `MR Points`: `1.6`
  - `ThankYou Points`: `1.6`
  - `AAdvantage Miles`: `1.6`
  - `Atmos Points`: `1.6`
  - `Capital One Miles`: `1.5`
  - `Wells Fargo Rewards Points`: `1.5`
  - `BofA Rewards Points`: `1.25`
  - `MileagePlus Miles`: `1.3`
  - `TrueBlue Points`: `1.3`
  - `SkyMiles`: `1.2`
- [ ] Add a compact, collapsible **Point Valuations (`¢/pt`)** bar in the UI so users can customize each currency's valuation.
- [ ] Dynamically calculate **Welcome Offer Value ($)** and **1st-Year Net Value ($)** from `Bonus Amount × (¢/pt) + Statement Credit / Companion Cert − Net Effective Fee`.
- [ ] Display effective `%` return on spend alongside raw category multipliers (e.g., `4x Dining (6.4%)`).

---

## 2. "Best Card in My Wallet" Category Cheat Sheet
- [ ] Normalize structured earning multipliers per card across core spend categories:
  - **Flights (Direct)**
  - **Hotels (Direct)**
  - **Travel Portal Bookings**
  - **Dining / Restaurants**
  - **Supermarkets / Groceries**
  - **Gas & EV Charging**
  - **Transit & Rideshare**
  - **Streaming & Digital**
  - **Foreign / International Purchases**
  - **Everything Else (Catch-All)**
- [ ] Add a **"Best Card by Category"** summary strip/modal that ranks the user's **Owned** cards (with an optional toggle to preview **Watchlist** cards) by effective `%` return in each category.

---

## 3. Owned Cards "Coupon Book" Cadence Checklist
- [ ] Tag each monetary benefit in `CARDS_CATALOG` with a reset cadence (`monthly`, `quarterly`, `semi-annual`, `annual`, `multi-year`).
- [ ] Build a **Credit Cadence View** for **Owned Cards** that groups all valued credits (`userVal > 0`) by reset period:
  - **Monthly:** Amex Plat/Gold Uber Cash, Amex Gold Dining & Dunkin', CSR DoorDash/Lyft/Peloton, CSP DoorDash, United Instacart & Rideshare, Delta Resy & Rideshare, AA Executive Grubhub & Lyft.
  - **Quarterly:** Amex Plat Resy (`$100/qtr`) & lululemon (`$75/qtr`), Freedom Flex DoorDash, Atmos Summit Lounge & Wi-Fi passes.
  - **Semi-Annual:** Amex Plat FHR/THC (`$300 x 2`), Amex Gold Resy (`$50 x 2`), CSR The Edit (`$250 x 2`) & StubHub (`$150 x 2`), Citi Strata Elite Blacklane (`$100 x 2`), United Avis/Budget & Hotels credits.
  - **Annual / Anniversary:** Travel credits (`$300` CSR / Venture X / Strata Elite / BofA Elite), Airline incidental credits, Companion Certificates / Awards.

---

## 4. Application Rules, Family Ordering & Downgrade Paths
- [ ] Add structured application and retention metadata to each card in `CARDS_CATALOG`:
  - **Application & Bonus Cooldown Rules:**
    - **Chase:** `5/24` rule, Sapphire once-per-lifetime / 48-month eligibility, same-brand restrictions.
    - **Amex:** Once-per-lifetime language + *Family Ladder* ordering (`Green → Gold → Platinum` and `Delta Gold → Platinum → Reserve`).
    - **Citi:** 48-month bonus rule per card.
    - **Bank of America:** `2/3/4` rule (max 2 cards per 2 mos, 3 per 12 mos, 4 per 24 mos) and 24-month Alaska/Atmos rule.
    - **Wells Fargo:** `1/6` rule (1 Wells Fargo card per 6 months).
    - **Barclays:** `6/24` sensitivity.
  - **No-Annual-Fee Downgrade / Product-Change Paths:**
    - `CSR / CSP` → `Chase Freedom Flex` or `Chase Freedom with Ultimate Rewards`
    - `United Club / Quest / Explorer` → `United Gateway ($0)`
    - `Citi Strata Elite / Premier` → `Citi Custom Cash ($0)` / `Citi Strata ($0)` / `Citi Double Cash ($0)`
    - `Citi AAdvantage Executive / Globe / Platinum Select` → `AAdvantage MileUp ($0)`
    - `Delta Reserve / Platinum / Gold` → `Delta SkyMiles Blue ($0)`
    - `Capital One Venture X` → `VentureOne ($0)` or `Quicksilver ($0)`
    - `Wells Fargo Autograph Journey` → `Wells Fargo Autograph ($0)` or `Active Cash ($0)`
    - `JetBlue Premier` → `JetBlue Card ($0)`
- [ ] Optional **Opened Date (`YYYY-MM`)** field for Owned cards (stored in `valuations.json`) to automatically calculate:
  - Current **Chase `5/24` count** and exact drop-off dates.
  - Upcoming **Annual Fee Renewal / Retention Offer** month.

---

## 5. Transfer Partner Matrix & Overlap Explorer
- [ ] Add a **Transfer Partner Matrix** mapping the 6 flexible/transferable currencies in the app (**Amex MR**, **Chase UR**, **Citi TYP**, **Capital One Miles**, **Wells Fargo Rewards**, **Atmos Rewards**) to major airline and hotel programs:
  - **Star Alliance:** Air Canada Aeroplan, United MileagePlus, ANA Mileage Club, Avianca LifeMiles, Singapore KrisFlyer, Turkish Miles&Smiles.
  - **Oneworld:** American Airlines AAdvantage, Alaska Atmos Rewards, British Airways / Qatar / Iberia / Finnair Avios, Cathay Pacific Asia Miles, Qantas.
  - **SkyTeam & Non-Alliance:** Air France-KLM Flying Blue, Delta SkyMiles, Virgin Atlantic Flying Club, JetBlue TrueBlue, Emirates Skywards, Etihad Guest.
  - **Hotels:** World of Hyatt, Marriott Bonvoy, Hilton Honors, IHG One Rewards, Choice Privileges (`1:2`), Wyndham Rewards, Leading Hotels of the World.
- [ ] Highlight which transfer partners are already covered by **Owned** cards and which new partners a **Watchlist** card unlocks.
- [ ] Highlight redundant perks across **Owned** cards (e.g., multiple Priority Pass memberships, Global Entry credits, or CLEAR+ credits).
