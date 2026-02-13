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
            ::-webkit-scrollbar { display: none; }
        </style>
    </head>
    <body class="bg-gray-50">
        <div id="root"></div>

        <script type="text/babel">
            const { useState } = React;

            function Marketplace() {
                const [busqueda, setBusqueda] = useState("");
                const [apartados, setApartados] = useState([]);
                
                const productos = [
                    { id: 1, nombre: "iPhone 15 Pro", precio: 18500, cat: "Electrónica", img: "📱" },
                    { id: 2, nombre: "Jordan Retro 4", precio: 4200, cat: "Calzado", img: "👟" },
                    { id: 3, nombre: "MacBook Air M2", precio: 15000, cat: "Electrónica", img: "💻" }
                ];

                const gestionarApartado = (p) => {
                    if (apartados.find(item => item.id === p.id)) {
                        setApartados(apartados.filter(item => item.id !== p.id));
                    } else {
                        setApartados([...apartados, p]);
                    }
                };

                const textoWhatsApp = () => {
                    const lista = apartados.map(p => "- " + p.nombre).join("%0A");
                    return "Hola! Vi esto en Tijuana Shop y quiero preguntar disponibilidad para apartar:%0A" + lista;
                };

                return (
                    <div className="min-h-screen pb-32">
                        {/* HEADER IDENTIDAD */}
                        <header className="bg-turquesa pt-8 pb-12 px-6 rounded-b-[50px] shadow-xl text-center">
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-[#D2B48C] rounded-full border-4 border-white flex items-center justify-center text-3xl shadow-lg">🛍️</div>
                                <h1 className="text-4xl font-black text-black italic tracking-tighter">TIJUANA SHOP</h1>
                            </div>
                            <p className="text-white font-bold text-[10px] uppercase tracking-[3px] mb-6">Tu Marketplace Local en Línea</p>
                            <input 
                                type="text" 
                                placeholder="Buscar en Tijuana..." 
                                className="w-full max-w-md py-4 px-6 rounded-2xl shadow-lg focus:outline-none"
                                onChange={(e) => setBusqueda(e.target.value)}
                            />
                        </header>

                        <main className="max-w-4xl mx-auto px-6 -mt-6">
                            {/* REGLAS DEL MARKETPLACE (LO QUE FALTABA) */}
                            <div className="bg-white p-6 rounded-[30px] shadow-sm border border-gray-100 mb-8">
                                <h3 className="text-[#00cba9] font-black text-xs uppercase mb-3 tracking-widest">⚠️ Reglas de Entrega</h3>
                                <ul className="text-[11px] text-gray-500 font-bold space-y-2">
                                    <li className="flex items-center gap-2">📍 Puntos medios: Macroplaza, Plaza Rio o Centro.</li>
                                    <li className="flex items-center gap-2">🤝 Revisar el producto antes de pagar.</li>
                                    <li className="flex items-center gap-2">⏰ Tolerancia de 15 min en entregas.</li>
                                </ul>
                            </div>

                            {/* GRILLA DE PRODUCTOS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {productos.filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase())).map(p => {
                                    const estaApartado = apartados.find(item => item.id === p.id);
                                    return (
                                        <div key={p.id} className="bg-white p-5 card-modern shadow-md border border-gray-100 flex gap-4 items-center">
                                            <div className="text-4xl bg-gray-50 w-20 h-20 flex items-center justify-center rounded-2xl">{p.img}</div>
                                            <div className="flex-1">
                                                <h3 className="font-black text-gray-800 uppercase text-xs">{p.nombre}</h3>
                                                <div className="text-xl font-black text-turquesa">$ {p.precio.toLocaleString()}</div>
                                                <button 
                                                    onClick={() => gestionarApartado(p)}
                                                    className={"mt-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase w-full " + (estaApartado ? "bg-gray-200 text-gray-500" : "bg-black text-white")}
                                                >
                                                    {estaApartado ? "✓ SELECCIONADO" : "APARTAR / PREGUNTAR"}
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </main>

                        {/* CARRITO DE NEGOCIACIÓN */}
                        {apartados.length > 0 && (
                            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white border-2 border-black p-5 rounded-[30px] shadow-2xl z-50">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex-1 text-left">
                                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Preguntar por {apartados.length} artículos</div>
                                        <div className="text-lg font-black text-black">¿Está disponible?</div>
                                    </div>
                                    <a 
                                        href={"https://wa.me/526641234567?text=" + textoWhatsApp()}
                                        target="_blank"
                                        className="bg-[#25D366] text-white px-6 py-4 rounded-2xl font-black text-xs uppercase text-center shadow-lg"
                                    >
                                        WHATSAPP ✅
                                    </a>
                                </div>
                            </div>
                        )}

                        <footer className="py-12 text-center text-gray-300 font-bold text-[9px] tracking-[4px]">
                            © 2026 AVI-ESPA | TIJUANASHOP.COM
                        </footer>
                    </div>
                );
            }

            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(<Marketplace />);
        </script>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Marketplace Tijuana Shop Listo'));
