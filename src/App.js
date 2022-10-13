import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllJokes from "./components/AllJokes";
import HomeSection from "./components/HomeSection";
import JokesCard from "./components/JokesCard";
import JokesCategories from "./components/JokesCategories";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import "./styles/sass/main.scss";
import axios from "./utils/axios";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const searchHandler = (value) => {
    axios
      .get(`/search?query=${value}`)
      .then((res) => {
        if (res.data.result.length > 0) {
          setSearchResult(res.data.result.slice(0, 4));
        } else {
          setSearchResult([]);
        }
      })
      .catch((err) => {
        setSearchResult([]);
      });
  };
  return (
    <Router>
      <div>
        <Navbar />
        <HomeSection
          searchResult={searchResult}
          searchHandler={searchHandler}
        />
        <div className="container">
          {searchResult.length == 1 ? (
            <JokesCard joke={searchResult[0]} />
          ) : (
            <>
              <JokesCategories />
              <AllJokes />
            </>
          )}
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
