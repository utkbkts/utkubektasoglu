import { create } from "zustand";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { createData } from "@/validation/CreateForm";

interface Post {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
}

interface PostStore {
  posts: Post[];
  loading: boolean;
  createPost: (data: createData & { image: string }) => Promise<void>;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  loading: false,

  createPost: async (data) => {
    set({ loading: true });
    try {
      const response = await axios.post("/post/create", data);

      set((prevState) => ({
        posts: [...prevState.posts, response.data],
        loading: false,
      }));

      toast.success("Post created successfully!");
    } catch (error: any) {
      set({ loading: false });
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      toast.error(errorMessage);
    }
  },
}));
