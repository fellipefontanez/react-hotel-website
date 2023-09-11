import React, { useState } from "react";
import style from "./proceed.css";

export default function ProceedCheckout() {
  const [buttonText, setButtonText] = useState("Confirm payment");
  const proceedPayment = () => {
    const button = document.getElementById("confirm");
    button.classList.add("clicked");
    setButtonText("");
    setTimeout(() => {
      successAnimation();
    }, 1500);
  };
  const successAnimation = () => {
    const successIcon = document.querySelector(".success-icon");
    successIcon.classList.add("showSuccess");
    setTimeout(() => {
      setButtonText("Payment confirmed");
    }, 1500);
  };
  return (
    <div className="checkoutRow">
      <button type="button" id="confirm" onClick={proceedPayment}>
        {buttonText}
        <span className="success-icon">
          <iconify-icon icon="ep:success-filled"></iconify-icon>
        </span>
      </button>
    </div>
  );
}
