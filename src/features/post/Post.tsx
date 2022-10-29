import { useState } from "react";
import { deletePost } from "./postSlice";
import "../../sass/post.scss";
import { iPost } from "../../interfaces";
import { useAppDispatch } from "../../app/hooks";
import { TiTrash, TiEdit } from "react-icons/ti";

import { UpdatePost } from "../../components/UpdatePost";
import { NoMatches } from "../../components/NoMatches";

export function Post({ searchPost, posts, filteredPost, searchInput }: any) {
  const [openModal, setOpenModal] = useState(false);
  const [editPost, setEditPost] = useState("");
  const dispatch = useAppDispatch();

  const handleOpen = (post: any) => {
    setEditPost(post);
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setOpenModal(false);
    document.body.style.overflow = "scroll";
  };

  const handleDelete = (id: number | string) => {
    dispatch(deletePost(id));
  };

  return (
    <>
      <UpdatePost
        editPost={editPost}
        openModal={openModal}
        handleClose={handleClose}
      />
      {searchPost.length === 0 ? (
        filteredPost.length ? (
          filteredPost.map((post: iPost) => (
            <div key={post.id} className="flip-card post-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className="post-card__author">
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

                  <TiEdit
                    className="post-card__icon"
                    onClick={() => {
                      handleOpen(post);
                    }}
                  />
                  <TiTrash
                    className="post-card__icon"
                    onClick={() => handleDelete(post.id)}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <NoMatches searchInput={searchInput} />
        )
      ) : (
        posts.map((post: iPost) => (
          <div key={post.id} className="flip-card post-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3 className="post-card__author">
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

                <TiEdit
                  className="post-card__icon"
                  onClick={() => {
                    handleOpen(post);
                  }}
                />
                <TiTrash
                  className="post-card__icon"
                  onClick={() => handleDelete(post.id)}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
