// triangleflipper.js
import React, { useState } from "react";
import ItemChoices from "../itemChoice/ItemContent"; // Fix the import path
import classes from "./triangleflip.module.css";

const Triangle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTriangleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={classes.flipContainer}>
      <div
        className={`${classes.triangle} ${isMenuOpen && classes.inverted}`}
        onClick={handleTriangleClick}
      />
      {isMenuOpen && <ItemChoices />}
    </div>
  );
};

export default Triangle;
