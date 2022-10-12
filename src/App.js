import { BrowserRouter as Router } from "react-router-dom";
import HomeSection from "./components/HomeSection";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import "./styles/sass/main.scss";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <HomeSection />
        <Footer />
      </div>
    </Router>
  );
}
export default App;
