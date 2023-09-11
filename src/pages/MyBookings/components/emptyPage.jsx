import React from "react";
import SvgEmpty from "../../../assets/images/svg-empty.svg";
import styles from "../../../../public/style/emptyComponent.css";

export default function EmptyPage() {
  return (
    <section className="emptyContainer">
      <div className="emptyTextContainer">
        <h3>There are no reservations yet.</h3>
        <span>
          Explore our rooms at the home page and as soon as you book in, your
          reservations will be available here.
        </span>
      </div>
      <img src={SvgEmpty} alt="svg" className="svgEmpty" />
    </section>
  );
}
