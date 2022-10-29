export interface iPost {
  userId: number | string;
  id: number | string;
  title: string;
  body: string;
}

export interface iPostsState {
  status: string;
  posts: iPost[];
  post: {},
}
