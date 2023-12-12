import classes from "./AdCard.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AdsContext from "../../../store/ads-context";
import UserContext from "../../../store/user-context";
import AuthContext from "../../../store/auth-context";
import { useContext } from "react";

const AdCard = (props) => {
  const adsContext = useContext(AdsContext);
  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);

  const toggleFavHandler = (e) => {
    e.stopPropagation();
    adsContext.toggleFavourite(userContext.userData._id, props.id, authContext.token);
  };

  return (
    <div className={`${classes.card} ${!props.isActive ? classes.cardDisabled : ""} `} onClick={props.onClick}>
      <img src={props.imageSrc} alt="" srcSet="" height={250} className={classes.cardImg} />
      <div className={classes.status}>
        <button className={props.isActive ? classes.active : classes.notActive}>{props.isActive ? "🟢active" : "🔴disabled"}</button>
        {authContext.token && props.isActive && (
          <div className={classes.favIconBox}>
            {props.fav ? <FavoriteIcon className={classes.favIcon} onClick={toggleFavHandler} /> : <FavoriteBorderIcon className={classes.favIcon} onClick={toggleFavHandler} />}{" "}
          </div>
        )}
      </div>
      <div className={classes.adText}>
        <div className={classes.textCon}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.adTextBtm}>
          <div className={classes.cardTags}>
            <button>{props.condition}</button>
            <button>{props.category}</button>
          </div>

          <div className={classes.priceText}>{"$" + props.price}</div>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
