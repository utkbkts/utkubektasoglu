import axios from "@/lib/axios";
import { createLoginData } from "@/validation/CreateLogin";
import { createRegisterData } from "@/validation/CreateRegister";
import { toast } from "sonner";
import { create } from "zustand";

interface Props {
  user: any;
  loading: boolean;
  checkingAuth: boolean;
  signup: (data: createRegisterData) => Promise<void>;
  login: (data: createLoginData) => Promise<void>;
  checkAuth: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useUserStore = create<Props>((set, get) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async ({ name, email, password }: createRegisterData) => {
    set({ loading: true });

    try {
      const response = await axios.post("/auth/register", {
        name,
        email,
        password,
      });

      set({ user: response.data, loading: false });
    } catch (error: any) {
      set({ loading: false });
      const errorMessage = error.response?.data?.message;
      toast.error(errorMessage);
    }
  },
  login: async ({ email, password }: createLoginData) => {
    set({ loading: true });

    try {
      const promiseFunction = axios.post("/auth/login", {
        email,
        password,
      });

      const res = await promiseFunction;

      set({ user: res.data, loading: false });
    } catch (error: any) {
      set({ loading: false });

      const errorMessage = error.response?.data?.message;
      toast.error(errorMessage);
    }
  },

  checkAuth: async () => {
    set({ checkingAuth: true });
    try {
      const response = await axios.get("/auth/getMe");
      set({ user: response.data, checkingAuth: false });
    } catch (error: any) {
      set({ checkingAuth: false, user: null });
      console.log(error.response.data.message);
    }
  },
}));
