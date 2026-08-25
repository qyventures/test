# QY Roam launch specification

## Locked operating assumptions
- Brand/domain: QY Roam / qyroam.com
- Operator: QY Venture Pte. Ltd.
- Customer support: +65 8032 7183
- Initial product: pocket Wi-Fi rental
- Pricing rule: at least 3% below comparable Yoowifi daily rate; prices are floored to cents, not rounded up
- Fulfilment: courier to customer; customer returns device after travel
- Meta live budget ceiling: S$10/day

## Meta funnel events
- ViewContent: destination/product page
- Search: country + start/end dates submitted
- InitiateCheckout: checkout starts
- AddPaymentInfo: payment step reached where supported
- Purchase: Stripe-confirmed successful order, value + currency + destination + rental_days

Use Meta Pixel client-side for page/funnel signals and Conversions API server-side for Purchase. Deduplicate browser/server Purchase with one event_id.

## Launch campaign draft
Campaign: QY Roam — Singapore travel Wi-Fi conversions
Budget: S$10/day maximum
Objective: Sales / Purchase
Geo: Singapore
Initial destination ad groups: Japan/Korea; Thailand/Malaysia; China/Taiwan/Hong Kong.
Primary message: portable travel Wi-Fi delivered to your door, share across devices, priced below comparable Yoowifi daily rates.
Do not claim network speed, unlimited data, device count, battery hours or coverage until supplier specs are loaded.

## Go-live blockers
- qyroam.com DNS mapped to deployment
- STRIPE_SECRET_KEY + webhook signing secret installed in deployment secrets
- Supabase project URL + service/auth keys installed; schema applied
- Meta Pixel/Dataset ID + CAPI token verified
- QY return address added to customer instructions
- Exact delivery/return logistics fee confirmed before accepting live orders
- One live test payment and refund completed

## Current Yoowifi operations benchmark (checked 25 Aug 2026)
Yoowifi public terms state orders before 5 PM weekdays are prepared for standard courier delivery; packing/delivery costs may be added at checkout. Public return instructions specify a prepaid return label/mail bag and SingPost drop-off, with return required within 5 days after plan end. QY Roam will mirror the convenience model but keep exact fee values configurable until verified.
