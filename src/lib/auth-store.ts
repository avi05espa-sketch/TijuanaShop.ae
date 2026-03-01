import { create } from 'zustand';

interface AuthState {
  user: any | null;
  initialized: boolean;
  setUser: (user: any | null) => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  initialized: false,
  setUser: (user) => set({ user, initialized: true }),
  signOut: () => set({ user: null, initialized: true }),
}));
