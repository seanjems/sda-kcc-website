import React from "react";

import { Modal, NumberInput, Group, Select } from "@mantine/core";
import { useState } from "react";
import { useCart } from "react-use-cart";

const OffertoryCard = ({
  img,
  fieldTitle,
  desc,
  price,
  item,
  paymentMethod,
  selectedCurrency,
  setSelectedCurrency,
}) => {
  const [opened, setOpened] = useState(false);
  const [fieldAmount, setFieldAmount] = useState(0);
  const [inPutError, setInputError] = useState(false);

  const { addItem, inCart, removeItem, updateItem } = useCart();

  return (
    <div className="card m-3 shadow" style={{ width: "18rem" }}>
      <img
        src={img}
        className="card-img-top"
        alt="..."
        style={{ height: "14rem", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {fieldTitle.charAt(0).toUpperCase() + fieldTitle.slice(1)}
        </h5>
        <p className="card-text">{desc}</p>
        {/* <a href="#" className="btn btn-primary" onClick={() => setOpened(true)}>
          Add to Envelope
        </a> */}
      </div>
    </div>
  );
};

export default OffertoryCard;
