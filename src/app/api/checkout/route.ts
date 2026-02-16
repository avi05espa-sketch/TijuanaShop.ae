import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Aquí usamos la llave secreta que configuramos en Vercel
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any,
});

export async function POST(request: Request) {
  try {
    const { precioId } = await request.json();

    // Creamos la sesión de pago de Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'oxxo'], // OXXO para tus clientes en Tijuana
      line_items: [
        {
          price: precioId, // Aquí llega el ID de $99 o el de $50 automáticamente
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL || 'https://' + process.env.VERCEL_URL}/?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'https://' + process.env.VERCEL_URL}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Error en Stripe:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
