import React, { useState } from "react";
import Cards from "../cards/cardContent";
import classes from "./viewmore.module.css"; // Import your CSS module

const ViewMore = () => {
  const [cards, setCards] = useState([]);

  const handleViewMore = () => {
    // Logic to generate new cards
    const newCards = Array.from({ length: 3 }).map((_, index) => ({
      id: cards.length + index + 1,
      image: "path/to/image.jpg", // Replace with your image path
      title: `Card ${cards.length + index + 1}`,
    }));

    setCards((prevCards) => [...prevCards, ...newCards]);
  };

  return (
    <div>
      <button className={classes.viewMoreButton} onClick={handleViewMore}>
        View More
      </button>

      {/* Display generated cards in rows of three */}
      <div className={classes.cardContainer}>
        {cards.map((card) => (
          <Cards key={card.id} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default ViewMore;
