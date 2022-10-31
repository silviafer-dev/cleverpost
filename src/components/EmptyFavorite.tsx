import React from "react";
import { RiHeartAddLine } from "react-icons/ri";

export function EmptyFavorite() {
  return (
    <div className="empty-page">
      <div>You don't have any favorite posts yet!</div>
      <RiHeartAddLine className="add-heart" />
    </div>
  );
}
