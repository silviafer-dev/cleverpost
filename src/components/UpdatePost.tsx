import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { updatePost } from "../features/post/postSlice";
import { useEffect } from "react";
import "../sass/updatePost.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { iPost } from "../interfaces";

export function UpdatePost(props: {
  editPost: any;
  openModal: boolean;
  handleClose: () => void;
}) {
  const [edit, setEdit] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (props.editPost && props.editPost.body) {
      setEdit(props.editPost.body);
    } else {
      setEdit("");
    }
  }, [props.editPost]);

  function handleUpdate(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(
      updatePost({
        id: props.editPost.id,
        body: edit,
        userId: "",
        title: "",
      })
    );
    props.handleClose();
  }

  if (!props.openModal) {
    return null;
  }
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEdit(e.target.value);
  };

  return (
    <div className="modal-container">
      <IoIosCloseCircle onClick={props.handleClose} className="close-icon" />
      <div className="modal">
        <h1 className="modal__author">
          {props.editPost.userId === 1
            ? "Ian Flamming"
            : "" || props.editPost.userId === 2
            ? "George Orwell"
            : "" || props.editPost.userId === 3
            ? "Bran Stoker"
            : "" || props.editPost.userId === 4
            ? "Virginia Woolf"
            : "" || props.editPost.userId === 5
            ? "Jane Austen"
            : "" || props.editPost.userId === 6
            ? "Joseph Conrad"
            : "" || props.editPost.userId === 7
            ? "Ernest Hemingway"
            : "" || props.editPost.userId === 8
            ? "Mary Shelley"
            : "" || props.editPost.userId === 9
            ? "Sylvia Plath"
            : "" || props.editPost.userId === 10
            ? "Aldous Huxley"
            : ""}
        </h1>
        <h4 className="modal__title">{props.editPost.title}</h4>
        <form onSubmit={handleUpdate} className="modal__form">
          <textarea className="modal__body" value={edit} onChange={handleChange} rows={7} cols={35} />
          <button type="submit" className="modal__save">Save</button>
        </form>
      </div>
    </div>
  );
}
