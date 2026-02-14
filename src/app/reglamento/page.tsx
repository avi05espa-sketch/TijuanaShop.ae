// Agrega esta función antes del return
const pagarMulta = async () => {
  const respuesta = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      precioId: 'ID_DE_STRIPE_DE_50_PESOS', // Este ID lo sacas de tu Stripe
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/reglamento',
    }),
  });
  
  const data = await respuesta.json();
  if (data.url) window.location.href = data.url; 
};

// Y en el botón de pagar multa, ponle el onClick:
<Button 
  onClick={pagarMulta} 
  className="bg-[#00cba9] text-black font-black w-full rounded-xl"
>
  PAGAR MULTA ($50 MXN)
</Button>
