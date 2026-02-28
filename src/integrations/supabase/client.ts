import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Estas variables las toma de Vercel (las que pusimos con VITE_)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
