import { BrowserRouter as Router } from "react-router-dom";
import AllJokes from "./components/AllJokes";
import HomeSection from "./components/HomeSection";
import JokesCategories from "./components/JokesCategories";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import "./styles/sass/main.scss";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <HomeSection />
        <div className="container">
          <JokesCategories />
          <AllJokes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
