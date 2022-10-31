/* eslint-disable @typescript-eslint/no-unused-vars */
import { Post } from "../features/post/Post";
import { Header } from "./Header";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchPosts, selectState } from "../features/post/postSlice";
import { IPost } from '../interfaces';

export function Home(props: {
  auth: boolean ;
  setAuth: (state: boolean) => void;
}) {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchPost, setSearchPost] = useState<Array<IPost>>([]);
  const posts = useAppSelector(selectState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
  };
  const filteredPost = posts.filter((post: IPost) => {
    if (searchInput === "") {
      return post;
    }
    return post.title ? post.title.toLowerCase().includes(searchInput) : "";
  });

  return (
    <>
      <Header
        auth={props.auth}
        setAuth={props.setAuth}
        searchItems={searchItems}
        searchInput={searchInput}
      />
      <div className="post-container">
        <Post
          searchPost={searchPost}
          posts={posts}
          filteredPost={filteredPost}
          searchInput={searchInput}
        />
      </div>
    </>
  );
}
