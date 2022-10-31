export interface IPost {
  userId: number | string;
  id: number | string;
  title: string;
  body: string;
}


export interface IPostsState {
  status: string;
  posts: IPost[];
}

export interface IAuthState {
  children: any;
  auth: boolean;
  setAuth: (state: boolean) => void;
}

