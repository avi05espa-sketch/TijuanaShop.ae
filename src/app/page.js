const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tijuana Shop | Marketplace Local</title>
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            .bg-turquesa { background-color: #00cba9; }
            .card-modern { border-radius: 24px; }
        </style>
    </head>
    <body class="bg-gray-50">
        <div id="root"></div>
        <script type="text/babel">
            const { useState } = React;
            function Marketplace() {
                const [apartados, setApartados] = useState([]);
                const productos = [
                    { id: 1, nombre: "iPhone 15 Pro", precio: 18500, img: "📱" },
                    { id: 2, nombre: "Jordan Retro 4", precio: 4200, img: "👟" }
                ];
                const gestionarApartado = (p) => {
                    const existe = apartados.find(item => item.id === p.id);
                    if (existe) setApartados(apartados.filter(item => item.id !== p.id));
                    else setApartados([...apartados, p]);
                };
                return (
                    <div className="min-h-screen">
                        <header className="bg-turquesa pt-8 pb-12 px-6 rounded-b-[50px] shadow-xl text-center text-black">
                            <div className="flex items-center justify-center gap-4 mb-2">
                                <div className="w-14 h-14 bg-[#D2B48C] rounded-full border-4 border-white flex items-center justify-center text-2xl">🛍️</div>
                                <h1 className="text-3xl font-black italic">TIJUANA SHOP</h1>
                            </div>
                            <p className="text-white font-bold text-[10px] uppercase tracking-widest">Tu Marketplace Local en Línea</p>
                        </header>
                        <main className="max-w-4xl mx-auto px-6 -mt-6">
                            <div className="bg-white p-5 rounded-[25px] shadow-sm mb-6 border border-gray-100">
                                <h3 className="text-[#00cba9] font-black text-xs uppercase mb-2">⚠️ REGLAS DE ENTREGA</h3>
                                <p className="text-[10px] text-gray-500 font-bold">📍 Puntos medios: Macroplaza o Plaza Rio. 🤝 Trato directo.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {productos.map(p => (
                                    <div key={p.id} className="bg-white p-5 card-modern shadow-md flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <div className="text-4xl">{p.img}</div>
                                            <div>
                                                <h3 className="font-black text-gray-800 text-sm uppercase">{p.nombre}</h3>
                                                <div className="text-lg font-black text-turquesa">$ {p.precio}</div>
                                            </div>
                                        </div>
                                        <button onClick={() => gestionarApartado(p)} className={"px-4 py-2 rounded-xl text-[10px] font-black " + (apartados.find(i => i.id === p.id) ? "bg-gray-200" : "bg-black text-white")}>
                                            {apartados.find(i => i.id === p.id) ? "LISTO" : "APARTAR"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </main>
                        {apartados.length > 0 && (
                            <div className="fixed bottom-6 w-[90%] left-[5%] bg-white border-2 border-black p-4 rounded-[25px] flex justify-between items-center shadow-2xl">
                                <div className="text-xs font-black uppercase">¿Sigue disponible?</div>
                                <a href={"https://wa.me/526641234567?text=Hola Avi, me interesa: " + apartados.map(a => a.nombre).join(", ")} className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-black text-xs">WHATSAPP</a>
                            </div>
                        )}
                        <footer className="py-10 text-center text-gray-300 font-bold text-[9px]">BY AVI-ESPA 2026</footer>
                    </div>
                );
            }
            ReactDOM.createRoot(document.getElementById('root')).render(<Marketplace />);
        </script>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
