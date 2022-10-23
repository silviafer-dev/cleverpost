import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { AppDispatch } from "../../app/store";
import { fetchPosts, selectState } from "./postSlice";
import "../../sass/post.scss";

export function Post() {
  const posts = useAppSelector(selectState).posts;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let colorAuthor = "";
  posts.map((posts: any) => {
    if (posts.userId === 1) {
      colorAuthor = "green";
    } else if (posts.userId === 2) {
      colorAuthor = "blue";
    } else {
      colorAuthor = "yellow";
    }
    return colorAuthor;
  });

  return (
    <>
      {posts.length
        ? posts.map((post: any) => (
            <div key={post.id} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className="">
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
                  </h3>
                  <h4 className="post-card__title">{post.title}</h4>
                </div>
                <div className="flip-card-back">
                  <p className="post-card__body">{post.body}</p>
                </div>
              </div>
            </div>
          ))
        : ""}
    </>
  );
}
