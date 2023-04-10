export interface Post {
  title: string;
  permalink: string;
  category: {
    categoryId: string;
    category: string;
  };
  excerpt: string;
  content: string;
  postImage: {
    title: string;
    URL: string;
  };
  isFeatured: boolean;
  views: number;
  status: string;
  createdAt: any;
}
