import { create } from "zustand";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { createData } from "@/validation/CreateForm";
import { createReviewsData } from "@/validation/CreateReviews";

interface Post {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryHeader: string;
  image?: string[];
}
interface Review {
  id: string;
  comment: string;
  rating: number;
  productId: string;
  createdAt: string;
}
interface PostStore {
  posts: {
    posts: Post[];
    totalPosts: number;
    resPerPage: number;
  };
  postsAll: any;
  loading: boolean;
  postTags: any;
  postTagDetails: any;
  reviews: Review[];
  createReviews: (data: createReviewsData) => Promise<void>;
  createPost: (data: createData & { image: string }) => Promise<void>;
  getPostFilter: (page: any) => Promise<void>;
  getAll: () => Promise<void>;
  getTags: () => Promise<void>;
  getPostById: (params: { title: string; id: any }) => Promise<void>;
  getTagsById: (params: { name: string }) => Promise<void>;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: {
    posts: [],
    totalPosts: 0,
    resPerPage: 0,
  },
  postTags: [],
  postsAll: [],
  reviews: [],
  postTagDetails: [],
  loading: false,

  createPost: async (data) => {
    set({ loading: true });
    try {
      const response = await axios.post("/post/create", data);

      set((prevState) => ({
        posts: {
          ...prevState.posts,
          posts: [...prevState.posts.posts, response.data],
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
  getTagsById: async ({ name }: { name: string }) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/post/getTagsDetails/${name}`);
      set({
        postTagDetails: response.data.data,
        loading: false,
      });
    } catch (error: any) {
      console.error(error.message);
      set({
        loading: false,
      });
    }
  },
  createReviews: async (data: createReviewsData) => {
    set({ loading: true });
    console.log("🚀 ~ createReviews: ~ data:", data);
    try {
      const response = await axios.post("/post/reviews", data);

      set((prevState) => ({
        reviews: [...prevState.reviews, response.data],
        loading: false,
      }));

      toast.success("Review created successfully!");
    } catch (error: any) {
      console.error("🚀 ~ createReviews ~ error:", error);
      set({ loading: false });
      const errorMessage =
        error.response?.data?.message || "Failed to create review.";
      toast.error(errorMessage);
    }
  },
}));
