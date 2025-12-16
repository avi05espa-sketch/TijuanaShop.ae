import type { Product, Category, User } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

const users: User[] = [
  {
    id: 'user-1',
    name: 'Ana García',
    email: 'ana.garcia@example.com',
    profilePicture: getImage('user-1'),
    location: 'Zona Centro, Tijuana',
    createdAt: '2023-10-01T10:00:00Z',
    listings: ['prod-1', 'prod-5']
  },
  {
    id: 'user-2',
    name: 'Carlos Martinez',
    email: 'carlos.martinez@example.com',
    profilePicture: getImage('user-2'),
    location: 'Otay, Tijuana',
    createdAt: '2023-09-15T14:30:00Z',
    listings: ['prod-2', 'prod-6', 'prod-10']
  },
  {
    id: 'user-3',
    name: 'Sofia Rodriguez',
    email: 'sofia.r@example.com',
    profilePicture: getImage('user-3'),
    location: 'Playas de Tijuana, Tijuana',
    createdAt: '2023-11-05T18:00:00Z',
    listings: ['prod-3', 'prod-7', 'prod-11']
  },
    {
    id: 'user-4',
    name: 'Javier Hernandez',
    email: 'j.hernandez@example.com',
    profilePicture: getImage('user-4'),
    location: 'La Mesa, Tijuana',
    createdAt: '2023-08-20T09:00:00Z',
    listings: ['prod-4', 'prod-8', 'prod-9', 'prod-12']
  },
];

const categories: Category[] = [
  { id: 'autos', name: 'Autos' },
  { id: 'electronica', name: 'Electrónica' },
  { id: 'hogar', name: 'Hogar' },
  { id: 'ropa', name: 'Ropa' },
  { id: 'otros', name: 'Otros' },
];

const products: Product[] = [
  {
    id: 'prod-1',
    title: 'Bicicleta de Montaña',
    description: 'Bicicleta de montaña rodada 26, en excelentes condiciones. Perfecta para paseos en la ciudad y senderos ligeros.',
    price: 2500,
    category: 'otros',
    condition: 'Usado',
    location: 'Zona Centro',
    sellerId: 'user-1',
    images: [getImage('product-1'), getImage('product-1'), getImage('product-1')],
    createdAt: '2023-11-10T12:00:00Z',
  },
  {
    id: 'prod-2',
    title: 'Sofá Moderno Gris',
    description: 'Sofá de 3 plazas, color gris oscuro. Menos de un año de uso, muy cómodo y en perfecto estado. Ideal para sala de estar.',
    price: 6000,
    category: 'hogar',
    condition: 'Usado',
    location: 'Otay',
    sellerId: 'user-2',
    images: [getImage('product-2'), getImage('product-2')],
    createdAt: '2023-11-09T18:45:00Z',
  },
  {
    id: 'prod-3',
    title: 'iPhone 14 Pro',
    description: 'iPhone 14 Pro de 256GB, color morado. Liberado de fábrica. Incluye caja y cable original. Sin rayones.',
    price: 18000,
    category: 'electronica',
    condition: 'Usado',
    location: 'Playas de Tijuana',
    sellerId: 'user-3',
    images: [getImage('product-3')],
    createdAt: '2023-11-09T15:20:00Z',
  },
  {
    id: 'prod-4',
    title: 'Chamarra de Piel',
    description: 'Chamarra de piel para hombre, talla M. Estilo motociclista, color negro. Marca reconocida.',
    price: 1200,
    category: 'ropa',
    condition: 'Nuevo',
    location: 'La Mesa',
    sellerId: 'user-4',
    images: [getImage('product-4')],
    createdAt: '2023-11-08T20:00:00Z',
  },
   {
    id: 'prod-5',
    title: 'Guitarra Acústica Yamaha',
    description: 'Guitarra acústica marca Yamaha, modelo F310. Ideal para principiantes. Cuerdas nuevas y recién calibrada. Incluye funda.',
    price: 1800,
    category: 'otros',
    condition: 'Usado',
    location: 'Zona Centro',
    sellerId: 'user-1',
    images: [getImage('product-5')],
    createdAt: '2023-11-07T11:00:00Z',
  },
  {
    id: 'prod-6',
    title: 'VW Sedán 1998',
    description: 'Vocho clásico, modelo 1998. Motor en buen estado, detalles estéticos por el año. Papeles en regla.',
    price: 45000,
    category: 'autos',
    condition: 'Usado',
    location: 'Otay',
    sellerId: 'user-2',
    images: [getImage('product-6')],
    createdAt: '2023-11-06T19:30:00Z',
  },
  {
    id: 'prod-7',
    title: 'Laptop Dell XPS 15',
    description: 'Laptop Dell XPS 15, pantalla 4K, Core i7, 16GB RAM, 512GB SSD. Ideal para diseño y programación. En excelente estado.',
    price: 22000,
    category: 'electronica',
    condition: 'Usado',
    location: 'Playas de Tijuana',
    sellerId: 'user-3',
    images: [getImage('product-9')],
    createdAt: '2023-11-05T10:15:00Z',
  },
  {
    id: 'prod-8',
    title: 'Refrigerador Mabe',
    description: 'Refrigerador Mabe 11 pies cúbicos. Funcionando perfectamente, congela y enfría sin problemas. Pequeños detalles estéticos.',
    price: 3500,
    category: 'hogar',
    condition: 'Usado',
    location: 'La Mesa',
    sellerId: 'user-4',
    images: [getImage('product-7'), getImage('product-8')],
    createdAt: '2023-11-04T16:00:00Z',
  },
];

export function getProducts(query?: string, category?: string): Product[] {
  let filteredProducts = [...products];

  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }

  if (query) {
    const lowercasedQuery = query.toLowerCase();
    filteredProducts = filteredProducts.filter(p =>
      p.title.toLowerCase().includes(lowercasedQuery) ||
      p.description.toLowerCase().includes(lowercasedQuery)
    );
  }
  
  return filteredProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getCategories(): Category[] {
  return categories;
}

export function getUser(id: string): User | undefined {
  return users.find(u => u.id === id);
}

export function getCategory(id: string): Category | undefined {
    return categories.find(c => c.id === id);
}
