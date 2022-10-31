import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { AuthStatus } from "../components/auth";
import { removePost, selectFavoriteState } from "../features/post/favSlices";
import { GiBrokenHeart } from "react-icons/gi";
import "../sass/favPost.scss";

export function FavPosts(props: {
  auth: boolean;
  setAuth: (state: boolean) => void;
}) {
  const favPosts = useAppSelector(selectFavoriteState);
  const dispatch = useAppDispatch();

  const removeFromFavorite = (id: string | number) => {
    dispatch(removePost(id));
  };
  return (
    <div>
      <div className="header">
        <h1 className="title">Posts From the Past</h1>
        <div>
          <nav className="nav-bar">
            <Link to={"/"}>Home</Link>
            <AuthStatus
              auth={props.auth}
              setAuth={props.setAuth}
              children={undefined}
            />
          </nav>
        </div>
      </div>

      <div className="fav-container">
        {favPosts.map((fav) => (
          <div key={fav.id} className=" fav">
            <h3 className="fav__author">
              {fav.userId === 1
                ? "Ian Flamming"
                : "" || fav.userId === 2
                ? "George Orwell"
                : "" || fav.userId === 3
                ? "Bran Stoker"
                : "" || fav.userId === 4
                ? "Virginia Woolf"
                : "" || fav.userId === 5
                ? "Jane Austen"
                : "" || fav.userId === 6
                ? "Joseph Conrad"
                : "" || fav.userId === 7
                ? "Ernest Hemingway"
                : "" || fav.userId === 8
                ? "Mary Shelley"
                : "" || fav.userId === 9
                ? "Sylvia Plath"
                : "" || fav.userId === 10
                ? "Aldous Huxley"
                : ""}
            </h3>
            <h4 className="fav__title">{fav.title}</h4>
            <p className="fav__body">{fav.body}</p>
            <GiBrokenHeart className="broken-heart" onClick={() => removeFromFavorite(fav.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}
