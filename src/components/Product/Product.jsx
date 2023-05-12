import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <div className="product-cover-image">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <h4 className="product-price">Price: ${price}</h4>
        <p className="product-info-common">Manufacturer: {seller}</p>
        <p className="product-info-common">Ratings: {ratings} star</p>
      </div>
      <button className="btn-cart" onClick={()=>handleAddToCart(props.product)}>
        Add to Cart <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
};

export default Product;
