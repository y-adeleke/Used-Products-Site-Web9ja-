// ItemChoices.js
import React from "react";
import classes from "./Itemchoices.module.css";

const ItemChoices = () => {
  return (
    <div className={classes.container}>
      {/* Categories */}
      <div className={classes.categories}>
        <h2 className={classes.boldText}>Categories</h2>
        <p className={classes.smallText}>Date</p>
      </div>

      {/* List of items styled like buttons */}
      <div className={classes.buttonsContainer}>
        <button className={classes.button}>All</button>
        <button className={classes.button}>Women's Fashion</button>
        <button className={classes.button}>Men's Fashion</button>
        <button className={classes.button}>Kids' Clothing</button>
        <button className={classes.button}>Active Wear</button>
        <button className={classes.button}>Bags & Purses</button>
        <button className={classes.button}>Casual Wear</button>
        <button className={classes.button}>Jewelry</button>
        <button className={classes.button}>Formal Wear</button>
        <button className={classes.button}>Lingerie & Sleep Wear</button>
        <button className={classes.button}>Outer Wear</button>
        <button className={classes.button}>Sports Clothing</button>
        <button className={classes.button}>Swim Wear</button>
      </div>
    </div>
  );
};

export default ItemChoices;
