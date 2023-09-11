import React from "react";
import style from "./style.css";

export default function SkeletonCard() {
  return (
    <div className="skeletonCard">
      <div className="skeleton img"></div>
      <div className="skeleton skl-label"></div>
      <div className="skeleton skl-money"></div>
      <div className="skeleton skl-address"></div>
    </div>
  );
}
