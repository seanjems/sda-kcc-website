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
import { CartProvider, useCart } from "react-use-cart";
import { isElement } from "lodash";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { NotificationsProvider } from "@mantine/notifications";

function App() {
  const [paymentMode, setPaymentMode] = useState();
  const { isEmpty } = useCart();
  return (
    <div className="App">
      <NotificationsProvider position="top-right" zIndex={2077}>
        <CartProvider>
          <PayPalScriptProvider
            options={{
              "client-id":
                "AezVIu7szn3_vKJ_uQHbYn-sKA1ogFURTu7h0Q7BUexSj9SK-N8fhDaQlhijAJmhNr9ALqv6aDHdT3dT",
              components: "buttons",
              currency: "USD",
            }}
          >
            <Hero />
            <SocialMedia />
            <Departments />

            {isEmpty ? (
              <Offertory
                setPaymentMode={setPaymentMode}
                paymentMode={paymentMode}
              />
            ) : (
              <EnvelopeCart
                paymentMode={paymentMode}
                setPaymentMode={setPaymentMode}
              />
            )}
            <Footer />
          </PayPalScriptProvider>
        </CartProvider>
      </NotificationsProvider>
    </div>
  );
}

export default App;
