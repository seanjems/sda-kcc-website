import "./App.css";

import Departments from "./components/Departments/Departments";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import Offertory from "./components/Offertory/Offertory";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import { Link } from "react-scroll";
function App() {
  return (
    <div className="App">
      <Hero />
      <SocialMedia />
      <Departments />
      <Offertory />
      <Footer />
    </div>
  );
}

export default App;
