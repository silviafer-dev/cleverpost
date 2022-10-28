import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { updatePost } from "../features/post/postSlice";
import { iPost } from "../interfaces";
import { useEffect } from "react";

export function UpdatePost({ post }: { post: iPost }) {
  const [editPost, setEditPost] = useState("");

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (post && post.body) {
      setEditPost(post.body);
    } else {
      setEditPost("");
    }
  }, [post]);

  function handleUpdate(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(
      updatePost({
        id: post.id,
        body: editPost,
        userId: 0,
        title: "",
      })
    );
  }
  return (
    <div>
      <div>Update Post</div>
      <form action="" onSubmit={handleUpdate}>
        <label htmlFor="">
          <input
            type="text"
            value={editPost}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEditPost(e.currentTarget.value)
            }
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
