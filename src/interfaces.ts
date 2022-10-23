export interface iPost {
  userId: number;
  id: number | string;
  title: string;
  body: string;
}

export interface iPostsState {
  status: string;
  posts: iPost[];
}
