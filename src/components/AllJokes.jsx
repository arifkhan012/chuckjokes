import React from "react";
import JokesCard from "./JokesCard";

function AllJokes() {
  return (
    <div className="allJokes">
      <div className="catTitle">
        <span>Social Jokes</span>
      </div>
      <div className="jokesList">
        <JokesCard />
        <JokesCard />
        <JokesCard />
        <JokesCard />
        <JokesCard />
      </div>
    </div>
  );
}

export default AllJokes;
