import classes from "./AdCard.module.css";

const AdCard = () => {
  return (
    <div className="ad-card">
      <div className="ad-card__image">
        <img src="https://via.placeholder.com/150" alt="ad" />
      </div>
      <div className="ad-card__content">
        <h3>Ad Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptates.</p>
      </div>
    </div>
  );
};

export default AdCard;
