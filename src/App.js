import Departments from "./components/Departments/Departments";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import Offertory from "./components/Offertory/Offertory";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import { Link } from "react-scroll";
import OffertoryCard from "./components/Offertory/OffertoryCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EnvelopeCart from "./components/Offertory/EnvelopeCart";
import { useState } from "react";
import { CartProvider } from "react-use-cart";
function App() {
  const [paymentMode, setPaymentMode] = useState();
  return (
    <div className="App">
      <CartProvider>
        <Hero />
        <SocialMedia />
        <Departments />

        <Offertory setPaymentMode={setPaymentMode} paymentMode={paymentMode} />

        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
