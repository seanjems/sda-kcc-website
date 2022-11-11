import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import OffertoryCard from "./OffertoryCard";
import data from "./OfferToryData";
import { CartProvider, useCart } from "react-use-cart";
import { Modal, NumberInput, Select } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";

const EnvelopeCart = ({ paymentMode, setPaymentMode }) => {
  // console.log(data.envelopeFields);
  const [fieldItems, setFieldItems] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("UGX");
  const [opened, setOpened] = useState(false);
  const [fieldAmount, setFieldAmount] = useState(0);
  const [fieldTitle, setFieldTitle] = useState();
  const [item, setItem] = useState();
  const [inPutError, setInputError] = useState(false);
  const { addItem, inCart, removeItem, updateItem } = useCart();

  const priceInRef = useRef();
  useEffect(() => {
    if (priceInRef.current && opened) {
      priceInRef.current.focus();
    }
  }, [priceInRef, opened]);
  const { items, isEmpty, totalItems, totalUniqueItems, cartTotal, emptyCart } =
    useCart();

  useEffect(() => {
    if (data.length) {
      setFieldItems(data);
    }
  }, [data]);
  return (
    <>
      <div className="row" style={{ minHeight: "2rem" }}></div>

      <h1 className="text-center mt-3 ">Envelope fields</h1>

      <section className="py-4 container">
        {fieldItems.length && (
          <Carousel
            height={330}
            withIndicators
            slideSize="25%"
            slideGap="sm"
            controlsOffset="lg"
            controlSize={40}
            breakpoints={[
              { maxWidth: "md", slideSize: "33.333333%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            ]}
            styles={{
              indicator: {
                width: 12,
                height: 4,
                marginBottom: "6rem",
                transition: "width 250ms ease",
                backgroundColor: "red",
                "&[data-active]": {
                  width: 40,
                },
              },
            }}
            loop
            align="start"
          >
            {fieldItems.length &&
              fieldItems.map((item, idx) => {
                return (
                  <Carousel.Slide key={idx}>
                    <div
                      onClick={() => {
                        setItem(item);
                        setFieldAmount();
                        setInputError(false);
                        setItem(item);
                        setOpened(true);
                      }}
                      style={{ maxWidth: "fitContent" }}
                    >
                      <OffertoryCard
                        img={item.img}
                        fieldTitle={item.title}
                        desc={item.desc}
                        price={item.amount}
                        setFieldItems={setFieldItems}
                        item={item}
                        selectedCurrency={selectedCurrency}
                        setSelectedCurrency={setSelectedCurrency}
                      />
                    </div>
                  </Carousel.Slide>
                );
              })}
          </Carousel>
        )}
      </section>
      <section>
        <div className="my-3 container">
          <h1 className="text-center mt-3 display-2">
            Your Offertory Envelope
          </h1>
          {isEmpty ? (
            <h3 className="text text-center">
              Your Offertory Envelope is empty
            </h3>
          ) : (
            <div className=" mt-2 mb-3 border border border-primary rounded table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col" colSpan={2}>
                      {" "}
                      Envelope field
                    </th>
                    {/* <th scope="col">Currency</th> */}
                    <th scope="col">Amount</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, idx) => {
                    return (
                      <tr>
                        <td scope="row">
                          {" "}
                          <img
                            src={item.img}
                            alt=""
                            style={{ width: "6rem" }}
                            className="rounded hideMobile"
                          />
                        </td>
                        <td>{item.title}</td>
                        {/* <td>{selectedCurrency}</td> */}
                        <td>{item?.price?.toLocaleString("en-US")}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm mr-2"
                            onClick={() => {
                              setItem(item);
                              setInputError(false);
                              setOpened(true);
                            }}
                          >
                            Edit
                          </button>
                          {"  "}
                          <button
                            className="btn btn-danger btn-sm "
                            onClick={() => {
                              removeItem(item.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr className="py-2">
                    <th colSpan={2} className="display-6">
                      Totals
                    </th>
                    <th colSpan={2} className="display-6">
                      {selectedCurrency} {cartTotal?.toLocaleString("en-US")}
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}

          <div className="container completePayment flex-wrap">
            <Select
              label="Selected Payment Method"
              placeholder="Optional"
              defaultValue={paymentMode ? paymentMode : "momo"}
              onChange={(e) => setPaymentMode(e)}
              data={[
                {
                  value: "momo",
                  label: "MTN mobile money",
                  disabled: selectedCurrency && selectedCurrency !== "UGX",
                },
                {
                  value: "airtel",
                  label: "AirtelMoney",
                  disabled: selectedCurrency && selectedCurrency !== "UGX",
                },
                { value: "paypal", label: "Paypal", disabled: false },
                {
                  value: "visa",
                  label: "Debit/Credit card",
                },
              ]}
            />
            <button className="btn btn-danger">Complete Payment</button>
          </div>
          <div className="row" style={{ minHeight: "2rem" }}></div>
          <Modal
            opened={opened}
            onClose={() => {
              setOpened(false);
              setItem(null);
            }}
            title={`Set ${item?.title} Amount`}
          >
            <Select
              label="Currency"
              placeholder="Optional"
              disabled={
                (!isEmpty && selectedCurrency !== "momo") ||
                (!isEmpty && selectedCurrency !== "airtel")
              }
              defaultValue={selectedCurrency ? selectedCurrency : "UGX"}
              onChange={(e) => setSelectedCurrency(e)}
              data={[
                { value: "UGX", label: "Uganda Shillings" },
                {
                  value: "USD",
                  label: "US Dollar",
                  disabled: paymentMode === "airtel" || paymentMode === "momo",
                },
                {
                  value: "EUR",
                  label: "Euros",
                  disabled: paymentMode === "airtel" || paymentMode === "momo",
                },
                {
                  value: "GBP",
                  label: "British pound sterling",
                  disabled: paymentMode === "airtel" || paymentMode === "momo",
                },
              ]}
            />

            <NumberInput
              label="Amount"
              radius="lg"
              withAsterisk
              hideControls
              placeholder="0.00"
              error={inPutError}
              defaultValue={item?.price > 0 && item?.price}
              parser={(value) =>
                value
                  .replace(selectedCurrency, "")
                  .replace(" ", "")
                  .replace(/\U\G\X\s?|(,*)/g, "")
              }
              formatter={(value) =>
                !Number.isNaN(parseFloat(value))
                  ? `${selectedCurrency} ${value}`.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )
                  : `${selectedCurrency} `
              }
              ref={priceInRef}
              onChange={(val) => {
                setFieldAmount(val);
              }}
            />
            <div className="form-group">
              <button
                className="btn btn-success mt-2"
                onClick={() => {
                  if (fieldAmount) {
                    //add to cart context
                    const itemCopy = { ...item };
                    itemCopy.price = fieldAmount;

                    //remove item from cart first it exists
                    if (inCart(itemCopy.id)) {
                      updateItem(itemCopy.id, itemCopy);
                      setOpened(false);
                      return;
                    }
                    addItem(itemCopy, 1);
                    setOpened(false);
                    return;
                  }
                  setInputError(true);
                }}
              >
                Add to Envelope
              </button>
            </div>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default EnvelopeCart;
