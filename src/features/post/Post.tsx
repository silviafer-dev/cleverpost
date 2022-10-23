import { useEffect } from "react";

import { deletePost, fetchPosts, selectState, updatePost } from "./postSlice";
import "../../sass/post.scss";
import { iPost } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { TiTrash, TiEdit } from "react-icons/ti";

export function Post() {
  const posts = useAppSelector(selectState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (id: number | string) => {
    dispatch(deletePost(id));
  };
  // const handleUpdate = (id: string | number, body: string) => {
  //   dispatch(updatePost(id,body));
  // }

  return (
    <>
      {posts.length
        ? posts.map((post: iPost) => (
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
                  <p className="post-card__body">"{post.body}"</p>
                
                  <TiEdit />
                  <TiTrash onClick={() => handleDelete(post.id)} />
                </div>
              </div>
            </div>
          ))
        : ""}
    </>
  );
}
