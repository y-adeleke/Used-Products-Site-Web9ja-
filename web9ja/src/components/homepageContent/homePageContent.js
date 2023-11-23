// Homes.js
import React from "react";
import classes from "./homepageContent.module.css";
import Cards from "../cards/cardContent";

const Homes = () => {
  const numberOfCards = 21;

  // Array of different image URLs
  const imageUrls = Array.from(
    { length: numberOfCards },
    (_, index) => `https://placekitten.com/400/200?random=${index}`
  );

  // Array of different profile picture URLs
  const profilePicUrls = Array.from(
    { length: numberOfCards },
    (_, index) => `https://placekitten.com/50/50?random=${index}`
  );

  return (
    <div className={classes.container}>
      {/* Create cards in rows of three */}
      {[...Array(Math.ceil(numberOfCards / 3))].map((_row, rowIndex) => (
        <div key={rowIndex} className={classes.cardRow}>
          {/* Create three cards in each row */}
          {[0, 1, 2].map((cardIndex) => (
            <Cards
              key={rowIndex * 3 + cardIndex}
              // Conditionally apply a class for the third card in each row
              className={cardIndex === 2 ? classes.cardFourth : ""}
              // Pass props to customize the card
              image={imageUrls[rowIndex * 3 + cardIndex]}
              profilePic={profilePicUrls[rowIndex * 3 + cardIndex]}
              title={`Card ${rowIndex * 3 + cardIndex + 1}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Homes;
