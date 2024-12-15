import { create } from "zustand";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { createData } from "@/validation/CreateForm";

interface Post {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryHeader: string;
  image?: string[];
}
interface PostStore {
  posts: {
    posts: Post[];
  };
  loading: boolean;
  createPost: (data: createData & { image: string }) => Promise<void>;
  getPost: () => Promise<void>;
  getPostById: (params: { title: string; id: any }) => Promise<void>;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: {
    posts: [],
  },
  loading: false,

  createPost: async (data) => {
    set({ loading: true });
    try {
      const response = await axios.post("/post/create", data);
      console.log("🚀 ~ createPost: ~ data:", data);

      set((prevState: any) => ({
        posts: {
          posts: [...prevState.posts, response.data],
        },
        loading: false,
      }));

      toast.success("Post created successfully!");
    } catch (error: any) {
      console.log("🚀 ~ createPost: ~ error:", error);
      set({ loading: false });
    }
  },
  getPost: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/post/getFilter");

      set({
        posts: response.data,
        loading: false,
      });
    } catch (error: any) {
      set({ loading: false });
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      toast.error(errorMessage);
    }
  },
  getPostById: async ({ id, title }: { id: any; title: string }) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/post/getById/${title}/${id}`);

      set({
        posts: response.data.data,
        loading: false,
      });
    } catch (error: any) {
      console.error(error.message);
      set({
        loading: false,
      });
    }
  },
}));
