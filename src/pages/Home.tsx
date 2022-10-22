import { Post } from "../features/post/Post";
import { Header } from "./Header";

export function Home() {
  return (
    <>
      <Header />
      <div className="post-container">
        <Post />
      </div>
    </>
  );
}
