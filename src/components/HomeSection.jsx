import React from "react";

function HomeSection() {
  return (
    <div
      className="homeSection"
      style={{
        backgroundImage: `url('/image/bitmap@3x.png')`,
        backgroundPosition: "center" /* Center the image */,
        backgroundRepeat: "no-repeat" /* Do not repeat the image */,
        backgroundSize: "cover",
      }}
    >
      <div>
        <div className="title1">The Joke Bible</div>
        <div className="title2">Daily laugh for you and yours</div>
        <div className="searchSection">
          <div className="searchContainer">
            <input placeholder="How can we make you laugh today?" />
            <img
              className="searchIcon"
              src={require("../image/search-copy@3x.png")}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
