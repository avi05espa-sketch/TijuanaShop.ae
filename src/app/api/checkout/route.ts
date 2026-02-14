import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Aquí usaremos tu llave secreta de Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: Request) {
  const { precioId, successUrl, cancelUrl } = await request.json();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'oxxo'], // ¡OXXO es vital para Tijuana!
      line_items: [{ price: precioId, quantity: 1 }],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl,
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
