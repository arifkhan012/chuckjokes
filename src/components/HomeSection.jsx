import React, { useState } from "react";
import axios from "../utils/axios";

function HomeSection({ searchResult, searchHandler }) {
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
            <input
              onChange={(e) => searchHandler(e.target.value)}
              placeholder="How can we make you laugh today?"
            />
            <img
              className="searchIcon"
              src={require("../image/search-copy@3x.png")}
              alt="img"
            />
            {searchResult.length > 0 && (
              <div className="searcResult">
                <ul className="searchResultList">
                  {searchResult.length > 0 &&
                    searchResult.map((result, key) => (
                      <li key={key}>
                        <span>
                          {result.categories[0]
                            ? result.categories[0]
                            : "Uncategorized"}
                          &nbsp;
                        </span>
                        jokes:
                        <span>
                          {" "}
                          &nbsp;
                          {result.value.split(" ").slice(0, 3).join(" ")}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
