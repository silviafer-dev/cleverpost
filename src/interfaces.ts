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
export interface IAuth {
  children: any;
  auth: string;
}
export interface IAuthState {
  children: any;
  auth: IAuth;
  setAuth: (state: boolean) => void;
}

