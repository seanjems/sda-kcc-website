import React from "react";
import "./Offertory.css";
import MtnMomobtn from "../../assets/MtnMomobtn.png";
import AirtelMoneybtn from "../../assets/AirtelMoneybtn.png";
import DebitCreditCardbtn from "../../assets/DebitCreditCardbtn.png";
import Paypalbtn from "../../assets/Paypalbtn.png";
import EnvelopeCart from "./EnvelopeCart";

const Offertory = ({ setPaymentMode, paymentMode }) => {
  return (
    <div className="Offertory" id="offertory">
      <div className="socialHeading">
        <span className="stroke-text">Donate</span>
        <span>or pay </span>
        <span className="stroke-text">offertory</span>
        <span> to SDA KCC</span>
      </div>
      <div className="bg-white my-3">
        {paymentMode ? (
          <EnvelopeCart
            paymentMode={paymentMode}
            setPaymentMode={setPaymentMode}
          />
        ) : (
          <div className="offertoryCards">
            {/* <div className="blur offertoryBlur1"></div> */}
            <div className="blur offertoryBlur2"></div>
            <div className="centralCard py-3 px-3 shadow ">
              <span className="paymentHeading my-2">Select payment method</span>
              <div className="paymentOptions">
                <div
                  className="payButtonWrapper "
                  onClick={() => setPaymentMode("momo")}
                >
                  <img src={MtnMomobtn} alt="" className="paymentbtn" />
                </div>
                <div
                  className="payButtonWrapper "
                  onClick={() => setPaymentMode("airtel")}
                >
                  <img src={AirtelMoneybtn} alt="" className="paymentbtn" />
                </div>
                <div
                  className="payButtonWrapper "
                  onClick={() => setPaymentMode("visa")}
                >
                  <img src={DebitCreditCardbtn} alt="" className="paymentbtn" />
                </div>
                <div
                  className="payButtonWrapper "
                  onClick={() => setPaymentMode("paypal")}
                >
                  <img src={Paypalbtn} alt="" className="paymentbtn" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Offertory;
