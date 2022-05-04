import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>This is a sample scope heading for the following image cards</h1>
      <div className="card__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-9.jpg"
              text="Youth training session held last weekend at Kampala central SDA Church"
              label="Youth Ministry"
              path="/services"
            />
            <CardItem
              src="/images/img-4.jpg"
              text="Do you know how far God has led us in building the new temple - the Adventist Centre tower? Check the updates here"
              label="Church Construction"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/img-8.jpg"
              text="Benjamin Family led us last Sabbath. Check out the amazing pictures after from their day of service"
              label="Departments"
              path="/services"
            />
            <CardItem
              src="/images/img-4.jpg"
              text="Do you know how far God has led us in building the new temple - the Adventist Centre tower? Check the updates here"
              label="Church Construction"
              path="/products"
            />
            <CardItem
              src="/images/img-9.jpg"
              text="Youth training session held last weekend at Kampala central SDA Church"
              label="Youth Ministry"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
