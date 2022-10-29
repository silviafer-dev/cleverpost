import { Post } from "../features/post/Post";
import { Header } from "./Header";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchPosts, selectState } from "../features/post/postSlice";

export function Home({ auth, setAuth }: any) {
  const [searchInput, setSearchInput] = useState("");
  const [searchPost, setSearchPost] = useState([]);

  const posts = useAppSelector(selectState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
  };
  const filteredPost = posts.filter((item) => {
    if (searchInput === "") {
      return item;
    }
    return item.title ? item.title.toLowerCase().includes(searchInput) : "";
  });

  return (
    <>
      <Header auth={auth} setAuth={setAuth} searchItems={searchItems} />
      <div className="post-container">
        <Post
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          searchPost={searchPost}
          posts={posts}
          filteredPost={filteredPost}
        />
      </div>
    </>
  );
}
