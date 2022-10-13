import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import JokesCard from "./JokesCard";

function AllJokes() {
  const [jokes, setJokes] = useState();
  useEffect(() => {
    axios
      .get("/search?query=all")
      .then((res) => setJokes(res.data.result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="allJokes">
      <div className="catTitle">
        <span>Social Jokes</span>
      </div>
      <div className="jokesList">
        {jokes && jokes.map((joke) => <JokesCard joke={joke} />)}
      </div>
    </div>
  );
}

export default AllJokes;
