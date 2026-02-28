export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          seller_id: string
          title: string
          description: string
          price: number
          category: string
          image_url: string | null
          pickup_point: string
          status: string
          created_at: string
        }
        Insert: {
          title: string
          price: number
          category: string
          seller_id: string
          // los demás son opcionales porque tienen valores por defecto
        }
      }
      profiles: {
        Row: {
          id: string
          user_id: string
          display_name: string
          avatar_url: string | null
        }
      }
    }
  }
}
