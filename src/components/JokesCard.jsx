import React from "react";

function JokesCard({ joke }) {
  return (
    <div className="jokesCard">
      <div className="jokesDetails">
        <div className="jokesCatTitle">
          <span>
            <img src={require("../image/green-light-copy@3x.png")} alt="img" />
          </span>
          <span className="title">
            {joke.categories[0] ? joke.categories[0] : "Uncategorized"}
          </span>
        </div>
        <p className="jokesDesc">{joke.value}</p>
        <div className="bottomContainer">
          <button className="seeStats">
            SEE STATS{" "}
            <span>
              <img src={require("../image/path-copy-3_2.png")} alt="img" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default JokesCard;
