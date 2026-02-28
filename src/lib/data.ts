export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  status: 'disponible' | 'apartado' | 'vendido';
  sellerName: string;
  deliveryPointName: string;
}

export const CATEGORIES = ['Electrónica', 'Ropa', 'Hogar', 'Deportes', 'Otros'];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1', title: 'iPhone 14 Pro Max', description: '256GB, impecable.',
    price: 15500, images: ['https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400'],
    category: 'Electrónica', status: 'disponible', sellerName: 'Carlos M.',
    deliveryPointName: 'Plaza Río Tijuana'
  },
  {
    id: '2', title: 'Multa de Cumplimiento', description: 'Pago de multa obligatoria.',
    price: 50, images: [''], category: 'Servicios', status: 'disponible', 
    sellerName: 'Avi-Espa', deliveryPointName: 'Pago en Línea'
  }
];
