import React from "react";
import "./Offertory.css";
import MtnMomobtn from "../../assets/MtnMomobtn.png";
import AirtelMoneybtn from "../../assets/AirtelMoneybtn.png";
import DebitCreditCardbtn from "../../assets/DebitCreditCardbtn.png";
import Paypalbtn from "../../assets/Paypalbtn.png";

const Offertory = () => {
  return (
    <div className="Offertory" id="offertory">
      <div className="socialHeading">
        <span className="stroke-text">Donate</span>
        <span>or pay </span>
        <span className="stroke-text">offertory</span>
        <span> to SDA KCC</span>
      </div>
      <div className="offertoryCards">
        <div className="blur offertoryBlur1"></div>
        <div className="blur offertoryBlur2"></div>
        <div className="centralCard">
          <span>Select payment method</span>
          <div className="paymentOptions">
            <div className="payButtonWrapper ">
              <img src={MtnMomobtn} alt="" className="paymentbtn" />
            </div>
            <div className="payButtonWrapper ">
              <img src={AirtelMoneybtn} alt="" className="paymentbtn" />
            </div>
            <div className="payButtonWrapper ">
              <img src={DebitCreditCardbtn} alt="" className="paymentbtn" />
            </div>
            <div className="payButtonWrapper ">
              <img src={Paypalbtn} alt="" className="paymentbtn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offertory;
