import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import JokesCard from "./JokesCard";

function AllJokes() {
  const [jokes, setJokes] = useState();
  const [startpage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(1);
  useEffect(() => {
    axios
      .get("/search?query=all")
      .then((res) => {
        setJokes(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="allJokes">
      <div className="catTitle">
        <span>Social Jokes</span>
      </div>
      <div className="jokesList">
        {jokes &&
          jokes
            .slice((startpage - 1) * 9, endPage * 9)
            .map((joke, key) => <JokesCard key={key} joke={joke} />)}
      </div>
      <div className="viewMore">
        <button onClick={() => setEndPage(endPage + 1)}>View More</button>
      </div>
    </div>
  );
}

export default AllJokes;
