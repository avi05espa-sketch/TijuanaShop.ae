export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  condition: "Nuevo" | "Usado";
  location: string;
  sellerId: string;
  images: string[];
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
  location: string;
  createdAt: string;
  listings: string[];
}
