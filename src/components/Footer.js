import React from "react";
import piggy from "../images/piggybank.png";

const Footer = () => {
  return (
    <div className="m-4 p-4 ">
      <div className="col-md-4">
        <ul className="list-unstyled ">
          <li>Blogs</li>
          <li>Contact</li>
          <li>About US</li>
        </ul>
      </div>

      <h1
        className="me-auto font-family-impact d-flex justify-content-center"
        style={{
          fontFamily: "impact",
        }}
      >
        <img
          src={piggy}
          alt="Piggy Bank"
          height="30px"
          style={{ marginRight: "10px" }}
        />
        <em>Penny Pincher</em>
      </h1>
    </div>
  );
};

export default Footer;
