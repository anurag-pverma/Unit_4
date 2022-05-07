import React from "react";
import "./Card.scss";

export default function AppleCard() {
  return (
    <>
      <center>
        <div className="apple">
            <div className="flex">

          <p className="date">17/10/20</p>
          <img className="logo" src="data:image/png;base64,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" alt="" />
            </div>

          <h3 className="caseStudey">Case Study</h3>
          <h2 className="gift">Apple Gift</h2>
          <h3 className="pay">Pay</h3>
          <div className="below">
            <p className="mobile">MacOs -Mobiles</p>
            <p className="arrow"> -> </p>
          </div>
        </div>
      </center>
    </>
  );
}
