(function () {
  'use strict';

  // TODO(security): Local portfolio calculator does not use user authentication; state is saved locally via BFF /api/state.
  // BEGIN_CARD_OFFER_HISTORY
  const CARD_OFFER_HISTORY = {
    "amex-platinum": [
      {
        "start": "2013-11",
        "end": "2015-08",
        "bonus": 40000,
        "spend": 3000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2015-08",
        "end": "2015-09",
        "bonus": 100000,
        "spend": 3000,
        "note": "Elevated Offer"
      },
      {
        "start": "2015-09",
        "end": "2016-01",
        "bonus": 40000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2016-01",
        "end": "2016-04",
        "bonus": 40000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2016-04",
        "end": "2016-06",
        "bonus": 100000,
        "spend": 7000,
        "note": "Elevated Offer"
      },
      {
        "start": "2016-06",
        "end": "2016-11",
        "bonus": 75000,
        "spend": 5000,
        "note": "Standard Baseline"
      },
      {
        "start": "2016-11",
        "end": "2017-02",
        "bonus": 100000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2017-02",
        "end": "2020-10",
        "bonus": 75000,
        "spend": 5000,
        "note": "Standard Baseline"
      },
      {
        "start": "2020-10",
        "end": "2021-06",
        "bonus": 100000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2021-06",
        "end": "2022-01",
        "bonus": 125000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-01",
        "end": "2023-06",
        "bonus": 150000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-06",
        "end": "2023-08",
        "bonus": 125000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-08",
        "end": "2024-03",
        "bonus": 150000,
        "spend": 8000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-03",
        "end": "2026-10",
        "bonus": 175000,
        "spend": 8000,
        "note": "Current Offer (All-Time High)"
      }
    ],
    "amex-platinum-schwab": [
      {
        "start": "2016-05",
        "end": "2017-05",
        "bonus": 40000,
        "spend": 3000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2017-05",
        "end": "2021-07",
        "bonus": 60000,
        "spend": 5000,
        "note": "Standard Baseline"
      },
      {
        "start": "2021-07",
        "end": "2023-09",
        "bonus": 100000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-09",
        "end": "2024-11",
        "bonus": 80000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-11",
        "end": "2025-01",
        "bonus": 125000,
        "spend": 8000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-01",
        "end": "2025-04",
        "bonus": 80000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-04",
        "end": "2025-06",
        "bonus": 125000,
        "spend": 8000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-06",
        "end": "2025-09",
        "bonus": 80000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-09",
        "end": "2025-11",
        "bonus": 125000,
        "spend": 8000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-11",
        "end": "2026-04",
        "bonus": 80000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2026-04",
        "end": "2026-07",
        "bonus": 150000,
        "spend": 12000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2026-07",
        "end": "2026-10",
        "bonus": 80000,
        "spend": 6000,
        "note": "Current Active Offer"
      }
    ],
    "amex-platinum-ms": [
      {
        "start": "2017-07",
        "end": "2021-06",
        "bonus": 60000,
        "spend": 5000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2021-06",
        "end": "2022-09",
        "bonus": 100000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-09",
        "end": "2023-01",
        "bonus": 125000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-01",
        "end": "2023-09",
        "bonus": 100000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-09",
        "end": "2023-11",
        "bonus": 125000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-11",
        "end": "2024-04",
        "bonus": 80000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-04",
        "end": "2024-08",
        "bonus": 125000,
        "spend": 8000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-08",
        "end": "2025-04",
        "bonus": 80000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-04",
        "end": "2025-06",
        "bonus": 150000,
        "spend": 8000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2025-06",
        "end": "2025-09",
        "bonus": 80000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-09",
        "end": "2025-11",
        "bonus": 125000,
        "spend": 8000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-11",
        "end": "2026-04",
        "bonus": 80000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2026-04",
        "end": "2026-06",
        "bonus": 150000,
        "spend": 12000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2026-06",
        "end": "2026-10",
        "bonus": 80000,
        "spend": 6000,
        "note": "Current Active Offer"
      }
    ],
    "amex-gold": [
      {
        "start": "2015-02",
        "end": "2016-01",
        "bonus": 50000,
        "spend": 1000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2016-01",
        "end": "2019-10",
        "bonus": 50000,
        "spend": 2000,
        "note": "Standard Baseline"
      },
      {
        "start": "2019-10",
        "end": "2020-07",
        "bonus": 50000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2020-07",
        "end": "2021-02",
        "bonus": 60000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2021-02",
        "end": "2022-02",
        "bonus": 75000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-02",
        "end": "2022-05",
        "bonus": 90000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-05",
        "end": "2022-06",
        "bonus": 100000,
        "spend": 4000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2022-06",
        "end": "2024-03",
        "bonus": 90000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-03",
        "end": "2024-06",
        "bonus": 90000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-06",
        "end": "2025-08",
        "bonus": 100000,
        "spend": 6000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2025-08",
        "end": "2026-10",
        "bonus": 100000,
        "spend": 8000,
        "note": "Current Offer (All-Time High)"
      }
    ],
    "delta-reserve": [
      {
        "start": "2015-01",
        "end": "2017-07",
        "bonus": 10000,
        "spend": 0,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2017-07",
        "end": "2018-09",
        "bonus": 40000,
        "spend": 3000,
        "note": "Elevated Offer"
      },
      {
        "start": "2018-09",
        "end": "2018-11",
        "bonus": 70000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2018-11",
        "end": "2019-02",
        "bonus": 70000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2019-02",
        "end": "2020-01",
        "bonus": 75000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2020-01",
        "end": "2020-04",
        "bonus": 80000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2020-04",
        "end": "2021-02",
        "bonus": 70000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2021-02",
        "end": "2021-04",
        "bonus": 80000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2021-04",
        "end": "2021-06",
        "bonus": 125000,
        "spend": 5000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2021-06",
        "end": "2021-08",
        "bonus": 80000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2021-08",
        "end": "2022-06",
        "bonus": 125000,
        "spend": 5000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2022-06",
        "end": "2022-08",
        "bonus": 100000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-08",
        "end": "2023-06",
        "bonus": 125000,
        "spend": 5000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2023-06",
        "end": "2023-10",
        "bonus": 85000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-10",
        "end": "2024-01",
        "bonus": 85000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-01",
        "end": "2024-03",
        "bonus": 100000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-03",
        "end": "2024-05",
        "bonus": 90000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-05",
        "end": "2024-08",
        "bonus": 95000,
        "spend": 8000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-08",
        "end": "2024-10",
        "bonus": 100000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-10",
        "end": "2025-01",
        "bonus": 70000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-01",
        "end": "2025-04",
        "bonus": 100000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-04",
        "end": "2025-05",
        "bonus": 70000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-05",
        "end": "2025-08",
        "bonus": 100000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-08",
        "end": "2025-10",
        "bonus": 125000,
        "spend": 6000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2025-10",
        "end": "2026-01",
        "bonus": 70000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2026-01",
        "end": "2026-03",
        "bonus": 125000,
        "spend": 9000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2026-03",
        "end": "2026-05",
        "bonus": 70000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2026-05",
        "end": "2026-07",
        "bonus": 125000,
        "spend": 9000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2026-07",
        "end": "2026-10",
        "bonus": 100000,
        "spend": 5000,
        "note": "Current Active Offer"
      }
    ],
    "delta-platinum": [
      {
        "start": "2015-01",
        "end": "2015-06",
        "bonus": 35000,
        "spend": 1000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2015-06",
        "end": "2015-07",
        "bonus": 60000,
        "spend": 2000,
        "note": "Reduced Offer"
      },
      {
        "start": "2015-07",
        "end": "2016-06",
        "bonus": 35000,
        "spend": 1000,
        "note": "Reduced Offer"
      },
      {
        "start": "2016-06",
        "end": "2016-07",
        "bonus": 60000,
        "spend": 2000,
        "note": "Reduced Offer"
      },
      {
        "start": "2016-07",
        "end": "2016-10",
        "bonus": 35000,
        "spend": 1000,
        "note": "Reduced Offer"
      },
      {
        "start": "2016-10",
        "end": "2017-02",
        "bonus": 70000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2017-02",
        "end": "2017-05",
        "bonus": 50000,
        "spend": 1000,
        "note": "Reduced Offer"
      },
      {
        "start": "2017-05",
        "end": "2017-08",
        "bonus": 70000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2017-08",
        "end": "2017-10",
        "bonus": 35000,
        "spend": 1000,
        "note": "Reduced Offer"
      },
      {
        "start": "2017-10",
        "end": "2018-05",
        "bonus": 70000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2018-05",
        "end": "2018-08",
        "bonus": 50000,
        "spend": 1000,
        "note": "Reduced Offer"
      },
      {
        "start": "2018-08",
        "end": "2018-11",
        "bonus": 70000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2018-11",
        "end": "2019-02",
        "bonus": 60000,
        "spend": 2000,
        "note": "Reduced Offer"
      },
      {
        "start": "2019-02",
        "end": "2020-01",
        "bonus": 75000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2020-01",
        "end": "2020-04",
        "bonus": 80000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2020-04",
        "end": "2021-02",
        "bonus": 70000,
        "spend": 2000,
        "note": "Reduced Offer"
      },
      {
        "start": "2021-02",
        "end": "2023-06",
        "bonus": 90000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2023-06",
        "end": "2024-01",
        "bonus": 85000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2024-01",
        "end": "2024-03",
        "bonus": 90000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2024-03",
        "end": "2024-05",
        "bonus": 80000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2024-05",
        "end": "2024-08",
        "bonus": 85000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2024-08",
        "end": "2024-10",
        "bonus": 90000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2024-10",
        "end": "2025-01",
        "bonus": 60000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2025-01",
        "end": "2025-04",
        "bonus": 90000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2025-04",
        "end": "2025-05",
        "bonus": 60000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2025-05",
        "end": "2025-08",
        "bonus": 90000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2025-08",
        "end": "2025-10",
        "bonus": 90000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2025-10",
        "end": "2026-01",
        "bonus": 60000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2026-01",
        "end": "2026-03",
        "bonus": 100000,
        "spend": 6000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2026-03",
        "end": "2026-05",
        "bonus": 60000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2026-05",
        "end": "2026-07",
        "bonus": 100000,
        "spend": 6000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2026-07",
        "end": "2026-10",
        "bonus": 90000,
        "spend": 3000,
        "note": "Current Active Offer"
      }
    ],
    "delta-gold": [
      {
        "start": "2015-01",
        "end": "2015-04",
        "bonus": 30000,
        "spend": 1000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2015-04",
        "end": "2015-07",
        "bonus": 50000,
        "spend": 2000,
        "note": "Standard Baseline"
      },
      {
        "start": "2015-07",
        "end": "2015-09",
        "bonus": 30000,
        "spend": 1000,
        "note": "Reduced Offer"
      },
      {
        "start": "2015-09",
        "end": "2015-11",
        "bonus": 50000,
        "spend": 2000,
        "note": "Standard Baseline"
      },
      {
        "start": "2015-11",
        "end": "2017-01",
        "bonus": 50000,
        "spend": 1000,
        "note": "Standard Baseline"
      },
      {
        "start": "2017-01",
        "end": "2017-02",
        "bonus": 50000,
        "spend": 2000,
        "note": "Standard Baseline"
      },
      {
        "start": "2017-02",
        "end": "2017-05",
        "bonus": 50000,
        "spend": 1000,
        "note": "Standard Baseline"
      },
      {
        "start": "2017-05",
        "end": "2017-08",
        "bonus": 60000,
        "spend": 3000,
        "note": "Elevated Offer"
      },
      {
        "start": "2017-08",
        "end": "2017-10",
        "bonus": 50000,
        "spend": 1000,
        "note": "Standard Baseline"
      },
      {
        "start": "2017-10",
        "end": "2018-05",
        "bonus": 60000,
        "spend": 3000,
        "note": "Elevated Offer"
      },
      {
        "start": "2018-05",
        "end": "2018-08",
        "bonus": 50000,
        "spend": 1000,
        "note": "Standard Baseline"
      },
      {
        "start": "2018-08",
        "end": "2018-11",
        "bonus": 60000,
        "spend": 3000,
        "note": "Elevated Offer"
      },
      {
        "start": "2018-11",
        "end": "2019-02",
        "bonus": 50000,
        "spend": 1000,
        "note": "Standard Baseline"
      },
      {
        "start": "2019-02",
        "end": "2019-08",
        "bonus": 60000,
        "spend": 2000,
        "note": "Elevated Offer"
      },
      {
        "start": "2019-08",
        "end": "2019-09",
        "bonus": 50000,
        "spend": 1000,
        "note": "Standard Baseline"
      },
      {
        "start": "2019-09",
        "end": "2020-04",
        "bonus": 60000,
        "spend": 2000,
        "note": "Elevated Offer"
      },
      {
        "start": "2020-04",
        "end": "2021-02",
        "bonus": 50000,
        "spend": 1000,
        "note": "Standard Baseline"
      },
      {
        "start": "2021-02",
        "end": "2021-04",
        "bonus": 70000,
        "spend": 2000,
        "note": "Elevated Offer"
      },
      {
        "start": "2021-04",
        "end": "2021-06",
        "bonus": 90000,
        "spend": 2000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2021-06",
        "end": "2021-10",
        "bonus": 70000,
        "spend": 2000,
        "note": "Elevated Offer"
      },
      {
        "start": "2021-10",
        "end": "2022-03",
        "bonus": 75000,
        "spend": 2000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-03",
        "end": "2022-05",
        "bonus": 70000,
        "spend": 2000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-05",
        "end": "2022-06",
        "bonus": 75000,
        "spend": 2000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-06",
        "end": "2022-08",
        "bonus": 70000,
        "spend": 2000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-08",
        "end": "2023-06",
        "bonus": 75000,
        "spend": 2000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-06",
        "end": "2023-09",
        "bonus": 65000,
        "spend": 2000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-09",
        "end": "2024-08",
        "bonus": 70000,
        "spend": 2000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-08",
        "end": "2024-10",
        "bonus": 80000,
        "spend": 3000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-10",
        "end": "2025-01",
        "bonus": 50000,
        "spend": 2000,
        "note": "Standard Baseline"
      },
      {
        "start": "2025-01",
        "end": "2025-03",
        "bonus": 80000,
        "spend": 3000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-03",
        "end": "2025-05",
        "bonus": 50000,
        "spend": 2000,
        "note": "Standard Baseline"
      },
      {
        "start": "2025-05",
        "end": "2025-08",
        "bonus": 80000,
        "spend": 2000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-08",
        "end": "2025-10",
        "bonus": 80000,
        "spend": 3000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-10",
        "end": "2026-01",
        "bonus": 50000,
        "spend": 2000,
        "note": "Standard Baseline"
      },
      {
        "start": "2026-01",
        "end": "2026-03",
        "bonus": 90000,
        "spend": 5000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2026-03",
        "end": "2026-05",
        "bonus": 50000,
        "spend": 2000,
        "note": "Standard Baseline"
      },
      {
        "start": "2026-05",
        "end": "2026-07",
        "bonus": 90000,
        "spend": 5000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2026-07",
        "end": "2026-10",
        "bonus": 80000,
        "spend": 2000,
        "note": "Current Active Offer"
      }
    ],
    "chase-sapphire-reserve": [
      {
        "start": "2016-08",
        "end": "2017-03",
        "bonus": 100000,
        "spend": 4000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2017-03",
        "end": "2021-03",
        "bonus": 50000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2021-03",
        "end": "2021-10",
        "bonus": 60000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2021-10",
        "end": "2021-12",
        "bonus": 50000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2021-12",
        "end": "2022-09",
        "bonus": 70000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-09",
        "end": "2022-12",
        "bonus": 80000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-12",
        "end": "2023-10",
        "bonus": 70000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-10",
        "end": "2024-04",
        "bonus": 60000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-04",
        "end": "2024-06",
        "bonus": 75000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-06",
        "end": "2025-06",
        "bonus": 60000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-06",
        "end": "2025-08",
        "bonus": 100000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-08",
        "end": "2026-04",
        "bonus": 125000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2026-04",
        "end": "2026-06",
        "bonus": 150000,
        "spend": 6000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2026-06",
        "end": "2026-10",
        "bonus": 100000,
        "spend": 6000,
        "note": "Current Active Offer"
      }
    ],
    "chase-sapphire-preferred": [
      {
        "start": "2013-10",
        "end": "2013-11",
        "bonus": 45000,
        "spend": 3000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2013-11",
        "end": "2014-03",
        "bonus": 55000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2014-03",
        "end": "2014-11",
        "bonus": 45000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2014-11",
        "end": "2015-11",
        "bonus": 45000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2015-11",
        "end": "2018-02",
        "bonus": 55000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2018-02",
        "end": "2018-04",
        "bonus": 65000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2018-04",
        "end": "2018-09",
        "bonus": 55000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2018-09",
        "end": "2019-02",
        "bonus": 50000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2019-02",
        "end": "2020-08",
        "bonus": 60000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2020-08",
        "end": "2020-11",
        "bonus": 80000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2020-11",
        "end": "2021-02",
        "bonus": 60000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2021-02",
        "end": "2021-05",
        "bonus": 80000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2021-05",
        "end": "2021-10",
        "bonus": 100000,
        "spend": 4000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2021-10",
        "end": "2022-03",
        "bonus": 60000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2022-03",
        "end": "2022-06",
        "bonus": 80000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-06",
        "end": "2023-03",
        "bonus": 60000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2023-03",
        "end": "2023-05",
        "bonus": 90000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-05",
        "end": "2023-07",
        "bonus": 80000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-07",
        "end": "2024-03",
        "bonus": 60000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2024-03",
        "end": "2024-06",
        "bonus": 85000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-06",
        "end": "2025-03",
        "bonus": 60000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2025-03",
        "end": "2025-06",
        "bonus": 100000,
        "spend": 5000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2025-06",
        "end": "2026-05",
        "bonus": 75000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2026-05",
        "end": "2026-07",
        "bonus": 100000,
        "spend": 5000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2026-07",
        "end": "2026-10",
        "bonus": 75000,
        "spend": 5000,
        "note": "Current Active Offer"
      }
    ],
    "chase-freedom-flex": [
      {
        "start": "2020-09",
        "end": "2021-10",
        "bonus": 20000,
        "spend": 500,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2021-10",
        "end": "2022-01",
        "bonus": 25000,
        "spend": 500,
        "note": "All-Time High Offer"
      },
      {
        "start": "2022-01",
        "end": "2024-08",
        "bonus": 20000,
        "spend": 500,
        "note": "Standard Baseline"
      },
      {
        "start": "2024-08",
        "end": "2024-09",
        "bonus": 15000,
        "spend": 500,
        "note": "Reduced Offer"
      },
      {
        "start": "2024-09",
        "end": "2026-08",
        "bonus": 20000,
        "spend": 500,
        "note": "Standard Baseline"
      },
      {
        "start": "2026-08",
        "end": "2026-10",
        "bonus": 25000,
        "spend": 500,
        "note": "Current Offer (All-Time High)"
      }
    ],
    "united-club": [
      {
        "start": "2015-01",
        "end": "2017-10",
        "bonus": 0,
        "spend": 0,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2017-10",
        "end": "2020-01",
        "bonus": 50000,
        "spend": 3000,
        "note": "Elevated Offer"
      },
      {
        "start": "2020-01",
        "end": "2020-03",
        "bonus": 75000,
        "spend": 3000,
        "note": "Elevated Offer"
      },
      {
        "start": "2020-03",
        "end": "2020-05",
        "bonus": 100000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2020-05",
        "end": "2020-07",
        "bonus": 0,
        "spend": 0,
        "note": "Standard Baseline"
      },
      {
        "start": "2020-07",
        "end": "2020-10",
        "bonus": 100000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2020-10",
        "end": "2020-12",
        "bonus": 0,
        "spend": 0,
        "note": "Standard Baseline"
      },
      {
        "start": "2020-12",
        "end": "2021-02",
        "bonus": 50000,
        "spend": 3000,
        "note": "Elevated Offer"
      },
      {
        "start": "2021-02",
        "end": "2021-11",
        "bonus": 75000,
        "spend": 3000,
        "note": "Elevated Offer"
      },
      {
        "start": "2021-11",
        "end": "2022-03",
        "bonus": 100000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-03",
        "end": "2022-05",
        "bonus": 120000,
        "spend": 6000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2022-05",
        "end": "2022-09",
        "bonus": 100000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-09",
        "end": "2022-10",
        "bonus": 80000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-10",
        "end": "2023-02",
        "bonus": 100000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-02",
        "end": "2023-10",
        "bonus": 80000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-10",
        "end": "2024-03",
        "bonus": 90000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-03",
        "end": "2024-05",
        "bonus": 80000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-05",
        "end": "2024-08",
        "bonus": 90000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-08",
        "end": "2024-10",
        "bonus": 80000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-10",
        "end": "2025-02",
        "bonus": 90000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-02",
        "end": "2025-03",
        "bonus": 95000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-03",
        "end": "2025-07",
        "bonus": 90000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-07",
        "end": "2025-10",
        "bonus": 80000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-10",
        "end": "2026-02",
        "bonus": 90000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2026-02",
        "end": "2026-05",
        "bonus": 100000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2026-05",
        "end": "2026-08",
        "bonus": 80000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2026-08",
        "end": "2026-10",
        "bonus": 90000,
        "spend": 5000,
        "note": "Current Active Offer"
      }
    ],
    "united-quest": [
      {
        "start": "2021-04",
        "end": "2022-04",
        "bonus": 80000,
        "spend": 5000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2022-04",
        "end": "2023-02",
        "bonus": 90000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-02",
        "end": "2023-05",
        "bonus": 60000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2023-05",
        "end": "2023-06",
        "bonus": 90000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-06",
        "end": "2023-08",
        "bonus": 70000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2023-08",
        "end": "2023-10",
        "bonus": 60000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2023-10",
        "end": "2024-08",
        "bonus": 70000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2024-08",
        "end": "2024-10",
        "bonus": 60000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2024-10",
        "end": "2025-03",
        "bonus": 70000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2025-03",
        "end": "2025-04",
        "bonus": 80000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-04",
        "end": "2025-06",
        "bonus": 85000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-06",
        "end": "2025-08",
        "bonus": 100000,
        "spend": 4000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2025-08",
        "end": "2026-01",
        "bonus": 70000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2026-01",
        "end": "2026-03",
        "bonus": 80000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2026-03",
        "end": "2026-05",
        "bonus": 90000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2026-05",
        "end": "2026-09",
        "bonus": 70000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2026-09",
        "end": "2026-10",
        "bonus": 80000,
        "spend": 4000,
        "note": "Current Active Offer"
      }
    ],
    "united-explorer": [
      {
        "start": "2015-01",
        "end": "2015-05",
        "bonus": 35000,
        "spend": 1000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2015-05",
        "end": "2015-06",
        "bonus": 55000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2015-06",
        "end": "2016-06",
        "bonus": 35000,
        "spend": 1000,
        "note": "Reduced Offer"
      },
      {
        "start": "2016-06",
        "end": "2016-07",
        "bonus": 55000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2016-07",
        "end": "2017-02",
        "bonus": 35000,
        "spend": 1000,
        "note": "Reduced Offer"
      },
      {
        "start": "2017-02",
        "end": "2018-09",
        "bonus": 55000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2018-09",
        "end": "2019-04",
        "bonus": 50000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2019-04",
        "end": "2019-07",
        "bonus": 40000,
        "spend": 2000,
        "note": "Reduced Offer"
      },
      {
        "start": "2019-07",
        "end": "2019-11",
        "bonus": 50000,
        "spend": 5000,
        "note": "Reduced Offer"
      },
      {
        "start": "2019-11",
        "end": "2020-01",
        "bonus": 40000,
        "spend": 2000,
        "note": "Reduced Offer"
      },
      {
        "start": "2020-01",
        "end": "2020-05",
        "bonus": 60000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2020-05",
        "end": "2020-07",
        "bonus": 40000,
        "spend": 2000,
        "note": "Reduced Offer"
      },
      {
        "start": "2020-07",
        "end": "2020-11",
        "bonus": 60000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2020-11",
        "end": "2021-02",
        "bonus": 70000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2021-02",
        "end": "2021-06",
        "bonus": 40000,
        "spend": 2000,
        "note": "Reduced Offer"
      },
      {
        "start": "2021-06",
        "end": "2023-02",
        "bonus": 70000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-02",
        "end": "2023-05",
        "bonus": 50000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2023-05",
        "end": "2024-08",
        "bonus": 60000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2024-08",
        "end": "2024-10",
        "bonus": 50000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2024-10",
        "end": "2025-02",
        "bonus": 60000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2025-02",
        "end": "2025-03",
        "bonus": 70000,
        "spend": 3000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-03",
        "end": "2025-05",
        "bonus": 75000,
        "spend": 3000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2025-05",
        "end": "2025-12",
        "bonus": 60000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2025-12",
        "end": "2026-05",
        "bonus": 70000,
        "spend": 3000,
        "note": "Elevated Offer"
      },
      {
        "start": "2026-05",
        "end": "2026-08",
        "bonus": 60000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2026-08",
        "end": "2026-10",
        "bonus": 70000,
        "spend": 3000,
        "note": "Current Active Offer"
      }
    ],
    "citi-strata-elite": [
      {
        "start": "2025-08",
        "end": "2025-10",
        "bonus": 80000,
        "spend": 4000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2025-10",
        "end": "2026-02",
        "bonus": 100000,
        "spend": 6000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2026-02",
        "end": "2026-10",
        "bonus": 75000,
        "spend": 6000,
        "note": "Current Active Offer"
      }
    ],
    "citi-strata-premier": [
      {
        "start": "2015-01",
        "end": "2015-04",
        "bonus": 50000,
        "spend": 5000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2015-04",
        "end": "2016-03",
        "bonus": 50000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2016-03",
        "end": "2016-07",
        "bonus": 40000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2016-07",
        "end": "2016-11",
        "bonus": 0,
        "spend": 0,
        "note": "Reduced Offer"
      },
      {
        "start": "2016-11",
        "end": "2017-03",
        "bonus": 40000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2017-03",
        "end": "2017-08",
        "bonus": 30000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2017-08",
        "end": "2017-11",
        "bonus": 50000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2017-11",
        "end": "2017-12",
        "bonus": 50000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2017-12",
        "end": "2018-08",
        "bonus": 50000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2018-08",
        "end": "2021-07",
        "bonus": 60000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2021-07",
        "end": "2022-03",
        "bonus": 80000,
        "spend": 4000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2022-03",
        "end": "2022-08",
        "bonus": 60000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2022-08",
        "end": "2023-03",
        "bonus": 80000,
        "spend": 4000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2023-03",
        "end": "2023-06",
        "bonus": 75000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-06",
        "end": "2023-08",
        "bonus": 60000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2023-08",
        "end": "2025-07",
        "bonus": 75000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-07",
        "end": "2026-10",
        "bonus": 60000,
        "spend": 4000,
        "note": "Current Active Offer"
      }
    ],
    "citi-strata": [
      {
        "start": "2025-08",
        "end": "2026-01",
        "bonus": 30000,
        "spend": 1000,
        "note": "Launch / Peak Offer"
      },
      {
        "start": "2026-01",
        "end": "2026-10",
        "bonus": 20000,
        "spend": 1000,
        "note": "Current Active Offer"
      }
    ],
    "citi-custom-cash": [
      {
        "start": "2021-06",
        "end": "2021-11",
        "bonus": 20000,
        "spend": 700,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2021-11",
        "end": "2022-02",
        "bonus": 30000,
        "spend": 1000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2022-02",
        "end": "2022-08",
        "bonus": 20000,
        "spend": 700,
        "note": "Standard Baseline"
      },
      {
        "start": "2022-08",
        "end": "2026-10",
        "bonus": 20000,
        "spend": 1500,
        "note": "Current Active Offer"
      }
    ],
    "citi-aa-executive": [
      {
        "start": "2014-01",
        "end": "2014-02",
        "bonus": 50000,
        "spend": 5000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2014-02",
        "end": "2014-07",
        "bonus": 100000,
        "spend": 10000,
        "note": "Elevated Offer"
      },
      {
        "start": "2014-07",
        "end": "2015-07",
        "bonus": 50000,
        "spend": 5000,
        "note": "Standard Baseline"
      },
      {
        "start": "2015-07",
        "end": "2015-12",
        "bonus": 75000,
        "spend": 7500,
        "note": "Elevated Offer"
      },
      {
        "start": "2015-12",
        "end": "2016-05",
        "bonus": 50000,
        "spend": 5000,
        "note": "Standard Baseline"
      },
      {
        "start": "2016-05",
        "end": "2017-06",
        "bonus": 60000,
        "spend": 5000,
        "note": "Elevated Offer"
      },
      {
        "start": "2017-06",
        "end": "2018-10",
        "bonus": 75000,
        "spend": 7500,
        "note": "Elevated Offer"
      },
      {
        "start": "2018-10",
        "end": "2022-09",
        "bonus": 50000,
        "spend": 5000,
        "note": "Standard Baseline"
      },
      {
        "start": "2022-09",
        "end": "2023-01",
        "bonus": 85000,
        "spend": 6500,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-01",
        "end": "2023-07",
        "bonus": 60000,
        "spend": 6000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-07",
        "end": "2023-09",
        "bonus": 100000,
        "spend": 10000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-09",
        "end": "2024-04",
        "bonus": 75000,
        "spend": 7500,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-04",
        "end": "2024-06",
        "bonus": 100000,
        "spend": 10000,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-06",
        "end": "2025-04",
        "bonus": 75000,
        "spend": 7500,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-04",
        "end": "2025-07",
        "bonus": 100000,
        "spend": 10000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-07",
        "end": "2025-11",
        "bonus": 75000,
        "spend": 7500,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-11",
        "end": "2025-12",
        "bonus": 100000,
        "spend": 10000,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-12",
        "end": "2026-04",
        "bonus": 75000,
        "spend": 7500,
        "note": "Elevated Offer"
      },
      {
        "start": "2026-04",
        "end": "2026-08",
        "bonus": 100000,
        "spend": 10000,
        "note": "Elevated Offer"
      },
      {
        "start": "2026-08",
        "end": "2026-10",
        "bonus": 125000,
        "spend": 15000,
        "note": "Current Offer (All-Time High)"
      }
    ],
    "citi-aa-globe": [
      {
        "start": "2025-10",
        "end": "2026-02",
        "bonus": 90000,
        "spend": 5000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2026-02",
        "end": "2026-04",
        "bonus": 60000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2026-04",
        "end": "2026-06",
        "bonus": 90000,
        "spend": 5000,
        "note": "Standard Baseline"
      },
      {
        "start": "2026-06",
        "end": "2026-09",
        "bonus": 60000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2026-09",
        "end": "2026-10",
        "bonus": 90000,
        "spend": 5000,
        "note": "Current Active Offer"
      }
    ],
    "citi-aa-platinum-select": [
      {
        "start": "2014-11",
        "end": "2017-04",
        "bonus": 50000,
        "spend": 3000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2017-04",
        "end": "2017-08",
        "bonus": 60000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2017-08",
        "end": "2017-09",
        "bonus": 50000,
        "spend": 3000,
        "note": "Reduced Offer"
      },
      {
        "start": "2017-09",
        "end": "2018-11",
        "bonus": 60000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2018-11",
        "end": "2019-02",
        "bonus": 60000,
        "spend": 6000,
        "note": "Standard Baseline"
      },
      {
        "start": "2019-02",
        "end": "2019-03",
        "bonus": 60000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2019-03",
        "end": "2019-07",
        "bonus": 65000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2019-07",
        "end": "2022-06",
        "bonus": 60000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2022-06",
        "end": "2022-07",
        "bonus": 75000,
        "spend": 3500,
        "note": "Elevated Offer"
      },
      {
        "start": "2022-07",
        "end": "2023-03",
        "bonus": 60000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2023-03",
        "end": "2023-05",
        "bonus": 75000,
        "spend": 3500,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-05",
        "end": "2024-02",
        "bonus": 60000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2024-02",
        "end": "2024-05",
        "bonus": 75000,
        "spend": 3500,
        "note": "Elevated Offer"
      },
      {
        "start": "2024-05",
        "end": "2024-07",
        "bonus": 60000,
        "spend": 3000,
        "note": "Standard Baseline"
      },
      {
        "start": "2024-07",
        "end": "2025-06",
        "bonus": 75000,
        "spend": 3500,
        "note": "Elevated Offer"
      },
      {
        "start": "2025-06",
        "end": "2025-09",
        "bonus": 80000,
        "spend": 3500,
        "note": "All-Time High Offer"
      },
      {
        "start": "2025-09",
        "end": "2026-05",
        "bonus": 80000,
        "spend": 1000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2026-05",
        "end": "2026-10",
        "bonus": 80000,
        "spend": 3500,
        "note": "Current Offer (All-Time High)"
      }
    ],
    "capital-one-venture-x": [
      {
        "start": "2021-11",
        "end": "2022-03",
        "bonus": 100000,
        "spend": 10000,
        "note": "Launch / Peak Offer"
      },
      {
        "start": "2022-03",
        "end": "2023-09",
        "bonus": 75000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2023-09",
        "end": "2023-12",
        "bonus": 90000,
        "spend": 4000,
        "note": "Elevated Offer"
      },
      {
        "start": "2023-12",
        "end": "2025-10",
        "bonus": 75000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2025-10",
        "end": "2025-12",
        "bonus": 100000,
        "spend": 10000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2025-12",
        "end": "2026-10",
        "bonus": 75000,
        "spend": 4000,
        "note": "Current Active Offer"
      }
    ],
    "bofa-premium-elite": [
      {
        "start": "2021-11",
        "end": "2023-05",
        "bonus": 50000,
        "spend": 3000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2023-05",
        "end": "2026-10",
        "bonus": 75000,
        "spend": 5000,
        "note": "Current Active Offer"
      }
    ],
    "bofa-premium-rewards": [
      {
        "start": "2017-09",
        "end": "2023-05",
        "bonus": 50000,
        "spend": 3000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2023-05",
        "end": "2026-10",
        "bonus": 60000,
        "spend": 4000,
        "note": "Current Offer (All-Time High)"
      }
    ],
    "atmos-summit": [
      {
        "start": "2025-08",
        "end": "2025-10",
        "bonus": 100000,
        "spend": 6000,
        "note": "Launch / Peak Offer"
      },
      {
        "start": "2025-10",
        "end": "2026-03",
        "bonus": 80000,
        "spend": 4000,
        "note": "Standard Baseline"
      },
      {
        "start": "2026-03",
        "end": "2026-08",
        "bonus": 100000,
        "spend": 6000,
        "note": "All-Time High Offer"
      },
      {
        "start": "2026-08",
        "end": "2026-10",
        "bonus": 80000,
        "spend": 4000,
        "note": "Current Active Offer"
      }
    ],
    "atmos-ascent": [
      {
        "start": "2025-08",
        "end": "2025-10",
        "bonus": 85000,
        "spend": 4000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2025-10",
        "end": "2026-01",
        "bonus": 80000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2026-01",
        "end": "2026-02",
        "bonus": 85000,
        "spend": 4500,
        "note": "Standard Baseline"
      },
      {
        "start": "2026-02",
        "end": "2026-03",
        "bonus": 80000,
        "spend": 4000,
        "note": "Reduced Offer"
      },
      {
        "start": "2026-03",
        "end": "2026-08",
        "bonus": 85000,
        "spend": 4500,
        "note": "Standard Baseline"
      },
      {
        "start": "2026-08",
        "end": "2026-10",
        "bonus": 70000,
        "spend": 3000,
        "note": "Current Active Offer"
      }
    ],
    "wf-autograph-journey": [
      {
        "start": "2024-03",
        "end": "2026-10",
        "bonus": 60000,
        "spend": 4000,
        "note": "Current Active Offer"
      }
    ],
    "wf-premier-autograph": [
      {
        "start": "2026-02",
        "end": "2026-10",
        "bonus": 100000,
        "spend": 4000,
        "note": "Current Active Offer"
      }
    ],
    "jetblue-premier": [
      {
        "start": "2025-02",
        "end": "2026-01",
        "bonus": 70000,
        "spend": 5000,
        "note": "Initial Tracked Offer"
      },
      {
        "start": "2026-01",
        "end": "2026-10",
        "bonus": 80000,
        "spend": 5000,
        "note": "Current Offer (All-Time High)"
      }
    ]
  };
  // END_CARD_OFFER_HISTORY

  const CARDS_CATALOG = [
    {
      id: 'amex-platinum',
      order: 1,
      familyGroup: 'Amex',
      familyLabel: 'Amex Membership Rewards',
      name: 'American Express Platinum',
      issuer: 'American Express',
      officialUrl: 'https://www.americanexpress.com/us/credit-cards/card/platinum/',
      annualFee: 895,
      multipliers: '5x Flights (Direct/Amex Travel) • 5x Prepaid Hotels (Amex Travel)',
      offerCurrency: 'MR Points',
      defaultOfferText: '175,000 MR Points',
      offerBadge: 'As High As',
      defaultOfferSpend: '$8,000 in 6 months',
      historicalHighText: 'Now',
      bestOfferTip: 'Tip: Check Incognito referral or CardMatch to lock in 150k–175k (open Gold first)',
      estimatedOfferValue: 1500,
      matchKeywords: ['platinum', 'american express'],
      excludeKeywords: ['business', 'delta', 'marriott', 'charles schwab', 'morgan stanley'],
      benefits: [
        { id: 'fhr-hotel', name: '$600 Hotel Credit ($300/6 mo)', linkText: 'FHR / THC ↗', linkUrl: 'https://www.nextcard.com/tools/amex-hotel-map', maxVal: 600, desc: '$300 semi-annually (Jan–Jun, Jul–Dec) on prepaid Fine Hotels + Resorts (1+ nt) or The Hotel Collection (2+ nts), plus on-property perks ($550 avg value on FHR: $100 experience credit, daily breakfast for two, guaranteed 4pm late checkout, room upgrade when available, 12pm check-in, and complimentary Wi-Fi; $100 credit & upgrade on 2+ night THC stays).' },
        { id: 'resy', name: '$400 Credit ($100/qtr)', linkText: 'Resy ↗', linkUrl: 'https://www.nextcard.com/tools/resy-map', maxVal: 400, desc: '$100 per quarter at eligible U.S. Resy restaurants (enrollment required), plus Global Dining Access by Resy (exclusive reservations at sought-after restaurants, Platinum Nights by Resy events, and Priority Notify).' },
        { id: 'digital-ent', name: '$300 Digital Entertainment Credit ($25/mo)', maxVal: 300, desc: '$25/month for Disney+, Hulu, ESPN+, Peacock, NYT, WSJ, or YouTube (enrollment required).' },
        { id: 'lululemon', name: '$300 lululemon Credit ($75/qtr)', maxVal: 300, desc: '$75 per quarter on eligible lululemon purchases (enrollment required).' },
        { id: 'equinox', name: '$300 Equinox Credit', maxVal: 300, desc: 'Up to $300/yr toward Equinox club memberships or Equinox+ digital fitness app.' },
        { id: 'venue-collection', name: '10% off Amex Venue Concessions', maxVal: 250, desc: 'Enjoy dedicated fast lanes at select stadiums and arenas plus 10% back as a statement credit on qualifying concession purchases (up to $250 per calendar year).' },
        { id: 'clear', name: '$219 CLEAR+ Credit', maxVal: 219, desc: 'Covers annual CLEAR Plus expedited airport security membership.' },
        { id: 'airline-fee', name: '$200 Single Airline Fee Credit', maxVal: 200, desc: 'Incidental fees (checked bags, seat selection, lounge passes) on one selected qualifying airline.' },
        { id: 'uber-cash', name: '$200 Uber Cash ($15/mo + $20 Dec)', maxVal: 200, desc: '$15/month ($20 in Dec) for U.S. Uber rides or Uber Eats orders.' },
        { id: 'oura', name: '$200 Oura Ring Credit', maxVal: 200, desc: 'Annual statement credit for Oura Ring hardware purchases at ouraring.com.' },
        { id: 'walmart-plus', name: '$155 Walmart+ Credit ($12.95/mo)', maxVal: 155, desc: '$12.95/mo statement credit covering Walmart+ monthly membership (includes Paramount+).' },
        { id: 'uber-one', name: '$120 Uber One Credit', maxVal: 120, desc: 'Statement credits covering auto-renewing Uber One membership.' },
        { id: 'ge-precheck', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: '$120 credit every 4 years for Global Entry or $85 every 4.5 years for PreCheck (~$30/yr).' },
        { id: 'lounge-access', name: 'Global Lounge Collection (Centurion, Priority Pass Select, Sky Club)', maxVal: 300, isMonetary: false, desc: '1,550+ lounges including Centurion Lounges, Priority Pass, Escape, Plaza Premium, & 10 Delta Sky Club visits/yr when flying Delta.' },
        { id: 'elite-status', name: 'Hilton Gold, Marriott Gold & Leaders Club Sterling', maxVal: 75, isMonetary: false, desc: 'Complimentary Hilton Honors Gold status, Marriott Bonvoy Gold Elite status, and The Leading Hotels of the World Leaders Club Sterling status (enrollment required).' },
        { id: 'elite-car-status', name: 'Hertz President’s Circle, Avis Preferred Plus & National Executive', maxVal: 50, isMonetary: false, desc: 'Complimentary Hertz Gold Plus Rewards President’s Circle, Avis Preferred Plus, and National Emerald Club Executive rental car status (enrollment required).' },
        { id: 'amex-cell', name: 'Cell Phone Protection ($800/claim)', maxVal: 40, isMonetary: false, desc: 'Reimbursement for repair or replacement of a damaged or stolen cell phone up to $800 per claim ($50 deductible, max 2 approved claims per 12-month period) when you pay your monthly wireless bill with the Card.' },
        { id: 'amex-prot', name: '6-Hr Trip Delay & $10K Trip Cancellation', maxVal: 50, isMonetary: false, desc: 'Includes 6-hr Trip Delay ($500/trip) and Trip Cancellation & Interruption ($10K/trip, $20K/yr).' },
        { id: 'amex-purchase-prot', name: 'Return Protection & $10K Purchase Protection', maxVal: 40, isMonetary: false, desc: 'Includes Return Protection ($300/item, $1K/yr) and Purchase Protection ($10K/item, $50K/yr).' }
      ]
    },
    {
      id: 'amex-platinum-schwab',
      order: 1.5,
      familyGroup: 'Amex',
      familyLabel: 'Amex Membership Rewards',
      name: 'American Express Platinum for Charles Schwab',
      issuer: 'American Express',
      officialUrl: 'https://www.schwab.com/credit-cards/platinum-card',
      annualFee: 895,
      multipliers: '5x Flights (Direct/Amex Travel) • 5x Prepaid Hotels (Amex Travel)',
      offerCurrency: 'MR Points',
      defaultOfferText: '80,000 MR Points',
      defaultOfferSpend: '$8,000 in 6 months',
      historicalHighText: '150,000 ($12k • Apr 2026)',
      bestOfferTip: 'Tip: Apply via logged-in Schwab portal (ineligible if you already hold vanilla Amex Platinum)',
      estimatedOfferValue: 1375,
      matchKeywords: ['platinum', 'schwab'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'cs-appreciation', name: 'Schwab Bonus ($100/$200/$1K at $250K/$1M/$10M holdings)', maxVal: 200, desc: 'Annual statement credit based on qualifying Schwab holdings: $100 ($250k–$999k), $200 ($1M–$9.99M), or $1,000 ($10M+), plus redeem Membership Rewards points directly into an eligible Charles Schwab brokerage account at 1.1 cents per point.' },
        { id: 'cs-fhr-hotel', name: '$600 Hotel Credit ($300/6 mo)', linkText: 'FHR / THC ↗', linkUrl: 'https://www.nextcard.com/tools/amex-hotel-map', maxVal: 600, desc: '$300 semi-annually (Jan–Jun, Jul–Dec) on prepaid Fine Hotels + Resorts (1+ nt) or The Hotel Collection (2+ nts), plus on-property perks ($550 avg value on FHR: $100 experience credit, daily breakfast for two, guaranteed 4pm late checkout, room upgrade when available, 12pm check-in, and complimentary Wi-Fi; $100 credit & upgrade on 2+ night THC stays).' },
        { id: 'cs-resy', name: '$400 Credit ($100/qtr)', linkText: 'Resy ↗', linkUrl: 'https://www.nextcard.com/tools/resy-map', maxVal: 400, desc: '$100 per quarter at eligible U.S. Resy restaurants (enrollment required), plus Global Dining Access by Resy (exclusive reservations at sought-after restaurants, Platinum Nights by Resy events, and Priority Notify).' },
        { id: 'cs-digital-ent', name: '$300 Digital Entertainment Credit ($25/mo)', maxVal: 300, desc: '$25/month for Disney+, Hulu, ESPN+, Peacock, NYT, WSJ, or YouTube (enrollment required).' },
        { id: 'cs-lululemon', name: '$300 lululemon Credit ($75/qtr)', maxVal: 300, desc: '$75 per quarter on eligible lululemon purchases (enrollment required).' },
        { id: 'cs-equinox', name: '$300 Equinox Credit', maxVal: 300, desc: 'Up to $300/yr toward Equinox club memberships or Equinox+ digital fitness app.' },
        { id: 'cs-venue-collection', name: '10% off Amex Venue Concessions', maxVal: 250, desc: 'Enjoy dedicated fast lanes at select stadiums and arenas plus 10% back as a statement credit on qualifying concession purchases (up to $250 per calendar year).' },
        { id: 'cs-clear', name: '$219 CLEAR+ Credit', maxVal: 219, desc: 'Covers annual CLEAR Plus expedited airport security membership.' },
        { id: 'cs-airline-fee', name: '$200 Single Airline Fee Credit', maxVal: 200, desc: 'Incidental fees (checked bags, seat selection, lounge passes) on one selected qualifying airline.' },
        { id: 'cs-uber-cash', name: '$200 Uber Cash ($15/mo + $20 Dec)', maxVal: 200, desc: '$15/month ($20 in Dec) for U.S. Uber rides or Uber Eats orders.' },
        { id: 'cs-oura', name: '$200 Oura Ring Credit', maxVal: 200, desc: 'Annual statement credit for Oura Ring hardware purchases at ouraring.com.' },
        { id: 'cs-walmart-plus', name: '$155 Walmart+ Credit ($12.95/mo)', maxVal: 155, desc: '$12.95/mo statement credit covering Walmart+ monthly membership (includes Paramount+).' },
        { id: 'cs-uber-one', name: '$120 Uber One Credit', maxVal: 120, desc: 'Statement credits covering auto-renewing Uber One membership.' },
        { id: 'cs-ge-precheck', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: '$120 credit every 4 years for Global Entry or $85 every 4.5 years for PreCheck (~$30/yr).' },
        { id: 'cs-lounge-access', name: 'Global Lounge Collection (Centurion, Priority Pass Select, Sky Club)', maxVal: 300, isMonetary: false, desc: '1,550+ lounges including Centurion Lounges, Priority Pass, Escape, Plaza Premium, & 10 Delta Sky Club visits/yr when flying Delta.' },
        { id: 'cs-elite-status', name: 'Hilton Gold, Marriott Gold & Leaders Club Sterling', maxVal: 75, isMonetary: false, desc: 'Complimentary Hilton Honors Gold status, Marriott Bonvoy Gold Elite status, and The Leading Hotels of the World Leaders Club Sterling status (enrollment required).' },
        { id: 'cs-elite-car-status', name: 'Hertz President’s Circle, Avis Preferred Plus & National Executive', maxVal: 50, isMonetary: false, desc: 'Complimentary Hertz Gold Plus Rewards President’s Circle, Avis Preferred Plus, and National Emerald Club Executive rental car status (enrollment required).' },
        { id: 'cs-cell', name: 'Cell Phone Protection ($800/claim)', maxVal: 40, isMonetary: false, desc: 'Reimbursement for repair or replacement of a damaged or stolen cell phone up to $800 per claim ($50 deductible, max 2 approved claims per 12-month period) when you pay your monthly wireless bill with the Card.' },
        { id: 'cs-prot', name: '6-Hr Trip Delay & $10K Trip Cancellation', maxVal: 50, isMonetary: false, desc: 'Includes 6-hr Trip Delay ($500/trip) and Trip Cancellation & Interruption ($10K/trip, $20K/yr).' },
        { id: 'cs-purchase-prot', name: 'Return Protection & $10K Purchase Protection', maxVal: 40, isMonetary: false, desc: 'Includes Return Protection ($300/item, $1K/yr) and Purchase Protection ($10K/item, $50K/yr).' }
      ]
    },
    {
      id: 'amex-platinum-ms',
      order: 1.6,
      familyGroup: 'Amex',
      familyLabel: 'Amex Membership Rewards',
      name: 'American Express Platinum for Morgan Stanley',
      issuer: 'American Express',
      officialUrl: 'https://www.morganstanley.com/what-we-do/wealth-management/cashplus',
      annualFee: 895,
      multipliers: '5x Flights (Direct/Amex Travel) • 5x Prepaid Hotels (Amex Travel)',
      offerCurrency: 'MR Points',
      defaultOfferText: '80,000 MR Points',
      defaultOfferSpend: '$6,000 in 6 months',
      historicalHighText: '150,000 ($12k • Apr 2026)',
      bestOfferTip: 'Tip: Any E*TRADE brokerage account now qualifies as an eligible Morgan Stanley relationship to apply',
      estimatedOfferValue: 1375,
      matchKeywords: ['platinum', 'morgan stanley'],
      excludeKeywords: ['business', 'blue cash'],
      benefits: [
        { id: 'ms-engagement', name: '$895 Platinum CashPlus Bonus', maxVal: 895, desc: '$895 annual cash bonus deposited by Morgan Stanley when you hold an eligible Platinum CashPlus account, plus redeem MR points at 1.0¢/pt into your Morgan Stanley brokerage account.' },
        { id: 'ms-free-au', name: '1 Free Authorized User Card', maxVal: 195, isMonetary: false, desc: 'Receive your first Additional Platinum Card (Authorized User) for no annual fee ($195/yr savings), granting your authorized user their own Centurion Lounge, Priority Pass, Sky Club, Global Entry, and Hilton/Marriott Gold access.' },
        { id: 'ms-fhr-hotel', name: '$600 Hotel Credit ($300/6 mo)', linkText: 'FHR / THC ↗', linkUrl: 'https://www.nextcard.com/tools/amex-hotel-map', maxVal: 600, desc: '$300 semi-annually (Jan–Jun, Jul–Dec) on prepaid Fine Hotels + Resorts (1+ nt) or The Hotel Collection (2+ nts), plus on-property perks ($550 avg value on FHR: $100 experience credit, daily breakfast for two, guaranteed 4pm late checkout, room upgrade when available, 12pm check-in, and complimentary Wi-Fi; $100 credit & upgrade on 2+ night THC stays).' },
        { id: 'ms-resy', name: '$400 Credit ($100/qtr)', linkText: 'Resy ↗', linkUrl: 'https://www.nextcard.com/tools/resy-map', maxVal: 400, desc: '$100 per quarter at eligible U.S. Resy restaurants (enrollment required), plus Global Dining Access by Resy (exclusive reservations at sought-after restaurants, Platinum Nights by Resy events, and Priority Notify).' },
        { id: 'ms-digital-ent', name: '$300 Digital Entertainment Credit ($25/mo)', maxVal: 300, desc: '$25/month for Disney+, Hulu, ESPN+, Peacock, NYT, WSJ, or YouTube (enrollment required).' },
        { id: 'ms-lululemon', name: '$300 lululemon Credit ($75/qtr)', maxVal: 300, desc: '$75 per quarter on eligible lululemon purchases (enrollment required).' },
        { id: 'ms-equinox', name: '$300 Equinox Credit', maxVal: 300, desc: 'Up to $300/yr toward Equinox club memberships or Equinox+ digital fitness app.' },
        { id: 'ms-venue-collection', name: '10% off Amex Venue Concessions', maxVal: 250, desc: 'Enjoy dedicated fast lanes at select stadiums and arenas plus 10% back as a statement credit on qualifying concession purchases (up to $250 per calendar year).' },
        { id: 'ms-clear', name: '$219 CLEAR+ Credit', maxVal: 219, desc: 'Covers annual CLEAR Plus expedited airport security membership.' },
        { id: 'ms-airline-fee', name: '$200 Single Airline Fee Credit', maxVal: 200, desc: 'Incidental fees (checked bags, seat selection, lounge passes) on one selected qualifying airline.' },
        { id: 'ms-uber-cash', name: '$200 Uber Cash ($15/mo + $20 Dec)', maxVal: 200, desc: '$15/month ($20 in Dec) for U.S. Uber rides or Uber Eats orders.' },
        { id: 'ms-oura', name: '$200 Oura Ring Credit', maxVal: 200, desc: 'Annual statement credit for Oura Ring hardware purchases at ouraring.com.' },
        { id: 'ms-walmart-plus', name: '$155 Walmart+ Credit ($12.95/mo)', maxVal: 155, desc: '$12.95/mo statement credit covering Walmart+ monthly membership (includes Paramount+).' },
        { id: 'ms-uber-one', name: '$120 Uber One Credit', maxVal: 120, desc: 'Statement credits covering auto-renewing Uber One membership.' },
        { id: 'ms-ge-precheck', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: '$120 credit every 4 years for Global Entry or $85 every 4.5 years for PreCheck (~$30/yr).' },
        { id: 'ms-lounge-access', name: 'Global Lounge Collection (Centurion, Priority Pass Select, Sky Club)', maxVal: 300, isMonetary: false, desc: '1,550+ lounges including Centurion Lounges, Priority Pass, Escape, Plaza Premium, & 10 Delta Sky Club visits/yr when flying Delta.' },
        { id: 'ms-elite-status', name: 'Hilton Gold, Marriott Gold & Leaders Club Sterling', maxVal: 75, isMonetary: false, desc: 'Complimentary Hilton Honors Gold status, Marriott Bonvoy Gold Elite status, and The Leading Hotels of the World Leaders Club Sterling status (enrollment required).' },
        { id: 'ms-elite-car-status', name: 'Hertz President’s Circle, Avis Preferred Plus & National Executive', maxVal: 50, isMonetary: false, desc: 'Complimentary Hertz Gold Plus Rewards President’s Circle, Avis Preferred Plus, and National Emerald Club Executive rental car status (enrollment required).' },
        { id: 'ms-cell', name: 'Cell Phone Protection ($800/claim)', maxVal: 40, isMonetary: false, desc: 'Reimbursement for repair or replacement of a damaged or stolen cell phone up to $800 per claim ($50 deductible, max 2 approved claims per 12-month period) when you pay your monthly wireless bill with the Card.' },
        { id: 'ms-prot', name: '6-Hr Trip Delay & $10K Trip Cancellation', maxVal: 50, isMonetary: false, desc: 'Includes 6-hr Trip Delay ($500/trip) and Trip Cancellation & Interruption ($10K/trip, $20K/yr).' },
        { id: 'ms-purchase-prot', name: 'Return Protection & $10K Purchase Protection', maxVal: 40, isMonetary: false, desc: 'Includes Return Protection ($300/item, $1K/yr) and Purchase Protection ($10K/item, $50K/yr).' }
      ]
    },
    {
      id: 'amex-gold',
      order: 2,
      familyGroup: 'Amex',
      familyLabel: 'Amex Membership Rewards',
      name: 'American Express Gold',
      issuer: 'American Express',
      officialUrl: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/',
      annualFee: 325,
      multipliers: '4x Restaurants • 4x U.S. Supermarkets • 3x Flights • 2x Prepaid Hotels (Amex Travel) • 2x Car Rentals (Amex Travel)',
      offerCurrency: 'MR Points',
      defaultOfferText: '100,000 MR Points',
      offerBadge: 'As High As',
      defaultOfferSpend: '$6,000 in 6 months',
      historicalHighText: 'Now',
      bestOfferTip: 'Tip: Check Incognito referral or Resy co-brand page (up to 100k + 20% back on dining up to $250)',
      estimatedOfferValue: 1200,
      matchKeywords: ['gold', 'american express'],
      excludeKeywords: ['business', 'delta'],
      benefits: [
        { id: 'gold-uber', name: '$120 Uber Cash ($10/mo)', maxVal: 120, desc: '$10/month in Uber Cash for U.S. Uber rides or Uber Eats orders.' },
        { id: 'gold-dining', name: '$120 Dining Credit ($10/mo)', maxVal: 120, desc: '$10/month in statement credits at Grubhub (including Seamless), Buffalo Wild Wings, Five Guys, The Cheesecake Factory, and Wonder (enrollment required).' },
        { id: 'gold-resy', name: '$100 Credit ($50/6 mo)', linkText: 'Resy ↗', linkUrl: 'https://www.nextcard.com/tools/resy-map', maxVal: 100, desc: '$50 semi-annually (Jan–Jun, Jul–Dec) at eligible U.S. Resy restaurants (enrollment required).' },
        { id: 'gold-dunkin', name: '$84 Dunkin’ Credit ($7/mo)', maxVal: 84, desc: '$7/month statement credit at U.S. Dunkin’ locations (enrollment required).' },
        { id: 'gold-thc', name: '$100 Credit', linkText: 'The Hotel Collection ↗', linkUrl: 'https://www.nextcard.com/tools/amex-hotel-map', maxVal: 100, desc: '$100 on-property credit on 2+ consecutive night stays booked through Amex Travel, plus room upgrade at check-in when available.' },
        { id: 'gold-hertz', name: 'Hertz Five Star', maxVal: 30, isMonetary: false, desc: 'Complimentary Hertz Gold Plus Rewards Five Star status (enrollment required).' },
        { id: 'gold-purchase-prot', name: '$10K Purchase Protection', maxVal: 30, isMonetary: false, desc: 'Purchase Protection up to $10,000 per covered occurrence (up to $50,000/yr).' }
      ]
    },
    {
      id: 'delta-reserve',
      order: 4,
      familyGroup: 'Amex',
      familyLabel: 'Delta SkyMiles (Amex)',
      name: 'Delta SkyMiles Reserve',
      issuer: 'American Express',
      officialUrl: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/',
      annualFee: 650,
      multipliers: '3x Delta',
      offerCurrency: 'SkyMiles',
      defaultOfferText: '100,000 SkyMiles',
      defaultOfferSpend: '$6,000 in 6 months',
      historicalHighText: '125,000 ($9k • May 2026)',
      bestOfferTip: 'Tip: Check delta.com dummy booking checkout for miles + $200–$500 statement credit offer',
      estimatedOfferValue: 1100,
      matchKeywords: ['delta', 'reserve'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'dr-companion', name: 'First / Comfort+ / Main Companion Certificate (Yr 2+)', maxVal: 600, isMonetary: false, desc: 'Annual round-trip companion ticket (U.S. 50, Mexico, Caribbean, Central America) each year after renewal; pay government taxes/fees ($22–$250).' },
        { id: 'dr-resy', name: '$240 Credit ($20/mo)', linkText: 'Resy ↗', linkUrl: 'https://www.nextcard.com/tools/resy-map', maxVal: 240, desc: 'Up to $20/month in statement credits at U.S. Resy restaurants (enrollment required), plus unlock access to exclusive reservations and special dining experiences through Global Dining Access by Resy.' },
        { id: 'dr-stays', name: '$200 Delta Stays Credit', maxVal: 200, desc: 'Annual statement credit for prepaid hotels or vacation rentals booked on delta.com/stays.' },
        { id: 'dr-rideshare', name: '$120 Rideshare Credit ($10/mo)', maxVal: 120, desc: 'Up to $10/month in statement credits on U.S. rideshare purchases with Uber, Lyft, Curb, Revel, and Alto (rides only; enrollment required).' },
        { id: 'dr-sky-club', name: '15 Sky Club Visits + 4 Guest Passes', maxVal: 250, isMonetary: false, desc: '15 visits per Medallion Year when flying Delta (unlimited after $75k calendar-year spend) + 4 one-time guest passes each year.' },
        { id: 'dr-centurion', name: 'Centurion & Escape Lounges', maxVal: 120, isMonetary: false, desc: 'Complimentary access to The Centurion Lounge and Escape Lounges when flying on a same-day Delta-marketed or Delta-operated flight booked with your Card.' },
        { id: 'dr-mqd', name: '2,500 MQD + 1 MQD / $10 Spend', maxVal: 200, isMonetary: false, desc: '$2,500 MQDs each Medallion Qualification Year toward status + $1 MQD per $10 in eligible card purchases.' },
        { id: 'dr-bags', name: '1st Bag Free (+ 2nd Domestic • Cardholder + 8 • Delta Metal)', maxVal: 100, isMonetary: false, desc: 'First checked bag free for you and up to 8 companions on Delta-marketed & Delta-operated flights worldwide, plus a second checked bag free (Basic Card Member only) on domestic Delta-operated flights (partner/codeshare flights excluded).' },
        { id: 'dr-takeoff15', name: '15% off Award Flights', maxVal: 100, isMonetary: false, desc: '15% discount anytime you book Award Travel with miles on Delta flights through delta.com and the Fly Delta app.' },
        { id: 'dr-upgrades-boarding', name: 'Upgrade Priority, Complimentary Upgrade List + Zone 5 Boarding', maxVal: 75, isMonetary: false, desc: 'Added to the Complimentary Upgrade list (even without Medallion status), higher upgrade priority within your tier, and Zone 5 Priority Boarding.' },
        { id: 'dr-inflight', name: '20% off In-Flight Purchases', maxVal: 30, isMonetary: false, desc: '20% savings in the form of a statement credit on eligible pre-purchased meals and in-flight food and beverage purchases on Delta flights.' },
        { id: 'dr-hertz', name: 'Hertz President’s Circle', maxVal: 50, isMonetary: false, desc: 'Complimentary Hertz President’s Circle status (enrollment required).' },
        { id: 'dr-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Up to $120 for Global Entry every 4 years or up to $85 for TSA PreCheck every 4.5 years (~$30/yr).' },
        { id: 'dr-cell', name: 'Cell Phone Protection ($800/claim)', maxVal: 40, isMonetary: false, desc: 'Reimbursement for repair or replacement of a damaged or stolen cell phone up to $800 per claim ($50 deductible, max 2 approved claims per 12-month period) when you pay your monthly wireless bill with the Card.' },
        { id: 'dr-prot', name: '6-Hr Trip Delay & $10K Trip Cancellation', maxVal: 40, isMonetary: false, desc: 'Includes 6-hr Trip Delay ($500/trip) and Trip Cancellation & Interruption ($10K/trip, $20K/yr).' },
        { id: 'dr-purchase-prot', name: 'Return Protection & $10K Purchase Protection', maxVal: 30, isMonetary: false, desc: 'Includes Return Protection ($300/item, $1K/yr) and Purchase Protection ($10K/item, $50K/yr).' }
      ]
    },
    {
      id: 'delta-platinum',
      order: 5,
      familyGroup: 'Amex',
      familyLabel: 'Delta SkyMiles (Amex)',
      name: 'Delta SkyMiles Platinum',
      issuer: 'American Express',
      officialUrl: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/',
      annualFee: 350,
      multipliers: '3x Delta & Direct Hotels • 2x Restaurants & U.S. Supermarkets',
      offerCurrency: 'SkyMiles',
      defaultOfferText: '90,000 SkyMiles',
      defaultOfferSpend: '$4,000 in 6 months',
      historicalHighText: '100,000 ($6k • May 2026)',
      bestOfferTip: 'Tip: Up to 90k + $300 statement credit via delta.com dummy booking checkout',
      estimatedOfferValue: 950,
      matchKeywords: ['delta', 'platinum'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'dp-companion', name: 'Main Companion Certificate (Yr 2+)', maxVal: 400, isMonetary: false, desc: 'Annual round-trip Main Cabin companion ticket (U.S. 50, Mexico, Caribbean, Central America) each year after renewal; pay government taxes/fees ($22–$250).' },
        { id: 'dp-stays', name: '$150 Delta Stays Credit', maxVal: 150, desc: 'Up to $150 in statement credits each calendar year on prepaid hotels or vacation rentals booked through Delta Stays on delta.com.' },
        { id: 'dp-resy', name: '$120 Credit ($10/mo)', linkText: 'Resy ↗', linkUrl: 'https://www.nextcard.com/tools/resy-map', maxVal: 120, desc: 'Up to $10/month in statement credits on eligible purchases with U.S. Resy restaurants (enrollment required).' },
        { id: 'dp-rideshare', name: '$120 Rideshare Credit ($10/mo)', maxVal: 120, desc: 'Up to $10/month in statement credits on U.S. rideshare purchases with Uber, Lyft, Curb, Revel, and Alto (rides only; enrollment required).' },
        { id: 'dp-mqd', name: '2,500 MQD + 1 MQD / $20 Spend', maxVal: 150, isMonetary: false, desc: '$2,500 MQDs each Medallion Qualification Year toward status + $1 MQD per $20 in eligible card purchases.' },
        { id: 'dp-bags', name: '1st Bag Free (+ 2nd Domestic • Cardholder + 8 • Delta Metal)', maxVal: 100, isMonetary: false, desc: 'First checked bag free for you and up to 8 companions on Delta-marketed & Delta-operated flights worldwide, plus a second checked bag free (Basic Card Member only) on domestic Delta-operated flights (partner/codeshare flights excluded).' },
        { id: 'dp-takeoff15', name: '15% off Award Flights', maxVal: 100, isMonetary: false, desc: '15% discount anytime you book Award Travel with miles on Delta flights through delta.com and the Fly Delta app.' },
        { id: 'dp-upgrades-boarding', name: 'Complimentary Upgrade List + Zone 5 Boarding', maxVal: 50, isMonetary: false, desc: 'Eligibility for the Complimentary Upgrade list (after Medallion Members) and Zone 5 Priority Boarding.' },
        { id: 'dp-inflight', name: '20% off In-Flight Purchases', maxVal: 30, isMonetary: false, desc: '20% savings in the form of a statement credit on eligible pre-purchased meals and in-flight food and beverages on Delta flights.' },
        { id: 'dp-hertz', name: 'Hertz Five Star', maxVal: 30, isMonetary: false, desc: 'Complimentary Hertz Gold Plus Rewards Five Star status (enrollment required).' },
        { id: 'dp-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Up to $120 for Global Entry every 4 years or up to $85 for TSA PreCheck every 4.5 years (~$30/yr).' },
        { id: 'dp-cell', name: 'Cell Phone Protection ($800/claim)', maxVal: 40, isMonetary: false, desc: 'Reimbursement for repair or replacement of a damaged or stolen cell phone up to $800 per claim ($50 deductible, max 2 approved claims per 12-month period) when you pay your monthly wireless bill with the Card.' }
      ]
    },
    {
      id: 'delta-gold',
      order: 6,
      familyGroup: 'Amex',
      familyLabel: 'Delta SkyMiles (Amex)',
      name: 'Delta SkyMiles Gold',
      issuer: 'American Express',
      officialUrl: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-gold-american-express-card/',
      annualFee: 150,
      multipliers: '2x Delta • 2x Restaurants & U.S. Supermarkets',
      offerCurrency: 'SkyMiles',
      defaultOfferText: '80,000 SkyMiles + $0 Intro Yr',
      defaultOfferSpend: '$3,000 in 6 months',
      historicalHighText: '90,000 ($5k • May 2026)',
      bestOfferTip: 'Tip: Up to 80k + $250 credit via delta.com dummy booking, or 50k + $400 statement credit via DoC link',
      estimatedOfferValue: 800,
      matchKeywords: ['delta', 'gold'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'dg-rideshare', name: '$120 Rideshare Credit ($10/mo • Yr 2+)', maxVal: 120, desc: 'After your first Card renewal, earn up to $10/month in statement credits on U.S. rideshare purchases with Uber, Lyft, Curb, Revel, and Alto (rides only; enrollment required).' },
        { id: 'dg-stays', name: '$100 Delta Stays Credit', maxVal: 100, desc: 'Up to $100 in statement credits each calendar year on prepaid hotels or vacation rentals booked through Delta Stays on delta.com.' },
        { id: 'dg-bags', name: '1st Bag Free (+ 2nd Domestic • Cardholder + 8 • Delta Metal)', maxVal: 100, isMonetary: false, desc: 'First checked bag free for you and up to 8 companions on Delta-marketed & Delta-operated flights worldwide, plus a second checked bag free (Basic Card Member only) on domestic Delta-operated flights (partner/codeshare flights excluded).' },
        { id: 'dg-takeoff15', name: '15% off Award Flights', maxVal: 100, isMonetary: false, desc: '15% discount when using miles to book Award Travel on Delta flights through delta.com and the Fly Delta app.' },
        { id: 'dg-inflight', name: '20% off In-Flight Purchases', maxVal: 30, isMonetary: false, desc: '20% savings as a statement credit on eligible pre-purchased meals and in-flight food and beverages on Delta flights.' },
        { id: 'dg-boarding', name: 'Zone 5 Priority Boarding', maxVal: 25, isMonetary: false, desc: 'Board early in Zone 5 (Main Cabin 1) so you can find room for your carry-on bag and settle in sooner.' }
      ]
    },
    {
      id: 'chase-sapphire-reserve',
      order: 7,
      familyGroup: 'Other',
      familyLabel: 'Chase Ultimate Rewards',
      name: 'Chase Sapphire Reserve',
      issuer: 'Chase',
      officialUrl: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve',
      annualFee: 795,
      multipliers: '8x Chase Travel (incl. The Edit) • 4x Flights & Hotels (Direct) • 3x Dining',
      offerCurrency: 'UR Points',
      defaultOfferText: '100,000 UR Points',
      defaultOfferSpend: '$6,000 in 3 months',
      historicalHighText: '150,000 ($6k • Apr 2026)',
      bestOfferTip: 'Tip: Check Chase app "Just For You" (up to 125k–175k targeted) or local Chase branch (+10k–25k extra pts)',
      estimatedOfferValue: 1500,
      matchKeywords: ['sapphire', 'reserve'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'csr-travel', name: '$300 Travel Credit', maxVal: 300, desc: 'Automatic statement credits on any travel purchase worldwide each account anniversary year.' },
        { id: 'csr-hotel', name: '$500 Hotel Credit ($250/6 mo)', linkText: 'The Edit ↗', linkUrl: 'https://www.nextcard.com/tools/chase-edit-hotel-map', maxVal: 500, desc: 'Up to $250 semi-annually (2-night minimum) on prepaid luxury hotel/resort stays via The Edit by Chase Travel, plus on-property perks ($100 property credit, daily breakfast for 2, room upgrade when available, early check-in/late check-out, and complimentary Wi-Fi).' },
        { id: 'csr-dining', name: '$300 Dining Credit ($150/6 mo)', linkText: 'Exclusive Tables ↗', linkUrl: 'https://www.nextcard.com/tools/csr-dining-credit-map', maxVal: 300, desc: 'Up to $150 semi-annually toward dining purchases at Sapphire Reserve Exclusive Tables restaurants.' },
        { id: 'csr-stubhub', name: '$300 StubHub Credit ($150/6 mo)', maxVal: 300, desc: 'Up to $150 semi-annually toward concert, theater, and live event tickets on StubHub and viagogo.' },
        { id: 'csr-doordash', name: '$420 DoorDash ($15/mo + 2× $10 Non-Restaurant/mo) + DashPass', maxVal: 420, desc: 'Up to $35/mo ($420/yr) in DoorDash promos ($15/mo on any qualifying order including restaurants + two $10/mo promos on non-restaurant grocery/convenience/retail orders) + complimentary DashPass ($120 value through 12/31/29).' },
        { id: 'csr-apple', name: 'Apple TV+ & Apple Music (1 Yr)', maxVal: 324, isMonetary: false, desc: 'One-time 12-month complimentary subscription to Apple TV and Apple Music when activated by June 22, 2027 (not recurring annually; $324 one-time value per Chase official page).' },
        { id: 'csr-lyft', name: '$120 Lyft Credit ($10/mo)', maxVal: 120, desc: 'Up to $10/month in-app Lyft ride credit plus 5x total points on eligible Lyft rides.' },
        { id: 'csr-peloton', name: '$120 Peloton Credit ($10/mo)', maxVal: 120, desc: 'Up to $10/month in statement credits toward Peloton App or All-Access memberships (+ 10x points on eligible Peloton equipment).' },
        { id: 'csr-lounge', name: 'Sapphire Lounges + Priority Pass Select (+ 2 Guests)', maxVal: 300, isMonetary: false, desc: 'Access to Chase Sapphire Lounges by The Club and 1,300+ Priority Pass Select lounges worldwide with up to 2 complimentary guests per visit, plus select Air Canada Maple Leaf Lounges.' },
        { id: 'csr-ihg', name: 'IHG Platinum Elite', maxVal: 75, isMonetary: false, desc: 'Complimentary IHG One Rewards Platinum Elite hotel status.' },
        { id: 'csr-cdw', name: 'Primary CDW ($75K • Worldwide)', maxVal: 50, isMonetary: false, desc: 'Primary auto rental collision damage waiver providing reimbursement up to $75,000 for theft and collision damage worldwide.' },
        { id: 'csr-insurance', name: '6-Hr Trip Delay, $10K Trip Cancellation & $100K Emergency Evac', maxVal: 50, isMonetary: false, desc: '6-hr trip delay ($500/ticket), trip cancellation/interruption ($10k/person, $20k/trip), and emergency evacuation & transportation ($100k).' },
        { id: 'csr-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Up to $120 statement credit every 4 years (~$30/yr annualized).' }
      ]
    },
    {
      id: 'chase-sapphire-preferred',
      order: 8,
      familyGroup: 'Other',
      familyLabel: 'Chase Ultimate Rewards',
      name: 'Chase Sapphire Preferred',
      issuer: 'Chase',
      officialUrl: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
      annualFee: 95,
      multipliers: '5x Chase Travel • 5x Lyft & Peloton • 3x Dining, Online Grocery & Streaming • 2x All Other Travel',
      offerCurrency: 'UR Points',
      defaultOfferText: '75,000 UR Points',
      defaultOfferSpend: '$5,000 in 3 months',
      historicalHighText: '100,000 ($5k • May 2026)',
      bestOfferTip: 'Tip: 125,000 pts targeted in Chase app ("Just For You") / mailer, or 85,000 pts in-branch (+10k on $6k spend)',
      estimatedOfferValue: 1125,
      matchKeywords: ['sapphire', 'preferred'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'csp-hotel', name: '$100 Chase Travel Hotel Credit', maxVal: 100, desc: 'Earn up to $100 in statement credits each account anniversary year for hotel stays purchased through Chase Travel.' },
        { id: 'csp-doordash', name: '$120 DoorDash Non-Restaurant ($10/mo) + DashPass', maxVal: 120, desc: 'Complimentary DashPass membership ($120 value/yr when activated by 12/31/29) plus a $10 promo each month ($120/yr) on grocery, retail, and non-restaurant DoorDash orders.' },
        { id: 'csp-appletv', name: 'Apple TV+ (1 Yr)', maxVal: 180, isMonetary: false, desc: 'One-time 12-month complimentary Apple TV subscription when activated by December 31, 2026 (not recurring annually; $180 one-time value per Chase official page, or $8/mo off Apple One for 12 months).' },
        { id: 'csp-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Receive one statement credit of up to $120 every 4 years as reimbursement for the Global Entry, TSA PreCheck, or NEXUS application fee (~$30/yr).' },
        { id: 'csp-anniv-pts', name: '10% Anniversary Spend Bonus', maxVal: 50, isMonetary: false, desc: 'Each account anniversary, earn bonus points equal to 10% of your total dollar purchases made the previous year (+0.1x on all spend).' },
        { id: 'csp-cdw', name: 'Primary CDW ($60K • Worldwide)', maxVal: 40, isMonetary: false, desc: 'Primary auto rental collision damage waiver covering theft and collision damage up to $60,000 (for vehicles with MSRP ≤ $125,000) worldwide.' },
        { id: 'csp-prot', name: '$10K Trip Cancellation & $100K Emergency Evac', maxVal: 50, isMonetary: false, desc: 'Trip Cancellation/Interruption ($10k/person, $20k/trip) and Emergency Evacuation & Transportation ($100,000).' }
      ]
    },
    {
      id: 'chase-freedom-flex',
      order: 9,
      familyGroup: 'Other',
      familyLabel: 'Chase Ultimate Rewards',
      name: 'Chase Freedom Flex',
      issuer: 'Chase',
      officialUrl: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/flex',
      annualFee: 0,
      multipliers: '5x Quarterly Categories (on $1,500/qtr) • 5x Chase Travel • 3x Dining & Drugstores • 2x Lyft',
      offerCurrency: 'UR Points',
      defaultOfferText: '25,000 UR Points',
      defaultOfferSpend: '$500 in 3 months',
      historicalHighText: 'Now',
      bestOfferTip: 'Tip: Check in-branch for 5% Gas & Grocery Year-1 add-on promo (up to $12k spend)',
      estimatedOfferValue: 375,
      matchKeywords: ['freedom', 'flex'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'cff-doordash-qtr', name: '$40 DoorDash Non-Restaurant ($10/qtr)', maxVal: 40, desc: 'Receive a $10 off discount each calendar quarter at checkout on one qualifying non-restaurant DoorDash order while enrolled in DashPass with Freedom Flex (+ 6 months complimentary DashPass, then auto-renews monthly; does NOT stack on the same DoorDash account with an existing Sapphire DashPass).' },
        { id: 'cff-ur-pooling', name: 'UR Points Pooling with Sapphire', maxVal: 100, isMonetary: false, desc: 'Cash back is earned as Ultimate Rewards points (1% = 1x pt) and can be combined 1:1 with Chase Sapphire Reserve or Preferred for airline/hotel partner transfers.' },
        { id: 'cff-no-ftf-prot', name: 'No Foreign Transaction Fees', maxVal: 40, isMonetary: false, desc: 'No foreign transaction fees on international purchases.' }
      ]
    },
    {
      id: 'united-club',
      order: 9.5,
      familyGroup: 'Other',
      familyLabel: 'United MileagePlus (Chase)',
      name: 'United Club',
      issuer: 'Chase',
      officialUrl: 'https://creditcards.chase.com/travel-credit-cards/united/club-infinite',
      annualFee: 695,
      multipliers: '8x United Flights • 5x Renowned Hotels & Resorts • 4x Other United Purchases • 2x All Other Travel & Dining',
      offerCurrency: 'MileagePlus Miles',
      defaultOfferText: '90,000 MileagePlus Miles',
      defaultOfferSpend: '$5,000 in 3 months',
      historicalHighText: '120,000 ($6k • Mar 2022)',
      bestOfferTip: 'Tip: +10,000 miles for adding an AU in first 3 mos (100k total) + 5,000 miles via in-flight code',
      estimatedOfferValue: 1300,
      matchKeywords: ['united', 'club'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'uc-membership', name: 'United Club Membership', maxVal: 650, isMonetary: false, desc: 'Full United Club membership for the primary Cardmember and eligible traveling companions at all United Club locations and participating Star Alliance lounges.' },
        { id: 'uc-hotels', name: '$200 Credit', linkText: 'Renowned Hotels ↗', linkUrl: 'https://www.nextcard.com/tools/united-renowned-hotels', maxVal: 200, desc: 'Receive up to $200 back in statement credits each anniversary year on hotel accommodations prepaid directly through Renowned Hotels and Resorts for United Cardmembers, plus enjoy on-property perks ($100 property credit, daily breakfast for two, room upgrade when available, early check-in, late check-out, and complimentary Wi-Fi).' },
        { id: 'uc-instacart', name: '$240 Instacart Credit (2 × $10/mo) + Instacart+', maxVal: 240, desc: 'Receive two $10 Instacart credits monthly (up to $240 total each calendar year) on orders made directly through Instacart, plus a complimentary Instacart+ membership with $0 delivery fees on eligible orders through 12/31/27.' },
        { id: 'uc-rideshare', name: '$150 Rideshare Credit ($12/mo + $18 Dec)', maxVal: 150, desc: 'Enroll to receive up to $150 back per calendar year on rideshare purchases: up to $12/month Jan–Nov and up to $18 in December.' },
        { id: 'uc-jsx', name: '$200 JSX Credit', maxVal: 200, desc: 'Get up to $200 back as a statement credit each anniversary year when you book flights directly with JSX using your United Club Card.' },
        { id: 'uc-avis', name: '$100 Avis / Budget Credit ($50 × 2)', maxVal: 100, desc: 'Earn up to $100 each anniversary year ($50 on 1st and 2nd rental) in United TravelBank cash for Avis or Budget car rentals booked through cars.united.com.' },
        { id: 'uc-bags', name: '1st & 2nd Bags Free (Cardholder + 1 • United Metal)', maxVal: 160, isMonetary: false, desc: 'Primary Cardmember and one traveling companion on the same reservation each get their 1st and 2nd standard checked bags free on United- and United Express-operated flights (partner-operated flights excluded; must purchase ticket with the Card).' },
        { id: 'uc-pqp', name: '1,500 PQP (Yr 2+) + 1 PQP / $15 Spend', maxVal: 150, isMonetary: false, desc: 'Receive 1,500 Card Bonus PQP each qualification year (starting the calendar year after account opening) + earn 1 PQP per $15 spent on purchases (up to 28,000 PQP/yr) toward Premier status.' },
        { id: 'uc-award-upgrades', name: 'Award Flight Upgrades (w/ Premier Status)', maxVal: 75, isMonetary: false, desc: 'Unlocks normal space-available First/Business Class elite upgrades (Complimentary Premier Upgrades) on United-operated award flights booked with miles for Cardmembers who hold MileagePlus Premier status (plus 1 companion).' },
        { id: 'uc-miles-disc', name: '10% off Award Flights', maxVal: 50, isMonetary: false, desc: 'Save 10% or more when booking United Economy Saver Award flights with miles on united.com or the United app.' },
        { id: 'uc-premier-access', name: 'Premier Access & 25% off In-Flight Purchases', maxVal: 50, isMonetary: false, desc: 'Premier Access priority check-in, security, boarding, and baggage handling on United flights, plus 25% back on United in-flight food, beverages, and Wi-Fi.' },
        { id: 'uc-ihg-status', name: 'IHG Platinum Elite', maxVal: 50, isMonetary: false, desc: 'Complimentary IHG One Rewards Platinum Elite status for the primary Cardmember (plus $75/calendar year in IHG Hotels & Resorts statement credits starting 2026).' },
        { id: 'uc-avis-status', name: 'Avis President’s Club', maxVal: 40, isMonetary: false, desc: 'Complimentary invitation-only Avis President’s Club status with guaranteed car availability, double-class upgrades when available, and expedited service.' },
        { id: 'uc-cdw', name: 'Primary CDW ($60K • Worldwide)', maxVal: 50, isMonetary: false, desc: 'Primary auto rental collision damage waiver covering theft and collision damage up to $60,000 (for vehicles with MSRP ≤ $125,000) worldwide.' },
        { id: 'uc-prot', name: '$10K Trip Cancellation', maxVal: 50, isMonetary: false, desc: 'Trip Cancellation/Interruption up to $10,000 per person and $20,000 per trip.' },
        { id: 'uc-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Receive a statement credit of up to $120 every 4 years (~$30/yr annualized).' }
      ]
    },
    {
      id: 'united-quest',
      order: 10,
      familyGroup: 'Other',
      familyLabel: 'United MileagePlus (Chase)',
      name: 'United Quest',
      issuer: 'Chase',
      officialUrl: 'https://creditcards.chase.com/travel-credit-cards/united/united-quest',
      annualFee: 350,
      multipliers: '7x United Flights • 5x Renowned Hotels • 4x Other United Purchases • 2x Other Travel, Dining & Streaming',
      offerCurrency: 'MileagePlus Miles',
      defaultOfferText: '80,000 MileagePlus Miles + 500 PQP',
      defaultOfferSpend: '$4,000 in 3 months',
      historicalHighText: '100,000 ($4k • Jun 2025)',
      bestOfferTip: 'Tip: +10,000 miles for adding an AU in first 3 mos (90k total) + 5,000 miles via in-flight code',
      estimatedOfferValue: 1150,
      matchKeywords: ['united', 'quest'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'uq-travelbank', name: '$200 United TravelBank Credit', maxVal: 200, desc: 'Receive $200 in United TravelBank cash after account opening and annually on your account anniversary toward future United or United Express flights.' },
        { id: 'uq-award-disc', name: '10K Mile Award Flight Discount (Yr 2+)', maxVal: 130, isMonetary: false, desc: 'Starting with your first anniversary, get a 10,000-mile discount each year to use toward an eligible United or United Express award flight.' },
        { id: 'uq-hotels', name: '$150 Credit', linkText: 'Renowned Hotels ↗', linkUrl: 'https://www.nextcard.com/tools/united-renowned-hotels', maxVal: 150, desc: 'Receive up to $150 back in statement credits each anniversary year on hotel accommodations prepaid directly through Renowned Hotels and Resorts for United Cardmembers, plus enjoy on-property perks ($100 property credit, daily breakfast for two, room upgrade when available, early check-in, late check-out, and complimentary Wi-Fi).' },
        { id: 'uq-instacart', name: '$180 Instacart Credit ($10/mo + $5/mo)', maxVal: 180, desc: 'Receive one $10 Instacart credit and one $5 Instacart credit monthly, up to $180 total each calendar year, plus a 3-month complimentary Instacart+ membership (then 50% off the annual membership rate through 12/31/27).' },
        { id: 'uq-rideshare', name: '$100 Rideshare Credit ($8/mo + $12 Dec)', maxVal: 100, desc: 'Enroll to receive up to $100 back per calendar year on rideshare purchases: up to $8/month Jan–Nov and up to $12 in December.' },
        { id: 'uq-avis', name: '$80 Avis / Budget Credit ($40 × 2)', maxVal: 80, desc: 'Earn up to $80 each anniversary year ($40 on 1st and 2nd rental) in United TravelBank cash for your 1st and 2nd Avis or Budget car rental booked through cars.united.com.' },
        { id: 'uq-jsx', name: '$150 JSX Credit', maxVal: 150, desc: 'Get up to $150 back as a statement credit each anniversary year when you book flights directly with JSX using your United Quest Card.' },
        { id: 'uq-bags', name: '1st & 2nd Bags Free (Cardholder + 1 • United Metal)', maxVal: 160, isMonetary: false, desc: 'Primary Cardmember and one traveling companion on the same reservation each get their 1st and 2nd standard checked bags free on United- and United Express-operated flights (partner-operated flights excluded; must purchase ticket with the Card).' },
        { id: 'uq-pqp', name: '1,000 PQP (Yr 2+) + 1 PQP / $20 Spend', maxVal: 100, isMonetary: false, desc: 'Receive 1,000 Card Bonus PQP each qualification year (starting the calendar year after account opening) + earn 1 PQP per $20 spent on purchases (up to 18,000 PQP/yr) toward Premier status.' },
        { id: 'uq-award-upgrades', name: 'Award Flight Upgrades (w/ Premier Status)', maxVal: 50, isMonetary: false, desc: 'Unlocks normal space-available First/Business Class elite upgrades (Complimentary Premier Upgrades) on United-operated award flights booked with miles for Cardmembers who hold MileagePlus Premier status (plus 1 companion).' },
        { id: 'uq-miles-disc', name: '10% off Award Flights', maxVal: 50, isMonetary: false, desc: 'Save 10% or more when booking United Economy Saver Award flights with miles on united.com or the United app.' },
        { id: 'uq-boarding-inflight', name: 'Group 2 Boarding & 25% off In-Flight Purchases', maxVal: 40, isMonetary: false, desc: 'Group 2 priority boarding before general boarding, plus 25% back as a statement credit on United in-flight food, beverages, Wi-Fi, and Club premium drinks.' },
        { id: 'uq-cdw', name: 'Primary CDW ($60K • Worldwide)', maxVal: 40, isMonetary: false, desc: 'Primary auto rental collision damage waiver covering theft and collision damage up to $60,000 (for vehicles with MSRP ≤ $125,000) worldwide.' },
        { id: 'uq-prot', name: '$10K Trip Cancellation', maxVal: 40, isMonetary: false, desc: 'Trip Cancellation/Interruption up to $10,000 per person and $20,000 per trip.' },
        { id: 'uq-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Receive a statement credit of up to $120 every 4 years (~$30/yr annualized).' }
      ]
    },
    {
      id: 'united-explorer',
      order: 10.5,
      familyGroup: 'Other',
      familyLabel: 'United MileagePlus (Chase)',
      name: 'United Explorer',
      issuer: 'Chase',
      officialUrl: 'https://creditcards.chase.com/travel-credit-cards/united/united-explorer',
      annualFee: 150,
      multipliers: '6x United Flights • 4x United Hotels • 2x Other United Purchases • 2x Dining • 2x Hotels (Direct)',
      offerCurrency: 'MileagePlus Miles',
      defaultOfferText: '70,000 MileagePlus Miles + $0 Intro Yr',
      defaultOfferSpend: '$3,000 in 3 months',
      historicalHighText: '75,000 ($3k • Mar 2025)',
      bestOfferTip: 'Tip: 75k–80k via in-flight attendant code (+5k) + 10,000 miles for adding an AU (up to 90k total)',
      estimatedOfferValue: 900,
      matchKeywords: ['united', 'explorer'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'ue-club-passes', name: '2 United Club Passes', maxVal: 100, isMonetary: false, desc: 'Receive 2 United Club one-time passes each year for account opening and on each account anniversary (primary Cardmember or authorized user must be traveling).' },
        { id: 'ue-hotels', name: '$100 United Hotels Credit ($50 × 2)', maxVal: 100, desc: 'Receive a $50 statement credit on your 1st and 2nd prepaid hotel stays booked directly through United Hotels each anniversary year (up to $100/yr).' },
        { id: 'ue-instacart', name: '$120 Instacart Credit ($10/mo)', maxVal: 120, desc: 'Receive a $10 Instacart credit monthly (up to $120 total each calendar year) for purchases made directly through Instacart, plus a 3-month complimentary Instacart+ trial (then 25% off the annual Instacart+ membership rate through 12/31/27).' },
        { id: 'ue-rideshare', name: '$60 Rideshare Credit ($5/mo)', maxVal: 60, desc: 'Enroll to receive up to $5 back monthly in statement credits on rideshare purchases (up to $60 per calendar year).' },
        { id: 'ue-jsx', name: '$100 JSX Credit', maxVal: 100, desc: 'Get up to $100 back as a statement credit each anniversary year when you book flights directly with JSX using your United Explorer Card.' },
        { id: 'ue-avis', name: '$50 Avis / Budget Credit ($25 × 2)', maxVal: 50, desc: 'Earn $25 in United TravelBank cash on your 1st and 2nd Avis or Budget car rentals booked directly through cars.united.com each anniversary year (up to $50/yr).' },
        { id: 'ue-bag', name: '1st Bag Free (Cardholder + 1 • United Metal)', maxVal: 100, isMonetary: false, desc: 'Primary Cardmember and one traveling companion on the same reservation each get their first standard checked bag free on United- and United Express-operated flights (partner-operated flights excluded; must purchase ticket with the Card).' },
        { id: 'ue-pqp', name: '1 PQP / $20 Spend (Up to 1K PQP/yr)', maxVal: 50, isMonetary: false, desc: 'Earn 1 Premier qualifying point (PQP) for every $20 you spend on purchases with your Explorer Card, up to 1,000 PQP each calendar year toward Premier status.' },
        { id: 'ue-award-upgrades', name: 'Award Flight Upgrades (w/ Premier Status)', maxVal: 40, isMonetary: false, desc: 'Unlocks normal space-available First/Business Class elite upgrades (Complimentary Premier Upgrades) on United-operated award flights booked with miles for Cardmembers who hold MileagePlus Premier status (plus 1 companion).' },
        { id: 'ue-miles-disc', name: '10% off Award Flights', maxVal: 40, isMonetary: false, desc: 'Save 10% or more on United Economy Saver Award flights booked with miles on united.com or the United app.' },
        { id: 'ue-boarding-inflight', name: 'Group 2 Boarding & 25% off In-Flight Purchases', maxVal: 40, isMonetary: false, desc: 'Group 2 priority boarding before general boarding, plus 25% back on food, beverages, and Wi-Fi on United-operated flights and Club premium drinks.' },
        { id: 'ue-cdw', name: 'Primary CDW ($60K • Worldwide)', maxVal: 40, isMonetary: false, desc: 'Primary auto rental collision damage waiver covering theft and collision damage up to $60,000 (for vehicles with MSRP ≤ $125,000) worldwide.' },
        { id: 'ue-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Receive a statement credit of up to $120 every 4 years (~$30/yr annualized).' }
      ]
    },
    {
      id: 'citi-strata-elite',
      order: 12,
      familyGroup: 'Other',
      familyLabel: 'Citi ThankYou Rewards',
      name: 'Citi Strata Elite',
      issuer: 'Citi',
      officialUrl: 'https://www.citi.com/credit-cards/citi-strata-elite-credit-card',
      annualFee: 595,
      multipliers: '12x Hotels/Cars (Citi Travel) • 6x Air (Citi Travel) • 6x Dining (Fri/Sat 6pm–6am ET) • 3x Other Dining • 1.5x All',
      offerCurrency: 'ThankYou Points',
      defaultOfferText: '75,000 ThankYou Points',
      defaultOfferSpend: '$4,000 in 3 months',
      historicalHighText: '100,000 ($6k • Oct 2025)',
      bestOfferTip: 'Tip: Check local Citibank branch or Citigold portal for elevated 100k offer',
      estimatedOfferValue: 1350,
      matchKeywords: ['strata', 'elite'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'cse-hotel', name: '$300 Citi Travel Hotel Credit', maxVal: 300, desc: 'Up to $300 off a prepaid hotel stay of 2+ nights booked through Citi Travel each calendar year.' },
        { id: 'cse-splurge', name: '$200 American Airlines / Best Buy Credit', maxVal: 200, desc: 'Up to $200/calendar year across your choice of American Airlines, Best Buy, Live Nation, 1stDibs, or Future Personal Training.' },
        { id: 'cse-blacklane', name: '$200 Blacklane Credit ($100/6 mo)', maxVal: 200, desc: 'Up to $100 Jan–Jun and up to $100 Jul–Dec on Blacklane global chauffeur bookings.' },
        { id: 'cse-citigold', name: '$145 Citigold Credit ($595 Yr 1 w/ CPC)', maxVal: 145, desc: '$145 annual account fee credit for Citigold clients (or $595 in Year 1 and $145/yr thereafter for Citigold Private Client).' },
        { id: 'cse-lounge', name: 'Priority Pass Select + 4 Admirals Club Passes', maxVal: 200, isMonetary: false, desc: 'Complimentary Priority Pass Select membership (with guests) plus 4 American Airlines Admirals Club passes per calendar year.' },
        { id: 'cse-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Up to $120 statement credit every 4 years (~$30/yr annualized).' }
      ]
    },
    {
      id: 'citi-strata-premier',
      order: 13,
      familyGroup: 'Other',
      familyLabel: 'Citi ThankYou Rewards',
      name: 'Citi Strata Premier',
      issuer: 'Citi',
      officialUrl: 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card',
      annualFee: 95,
      multipliers: '10x Hotels/Cars (Citi Travel) • 3x Air Travel & Other Hotels • 3x Restaurants & Supermarkets • 3x Gas & EV',
      offerCurrency: 'ThankYou Points',
      defaultOfferText: '60,000 ThankYou Points',
      defaultOfferSpend: '$4,000 in 3 months',
      historicalHighText: '80,000 ($4k • Aug 2022)',
      bestOfferTip: 'Tip: Stack via Rakuten for +$150 bonus (15k MR/Bilt pts) on top of 60k, or check mailers for 75k–80k',
      estimatedOfferValue: 950,
      matchKeywords: ['strata', 'premier'],
      excludeKeywords: ['business', 'elite'],
      benefits: [
        { id: 'csprem-hotel', name: '$100 Citi Travel Hotel Credit ($500+ Stay)', maxVal: 100, desc: '$100 off a single hotel stay of $500 or more (excluding taxes and fees) once per calendar year via Citi Travel.' }
      ]
    },
    {
      id: 'citi-custom-cash',
      order: 14,
      familyGroup: 'Other',
      familyLabel: 'Citi ThankYou Rewards',
      name: 'Citi Custom Cash',
      issuer: 'Citi',
      officialUrl: 'https://www.citi.com/credit-cards/citi-custom-cash-credit-card',
      annualFee: 0,
      multipliers: '5x Top Spend Category (on $500/mo) • 5x Hotels/Cars (Citi Travel, 9x if Top)',
      offerCurrency: 'ThankYou Points',
      defaultOfferText: 'Closed to New Applicants',
      defaultOfferSpend: 'N/A',
      historicalHighText: '30,000 ($1k • Nov 2021)',
      bestOfferTip: 'Tip: Acquire via Product Change from AA Platinum Select or Citi Strata after Year 1',
      estimatedOfferValue: 0,
      matchKeywords: ['custom', 'cash'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'ccc-topcat', name: '5x Top Category (Up to $300/yr)', maxVal: 300, isMonetary: false, desc: 'Automatically earn 5x ThankYou Points on your #1 eligible spend category each billing cycle up to $500 ($25/mo, $300/yr):\n• Restaurants: Dining, cafes, bars & fast food\n• Grocery Stores: Excl. superstores (Walmart/Target) & warehouse\n• Gas Stations: Excl. warehouse, discount & convenience stores\n• Select Travel: Airlines, hotels, cruises & travel agencies/OTAs\n• Select Transit: Car rentals, rideshare/taxis, rail/subways, buses, ferries, tolls, parking & EV charging\n• Select Streaming: Cable/satellite & major streaming subs\n• Drugstores: Standalone pharmacies\n• Home Improvement: Hardware, lumber, paint & garden stores\n• Fitness Clubs: Gyms & health clubs\n• Live Entertainment: Concerts, sports, theater & theme parks' },
        { id: 'ccc-pooling', name: 'ThankYou Points Pooling with Strata', maxVal: 75, isMonetary: false, desc: 'Combine ThankYou Points earned on Custom Cash with a Citi Strata Premier or Strata Elite account to unlock 1:1 transfers to AA, Virgin, JetBlue, and hotel partners.' }
      ]
    },
    {
      id: 'citi-strata',
      order: 14.3,
      familyGroup: 'Other',
      familyLabel: 'Citi ThankYou Rewards',
      name: 'Citi Strata',
      issuer: 'Citi',
      officialUrl: 'https://www.citi.com/credit-cards/citi-strata-credit-card',
      annualFee: 0,
      multipliers: '5x Hotels/Cars (Citi Travel) • 3x Supermarkets & Transit • 3x Gas & EV • 3x Category (Fitness, Streaming, Live Ent., Salon, or Pet) • 2x Restaurants',
      offerCurrency: 'ThankYou Points',
      defaultOfferText: '20,000 ThankYou Points',
      defaultOfferSpend: '$1,000 in 3 months',
      historicalHighText: '30,000 ($1k • Aug 2025)',
      bestOfferTip: 'Tip: Often better acquired via Product Change from a higher-tier Citi card after Year 1',
      estimatedOfferValue: 350,
      matchKeywords: ['citi', 'strata'],
      excludeKeywords: ['business', 'premier', 'elite'],
      benefits: [
        { id: 'cs-pooling', name: 'ThankYou Points Pooling with Strata', maxVal: 75, isMonetary: false, desc: 'Combine ThankYou Points earned on the no-annual-fee Citi Strata Card with a Strata Premier or Strata Elite account to unlock 1:1 airline & hotel partner transfers.' }
      ]
    },
    {
      id: 'citi-costco-anywhere',
      order: 14.6,
      familyGroup: 'Other',
      familyLabel: 'Citi Cash Back (Costco)',
      name: 'Costco Anywhere',
      issuer: 'Citi',
      officialUrl: 'https://www.citi.com/credit-cards/citi-costco-anywhere-visa-credit-card',
      annualFee: 0,
      multipliers: '5x Costco Gas • 4x Other Eligible Gas & EV Charging • 3x Restaurants & Eligible Travel • 2x Costco & Costco.com',
      offerCurrency: 'Cash Back',
      defaultOfferText: 'No Sign-Up Bonus',
      defaultOfferSpend: 'N/A',
      historicalHighText: 'None',
      bestOfferTip: 'Tip: Check in-warehouse Costco membership desk for occasional Shop Card / swag promos',
      estimatedOfferValue: 0,
      matchKeywords: ['costco', 'anywhere'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'costco-noftf', name: 'No Foreign Transaction Fees', maxVal: 40, isMonetary: false, desc: 'No foreign transaction fees on international purchases.' }
      ]
    },
    {
      id: 'citi-aa-executive',
      order: 14.8,
      familyGroup: 'Other',
      familyLabel: 'AAdvantage (Citi)',
      name: 'AAdvantage Executive',
      issuer: 'Citi',
      officialUrl: 'https://www.citi.com/credit-cards/citi-aadvantage-executive-credit-card',
      annualFee: 695,
      multipliers: '12x AAdvantage Hotels & Cars • 4x American Airlines Purchases',
      offerCurrency: 'AAdvantage Miles',
      defaultOfferText: '125,000 AAdvantage Miles',
      defaultOfferSpend: '$15,000 in 5 months',
      historicalHighText: 'Now',
      bestOfferTip: 'Tip: Check aa.com special landing page or Admirals Club lounge QR code',
      estimatedOfferValue: 1500,
      matchKeywords: ['aadvantage', 'executive'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'aaexec-club', name: 'Admirals Club Membership', maxVal: 650, isMonetary: false, desc: 'Full Admirals Club membership for the primary cardmember and immediate family or up to 2 guests traveling with you.' },
        { id: 'aaexec-vacations', name: '$500 AA Vacations Credit ($250/6 mo)', maxVal: 500, desc: 'Earn up to $500 every calendar year ($250 Jan–Jun and $250 Jul–Dec) in statement credits on eligible American Airlines Vacations travel packages or experiences (no minimum spend).' },
        { id: 'aaexec-lyft', name: '$180 Lyft Credit ($15/mo after 3 Rides)', maxVal: 180, desc: 'After taking 3 eligible rides in a calendar month, earn a $15 Lyft credit for future rides (up to $180/year).' },
        { id: 'aaexec-avis', name: '$120 Avis / Budget Credit', maxVal: 120, desc: 'Earn up to $120 in statement credits every calendar year on eligible prepaid Avis or Budget car rentals.' },
        { id: 'aaexec-grubhub', name: '$120 Grubhub Credit ($10/mo)', maxVal: 120, desc: 'Earn up to $10 in statement credits per monthly billing statement on eligible Grubhub purchases (up to $120/year).' },
        { id: 'aaexec-inflight-club-credit', name: '$100 In-Flight & Admirals Club Credit', maxVal: 100, desc: 'Earn up to $100 back in statement credits each calendar year on eligible American Airlines inflight food, beverage, and Wi-Fi purchases and Admirals Club food & beverage purchases.' },
        { id: 'aaexec-omni', name: 'Omni Hotels & Resorts Champion Elite', maxVal: 60, isMonetary: false, desc: 'Primary cardmembers are eligible to enroll in Omni Select Guest Champion Status (early check-in, late check-out, and room upgrades).' },
        { id: 'aaexec-bags-priority', name: '1st Bag Free (Cardholder + 8 • Domestic AA Metal)', maxVal: 100, isMonetary: false, desc: 'First checked bag free for you and up to 8 companions on the same reservation when all flights on the itinerary are domestic and marketed/operated by American Airlines or American Eagle (international and codeshare flights excluded; just attach your AAdvantage number—paying with the card is not required).' },
        { id: 'aaexec-priority', name: 'Priority Check-In, Screening & Group 4 Boarding', maxVal: 50, isMonetary: false, desc: 'Priority check-in, airport security screening (where available), and Group 4 priority boarding on American Airlines flights for you and up to 8 companions.' },
        { id: 'aaexec-inflight', name: '25% off In-Flight Food & Beverage', maxVal: 30, isMonetary: false, desc: 'Receive a 25% savings as a statement credit on inflight food and beverage purchases on American Airlines flights.' },
        { id: 'aaexec-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Up to $120 statement credit every 4 years (~$30/yr annualized).' },
        { id: 'aaexec-prot', name: '6-Hr Trip Delay', maxVal: 40, isMonetary: false, desc: 'Trip Delay Protection covering delays of 6+ hours up to $500 per trip.' }
      ]
    },
    {
      id: 'citi-aa-globe',
      order: 14.9,
      familyGroup: 'Other',
      familyLabel: 'AAdvantage (Citi)',
      name: 'AAdvantage Globe',
      issuer: 'Citi',
      officialUrl: 'https://www.citi.com/credit-cards/citi-aadvantage-globe-mastercard',
      annualFee: 350,
      multipliers: '6x AAdvantage Hotels • 3x American Airlines Purchases • 2x Restaurants & Transit',
      offerCurrency: 'AAdvantage Miles',
      defaultOfferText: '90,000 AAdvantage Miles',
      offerBadge: 'via USCCG',
      defaultOfferSpend: '$5,000 in 4 months',
      historicalHighText: 'Now',
      bestOfferTip: 'Tip: 90,000 miles via dedicated Citi/AA link on USCCG & DoC (vs. 60k on standard Citi page)',
      estimatedOfferValue: 950,
      matchKeywords: ['aadvantage', 'globe'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'aaglobe-passes', name: '4 Admirals Club Passes', maxVal: 200, isMonetary: false, desc: 'Receive 4 digital 24-hour Admirals Club Globe Passes each calendar year.' },
        { id: 'aaglobe-companion', name: '$99 Domestic Main Companion Certificate (Yr 2+)', maxVal: 250, isMonetary: false, desc: 'Annual round-trip domestic Main Cabin companion ticket upon renewal for $99 plus taxes and fees (no minimum spend requirement).' },
        { id: 'aaglobe-turo', name: '$240 Turo Credit ($30 × 8)', maxVal: 240, desc: 'Earn $30 in statement credits per completed eligible Turo trip, up to $240 total per calendar year (up to 8 trips/yr).' },
        { id: 'aaglobe-inflight-credit', name: '$100 In-Flight Credit', maxVal: 100, desc: 'Earn up to $100 back in statement credits each calendar year on domestic American Airlines inflight purchases (Wi-Fi, food, and beverages).' },
        { id: 'aaglobe-splurge', name: '$100 AAdvantage Hotels Credit', maxVal: 100, desc: 'Up to $100 in statement credits each calendar year across your choice of AAdvantage Hotels, 1stDibs, Future Personal Training, or Live Nation.' },
        { id: 'aaglobe-flightstreak', name: '15K Loyalty Point Bonus (5K / 4 AA Flights)', maxVal: 150, isMonetary: false, desc: 'Earn 5,000 bonus Loyalty Points for every 4 qualifying American Airlines flights during the status qualification year (up to 15,000 bonus LP/yr).' },
        { id: 'aaglobe-bags-boarding', name: '1st Bag Free (Cardholder + 8 • Domestic AA Metal)', maxVal: 100, isMonetary: false, desc: 'First checked bag free for you and up to 8 companions on the same reservation when all flights on the itinerary are domestic and marketed/operated by American Airlines or American Eagle (international and codeshare flights excluded; just attach your AAdvantage number—paying with the card is not required).' },
        { id: 'aaglobe-boarding', name: 'Group 5 Preferred Boarding', maxVal: 40, isMonetary: false, desc: 'Group 5 preferred boarding on American Airlines flights for you and up to 8 companions traveling on the same reservation.' },
        { id: 'aaglobe-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Up to $120 statement credit every 4 years (~$30/yr annualized).' }
      ]
    },
    {
      id: 'citi-aa-platinum-select',
      order: 15,
      familyGroup: 'Other',
      familyLabel: 'AAdvantage (Citi)',
      name: 'AAdvantage Platinum Select',
      issuer: 'Citi',
      officialUrl: 'https://www.citi.com/credit-cards/citi-aadvantage-platinum-select-world-elite-mastercard',
      annualFee: 150,
      multipliers: '3x AAdvantage Hotels & Cars • 2x American Airlines Purchases • 2x Restaurants, Gas/EV, Transit & Streaming',
      offerCurrency: 'AAdvantage Miles',
      defaultOfferText: '80,000 AAdvantage Miles + $0 Intro Yr',
      offerBadge: 'In-Flight Link',
      defaultOfferSpend: '$3,500 in 4 months',
      historicalHighText: 'Now',
      bestOfferTip: 'Tip: 80,000 miles via public in-flight / airport link on DoC & USCCG (no flight required)',
      estimatedOfferValue: 880,
      matchKeywords: ['aadvantage', 'platinum', 'select'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'aa-turo', name: '$180 Turo Credit ($30 × 6)', maxVal: 180, desc: 'Earn $30 in statement credits per completed Turo trip (up to $180 per calendar year / 6 trips) when you link your card at turo.com/aadvantageplatinum and pay with your card.' },
        { id: 'aa-inflight', name: '$100 In-Flight Credit', maxVal: 100, desc: 'Earn up to $100 back in statement credits each calendar year on eligible American Airlines inflight purchases (Wi-Fi, food, and beverages; effective Jan 24, 2027 for existing cardmembers, replacing the 25% inflight discount).' },
        { id: 'aa-walmart', name: '$98 Walmart+ Credit', maxVal: 98, desc: 'Up to $98 statement credit each calendar year when you purchase an annual Walmart+ membership (effective Jan 24, 2027 for existing cardmembers).' },
        { id: 'aa-bag', name: '1st Bag Free (Cardholder + 4 • Domestic AA Metal)', maxVal: 100, isMonetary: false, desc: 'First checked bag free for you and up to 4 companions on the same reservation when all flights on the itinerary are domestic and marketed/operated by American Airlines or American Eagle (international and codeshare flights excluded; just attach your AAdvantage number—paying with the card is not required).' },
        { id: 'aa-boarding', name: 'Group 5 Preferred Boarding', maxVal: 40, isMonetary: false, desc: 'Enjoy preferred boarding (Group 5) on American Airlines flights for you and up to 4 companions on the same reservation.' },
        { id: 'aa-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Up to $120 statement credit every 4 years for Global Entry or TSA PreCheck application fees (~$30/yr annualized; effective Jan 24, 2027 for existing cardmembers).' }
      ]
    },
    {
      id: 'capital-one-venture-x',
      order: 16,
      familyGroup: 'Other',
      familyLabel: 'Capital One Miles',
      name: 'Capital One Venture X',
      issuer: 'Capital One',
      officialUrl: 'https://www.capitalone.com/credit-cards/venture-x/',
      annualFee: 395,
      multipliers: '10x Hotels & Rental Cars (C1 Travel) • 5x Flights & Vacation Rentals (C1 Travel) • 5x Capital One Entertainment • 2x All',
      offerCurrency: 'Capital One Miles',
      defaultOfferText: '75,000 Capital One Miles',
      defaultOfferSpend: '$4,000 in 3 months',
      historicalHighText: '100,000 ($10k • Oct 2025)',
      bestOfferTip: 'Tip: Use Venture X dedicated pre-approval tool first; check referral links for 90k promos',
      estimatedOfferValue: 1125,
      matchKeywords: ['venture x', 'capital one'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'vx-travel', name: '$300 Capital One Travel Credit', maxVal: 300, desc: 'Receive $300 annually in credits toward flights, hotels, vacation rentals, or rental cars booked through Capital One Travel.' },
        { id: 'vx-anniv', name: '10K Mile Anniversary Bonus', maxVal: 100, isMonetary: false, desc: 'Get 10,000 bonus miles (equal to $100 toward travel, or more via 15+ transfer partners) every year starting on your first account anniversary.' },
        { id: 'vx-lounges', name: 'Capital One Lounges + Priority Pass Select', maxVal: 250, isMonetary: false, desc: 'Enjoy access to Capital One Lounge and Landing locations plus 1,300+ participating Priority Pass lounges worldwide.' },
        { id: 'vx-premier', name: '$100 Premier Collection Credit', maxVal: 100, desc: 'Receive a $100 experience credit, daily breakfast for two, complimentary Wi-Fi, and space-available room upgrades, early check-in, and late checkout on every Premier Collection luxury hotel, resort, or vacation rental booking via Capital One Travel.' },
        { id: 'vx-lifestyle', name: '$50 Lifestyle Collection Credit', maxVal: 50, desc: 'Receive a $50 experience credit, complimentary Wi-Fi, and space-available room upgrades, early check-in, and late checkout on every Lifestyle Collection hotel or vacation rental booking via Capital One Travel.' },
        { id: 'vx-hertz', name: 'Hertz President’s Circle', maxVal: 50, isMonetary: false, desc: 'Complimentary Hertz President’s Circle status upgrade via the Benefits Tab in the Capital One website or mobile app.' },
        { id: 'vx-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Receive up to $120 statement credit for Global Entry or TSA PreCheck application fee every 4 years (~$30/yr).' },
        { id: 'vx-cdw', name: 'Primary CDW ($75K • Excl. Ireland, Israel & Jamaica)', maxVal: 50, isMonetary: false, desc: 'Visa Infinite primary auto rental collision damage waiver up to $75,000 for theft and collision damage in the U.S. and abroad (excludes rentals originating in the Republic of Ireland, Northern Ireland, Israel, and Jamaica).' },
        { id: 'vx-cell', name: 'Cell Phone Protection ($800/claim)', maxVal: 40, isMonetary: false, desc: 'Reimbursement for repair or replacement of a damaged or stolen cell phone up to $800 per claim ($50 deductible, max 2 claims/12-mo period) when you pay your monthly wireless bill with the card.' },
        { id: 'vx-prot', name: '6-Hr Trip Delay', maxVal: 40, isMonetary: false, desc: 'Visa Infinite 6-hr Trip Delay Reimbursement (up to $500/ticket).' },
        { id: 'vx-purchase-prot', name: 'Return Protection & $10K Purchase Protection', maxVal: 30, isMonetary: false, desc: 'Visa Infinite Return Protection ($300/item, $1K/yr) and Purchase Security ($10K/claim, $50K/account).' }
      ]
    },
    {
      id: 'bofa-premium-elite',
      order: 17,
      familyGroup: 'BofA',
      familyLabel: 'Bank of America (Flexible)',
      name: 'Bank of America Premium Rewards Elite',
      issuer: 'Bank of America',
      officialUrl: 'https://www.bankofamerica.com/credit-cards/products/premium-rewards-elite-credit-card/',
      annualFee: 550,
      multipliers: '2x Travel & Dining • 1.5x All',
      offerCurrency: 'BofA Rewards Points',
      defaultOfferText: '75,000 BofA Rewards Points',
      defaultOfferSpend: '$5,000 in 3 months',
      historicalHighText: 'Now',
      bestOfferTip: 'Tip: Check BofA logged-in Preferred Rewards portal for targeted 80k offers',
      estimatedOfferValue: 937,
      matchKeywords: ['premium rewards', 'elite'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'bofae-airline', name: '$300 Airline Fee Credit', maxVal: 300, desc: 'Up to $300 annually for qualifying seat upgrades, checked baggage fees, in-flight services, and airline lounge fees.' },
        { id: 'bofae-lifestyle', name: '$150 Lifestyle Credit', maxVal: 150, desc: 'Up to $150 annually for video streaming, food delivery, fitness subscriptions, and rideshare services.' },
        { id: 'bofae-pref-rewards', name: '25%–75% Preferred Rewards Bonus (Up to 3.5x / 2.625x)', maxVal: 150, isMonetary: false, desc: 'Preferred Rewards members earn a 25%–75% rewards bonus on every purchase (up to 3.5x on Travel & Dining and 2.625x on all other purchases with Platinum Honors / $100K+ combined BofA & Merrill balances).' },
        { id: 'bofae-pp', name: '4 Priority Pass Select Memberships (w/ Restaurants)', maxVal: 250, isMonetary: false, desc: 'Up to 4 complimentary full Priority Pass Select memberships for you or authorized/designated users.' },
        { id: 'bofae-air-discount', name: '20% off Flights (BofA Travel Center)', maxVal: 100, isMonetary: false, desc: 'Save 20% (1.25¢/pt redemption value) on domestic or international airfare in any cabin class booked with points.' },
        { id: 'bofae-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Up to $120 statement credit every 4 years (~$30/yr annualized).' },
        { id: 'bofae-cdw', name: 'Primary CDW ($75K • Excl. Ireland, Israel & Jamaica)', maxVal: 50, isMonetary: false, desc: 'Visa Infinite primary rental car collision damage waiver up to $75,000 for theft and collision damage in the U.S. and abroad (excludes rentals originating in the Republic of Ireland, Northern Ireland, Israel, and Jamaica).' },
        { id: 'bofae-ins', name: '6-Hr Trip Delay & $100K Emergency Evac', maxVal: 50, isMonetary: false, desc: 'Visa Infinite 6-hr trip delay reimbursement and $100,000 emergency evacuation & transportation.' },
        { id: 'bofae-purchase-prot', name: 'Return Protection & $10K Purchase Protection', maxVal: 30, isMonetary: false, desc: 'Visa Infinite Return Protection ($300/item, $1K/yr) and Purchase Security ($10K/claim).' }
      ]
    },
    {
      id: 'bofa-premium-rewards',
      order: 18,
      familyGroup: 'BofA',
      familyLabel: 'Bank of America (Flexible)',
      name: 'Bank of America Premium Rewards',
      issuer: 'Bank of America',
      officialUrl: 'https://www.bankofamerica.com/credit-cards/products/premium-rewards-credit-card/',
      annualFee: 95,
      multipliers: '2x Travel & Dining • 1.5x All',
      offerCurrency: 'BofA Rewards Points',
      defaultOfferText: '60,000 BofA Rewards Points',
      defaultOfferSpend: '$4,000 in 3 months',
      historicalHighText: 'Now',
      bestOfferTip: 'Tip: Stack via Rakuten for +$300–$425 bonus (30k–42.5k MR/Bilt pts) on top of 60k',
      estimatedOfferValue: 600,
      matchKeywords: ['bank of america', 'premium rewards'],
      excludeKeywords: ['elite', 'business'],
      benefits: [
        { id: 'bofap-airline', name: '$100 Airline Fee Credit', maxVal: 100, desc: 'Up to $100 annually for qualifying airline incidental fees (seat upgrades, baggage fees, inflight purchases, lounge day passes).' },
        { id: 'bofap-pref-rewards', name: '25%–75% Preferred Rewards Bonus (Up to 3.5x / 2.625x)', maxVal: 150, isMonetary: false, desc: 'Preferred Rewards members earn a 25%–75% rewards bonus on every purchase (up to 3.5x on Travel & Dining and 2.625x on all other purchases with Platinum Honors / $100K+ combined BofA & Merrill balances).' },
        { id: 'bofap-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 25, desc: 'Up to $100 statement credit every 4 years (~$25/yr annualized).' }
      ]
    },
    {
      id: 'atmos-summit',
      order: 19,
      familyGroup: 'BofA',
      familyLabel: 'Atmos Rewards (Alaska & Hawaiian)',
      name: 'Atmos Rewards Summit',
      issuer: 'Bank of America',
      officialUrl: 'https://www.alaskaair.com/atmosrewards/content/credit-cards/benefits/visa-summit',
      annualFee: 395,
      multipliers: '3x Alaska & Hawaiian • 3x Dining • 3x International Purchases',
      offerCurrency: 'Atmos Points',
      defaultOfferText: '80,000 Atmos Points + Global Companion Award',
      defaultOfferSpend: '$4,000 in 3 months',
      historicalHighText: '100,000 ($6k • Mar 2026)',
      bestOfferTip: 'Tip: Check alaskaair.com or in-flight attendant promo code (+2,500–5,000 extra points)',
      estimatedOfferValue: 1400,
      matchKeywords: ['atmos', 'summit'],
      excludeKeywords: ['business', 'ascent'],
      benefits: [
        { id: 'atmos-comp', name: '25K Point Global Companion Award', maxVal: 300, isMonetary: false, desc: 'Annual 25,000-point discount off a companion award ticket in any cabin class on Alaska, Hawaiian, or global partner flights.' },
        { id: 'atmos-lounge', name: '8 Alaska Lounge Passes (2/qtr)', maxVal: 240, isMonetary: false, desc: '2 complimentary Alaska Lounge day passes distributed each calendar quarter.' },
        { id: 'atmos-wifi', name: '8 In-Flight Wi-Fi Passes (2/qtr)', maxVal: 64, isMonetary: false, desc: '2 complimentary Alaska/Hawaiian in-flight Wi-Fi passes distributed each calendar quarter.' },
        { id: 'atmos-inflight', name: '20% off In-Flight Purchases', maxVal: 30, isMonetary: false, desc: 'Receive a 20% rebate on all onboard Alaska and Hawaiian Airlines food, beverage, and Wi-Fi purchases paid with the card.' },
        { id: 'atmos-status', name: '10K Status Points (Yr 2+) + 1 Pt / $2 Spend', maxVal: 150, isMonetary: false, desc: '10,000 bonus status points every account anniversary plus 1 status point per $2 spent (uncapped).' },
        { id: 'atmos-bofa-bonus', name: '10% BofA Relationship Bonus', maxVal: 50, isMonetary: false, desc: 'Earn a 10% rewards bonus on all points earned from card purchases when you have an eligible Bank of America account.' },
        { id: 'atmos-upgrade', name: 'Complimentary Upgrade Priority', maxVal: 60, isMonetary: false, desc: 'Enjoy higher priority on the waitlist for complimentary upgrades to First Class and Premium Class on Alaska and Hawaiian flights.' },
        { id: 'atmos-bags', name: '1st Bag Free & Preferred Boarding (Cardholder + 6)', maxVal: 100, isMonetary: false, desc: 'Free first checked bag and preferred boarding on Alaska and Hawaiian flights for you and up to 6 companions.' },
        { id: 'atmos-waivers', name: 'Waived Partner Award & Same-Day Change Fees + $50 Delay Voucher', maxVal: 75, isMonetary: false, desc: 'Waives partner award booking fees and same-day confirmed flight change fees, plus a $50 voucher for 2+ hour flight delays.' },
        { id: 'atmos-car-status', name: 'Avis Preferred Plus, National Executive & Hertz Five Star', maxVal: 40, isMonetary: false, desc: 'Complimentary Avis Preferred Plus, National Emerald Club Executive, and Hertz Gold Plus Rewards Five Star rental car status.' },
        { id: 'atmos-hotel-perks', name: 'Relais & Châteaux & Visa Infinite Hotel Perks', maxVal: 40, isMonetary: false, desc: 'Enjoy room upgrades when available, daily breakfast for two, $25 food/beverage credit, VIP guest status, and late checkout at Visa Infinite Luxury Hotel Collection and Relais & Châteaux properties.' },
        { id: 'atmos-cdw', name: 'Primary CDW ($75K • Excl. Ireland, Israel & Jamaica)', maxVal: 50, isMonetary: false, desc: 'Visa Infinite primary auto rental collision damage waiver up to $75,000 in the U.S. and abroad (excludes rentals originating in the Republic of Ireland, Northern Ireland, Israel, and Jamaica).' },
        { id: 'atmos-prot', name: '6-Hr Trip Delay', maxVal: 40, isMonetary: false, desc: 'Visa Infinite Trip Delay Reimbursement covering delays of 6+ hours.' },
        { id: 'atmos-purchase-prot', name: 'Return Protection & $10K Purchase Protection', maxVal: 30, isMonetary: false, desc: 'Includes Visa Infinite Return Protection ($300/item, $1K/yr) and Purchase Security ($10K/claim).' },
        { id: 'atmos-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Up to $120 statement credit every 4 years (~$30/yr annualized).' }
      ]
    },
    {
      id: 'atmos-ascent',
      order: 20,
      familyGroup: 'BofA',
      familyLabel: 'Atmos Rewards (Alaska & Hawaiian)',
      name: 'Atmos Rewards Ascent',
      issuer: 'Bank of America',
      officialUrl: 'https://www.alaskaair.com/atmosrewards/content/credit-cards/benefits/visa-ascent',
      annualFee: 95,
      multipliers: '3x Alaska & Hawaiian • 2x Gas, EV Charging, Transit & Rideshare • 2x Cable & Streaming',
      offerCurrency: 'Atmos Points',
      defaultOfferText: '80,000 Atmos Points + $99 Companion Fare',
      offerBadge: 'via DoC/USCCG',
      defaultOfferSpend: '$5,000 in 3 months',
      historicalHighText: '85,000 ($4.5k • Mar 2026)',
      bestOfferTip: 'Tip: Apply via alaskaair.com or in-flight link so the $99 Companion Fare is included',
      estimatedOfferValue: 900,
      matchKeywords: ['atmos', 'ascent'],
      excludeKeywords: ['business', 'summit'],
      benefits: [
        { id: 'ascent-comp', name: '$99 Companion Fare (After $6K Spend)', maxVal: 200, isMonetary: false, desc: 'Round-trip North America/Hawaii companion ticket for $99 (plus taxes/fees from $23) each anniversary after $6k spend.' },
        { id: 'ascent-bags', name: '1st Bag Free & Preferred Boarding (Cardholder + 6)', maxVal: 100, isMonetary: false, desc: 'Save up to $90 round-trip per person with a free first checked bag and preferred boarding on Alaska & Hawaiian flights.' },
        { id: 'ascent-inflight', name: '20% off In-Flight Purchases', maxVal: 30, isMonetary: false, desc: '20% statement credit on all in-flight food, beverage, and Wi-Fi purchases paid with the card.' },
        { id: 'ascent-lounge-disc', name: '$100 off Alaska Lounge+ Membership', maxVal: 100, desc: '$100 discount when purchasing an annual Alaska Lounge+ membership with the card.' },
        { id: 'ascent-status', name: '1 Status Pt / $3 Spend', maxVal: 50, isMonetary: false, desc: 'Earn 1 status point per $3 spent on the card toward Atmos Rewards elite status (uncapped).' },
        { id: 'ascent-bofa-bonus', name: '10% BofA Relationship Bonus', maxVal: 50, isMonetary: false, desc: 'Earn a 10% rewards bonus on all points earned from card purchases when you have an eligible Bank of America account.' }
      ]
    },
    {
      id: 'wf-autograph-journey',
      order: 21,
      familyGroup: 'Other',
      familyLabel: 'Wells Fargo Rewards',
      name: 'Wells Fargo Autograph Journey',
      issuer: 'Wells Fargo',
      officialUrl: 'https://creditcards.wellsfargo.com/cards/autograph-journey-visa-credit-card/',
      annualFee: 95,
      multipliers: '5x Hotels (Direct) • 4x Airlines (Direct) • 3x Other Travel & Restaurants',
      offerCurrency: 'Wells Fargo Rewards Points',
      defaultOfferText: '60,000 Wells Fargo Rewards Points',
      defaultOfferSpend: '$4,000 in 3 months',
      historicalHighText: 'Now',
      bestOfferTip: 'Tip: 100,000 pts available in-branch for Wells Fargo Premier clients ($4k spend in 3 mos)',
      estimatedOfferValue: 750,
      matchKeywords: ['autograph', 'journey'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'wfaj-air', name: '$50 Airline Credit', maxVal: 50, desc: '$50 statement credit each year automatically triggered by any $50+ direct airline purchase.' },
        { id: 'wfaj-cell', name: 'Cell Phone Protection ($1K/claim)', maxVal: 40, isMonetary: false, desc: 'Up to $1,000 coverage against damage or theft ($25 deductible) when you pay your monthly cell bill with the card.' },
        { id: 'wfaj-ins', name: '$15K Trip Cancellation', maxVal: 50, isMonetary: false, desc: 'Up to $15,000 trip cancellation and interruption protection.' }
      ]
    },
    {
      id: 'wf-premier-autograph',
      order: 20.8,
      familyGroup: 'Other',
      familyLabel: 'Wells Fargo Rewards',
      name: 'Wells Fargo Premier Autograph',
      issuer: 'Wells Fargo',
      officialUrl: 'https://www.wellsfargo.com/premier/',
      annualFee: 95,
      multipliers: '5x Hotels (Direct) • 4x Airlines (Direct) • 3x Other Travel & Restaurants',
      offerCurrency: 'Wells Fargo Rewards Points',
      defaultOfferText: '100,000 Wells Fargo Rewards Points',
      offerBadge: 'Premier Exclusive',
      defaultOfferSpend: '$4,000 in 3 months',
      historicalHighText: 'Now',
      bestOfferTip: 'Tip: Exclusive Visa Infinite version for Wells Fargo Premier clients ($250k+ relationship)',
      estimatedOfferValue: 1300,
      matchKeywords: ['premier autograph', 'wells fargo'],
      excludeKeywords: ['business'],
      benefits: [
        { id: 'wfpa-air', name: '$50 Airline Credit', maxVal: 50, desc: '$50 statement credit each year automatically triggered by any $50+ direct airline ticket or purchase.' },
        { id: 'wfpa-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Receive up to a $120 statement credit every 4 years for Global Entry or TSA PreCheck application fees (~$30/yr).' },
        { id: 'wfpa-cdw', name: 'Primary CDW ($75K • Excl. Ireland, Israel & Jamaica)', maxVal: 50, isMonetary: false, desc: 'Visa Infinite primary rental car collision damage waiver up to $75,000 in the U.S. and abroad (excludes rentals originating in the Republic of Ireland, Northern Ireland, Israel, and Jamaica).' },
        { id: 'wfpa-cell', name: 'Cell Phone Protection ($1K/claim)', maxVal: 40, isMonetary: false, desc: 'Up to $1,000 coverage against damage or theft ($25 deductible) when you pay your monthly cell bill with the card.' },
        { id: 'wfpa-ins', name: '6-Hr Trip Delay & $15K Trip Cancellation', maxVal: 50, isMonetary: false, desc: 'Enhanced Visa Infinite protections including 6-Hr Trip Delay and Trip Cancellation/Interruption (up to $15,000, incl. delays & non-medical reasons).' }
      ]
    },
    {
      id: 'jetblue-premier',
      order: 22,
      familyGroup: 'Other',
      familyLabel: 'JetBlue TrueBlue (Barclays)',
      name: 'JetBlue Premier',
      issuer: 'Barclays',
      officialUrl: 'https://www.jetblue.com/trueblue/credit-cards/jetblue-card-comparison',
      annualFee: 499,
      multipliers: '6x JetBlue & TrueBlue Travel • 2x Restaurants & Eligible Grocery Stores',
      offerCurrency: 'TrueBlue Points',
      defaultOfferText: '80,000 TrueBlue Points + 5 Tiles',
      defaultOfferSpend: '$5,000 in 3 months',
      historicalHighText: 'Now',
      bestOfferTip: 'Tip: Check Frequent Miler / JetBlue promo links for elevated 90k–100k offers',
      estimatedOfferValue: 1100,
      matchKeywords: ['jetblue', 'premier'],
      excludeKeywords: ['business', 'plus'],
      benefits: [
        { id: 'jbp-paisly', name: '$300 TrueBlue Travel Credit ($50 × 6)', maxVal: 300, desc: 'Earn up to $300 in statement credits per calendar year ($50 statement credit per eligible $250+ purchase on TrueBlue Travel for hotels, car rentals, cruises, and activities).' },
        { id: 'jbp-lounge', name: 'JetBlue BlueHouse Lounges + Priority Pass Select (+ 1 Guest)', maxVal: 250, isMonetary: false, desc: 'Complimentary access to JetBlue BlueHouse airport lounges (JFK & BOS) for you and 1 guest, plus a Priority Pass Select membership with 1 complimentary guest per visit.' },
        { id: 'jbp-anniv', name: '5K Point Anniversary Bonus', maxVal: 65, isMonetary: false, desc: 'Receive 5,000 bonus TrueBlue points each year after your account anniversary.' },
        { id: 'jbp-tiles', name: '25-Tile Mosaic Boost (or 5 Tiles + 1 Tile / $1K Spend)', maxVal: 120, isMonetary: false, desc: 'Fast-track toward JetBlue TrueBlue Mosaic elite status with bonus Loyalty Tiles and 1 tile per $1,000 in qualifying spend.' },
        { id: 'jbp-rebate', name: '10%–15% off Award Flights', maxVal: 75, isMonetary: false, desc: 'Get 10%–15% of your TrueBlue points back as a rebate after you redeem for and travel on a JetBlue-operated award flight.' },
        { id: 'jbp-bags', name: '1st Bag Free & Group A Boarding (Cardholder + 3 • JetBlue Metal)', maxVal: 100, isMonetary: false, desc: 'Free first checked bag and Group A priority boarding on JetBlue-operated flights for the primary cardmember and up to 3 travel companions on the same reservation.' },
        { id: 'jbp-inflight', name: '50% off In-Flight Purchases', maxVal: 40, isMonetary: false, desc: 'Save 50% as a statement credit on eligible inflight food and drink purchases on JetBlue-operated flights.' },
        { id: 'jbp-ge', name: 'Global Entry Credit (Every 4 Yrs)', maxVal: 30, desc: 'Up to $120 statement credit every 4 years for Global Entry or TSA PreCheck application fees (~$30/yr).' }
      ]
    }
  ];

  const STORAGE_KEY = 'travel_cards_portfolio_state_v1';
  const UI_STORAGE_KEY = 'travel_cards_ui_state_v1';
  const VALUATIONS_FILE_URL = 'valuations.json';
  let fileBaselineState = { cardStatus: {}, benefitValues: {} };

  // Application state
  const state = {
    cardStatus: {},      // cardId -> 'none' | 'owned' | 'target' | 'hidden'
    benefitValues: {},   // cardId -> { benefitId: number }
    expandedCards: {},   // cardId -> boolean
    ownedSectionHidden: false,
    activeFilter: 'all',
    sortBy: 'group',
    searchQuery: ''
  };

  function persistUiState() {
    try {
      window.localStorage.setItem(
        UI_STORAGE_KEY,
        JSON.stringify({
          ownedSectionHidden: Boolean(state.ownedSectionHidden),
          activeFilter: state.activeFilter || 'all',
          sortBy: state.sortBy || 'group'
        })
      );
    } catch (_err) {
      // Non-fatal if storage is blocked
    }
  }

  function loadUiState() {
    try {
      const raw = window.localStorage.getItem(UI_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return;
      if (typeof parsed.ownedSectionHidden === 'boolean') {
        state.ownedSectionHidden = parsed.ownedSectionHidden;
      }
      if (typeof parsed.activeFilter === 'string') {
        const matchingBtn = document.querySelector(
          '#filter-pills-group .pill-btn[data-filter="' + parsed.activeFilter + '"]'
        );
        if (matchingBtn) {
          state.activeFilter = parsed.activeFilter;
          document
            .querySelectorAll('#filter-pills-group .pill-btn')
            .forEach((b) => b.classList.remove('active'));
          matchingBtn.classList.add('active');
        }
      }
      if (typeof parsed.sortBy === 'string') {
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect && Array.from(sortSelect.options).some((o) => o.value === parsed.sortBy)) {
          state.sortBy = parsed.sortBy;
          sortSelect.value = parsed.sortBy;
        }
      }
    } catch (_err) {
      // Ignore invalid or inaccessible UI storage
    }
  }

  function initDefaultState() {
    for (const card of CARDS_CATALOG) {
      state.cardStatus[card.id] = 'none';
      state.benefitValues[card.id] = {};
      for (const b of card.benefits) {
        state.benefitValues[card.id][b.id] = 0;
      }
      if (typeof state.expandedCards[card.id] !== 'boolean') {
        state.expandedCards[card.id] = false;
      }
    }
  }

  function applyStateData(data) {
    if (!data || typeof data !== 'object') return;
    if (data.cardStatus && typeof data.cardStatus === 'object') {
      for (const card of CARDS_CATALOG) {
        const s = data.cardStatus[card.id];
        if (s === 'owned' || s === 'target' || s === 'none' || s === 'hidden') {
          state.cardStatus[card.id] = s;
        }
      }
    }
    if (data.benefitValues && typeof data.benefitValues === 'object') {
      for (const card of CARDS_CATALOG) {
        const map = data.benefitValues[card.id];
        if (map && typeof map === 'object') {
          for (const b of card.benefits) {
            const val = Number(map[b.id]);
            if (!Number.isNaN(val) && val >= 0 && val <= 10000) {
              state.benefitValues[card.id][b.id] = Math.round(val);
            }
          }
        }
      }
    }
  }

  function buildCompactExportPayload() {
    const compactStatus = {};
    const compactBenefits = {};
    for (const card of CARDS_CATALOG) {
      const s = state.cardStatus[card.id];
      if (s && s !== 'none') {
        compactStatus[card.id] = s;
      }
      const bMap = state.benefitValues[card.id] || {};
      const nonZero = {};
      for (const b of card.benefits) {
        const val = Number(bMap[b.id] || 0);
        if (val > 0) {
          nonZero[b.id] = val;
        }
      }
      if (Object.keys(nonZero).length > 0) {
        compactBenefits[card.id] = nonZero;
      }
    }
    return {
      cardStatus: compactStatus,
      benefitValues: compactBenefits
    };
  }

  async function loadSavedState() {
    initDefaultState();
    try {
      const resp = await fetch(VALUATIONS_FILE_URL, { cache: 'no-store' });
      if (resp.ok) {
        fileBaselineState = await resp.json();
        applyStateData(fileBaselineState);
      }
    } catch (_err) {
      // Fallback if valuations.json cannot be fetched
    }
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        applyStateData(parsed);
      } else {
        persistState();
      }
    } catch (_err) {
      // localStorage unavailable; continue with file baseline
    }
    renderAll();
  }

  function persistState() {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(buildCompactExportPayload())
      );
    } catch (_err) {
      // Non-fatal if storage quota or privacy mode blocks write
    }
  }

  function exportValuationsToFile() {
    const payload = JSON.stringify(buildCompactExportPayload(), null, 2) + '\n';
    const blob = new Blob([payload], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'valuations.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function getCardBenefitsTotal(card) {
    const map = state.benefitValues[card.id] || {};
    let sum = 0;
    for (const b of card.benefits) {
      sum += Number(map[b.id] || 0);
    }
    return sum;
  }

  function getCardNetFee(card) {
    return card.annualFee - getCardBenefitsTotal(card);
  }

  function getCardFirstYearNet(card) {
    return card.estimatedOfferValue - getCardNetFee(card);
  }

  function formatDollar(amount) {
    const rounded = Math.round(amount);
    if (rounded < 0) {
      return '-$' + Math.abs(rounded).toLocaleString();
    }
    return '$' + rounded.toLocaleString();
  }

  function setFilterPillLabelAndCount(btnId, labelText, count) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    while (btn.firstChild) {
      btn.removeChild(btn.firstChild);
    }
    const labelSpan = document.createElement('span');
    labelSpan.textContent = labelText;
    const countSpan = document.createElement('span');
    countSpan.className = 'pill-count';
    countSpan.textContent = String(count);
    btn.appendChild(labelSpan);
    btn.appendChild(countSpan);
  }

  function renderSummaryStrip() {
    let ownedCount = 0;
    let targetCount = 0;
    let hiddenCount = 0;
    let ownedGross = 0;
    let ownedBenefits = 0;
    let bestUnownedCard = null;
    let bestUnownedNet = Infinity;
    const issuerCounts = {
      'American Express': 0,
      'Chase': 0,
      'Citi': 0,
      'Capital One': 0,
      'Bank of America': 0,
      'Wells Fargo': 0,
      'Barclays': 0
    };

    for (const card of CARDS_CATALOG) {
      const status = state.cardStatus[card.id];
      const benefitsVal = getCardBenefitsTotal(card);
      const netFee = card.annualFee - benefitsVal;

      if (status === 'hidden') {
        hiddenCount += 1;
        continue;
      }

      if (status === 'owned') {
        ownedCount += 1;
        ownedGross += card.annualFee;
        ownedBenefits += benefitsVal;
      } else {
        if (status === 'target') {
          targetCount += 1;
        }
        if (Object.prototype.hasOwnProperty.call(issuerCounts, card.issuer)) {
          issuerCounts[card.issuer] += 1;
        }
        if (netFee < bestUnownedNet) {
          bestUnownedNet = netFee;
          bestUnownedCard = card;
        }
      }
    }

    const prospectiveTotal = CARDS_CATALOG.length - ownedCount - hiddenCount;
    setFilterPillLabelAndCount('filter-all', 'All Prospective', prospectiveTotal);
    setFilterPillLabelAndCount('filter-target', 'Watchlist', targetCount);
    setFilterPillLabelAndCount('filter-amex', 'Amex', issuerCounts['American Express']);
    setFilterPillLabelAndCount('filter-chase', 'Chase', issuerCounts['Chase']);
    setFilterPillLabelAndCount('filter-citi', 'Citi', issuerCounts['Citi']);
    setFilterPillLabelAndCount('filter-capone', 'Capital One', issuerCounts['Capital One']);
    setFilterPillLabelAndCount('filter-bofa', 'Bank of America', issuerCounts['Bank of America']);
    setFilterPillLabelAndCount('filter-wf', 'Wells Fargo', issuerCounts['Wells Fargo']);
    setFilterPillLabelAndCount('filter-barclays', 'Barclays', issuerCounts['Barclays']);
    setFilterPillLabelAndCount('filter-hidden', 'Hidden', hiddenCount);

    const ownedNet = ownedGross - ownedBenefits;

    document.getElementById('val-owned-count').textContent = String(ownedCount);
    document.getElementById('sub-owned-count').textContent =
      targetCount + ' on watchlist • ' + hiddenCount + ' hidden';
    document.getElementById('val-gross-fees').textContent = formatDollar(ownedGross, false);
    document.getElementById('val-benefits-used').textContent = formatDollar(ownedBenefits, false);
    document.getElementById('val-net-fee').textContent = formatDollar(ownedNet, false);
    document.getElementById('sub-net-fee').textContent =
      ownedNet <= 0
        ? 'Your perks exceed your annual fees by $' + Math.abs(ownedNet)
        : 'Out-of-pocket after valued credits';

    if (bestUnownedCard) {
      document.getElementById('val-best-candidate').textContent = formatDollar(bestUnownedNet, false);
      document.getElementById('sub-best-candidate').textContent = bestUnownedCard.name;
    } else {
      document.getElementById('val-best-candidate').textContent = '—';
      document.getElementById('sub-best-candidate').textContent = 'No unowned active cards';
    }
  }

  function getFilteredAndSortedProspectiveCards() {
    const q = state.searchQuery.trim().toLowerCase();
    const filtered = CARDS_CATALOG.filter((card) => {
      const status = state.cardStatus[card.id];
      const netFee = getCardNetFee(card);

      // Owned cards are always shown in the top Owned section, never in Prospective
      if (status === 'owned') return false;

      if (state.activeFilter === 'hidden') {
        if (status !== 'hidden') return false;
      } else {
        if (status === 'hidden') return false;
        if (state.activeFilter === 'target' && status !== 'target') return false;
        if (
          state.activeFilter !== 'all' &&
          state.activeFilter !== 'target' &&
          card.issuer !== state.activeFilter
        ) {
          return false;
        }
      }

      if (q) {
        const inName = card.name.toLowerCase().includes(q) || card.familyLabel.toLowerCase().includes(q);
        const inBenefits = card.benefits.some(
          (b) => b.name.toLowerCase().includes(q) || b.desc.toLowerCase().includes(q)
        );
        if (!inName && !inBenefits) return false;
      }
      return true;
    });

    filtered.sort((a, b) => {
      if (state.sortBy === 'net-asc') return getCardNetFee(a) - getCardNetFee(b);
      if (state.sortBy === 'fee-desc') return b.annualFee - a.annualFee;
      if (state.sortBy === 'fee-asc') return a.annualFee - b.annualFee;
      if (state.sortBy === 'yr1-desc') return getCardFirstYearNet(b) - getCardFirstYearNet(a);
      const aTarget = state.cardStatus[a.id] === 'target' ? 0 : 1;
      const bTarget = state.cardStatus[b.id] === 'target' ? 0 : 1;
      if (aTarget !== bTarget) return aTarget - bTarget;
      return a.order - b.order;
    });

    return filtered;
  }

  function buildCardElement(card) {
    const status = state.cardStatus[card.id] || 'none';
    const isExpanded = Boolean(state.expandedCards[card.id]);
    const benefitsVal = getCardBenefitsTotal(card);
    const netFee = card.annualFee - benefitsVal;

    const panel = document.createElement('article');
    panel.className = 'card-panel' + (status !== 'none' ? ' status-' + status : '');
    panel.id = 'card-panel-' + card.id;

    // Tier 1: Top Header Bar (Identity on left, Controls on right)
    const topBar = document.createElement('div');
    topBar.className = 'card-top-bar';

    const titleRow = document.createElement('div');
    titleRow.className = 'card-title-row';

    const familyBadge = document.createElement('span');
    familyBadge.className = 'card-family-badge';
    familyBadge.textContent = card.familyLabel;

    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-name';
    cardTitle.textContent = card.name;

    titleRow.appendChild(familyBadge);
    titleRow.appendChild(cardTitle);

    const actionsCol = document.createElement('div');
    actionsCol.className = 'card-actions-col';

    const statusSelect = document.createElement('select');
    statusSelect.className = 'status-pill-select pill-' + status;
    statusSelect.id = 'status-select-' + card.id;
    statusSelect.setAttribute('aria-label', 'Portfolio status for ' + card.name);

    const options =
      status === 'owned'
        ? [
            { value: 'none', label: '○  Not Owned' },
            { value: 'owned', label: '✓  Owned' },
            { value: 'target', label: '★  Watchlist' }
          ]
        : [
            { value: 'none', label: '○  Not Owned' },
            { value: 'owned', label: '✓  Owned' },
            { value: 'target', label: '★  Watchlist' },
            { value: 'hidden', label: '⊘  Hidden' }
          ];
    for (const opt of options) {
      const o = document.createElement('option');
      o.value = opt.value;
      o.textContent = opt.label;
      if (status === opt.value) {
        o.selected = true;
      }
      statusSelect.appendChild(o);
    }

    statusSelect.addEventListener('change', (e) => {
      state.cardStatus[card.id] = e.target.value;
      persistState();
      renderAll();
    });

    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'drawer-toggle-chip' + (isExpanded ? ' is-expanded' : '');
    toggleBtn.id = 'toggle-drawer-' + card.id;

    const toggleLabel = document.createElement('span');
    toggleLabel.className = 'drawer-chip-label';
    toggleLabel.textContent = isExpanded ? 'Hide Benefits' : 'Value Benefits';

    const toggleCount = document.createElement('span');
    toggleCount.className = 'drawer-chip-count';
    toggleCount.textContent = String(card.benefits.length);

    const toggleChevron = document.createElement('span');
    toggleChevron.className = 'drawer-chip-chevron';
    toggleChevron.textContent = isExpanded ? '▴' : '▾';

    toggleBtn.appendChild(toggleLabel);
    toggleBtn.appendChild(toggleCount);
    toggleBtn.appendChild(toggleChevron);

    toggleBtn.addEventListener('click', () => {
      state.expandedCards[card.id] = !state.expandedCards[card.id];
      renderAll();
    });

    actionsCol.appendChild(statusSelect);
    actionsCol.appendChild(toggleBtn);

    if (status !== 'owned') {
      const hideBtn = document.createElement('button');
      hideBtn.type = 'button';
      hideBtn.className = 'card-hide-pill' + (status === 'hidden' ? ' is-unhide' : '');
      hideBtn.id = 'btn-hide-card-' + card.id;
      hideBtn.textContent = status === 'hidden' ? '↺  Unhide' : '⊘  Hide';
      hideBtn.title = status === 'hidden' ? 'Restore card to active list' : 'Hide this card from active views';
      hideBtn.addEventListener('click', () => {
        state.cardStatus[card.id] = status === 'hidden' ? 'none' : 'hidden';
        persistState();
        renderAll();
      });
      actionsCol.appendChild(hideBtn);
    }

    topBar.appendChild(titleRow);
    topBar.appendChild(actionsCol);

    // Tier 2: 4-Box Metric Strip (Earning Multipliers | Card Benefits | Annual Fee Math | Welcome Offer)
    const metricsGrid = document.createElement('div');
    metricsGrid.className = 'card-metrics-grid';

    // Box 1: Earning Multipliers
    const multBox = document.createElement('div');
    multBox.className = 'card-metric-box';

    const multLabel = document.createElement('div');
    multLabel.className = 'metric-box-label';
    multLabel.textContent = 'Earning Multipliers';

    const multChips = document.createElement('div');
    multChips.className = 'mult-chips';

    const parts = String(card.multipliers || '').split('•');
    for (const rawPart of parts) {
      const trimmed = rawPart.trim();
      if (!trimmed) continue;
      const chip = document.createElement('span');
      chip.className = 'mult-chip';
      const rateMatch = trimmed.match(/^(\d+(?:\.\d+)?[x%])\s+(.*)$/i);
      if (rateMatch) {
        const ratePill = document.createElement('span');
        ratePill.className = 'mult-rate-pill';
        ratePill.textContent = rateMatch[1];
        const catText = document.createElement('span');
        const subMatch = rateMatch[2].match(/^(.*?\()(\d+(?:\.\d+)?[x%])(\s+if Top(?:\s+Spend)?\).*)$/i);
        if (subMatch) {
          catText.appendChild(document.createTextNode(subMatch[1]));
          const subPill = document.createElement('span');
          subPill.className = 'mult-rate-pill';
          subPill.textContent = subMatch[2];
          catText.appendChild(subPill);
          catText.appendChild(document.createTextNode(subMatch[3]));
        } else {
          catText.textContent = rateMatch[2];
        }
        chip.appendChild(ratePill);
        chip.appendChild(catText);
      } else {
        chip.textContent = trimmed;
      }
      multChips.appendChild(chip);
    }

    multBox.appendChild(multLabel);
    multBox.appendChild(multChips);

    // Box 2: Card Benefits (Design 6C: Outside-Left Valuation Column + Chip)
    const benefitsBox = document.createElement('div');
    benefitsBox.className = 'card-metric-box';

    const benefitsLabel = document.createElement('div');
    benefitsLabel.className = 'metric-box-label';
    benefitsLabel.textContent = 'Card Benefits (' + card.benefits.length + ')';

    const benefitChips = document.createElement('div');
    benefitChips.className = 'benefit-summary-chips';

    function renderBenefitSummarySection() {
      benefitChips.replaceChildren();
      const cardBenefitVals = state.benefitValues[card.id] || {};
      const valuedBenefits = [];
      const unvaluedBenefits = [];

      for (const b of card.benefits) {
        const userVal = Number(cardBenefitVals[b.id] || 0);
        if (userVal > 0) {
          valuedBenefits.push({ benefit: b, userVal });
        } else {
          unvaluedBenefits.push(b);
        }
      }

      function createBenefitChipEl(b, isUnvalued) {
        const bChip = document.createElement('span');
        bChip.className = 'benefit-summary-chip' + (isUnvalued ? ' is-unvalued' : '');
        bChip.id = 'summary-chip-' + card.id + '-' + b.id;
        bChip.title = b.desc;

        const amtMatch = String(b.name || '').match(
          /^(?:Up to\s+)?(\$[\d,]+(?:–\$[\d,]+)?(?:\/yr)?(?!\s+(?:Domestic\s+Main(?:\s+Cabin)?\s+)?Companion\b)|\d+K|\d+%(?:–\d+%)?(?=\s+off (?:Award )?Flights))\s+(.*)$/i
        );
        if (amtMatch) {
          const amtPill = document.createElement('span');
          amtPill.className = 'benefit-val-pill';
          amtPill.textContent = amtMatch[1];
          bChip.appendChild(amtPill);
        }

        if (b.linkText && b.linkUrl) {
          const a = document.createElement('a');
          a.className = 'chip-inline-link';
          a.href = b.linkUrl;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.textContent = b.linkText;
          bChip.appendChild(a);
        }

        const bText = document.createElement('span');
        bText.textContent = amtMatch ? amtMatch[2] : b.name;
        bChip.appendChild(bText);
        return bChip;
      }

      for (const { benefit, userVal } of valuedBenefits) {
        const row = document.createElement('div');
        row.className = 'outside-val-row';

        const valBadge = document.createElement('span');
        valBadge.className = 'outside-val-badge';
        valBadge.textContent = '$' + userVal.toLocaleString();
        row.appendChild(valBadge);

        row.appendChild(createBenefitChipEl(benefit, false));
        benefitChips.appendChild(row);
      }

      if (valuedBenefits.length > 0 && unvaluedBenefits.length > 0) {
        const div = document.createElement('div');
        div.className = 'd6-section-divider';
        div.textContent = 'Not Valued';
        benefitChips.appendChild(div);
      }

      for (const b of unvaluedBenefits) {
        benefitChips.appendChild(createBenefitChipEl(b, true));
      }
    }

    renderBenefitSummarySection();

    benefitsBox.appendChild(benefitsLabel);
    benefitsBox.appendChild(benefitChips);

    // Box 3: Annual Fee Math
    const mathBox = document.createElement('div');
    mathBox.className = 'card-metric-box';

    const mathLabel = document.createElement('div');
    mathLabel.className = 'metric-box-label';
    mathLabel.textContent = 'Annual Fee Math';

    const eqRow = document.createElement('div');
    eqRow.className = 'fee-equation-row';

    const grossPart = document.createElement('div');
    grossPart.className = 'fee-eq-part';
    const grossVal = document.createElement('strong');
    grossVal.textContent = '$' + card.annualFee;
    const grossCap = document.createElement('span');
    grossCap.textContent = 'Gross Fee';
    grossPart.appendChild(grossVal);
    grossPart.appendChild(grossCap);

    const usedPart = document.createElement('div');
    usedPart.className = 'fee-eq-part';
    const usedVal = document.createElement('strong');
    usedVal.id = 'used-val-' + card.id;
    usedVal.className = 'fee-eq-perks';
    usedVal.textContent = '−$' + benefitsVal;
    const usedCap = document.createElement('span');
    usedCap.textContent = 'Valued Perks';
    usedPart.appendChild(usedVal);
    usedPart.appendChild(usedCap);

    const eqDivider = document.createElement('div');
    eqDivider.className = 'fee-eq-divider';

    const netRow = document.createElement('div');
    netRow.className = 'net-fee-row';
    const netCap = document.createElement('span');
    netCap.className = 'net-fee-caption';
    netCap.textContent = 'Net Fee';

    const netBadge = document.createElement('div');
    netBadge.id = 'net-badge-' + card.id;
    netBadge.className =
      'net-fee-badge ' +
      (netFee <= 0
        ? 'net-positive-value'
        : netFee <= 150
        ? 'net-moderate-cost'
        : 'net-high-cost');
    netBadge.textContent = formatDollar(netFee);

    netRow.appendChild(netCap);
    netRow.appendChild(netBadge);

    eqRow.appendChild(grossPart);
    eqRow.appendChild(usedPart);
    eqRow.appendChild(eqDivider);
    eqRow.appendChild(netRow);

    mathBox.appendChild(mathLabel);
    mathBox.appendChild(eqRow);

    // Box 4: Welcome Offer
    const offerBox = document.createElement('div');
    offerBox.className = 'card-metric-box';

    const offerLabel = document.createElement('div');
    offerLabel.className = 'metric-box-label';
    offerLabel.textContent = 'Welcome Offer';
    offerBox.appendChild(offerLabel);

    const offerHead = document.createElement('div');
    offerHead.className = 'offer-headline-row';
    const offerHeadText = document.createElement('span');
    offerHeadText.className = 'offer-headline';
    offerHeadText.textContent = card.defaultOfferText;
    offerHead.appendChild(offerHeadText);
    if (card.offerBadge) {
      const badgeEl = document.createElement('span');
      badgeEl.className = 'offer-special-pill';
      badgeEl.textContent = card.offerBadge;
      offerHead.appendChild(badgeEl);
    }

    const offerSub = document.createElement('div');
    offerSub.className = 'offer-subtext';
    offerSub.textContent = 'Spend: ' + card.defaultOfferSpend;

    const offerHist = document.createElement('div');
    const hasOfferHistory =
      typeof CARD_OFFER_HISTORY !== 'undefined' &&
      Array.isArray(CARD_OFFER_HISTORY[card.id]) &&
      CARD_OFFER_HISTORY[card.id].length > 0;
    offerHist.className = 'offer-history-text';
    const rawHistText = card.historicalHighText || '—';
    const histMatch = rawHistText.match(/^([^(]+?)\s*(\(.+\))$/);
    if (histMatch) {
      offerHist.appendChild(document.createTextNode('Historical High: ' + histMatch[1]));
      const histSubLine = document.createElement('span');
      histSubLine.style.display = 'block';
      histSubLine.textContent = histMatch[2];
      offerHist.appendChild(histSubLine);
    } else {
      offerHist.textContent = 'Historical High: ' + rawHistText;
    }

    offerBox.appendChild(offerHead);
    offerBox.appendChild(offerSub);
    offerBox.appendChild(offerHist);

    if (card.bestOfferTip) {
      const offerTip = document.createElement('div');
      offerTip.className = 'offer-subtext';
      offerTip.style.marginTop = '4px';
      offerTip.style.fontSize = '0.72rem';
      offerTip.style.lineHeight = '1.35';
      offerTip.textContent = card.bestOfferTip;
      offerBox.appendChild(offerTip);
    }

    const cardLinksMap = {
      'amex-platinum': 'https://www.uscreditcardguide.com/amex-platinum-card/',
      'amex-platinum-schwab': 'https://www.uscreditcardguide.com/amex-platinum-card-for-schwab/',
      'amex-platinum-ms': 'https://www.uscreditcardguide.com/amex-platinum-card-for-morgan-stanley/',
      'amex-gold': 'https://www.uscreditcardguide.com/amex-premier-rewards-gold-card/',
      'delta-reserve': 'https://www.uscreditcardguide.com/amex-delta-reserve-credit-card/',
      'delta-platinum': 'https://www.uscreditcardguide.com/amex-platinum-delta-skymiles-credit-card/',
      'delta-gold': 'https://www.uscreditcardguide.com/amex-gold-delta-skymiles-credit-card/',
      'chase-sapphire-reserve': 'https://www.uscreditcardguide.com/chase-sapphire-reserve-credit-card/',
      'chase-sapphire-preferred': 'https://www.uscreditcardguide.com/chase-sapphire-preferred-credit-card/',
      'chase-freedom-flex': 'https://www.uscreditcardguide.com/chase-freedom-flex-credit-card/',
      'united-club': 'https://www.uscreditcardguide.com/united-mileageplus-club-credit-card/',
      'united-quest': 'https://www.uscreditcardguide.com/chase-ua-quest-credit-card/',
      'united-explorer': 'https://www.uscreditcardguide.com/chase-united-mileageplus-explorer-credit-card/',
      'citi-strata-elite': 'https://www.uscreditcardguide.com/citi-strata-elite-credit-card/',
      'citi-strata-premier': 'https://www.uscreditcardguide.com/citi-thankyou-premier-credit-card/',
      'citi-custom-cash': 'https://www.uscreditcardguide.com/citi-custom-cash-credit-card/',
      'citi-strata': 'https://www.uscreditcardguide.com/citi-strata-credit-card/',
      'citi-costco-anywhere': 'https://www.uscreditcardguide.com/citi-costco-credit-card/',
      'citi-aa-executive': 'https://www.uscreditcardguide.com/citi-aadvantage-executive-credit-card/',
      'citi-aa-globe': 'https://www.uscreditcardguide.com/citi-aadvantage-globe-credit-card/',
      'citi-aa-platinum-select': 'https://www.uscreditcardguide.com/citi-aadvantage-platinum-select-credit-card/',
      'capital-one-venture-x': 'https://www.uscreditcardguide.com/capital-one-venture-x-credit-card/',
      'bofa-premium-elite': 'https://www.uscreditcardguide.com/boa-premium-rewards-elite-credit-card/',
      'bofa-premium-rewards': 'https://www.uscreditcardguide.com/boa-premium-rewards-credit-card/',
      'atmos-summit': 'https://www.uscreditcardguide.com/boa-alaska-atmos-summit-credit-card/',
      'atmos-ascent': 'https://www.uscreditcardguide.com/boa-alaska-atmos-ascent-credit-card/',
      'wf-autograph-journey': 'https://www.uscreditcardguide.com/wells-fargo-autograph-journey-credit-card/',
      'wf-premier-autograph': 'https://www.uscreditcardguide.com/wells-fargo-premier-autograph-credit-card/',
      'jetblue-premier': 'https://www.uscreditcardguide.com/barclays-jetblue-premier-credit-card/'
    };

    const usccgUrl = cardLinksMap[card.id];

    if (card.officialUrl || usccgUrl || hasOfferHistory) {
      const linksRow = document.createElement('div');
      linksRow.className = 'card-offer-links';

      if (hasOfferHistory) {
        const histBtn = document.createElement('button');
        histBtn.type = 'button';
        histBtn.className = 'offer-history-btn';
        histBtn.title = 'Open interactive historical welcome offer chart';
        histBtn.textContent = '📈 Offer History ⤢';
        histBtn.addEventListener('click', () => openOfferHistoryModal(card, usccgUrl));
        linksRow.appendChild(histBtn);
      }

      if (card.officialUrl) {
        const officialLink = document.createElement('a');
        officialLink.className = 'official-card-link';
        officialLink.href = card.officialUrl;
        officialLink.target = '_blank';
        officialLink.rel = 'noopener noreferrer';
        officialLink.textContent = 'Official Page ↗';
        linksRow.appendChild(officialLink);
      }

      if (usccgUrl) {
        const guideLink = document.createElement('a');
        guideLink.className = 'official-card-link';
        guideLink.href = usccgUrl;
        guideLink.target = '_blank';
        guideLink.rel = 'noopener noreferrer';
        guideLink.textContent = 'USCCG Review ↗';
        linksRow.appendChild(guideLink);
      }

      offerBox.appendChild(linksRow);
    }

    metricsGrid.appendChild(multBox);
    metricsGrid.appendChild(benefitsBox);
    metricsGrid.appendChild(mathBox);
    metricsGrid.appendChild(offerBox);

    // Benefits Drawer
    const drawer = document.createElement('div');
    drawer.className = 'benefits-drawer' + (isExpanded ? '' : ' hidden');
    drawer.id = 'drawer-' + card.id;

    const toolbar = document.createElement('div');
    toolbar.className = 'drawer-toolbar';

    const toolbarTitle = document.createElement('div');
    toolbarTitle.className = 'drawer-toolbar-title';
    toolbarTitle.textContent = 'Assign Your Annual Dollar Value to Each Benefit';

    const quickActions = document.createElement('div');
    quickActions.className = 'drawer-quick-actions';

    const clearAllBtn = document.createElement('button');
    clearAllBtn.type = 'button';
    clearAllBtn.className = 'drawer-toggle-chip';
    clearAllBtn.id = 'btn-clear-all-' + card.id;
    clearAllBtn.textContent = 'Reset';
    clearAllBtn.addEventListener('click', () => {
      for (const b of card.benefits) {
        state.benefitValues[card.id][b.id] = 0;
      }
      persistState();
      renderAll();
    });

    quickActions.appendChild(clearAllBtn);
    toolbar.appendChild(toolbarTitle);
    toolbar.appendChild(quickActions);

    const grid = document.createElement('div');
    grid.className = 'benefits-grid';

    for (const b of card.benefits) {
      const currentVal = Number(state.benefitValues[card.id][b.id] || 0);
      const isMonetary = b.isMonetary !== false;
      const item = document.createElement('div');
      item.className = 'benefit-item' + (currentVal > 0 ? ' used-benefit' : '');

      const topWrap = document.createElement('div');
      const topRow = document.createElement('div');
      topRow.className = 'benefit-top';

      const bTitle = document.createElement('div');
      bTitle.className = 'benefit-title';
      if (b.linkText && b.linkUrl) {
        const amtMatch = String(b.name || '').match(
          /^(?:Up to\s+)?(\$[\d,]+(?:–\$[\d,]+)?(?:\/yr)?(?!\s+(?:Domestic\s+Main(?:\s+Cabin)?\s+)?Companion\b)|\d+K|\d+%(?:–\d+%)?(?=\s+off (?:Award )?Flights))\s+(.*)$/i
        );
        if (amtMatch) {
          bTitle.appendChild(document.createTextNode(amtMatch[1] + ' '));
        }
        const a = document.createElement('a');
        a.className = 'chip-inline-link';
        a.href = b.linkUrl;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = b.linkText;
        bTitle.appendChild(a);
        bTitle.appendChild(document.createTextNode(' ' + (amtMatch ? amtMatch[2] : b.name)));
      } else {
        bTitle.textContent = b.name;
      }

      topRow.appendChild(bTitle);

      if (isMonetary) {
        const maxTag = document.createElement('span');
        maxTag.className = 'benefit-max-tag';
        maxTag.textContent = 'Max $' + b.maxVal + '/yr';
        topRow.appendChild(maxTag);
      }

      const bDesc = document.createElement('div');
      bDesc.className = 'benefit-desc';
      bDesc.textContent = b.desc;

      topWrap.appendChild(topRow);
      topWrap.appendChild(bDesc);

      const controlsRow = document.createElement('div');
      controlsRow.className = 'benefit-controls';

      const quickBtns = document.createElement('div');
      quickBtns.className = 'benefit-quick-btns';

      const presets = isMonetary
        ? [
            { label: '0%', val: 0 },
            { label: '100%', val: b.maxVal }
          ]
        : [];

      const numInput = document.createElement('input');
      numInput.type = 'number';
      numInput.min = '0';
      numInput.max = String(Math.max(b.maxVal * 2, 2000));
      numInput.step = '5';
      numInput.className = 'val-number-input';
      numInput.id = 'input-' + card.id + '-' + b.id;
      numInput.value = String(currentVal);
      numInput.setAttribute('aria-label', 'Annual dollar value for ' + b.name);

      for (const p of presets) {
        const pBtn = document.createElement('button');
        pBtn.type = 'button';
        pBtn.className = 'btn btn-sm';
        pBtn.textContent = p.label;
        pBtn.addEventListener('click', () => {
          state.benefitValues[card.id][b.id] = p.val;
          persistState();
          renderAll();
        });
        quickBtns.appendChild(pBtn);
      }

      numInput.addEventListener('input', (e) => {
        const parsed = Math.max(0, Math.min(10000, Math.round(Number(e.target.value) || 0)));
        state.benefitValues[card.id][b.id] = parsed;
        if (parsed > 0) {
          item.classList.add('used-benefit');
        } else {
          item.classList.remove('used-benefit');
        }
        renderBenefitSummarySection();
        const updatedBenefitsTotal = getCardBenefitsTotal(card);
        const updatedNet = card.annualFee - updatedBenefitsTotal;
        usedVal.textContent = '−$' + updatedBenefitsTotal;
        netBadge.className =
          'net-fee-badge ' +
          (updatedNet <= 0
            ? 'net-positive-value'
            : updatedNet <= 150
            ? 'net-moderate-cost'
            : 'net-high-cost');
        netBadge.textContent = formatDollar(updatedNet);
        renderSummaryStrip();
        persistState();
      });

      const inputWrap = document.createElement('div');
      inputWrap.className = 'val-input-wrap';
      const dollarPrefix = document.createElement('span');
      dollarPrefix.textContent = 'My Value: $';
      inputWrap.appendChild(dollarPrefix);
      inputWrap.appendChild(numInput);

      controlsRow.appendChild(quickBtns);
      controlsRow.appendChild(inputWrap);

      item.appendChild(topWrap);
      item.appendChild(controlsRow);
      grid.appendChild(item);
    }

    drawer.appendChild(toolbar);
    drawer.appendChild(grid);

    panel.appendChild(topBar);
    panel.appendChild(metricsGrid);
    panel.appendChild(drawer);
    return panel;
  }

  function renderCardsList() {
    const ownedContainer = document.getElementById('owned-cards-container');
    const ownedCountEl = document.getElementById('owned-section-count');
    const toggleOwnedBtn = document.getElementById('btn-toggle-owned-section');
    const prospectiveContainer = document.getElementById('prospective-cards-container');
    const prospectiveCountEl = document.getElementById('prospective-section-count');
    const prospectiveTitleEl = document.getElementById('prospective-section-title');
    const prospectiveSubEl = document.getElementById('prospective-section-subtitle');

    ownedContainer.replaceChildren();
    prospectiveContainer.replaceChildren();

    // 1. Always render all Owned cards at the top, sorted by gross fee descending
    const ownedCards = CARDS_CATALOG.filter((c) => state.cardStatus[c.id] === 'owned').sort(
      (a, b) => b.annualFee - a.annualFee || a.order - b.order
    );
    ownedCountEl.textContent = String(ownedCards.length);

    if (toggleOwnedBtn) {
      toggleOwnedBtn.textContent = state.ownedSectionHidden
        ? 'Show Owned (' + ownedCards.length + ')  ▾'
        : 'Hide Section  ▴';
    }
    ownedContainer.classList.toggle('hidden', Boolean(state.ownedSectionHidden));

    if (ownedCards.length === 0) {
      const emptyOwned = document.createElement('div');
      emptyOwned.className = 'section-empty-hint';
      emptyOwned.textContent =
        'No cards marked as Owned yet — set any card’s Portfolio Status to "Owned" to pin it here at the top.';
      ownedContainer.appendChild(emptyOwned);
    } else {
      for (const card of ownedCards) {
        ownedContainer.appendChild(buildCardElement(card));
      }
    }

    // 2. Render Prospective (or Hidden) cards below the filter bar
    const prospectiveCards = getFilteredAndSortedProspectiveCards();
    prospectiveCountEl.textContent = String(prospectiveCards.length);

    if (state.activeFilter === 'hidden') {
      prospectiveTitleEl.textContent = 'Hidden Cards';
      prospectiveSubEl.textContent = 'Cards hidden from your active comparison and portfolio calculations';
    } else {
      prospectiveTitleEl.textContent = 'Prospective Cards';
      prospectiveSubEl.textContent = 'Watchlist & unowned cards for comparison';
    }

    if (prospectiveCards.length === 0) {
      const emptyPros = document.createElement('div');
      emptyPros.className = 'section-empty-hint';
      emptyPros.textContent =
        state.activeFilter === 'hidden'
          ? 'No hidden cards.'
          : 'No prospective cards match your current filter or search query.';
      prospectiveContainer.appendChild(emptyPros);
    } else {
      for (const card of prospectiveCards) {
        prospectiveContainer.appendChild(buildCardElement(card));
      }
    }
  }

  function formatYearMonth(ym) {
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const parts = String(ym || '').split('-');
    if (parts.length < 2) return ym;
    const mIdx = parseInt(parts[1], 10) - 1;
    return (MONTHS[mIdx] || parts[1]) + ' ' + parts[0];
  }

  function parseYearMonthIndex(ym) {
    const parts = String(ym || '').split('-');
    return parseInt(parts[0], 10) * 12 + (parseInt(parts[1], 10) - 1);
  }

  const CREDITINTRO_SLUGS = {
    'amex-platinum': 'amex-platinum',
    'amex-platinum-schwab': 'amex-platinum-for-Schwab',
    'amex-platinum-ms': 'amex-platinum-for-morgan-stanley',
    'amex-gold': 'amex-premier-rewards-gold',
    'delta-reserve': 'amex-delta-reserve',
    'delta-platinum': 'amex-platinum-delta-skymiles',
    'delta-gold': 'amex-gold-delta-skymiles',
    'chase-sapphire-reserve': 'chase-sapphire-reserve',
    'chase-sapphire-preferred': 'chase-sapphire-preferred',
    'chase-freedom-flex': 'chase-freedom-flex',
    'united-club': 'chase-united-mileageplus-club',
    'united-quest': 'chase-united-quest',
    'united-explorer': 'chase-united-mileageplus-explorer',
    'citi-strata-elite': 'citi-strata-elite',
    'citi-strata-premier': 'citi-thankyou-premier',
    'citi-strata': 'citi-strata',
    'citi-custom-cash': 'citi-custom-cash',
    'citi-aa-executive': 'citi-aadvantage-executive',
    'citi-aa-globe': 'citi-aadvantage-globe',
    'citi-aa-platinum-select': 'citi-aadvantage-platinum-select',
    'capital-one-venture-x': 'capital-one-venture-x',
    'bofa-premium-elite': 'boa-premium-rewards-elite',
    'bofa-premium-rewards': 'boa-premium-rewards',
    'atmos-summit': 'boa-alaska-atmos-summit',
    'atmos-ascent': 'boa-alaska-atmos-ascent',
    'wf-autograph-journey': 'wells-fargo-autograph-journey',
    'wf-premier-autograph': 'wells-fargo-premier-autograph',
    'jetblue-premier': 'barclays-jetblue-premier'
  };

  function closeOfferHistoryModal() {
    const modal = document.getElementById('offer-history-modal');
    if (modal) modal.classList.add('hidden');
  }

  function openOfferHistoryModal(card, usccgUrl) {
    const rawEras = (typeof CARD_OFFER_HISTORY !== 'undefined' && CARD_OFFER_HISTORY[card.id]) || [];
    if (!rawEras.length) return;

    const modal = document.getElementById('offer-history-modal');
    const issuerEl = document.getElementById('hist-modal-issuer');
    const titleEl = document.getElementById('hist-modal-title');
    const subtitleEl = document.getElementById('hist-modal-subtitle');
    const curPillEl = document.getElementById('hist-modal-current-pill');
    const peakPillEl = document.getElementById('hist-modal-peak-pill');
    const usccgLinkEl = document.getElementById('hist-modal-usccg-link');
    const svg = document.getElementById('hist-svg-chart');

    issuerEl.textContent = card.issuer;
    titleEl.textContent = card.name + ' — Historical Welcome Offers';
    const firstStart = rawEras[0].start;
    const lastEnd = rawEras[rawEras.length - 1].end;
    subtitleEl.replaceChildren();
    subtitleEl.appendChild(document.createTextNode('Parsed from '));
    const chartImgSlug = CREDITINTRO_SLUGS[card.id];
    const chartImgLink = document.createElement('a');
    chartImgLink.href = chartImgSlug
      ? 'https://www.creditintro.com/credit-card/' + chartImgSlug + '/historical-offers/'
      : usccgUrl || 'https://www.uscreditcardguide.com/en/';
    chartImgLink.target = '_blank';
    chartImgLink.rel = 'noopener noreferrer';
    chartImgLink.className = 'official-card-link';
    chartImgLink.style.padding = '0';
    chartImgLink.textContent = 'USCCG';
    subtitleEl.appendChild(chartImgLink);

    const curEra = rawEras[rawEras.length - 1];
    let peakEra = rawEras[0];
    for (const e of rawEras) {
      if (e.bonus >= peakEra.bonus) peakEra = e;
    }

    const currencyUnit = card.offerCurrency || 'Points';
    function formatEraBonus(era) {
      return era.bonus.toLocaleString() + ' ' + currencyUnit;
    }
    function formatSpendShort(spend) {
      if (!spend) return '$0';
      return spend >= 1000 ? '$' + (spend / 1000).toFixed(spend % 1000 ? 1 : 0) + 'k' : '$' + spend;
    }

    curPillEl.textContent =
      'Current: ' +
      curEra.bonus.toLocaleString() +
      (curEra.spend ? ' (' + formatSpendShort(curEra.spend) + ')' : '');
    peakPillEl.textContent =
      peakEra === curEra
        ? 'Peak: Now'
        : 'Peak: ' +
          peakEra.bonus.toLocaleString() +
          ' (' +
          (peakEra.spend ? formatSpendShort(peakEra.spend) + ' • ' : '') +
          formatYearMonth(peakEra.start) +
          ')';

    if (usccgUrl) {
      usccgLinkEl.href = usccgUrl;
      usccgLinkEl.style.display = '';
    } else {
      usccgLinkEl.style.display = 'none';
    }

    // Build SVG chart geometry
    const NS = 'http://www.w3.org/2000/svg';
    svg.replaceChildren();

    const startMos = parseYearMonthIndex(firstStart);
    const endMos = Math.max(startMos + 1, parseYearMonthIndex(lastEnd));
    const totalMos = endMos - startMos;

    const xLeft = 58;
    const xRight = 702;
    const yTop = 18;
    const yBot = 242;
    const plotW = xRight - xLeft;
    const plotH = yBot - yTop;

    const maxBonusVal = Math.max(...rawEras.map((e) => e.bonus), 25000);
    const bonusStep =
      maxBonusVal >= 120000 ? 25000 : maxBonusVal >= 60000 ? 20000 : maxBonusVal >= 35000 ? 10000 : 5000;
    const maxBonusAxis = Math.ceil((maxBonusVal * 1.1) / bonusStep) * bonusStep;

    const maxSpendVal = Math.max(...rawEras.map((e) => e.spend || 0), 1000);
    const spendStep =
      maxSpendVal >= 12000 ? 5000 : maxSpendVal >= 5000 ? 2000 : maxSpendVal >= 2500 ? 1000 : 500;
    const maxSpendAxis = Math.ceil((maxSpendVal * 1.2) / spendStep) * spendStep;

    const xOfMo = (m) => xLeft + ((m - startMos) / totalMos) * plotW;
    const yOfBonus = (b) => yBot - (b / maxBonusAxis) * plotH;
    const yOfSpend = (s) => yBot - (s / maxSpendAxis) * plotH;

    let prevM1 = startMos;
    const eras = rawEras.map((e, idx) => {
      const m0 = Math.max(prevM1, parseYearMonthIndex(e.start));
      let m1 = parseYearMonthIndex(e.end);
      if (m1 <= m0) {
        m1 = idx === rawEras.length - 1 ? endMos : m0 + 1;
      }
      prevM1 = m1;
      const x0 = xOfMo(m0);
      const x1 = Math.max(x0 + 1, xOfMo(m1));
      return {
        ...e,
        idx,
        m0,
        m1,
        x0,
        x1,
        yB: yOfBonus(e.bonus),
        yS: yOfSpend(e.spend || 0)
      };
    });

    const el = (tag, attrs) => {
      const node = document.createElementNS(NS, tag);
      for (const [k, v] of Object.entries(attrs || {})) {
        node.setAttribute(k, String(v));
      }
      return node;
    };

    // Defs: gradient fill under bonus step curve
    const defs = el('defs');
    const grad = el('linearGradient', { id: 'histBonusGrad', x1: '0', y1: '0', x2: '0', y2: '1' });
    grad.appendChild(el('stop', { offset: '0%', 'stop-color': '#3b82f6', 'stop-opacity': '0.26' }));
    grad.appendChild(el('stop', { offset: '100%', 'stop-color': '#3b82f6', 'stop-opacity': '0.03' }));
    defs.appendChild(grad);
    svg.appendChild(defs);

    // Horizontal gridlines & Left Y-Axis labels (Bonus)
    const numLeftTicks = Math.round(maxBonusAxis / bonusStep);
    for (let i = 0; i <= numLeftTicks; i++) {
      const bVal = i * bonusStep;
      const y = yOfBonus(bVal);
      svg.appendChild(
        el('line', {
          x1: xLeft,
          y1: y,
          x2: xRight,
          y2: y,
          stroke: 'currentColor',
          'stroke-opacity': bVal === 0 ? '0.28' : '0.1',
          'stroke-width': '1'
        })
      );
      const lbl = el('text', {
        x: xLeft - 8,
        y: y + 4,
        'text-anchor': 'end',
        fill: '#2563eb',
        'font-size': '11',
        'font-weight': '600'
      });
      lbl.textContent = bVal === 0 ? '0' : bVal / 1000 + 'k';
      svg.appendChild(lbl);
    }

    // Right Y-Axis labels (Minimum Spend $)
    const numRightTicks = Math.round(maxSpendAxis / spendStep);
    for (let i = 0; i <= numRightTicks; i++) {
      const sVal = i * spendStep;
      const y = yOfSpend(sVal);
      const lbl = el('text', {
        x: xRight + 8,
        y: y + 4,
        'text-anchor': 'start',
        fill: '#ea580c',
        'font-size': '11',
        'font-weight': '600'
      });
      lbl.textContent =
        sVal === 0 ? '$0' : sVal >= 1000 ? '$' + (sVal / 1000).toFixed(sVal % 1000 ? 1 : 0) + 'k' : '$' + sVal;
      svg.appendChild(lbl);
    }

    // X-Axis ticks (Year labels or Year-Month labels for short ranges)
    const startYear = Math.floor(startMos / 12);
    const endYear = Math.floor(endMos / 12);
    if (totalMos <= 24) {
      const stepMo = Math.max(1, Math.round(totalMos / 6));
      for (let m = startMos; m <= endMos; m += stepMo) {
        const x = xOfMo(m);
        svg.appendChild(
          el('line', { x1: x, y1: yBot, x2: x, y2: yBot + 5, stroke: 'currentColor', 'stroke-opacity': '0.3' })
        );
        const yNum = Math.floor(m / 12);
        const mNum = String((m % 12) + 1).padStart(2, '0');
        const t = el('text', {
          x,
          y: yBot + 18,
          'text-anchor': 'middle',
          fill: 'currentColor',
          'fill-opacity': '0.65',
          'font-size': '11'
        });
        t.textContent = yNum + '-' + mNum;
        svg.appendChild(t);
      }
    } else {
      const yrStep = endYear - startYear > 8 ? 2 : 1;
      for (let yr = startYear + 1; yr <= endYear; yr++) {
        if ((yr - startYear) % yrStep !== 0 && yr !== endYear) continue;
        const m = yr * 12;
        if (m < startMos || m > endMos) continue;
        const x = xOfMo(m);
        svg.appendChild(
          el('line', { x1: x, y1: yBot, x2: x, y2: yBot + 5, stroke: 'currentColor', 'stroke-opacity': '0.3' })
        );
        const t = el('text', {
          x,
          y: yBot + 18,
          'text-anchor': 'middle',
          fill: 'currentColor',
          'fill-opacity': '0.65',
          'font-size': '11'
        });
        t.textContent = String(yr);
        svg.appendChild(t);
      }
    }

    // Active era highlight band
    const highlightBand = el('rect', {
      x: eras[eras.length - 1].x0,
      y: yTop,
      width: Math.max(2, eras[eras.length - 1].x1 - eras[eras.length - 1].x0),
      height: plotH,
      fill: '#3b82f6',
      'fill-opacity': '0.09'
    });
    svg.appendChild(highlightBand);

    // Step paths for Bonus and Spend (strictly orthogonal horizontal-then-vertical steps)
    let bonusD = 'M ' + eras[0].x0.toFixed(1) + ' ' + eras[0].yB.toFixed(1);
    let spendD = 'M ' + eras[0].x0.toFixed(1) + ' ' + eras[0].yS.toFixed(1);
    for (let i = 0; i < eras.length; i++) {
      const e = eras[i];
      if (i > 0) {
        const prev = eras[i - 1];
        bonusD += ' L ' + e.x0.toFixed(1) + ' ' + prev.yB.toFixed(1);
        bonusD += ' L ' + e.x0.toFixed(1) + ' ' + e.yB.toFixed(1);
        spendD += ' L ' + e.x0.toFixed(1) + ' ' + prev.yS.toFixed(1);
        spendD += ' L ' + e.x0.toFixed(1) + ' ' + e.yS.toFixed(1);
      }
      bonusD += ' L ' + e.x1.toFixed(1) + ' ' + e.yB.toFixed(1);
      spendD += ' L ' + e.x1.toFixed(1) + ' ' + e.yS.toFixed(1);
    }
    const areaD =
      bonusD +
      ' L ' +
      eras[eras.length - 1].x1.toFixed(1) +
      ' ' +
      yBot +
      ' L ' +
      eras[0].x0.toFixed(1) +
      ' ' +
      yBot +
      ' Z';

    svg.appendChild(el('path', { d: areaD, fill: 'url(#histBonusGrad)' }));
    svg.appendChild(
      el('path', {
        d: spendD,
        fill: 'none',
        stroke: '#f97316',
        'stroke-width': '2',
        'stroke-dasharray': '5,3',
        'stroke-linejoin': 'round'
      })
    );
    svg.appendChild(
      el('path', {
        d: bonusD,
        fill: 'none',
        stroke: '#3b82f6',
        'stroke-width': '2.75',
        'stroke-linejoin': 'round'
      })
    );

    // Hover crosshair & dots
    const lastE = eras[eras.length - 1];
    const lastMidX = (lastE.x0 + lastE.x1) / 2;
    const crossLine = el('line', {
      x1: lastMidX,
      y1: yTop,
      x2: lastMidX,
      y2: yBot,
      stroke: 'currentColor',
      'stroke-opacity': '0.35',
      'stroke-width': '1',
      'stroke-dasharray': '3,3'
    });
    const dotBonus = el('circle', {
      cx: lastMidX,
      cy: lastE.yB,
      r: '5',
      fill: '#3b82f6',
      stroke: '#ffffff',
      'stroke-width': '1.5'
    });
    const dotSpend = el('circle', {
      cx: lastMidX,
      cy: lastE.yS,
      r: '4.5',
      fill: '#f97316',
      stroke: '#ffffff',
      'stroke-width': '1.5'
    });
    svg.appendChild(crossLine);
    svg.appendChild(dotBonus);
    svg.appendChild(dotSpend);

    function selectEra(idx, customX) {
      const e = eras[idx];
      if (!e) return;
      const cx = customX !== undefined ? customX : (e.x0 + e.x1) / 2;
      highlightBand.setAttribute('x', String(e.x0));
      highlightBand.setAttribute('width', String(Math.max(2, e.x1 - e.x0)));
      crossLine.setAttribute('x1', String(cx));
      crossLine.setAttribute('x2', String(cx));
      dotBonus.setAttribute('cx', String(cx));
      dotBonus.setAttribute('cy', String(e.yB));
      dotSpend.setAttribute('cx', String(cx));
      dotSpend.setAttribute('cy', String(e.yS));

      document.getElementById('hist-era-period').textContent =
        formatYearMonth(e.start) + ' – ' + formatYearMonth(e.end);
      document.getElementById('hist-era-bonus').textContent = formatEraBonus(e);
      document.getElementById('hist-era-spend').textContent = e.spend
        ? '$' + e.spend.toLocaleString()
        : '—';
    }

    // Transparent hover hit-target rect
    const hitRect = el('rect', {
      x: xLeft,
      y: yTop,
      width: plotW,
      height: plotH,
      fill: 'transparent'
    });
    hitRect.addEventListener('mousemove', (ev) => {
      const pt = svg.createSVGPoint();
      pt.x = ev.clientX;
      pt.y = ev.clientY;
      const cursor = pt.matrixTransform(svg.getScreenCTM().inverse());
      const clampedX = Math.max(xLeft, Math.min(xRight, cursor.x));
      let foundIdx = eras.length - 1;
      for (let i = 0; i < eras.length; i++) {
        if (clampedX >= eras[i].x0 && clampedX <= eras[i].x1) {
          foundIdx = i;
          break;
        }
      }
      selectEra(foundIdx, clampedX);
    });
    svg.appendChild(hitRect);

    selectEra(eras.length - 1);
    modal.classList.remove('hidden');
  }

  function renderAll() {
    renderSummaryStrip();
    renderCardsList();
  }

  function bindGlobalEvents() {
    const histModal = document.getElementById('offer-history-modal');
    const histCloseBtn = document.getElementById('hist-modal-close');
    if (histCloseBtn) {
      histCloseBtn.addEventListener('click', closeOfferHistoryModal);
    }
    if (histModal) {
      histModal.addEventListener('click', (e) => {
        if (e.target === histModal) closeOfferHistoryModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeOfferHistoryModal();
    });
    const filterButtons = document.querySelectorAll('#filter-pills-group .pill-btn');
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeFilter = btn.getAttribute('data-filter') || 'all';
        persistUiState();
        renderCardsList();
      });
    });

    document.getElementById('sort-select').addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      persistUiState();
      renderCardsList();
    });

    document.getElementById('search-cards-input').addEventListener('input', (e) => {
      state.searchQuery = e.target.value || '';
      renderCardsList();
    });

    document.getElementById('btn-expand-all').addEventListener('click', () => {
      for (const card of CARDS_CATALOG) {
        state.expandedCards[card.id] = true;
      }
      renderCardsList();
    });

    document.getElementById('btn-collapse-all').addEventListener('click', () => {
      for (const card of CARDS_CATALOG) {
        state.expandedCards[card.id] = false;
      }
      renderCardsList();
    });

    const toggleOwnedBtn = document.getElementById('btn-toggle-owned-section');
    if (toggleOwnedBtn) {
      toggleOwnedBtn.addEventListener('click', () => {
        state.ownedSectionHidden = !state.ownedSectionHidden;
        persistUiState();
        renderCardsList();
      });
    }

    const exportBtn = document.getElementById('btn-export-valuations');
    if (exportBtn) {
      exportBtn.addEventListener('click', exportValuationsToFile);
    }

    const importBtn = document.getElementById('btn-import-valuations');
    const importInput = document.getElementById('input-import-valuations');
    if (importBtn && importInput) {
      importBtn.addEventListener('click', () => {
        importInput.value = '';
        importInput.click();
      });
      importInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const parsed = JSON.parse(String(reader.result || '{}'));
            initDefaultState();
            applyStateData(parsed);
            persistState();
            renderAll();
          } catch (_err) {
            window.alert('Invalid valuations JSON file.');
          }
        };
        reader.readAsText(file);
      });
    }

    const resetBtn = document.getElementById('btn-reset-valuations');
    if (resetBtn) {
      resetBtn.addEventListener('click', async () => {
        try {
          window.localStorage.removeItem(STORAGE_KEY);
        } catch (_err) {
          // Ignore storage error
        }
        await loadSavedState();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadUiState();
    bindGlobalEvents();
    loadSavedState();
  });
})();
