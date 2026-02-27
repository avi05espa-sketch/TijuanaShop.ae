import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: Request) {
  const { type } = await request.json(); // Aquí recibe si es 'multa' o 'promo'

  // Definimos el monto según el tipo
  const amount = type === 'promo' 
    ? 15000  // Ejemplo: $150.00 MXN para destacados
    : 5000;  // Los $50.00 MXN de tu multa fija

  const productName = type === 'promo'
    ? 'Promoción de Destacados - Tijuana Shop'
    : 'Multa de Cumplimiento - Avi-Espa';

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{
        price_data: {
          currency: 'mxn',
          product_data: { name: productName },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
