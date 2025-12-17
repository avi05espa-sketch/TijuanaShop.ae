import { collection, getDocs, doc, getDoc, query, where, orderBy } from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';
import type { Product, Category, User } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

const staticUsers: User[] = [
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

// --- Firestore Data Functions ---

export async function getProducts(db: Firestore, {
  categories,
  conditions,
}: {
  categories?: string[];
  conditions?: string[];
} = {}): Promise<Product[]> {
  try {
    const productsRef = collection(db, "products");
    
    let q = query(productsRef, orderBy("createdAt", "desc"));

    if (categories && categories.length > 0) {
      q = query(q, where("category", "in", categories));
    }
    if (conditions && conditions.length > 0) {
        q = query(q, where("condition", "in", conditions));
    }

    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        description: data.description,
        price: data.price,
        category: data.category,
        condition: data.condition,
        location: data.location,
        sellerId: data.sellerId,
        images: data.images,
        createdAt: data.createdAt.toDate().toISOString(),
      } as Product;
    });
    return products;
  } catch (error) {
    console.error("Error fetching products from Firestore:", error);
    return [];
  }
}

export async function getProduct(db: Firestore, id: string): Promise<Product | undefined> {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        createdAt: data.createdAt.toDate().toISOString(),
      } as Product;
    } else {
      console.log("No such product document!");
      return undefined;
    }
  } catch (error) {
    console.error("Error fetching product from Firestore:", error);
    return undefined;
  }
}

// Still using static data for users until a full user profile system is built.
export async function getUser(db: Firestore, id: string): Promise<User | undefined> {
   try {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data
      } as User;
    } else {
      // Fallback to static user for now
      return staticUsers.find(u => u.id === id);
    }
  } catch (error) {
    console.error("Error fetching user from Firestore:", error);
    return staticUsers.find(u => u.id === id); // Fallback
  }
}


// --- Static Data Functions (Legacy) ---

export function getCategories(): Category[] {
  return categories;
}

export function getCategory(id: string): Category | undefined {
    return categories.find(c => c.id === id);
}