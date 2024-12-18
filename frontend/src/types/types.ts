// PostProfilePic type
export interface PostProfilePic {
  public_id: string;
  url: string;
}

// AuthorProfile type
export interface AuthorProfile {
  name: string;
  email: string;
}

// Tags type
export interface Tags {
  name: string;
  count: number;
}

// Post type
export interface Post {
  id: string;
  categoryHeader: string;
  title: string;
  description: string;
  category?: string;
  image?: PostProfilePic[];
  ratings?: number;
  numOfReviews?: number;
  authorId?: string;
  author?: AuthorProfile[];
  reviews?: Review[];
  tags?: Tags[];
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export interface Review {
  id: string;
  content: string;
  postId: string;
  createdAt: string;
}
