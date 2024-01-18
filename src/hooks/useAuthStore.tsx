import { create } from "zustand";

interface Credentials {
  email: string;
  name: string;
}

interface AuthStore {
  isLoggedIn: boolean;
  login: (credentials: Credentials) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  login: async (credentials: Credentials) => {
    const { email, name } = credentials;
    console.log(email, name);
    set({ isLoggedIn: true });
  },
  logout: () => {},
}));

export default useAuthStore;
