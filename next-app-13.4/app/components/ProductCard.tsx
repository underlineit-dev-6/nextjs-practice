import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className="btn btn-primary">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
