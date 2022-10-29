import { Post } from "../features/post/Post";
import { Header } from "./Header";

export function Home({ auth, setAuth }: any) {
  return (
    <>
      <Header auth={auth} setAuth={setAuth} />
      <div className="post-container">
        <Post />
      </div>
    </>
  );
}
