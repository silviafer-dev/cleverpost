import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { AuthStatus } from "../components/auth";
import { selectFavoriteState } from "../features/post/favSlices";

export function FavPosts(props: {
  auth: boolean;
  setAuth: (state: boolean) => void;
}) {
  const favPosts = useAppSelector(selectFavoriteState);
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

      <div>
        {favPosts.map((fav) => (
          <div key={fav.id}>
            <h3>
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
            <h4>{fav.title}</h4>
            <p>{fav.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
