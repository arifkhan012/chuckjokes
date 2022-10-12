import React from "react";

function JokesCard() {
  return (
    <div className="jokesCard">
      <div className="jokesDetails">
        <div className="jokesCatTitle">
          <span>
            <img src={require("../image/green-light-copy@3x.png")} alt="img" />
          </span>
          <span className="title">Layer Joke</span>
        </div>
        <p className="jokesDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta rem
          culpa, ipsum, provident veniam alias totam dolorum repellendus nobis
          repellat, consectetur ex accusamus. Dolorum rerum officiis,
          necessitatibus assumenda asperiores tenetur aperiam ea enim dolores
          aliquid unde et eligendi dolore eum ipsam commodi cupiditate. Tempora
          nam facilis explicabo non earum optio.
        </p>
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
