import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const body = await req.json();
  const { destination, rentalDays, dailyRate, deliveryFee = 0, returnFee = 0, email } = body;
  if (!destination || !rentalDays || !dailyRate || !email) return NextResponse.json({ error: 'Missing checkout fields' }, { status: 400 });
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) return NextResponse.json({ error: 'Stripe is not configured' }, { status: 503 });
  const stripe = new Stripe(secret);
  const rentalAmount = Math.round(Number(rentalDays) * Number(dailyRate) * 100);
  const logisticsAmount = Math.round((Number(deliveryFee) + Number(returnFee)) * 100);
  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
    { price_data: { currency: 'sgd', product_data: { name: `QY Roam Pocket Wi-Fi — ${destination}`, description: `${rentalDays} rental day(s)` }, unit_amount: rentalAmount }, quantity: 1 }
  ];
  if (logisticsAmount > 0) line_items.push({ price_data: { currency: 'sgd', product_data: { name: 'Delivery & return logistics' }, unit_amount: logisticsAmount }, quantity: 1 });
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    customer_email: email,
    line_items,
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://qyroam.com'}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://qyroam.com'}/checkout?cancelled=1`,
    metadata: { destination: String(destination), rentalDays: String(rentalDays) }
  });
  return NextResponse.json({ url: session.url });
}
