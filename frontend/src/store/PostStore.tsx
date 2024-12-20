/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { createData } from "@/validation/CreateForm";
import { ReviewAnswer } from "@/types/types";

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
  reviewsAnswer: ReviewAnswer[];
  createReviews: (data: Review) => Promise<void>;
  createPost: (data: createData & { image: string }) => Promise<void>;
  updatePost: (data: any & { id: any }) => Promise<void>;
  getPostFilter: (page: any) => Promise<void>;
  getAll: () => Promise<void>;
  getTags: () => Promise<void>;
  getPostById: (params: { title: string; id: any }) => Promise<void>;
  getTagsById: (params: { name: string }) => Promise<void>;
  reviewsGet: (params: { id: any }) => Promise<void>;
  replyReviews: (params: ReviewAnswer) => Promise<void>;
  reviewsDelete: (params: {
    productId: number;
    reviewId: any;
  }) => Promise<void>;
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
  reviewsAnswer: [],
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
  createReviews: async (data: Review) => {
    set({ loading: true });
    try {
      await axios.put(`/post/reviews`, data);

      await usePostStore.getState().reviewsGet({ id: data.productId });
    } catch (_error: any) {
      toast.error("Failed to submit the review.");
    } finally {
      set({ loading: false });
    }
  },
  replyReviews: async ({ reply, reviewId }: ReviewAnswer) => {
    try {
      const response = await axios.post(`/post/review/answer`, {
        reply,
        reviewId,
      });
      set({
        reviewsAnswer: response.data.data,
        loading: false,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  },
  updatePost: async ({ data, id }) => {
    set({ loading: true });
    try {
      const response = await axios.put(`/post/update/${id}`, data);

      set((prevState) => ({
        posts: {
          ...prevState.posts,
          posts: prevState.posts.posts.map((post) =>
            post.id === id ? { ...post, ...response.data } : post
          ),
        },
        loading: false,
      }));

      toast.success("Updated successfully!");
    } catch (error: any) {
      set({ loading: false });
      toast.error(error.message);
    }
  },
  reviewsGet: async ({ id }: any) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/post/reviewsGet/${id}`);
      set({
        reviews: response.data.data,
        loading: false,
      });
    } catch (error: any) {
      set({ loading: false });
    }
  },
  reviewsDelete: async ({ productId, reviewId }: any) => {
    set({ loading: true });
    try {
      const response = await axios.delete(
        `/post/reviews/delete?productId=${productId}&reviewId=${reviewId}`
      );
      set({
        reviews: response.data.data,
        loading: false,
      });
    } catch (error: any) {
      set({ loading: false });
    }
  },
}));
