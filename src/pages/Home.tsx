import { AuthStatus } from "../components/auth";
import { Post } from "../features/post/Post";
import { Header } from "./Header";


export function Home ({ auth, setAuth }: any) {
  return (
    <>
      <AuthStatus auth={auth} setAuth={setAuth} />
      <Header />
      <div className="post-container">
        <Post />
      </div>
    </>
  );
}
