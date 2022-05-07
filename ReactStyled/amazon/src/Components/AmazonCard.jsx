import React from "react";
import "./Card.scss";

export default function AmazonCard() {
  return (
    <>
      <center>
        <div className="main">
            <div className="flex">

          <p className="date">28/10/20</p>
          <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HtkqwJ95rC-NjqxwxIXrDxR-xiz88GOPG10EkIqB-h0mtY3zQsNSh913Ofj8SLPF7Zw&usqp=CAU" alt="" />
            </div>

          <h3 className="caseStudey">Case Study</h3>
          <h2 className="gift">Amazon Gift</h2>
          <h3 className="pay">Pay</h3>
          <div className="below">
            <p className="mobile">Desktop Mobile</p>
            <p className="arrow"> -> </p>
          </div>
        </div>
      </center>
    </>
  );
}
