import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { AppDispatch } from "../../app/store";
import { fetchPosts, selectState } from "./postSlice";

export function Post() {
  const posts = useAppSelector(selectState).posts;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  return (
    <>
      <h1>Posts Users</h1>
      {posts.length
        ? posts.map((post: any) => (
            <div key={post.id} className='post-card'>
              <div>
                {post.userId === 1
                  ? "Ian Flamming"
                  : "" || post.userId === 2
                  ? "George Orwell"
                  : "" || post.userId === 3
                  ? "Bran Stoker"
                  : "" || post.userId === 4
                  ? "Virginia Woolf"
                  : "" || post.userId === 5
                  ? "Jane Austen"
                  : "" || post.userId === 6
                  ? "Joseph Conrad"
                  : "" || post.userId === 7
                  ? "Ernest Hemingway"
                  : "" || post.userId === 8
                  ? "Mary Shelley"
                  : "" || post.userId === 9
                  ? "Sylvia Plath"
                  : "" || post.userId === 10
                  ? "Aldous Huxley"
                  : ""}
              </div>
              <div>{post.title}</div>
              <div>{post.body}</div>
            </div>
          ))
        : ""}
    </>
  );
}
