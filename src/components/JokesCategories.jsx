import React from "react";

function JokesCategories() {
  return (
    <div className="categoryContainer">
      <button className="adult">Adult Jokes</button>
      <button className="orange">Dad Jokes</button>
      <button className="pale">Cristmas Jokes</button>
      <button className="lightgold">Job Jokes</button>
      <button className="kewi">Birthday Jokes</button>
      <button className="green">Social Jokes</button>
      <button className="sky">Puns Jokes</button>
      <button className="viewAll">
        View all{" "}
        <span className="downIcon">
          <img src={require("../image/path-copy-7@3x.png")} alt="img" />
        </span>
      </button>
    </div>
  );
}

export default JokesCategories;
