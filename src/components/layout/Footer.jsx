import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="footer"
      style={{
        backgroundImage: `url('/image/bitmap_2.png`,
        backgroundPosition: "center" /* Center the image */,
        backgroundRepeat: "no-repeat" /* Do not repeat the image */,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="footerTitle">
          Got Jokes? get Paid <br /> for submitting!
        </div>
        <Link className="summitJoke" to="#">
          Submit Joke{" "}
          <img src={require("../../image/path-copy-5.png")} alt="img" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
