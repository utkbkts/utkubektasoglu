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
  postsAll: any;
  loading: boolean;
  postTags: any;
  postCategories: any;
  createPost: (data: createData & { image: string }) => Promise<void>;
  getPostFilter: (page: any) => Promise<void>;
  getAll: () => Promise<void>;
  getTags: () => Promise<void>;
  getCategories: () => Promise<void>;
  getPostById: (params: { title: string; id: any }) => Promise<void>;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: {
    posts: [],
  },
  postTags: [],
  postsAll: [],
  postCategories: [],
  loading: false,

  createPost: async (data) => {
    set({ loading: true });
    try {
      const response = await axios.post("/post/create", data);

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
  getPostFilter: async (page: any) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/post/getFilter?page=${page}`);

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
  getAll: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/post/getAll");
      set({
        postsAll: response.data.data,
        loading: false,
      });
    } catch (error: any) {
      console.error(error.message);
      set({
        loading: false,
      });
    }
  },
  getTags: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/post/getTags");
      set({
        postTags: response.data.data,
        loading: false,
      });
    } catch (error: any) {
      console.error(error.message);
      set({
        loading: false,
      });
    }
  },
  getCategories: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/post/getCategories");
      set({
        postCategories: response.data.data,
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
