import React from "react";
import flashlight from "../assets/images/flashlight.svg";
import "../sass/noMatches.scss";

export function NoMatches({ searchInput }: any) {
  console.log(searchInput);
  return (
    <div className="no-matches">
      <img src={flashlight} alt="" className="flashlight" />
      <h3 className="no-matches__title">
        No matching posts found for {' '}
        <span className="no-matches__title no-matches__title--keyword">
           {searchInput}
        </span>
      .</h3>
    </div>
  );
}
