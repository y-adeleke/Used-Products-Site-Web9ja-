import React, { useState } from "react";
import classes from "./Itemchoices.module.css";

const ItemChoices = () => {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  const handleButtonClick = (category) => {
    if (category === "All") {
      // Toggle "All" button
      setSelectedCategories(["All"]);
    } else {
      // Toggle other buttons
      setSelectedCategories((prevSelected) => {
        if (prevSelected.includes(category)) {
          // Deselect button if already selected
          return prevSelected.filter((selected) => selected !== category);
        } else {
          // Select button if not selected
          // If "All" is in the array, remove it
          const newSelected = prevSelected.includes("All")
            ? []
            : [...prevSelected];
          return [...newSelected, category];
        }
      });
    }
  };

  const getButtonClassName = (category) => {
    return `${classes.button} ${
      selectedCategories.includes(category) ? classes.selected : ""
    }`;
  };

  return (
    <div className={classes.container}>
      {/* Categories */}
      <div className={classes.categoriesContainer}>
        <div className={classes.categories}>
          <h2 className={classes.boldText}>Categories</h2>
          <p className={classes.smallText}>Date</p>
        </div>
      </div>

      {/* List of items styled like buttons */}
      <div className={classes.buttonsContainer}>
        <button
          className={getButtonClassName("All")}
          onClick={() => handleButtonClick("All")}
        >
          All
        </button>
        <button
          className={getButtonClassName("Women's Fashion")}
          onClick={() => handleButtonClick("Women's Fashion")}
        >
          Women's Fashion
        </button>
        <button
          className={getButtonClassName("Men's Fashion")}
          onClick={() => handleButtonClick("Men's Fashion")}
        >
          Men's Fashion
        </button>
        <button
          className={getButtonClassName("Kids' Clothing")}
          onClick={() => handleButtonClick("Kids' Clothing")}
        >
          Kids' Clothing
        </button>
        <button
          className={getButtonClassName("Active Wear")}
          onClick={() => handleButtonClick("Active Wear")}
        >
          Active Wear
        </button>
        <button
          className={getButtonClassName("Bags & Purses")}
          onClick={() => handleButtonClick("Bags & Purses")}
        >
          Bags & Purses
        </button>
        <button
          className={getButtonClassName("Casual Wear")}
          onClick={() => handleButtonClick("Casual Wear")}
        >
          Casual Wear
        </button>
        <button
          className={getButtonClassName("Jewelry")}
          onClick={() => handleButtonClick("Jewelry")}
        >
          Jewelry
        </button>
        <button
          className={getButtonClassName("Formal Wear")}
          onClick={() => handleButtonClick("Formal Wear")}
        >
          Formal Wear
        </button>
        <button
          className={getButtonClassName("Lingerie & Sleep Wear")}
          onClick={() => handleButtonClick("Lingerie & Sleep Wear")}
        >
          Lingerie & Sleep Wear
        </button>
        <button
          className={getButtonClassName("Outer Wear")}
          onClick={() => handleButtonClick("Outer Wear")}
        >
          Outer Wear
        </button>
        <button
          className={getButtonClassName("Sports Clothing")}
          onClick={() => handleButtonClick("Sports Clothing")}
        >
          Sports Clothing
        </button>
        <button
          className={getButtonClassName("Swim Wear")}
          onClick={() => handleButtonClick("Swim Wear")}
        >
          Swim Wear
        </button>
      </div>
    </div>
  );
};

export default ItemChoices;
