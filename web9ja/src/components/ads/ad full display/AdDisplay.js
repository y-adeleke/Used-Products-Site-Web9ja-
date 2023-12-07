import classes from "./AdDisplay.module.css";
import { useParams } from "react-router-dom";
import AdsContext from "../../../store/ads-context";
import { useContext, useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import EmailIcon from "@mui/icons-material/Email";
import UserContext from "../../../store/user-context";
import UIContext from "../../../store/ui-context";
import AuthContext from "../../../store/auth-context";
import { useNavigate } from "react-router-dom";

const AdFullDisplay = () => {
  //states
  const [navActive, setNavActive] = useState("details");
  const [imageActive, setImageActive] = useState(0);
  const [text, setText] = useState("");
  const [adOwner, setAdOwner] = useState("");

  //contexts
  const adsContext = useContext(AdsContext);
  const userContext = useContext(UserContext);
  const uiContext = useContext(UIContext);
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const ad = adsContext.ads.find((ad) => ad._id === id);

  useEffect(() => {
    const res = async () => {
      const resUser = await adsContext.getUserById(ad?.userId);
      console.log(resUser);
      setAdOwner(resUser);
    };
    res();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ad]);

  //this is used to check if the ad is active
  let isActive;
  if (ad) {
    isActive = new Date(ad.endAt) >= new Date();
  }

  //this takes a date and returns the number of days ago
  const daysAgoConverter = (time) => {
    const date = new Date(time);
    const today = new Date();
    const diffTime = Math.abs(today - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  //this function is used to go back to the previous page
  const arrowBackHanlder = () => {
    navigate("/ads");
    uiContext.setNavActive("explore");
  };

  //this function is used to toggle favourite
  const toggleFavHandler = (e) => {
    e.stopPropagation();
    adsContext.toggleFavourite(userContext.userData._id, ad._id, authContext?.token);
  };

  //on change handler for the question input
  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  //this function is used to send a question
  const sendQuestionHandler = async () => {
    if (text.trim().length === 0) {
      uiContext.setSnackBar({ show: true, success: false, message: "Please enter a question" });
      return;
    }
    if (!ad.isActive || !isActive) {
      uiContext.setSnackBar({ show: true, success: false, message: "Sorry you cant ask a question on a disabled ad" });
      return;
    }
    const data = {
      questionText: text,
      askedBy: userContext?.userData?._id || "anonymous",
    };
    const res = await adsContext.askQuestion(data, ad._id);
    if (res) setText("");
  };

  const answerQuestionHandler = async (q_id) => {
    if (text.trim().length === 0) {
      uiContext.setSnackBar({ show: true, success: false, message: "Please enter an answer" });
      return;
    }
    if (!ad.isActive || !isActive) {
      uiContext.setSnackBar({ show: true, success: false, message: "Sorry you cant ask a question on a disabled ad" });
      return;
    }
    if (userContext.userData._id !== ad.userId) {
      uiContext.setSnackBar({ show: true, success: false, message: "Sorry this is not your ad" });
      return;
    }
    const res = await adsContext.answerQuestion(text, ad._id, q_id, authContext.token);
    if (res) setText("");
  };

  //Edit ad if user is the owner
  const moveToEditHandler = () => {
    //This is used to set the active ad data to the ad that is to be edited
    navigate("/ads/adform", { state: { adId: ad._id } });
    uiContext.setFormNavactive("posted");
  };

  //get year from date function
  const getYear = (date) => {
    return new Date(date).getFullYear();
  };

  if (!ad) return <p>loading Ads...</p>;

  return (
    <section className={classes.singleaDPage}>
      <div className={classes.imgBox}>
        {ad.pictures && <img src={ad.pictures[imageActive]} alt="" srcset="" className={classes.activeImage} />}
        <div className={classes.imagesBox}>
          {ad.pictures.map((img, index) => {
            return (
              <img
                src={img}
                key={index}
                alt=""
                srcset=""
                className={`${classes.image} ${imageActive === index ? classes.active : ""}`}
                onClick={() => {
                  setImageActive(index);
                }}
              />
            );
          })}
        </div>
      </div>

      <div className={classes.adContents}>
        <ArrowBackIosIcon className={classes.closeIcon} onClick={arrowBackHanlder} />
        {userContext?.userData && (
          <div>
            {userContext?.userData?.favorites?.includes(ad._id) ? (
              <FavoriteIcon className={classes.favIcon} onClick={toggleFavHandler} />
            ) : (
              <FavoriteBorderIcon className={classes.favIcon} onClick={toggleFavHandler} />
            )}
          </div>
        )}

        <div className={classes.adBriefDetailBox}>
          <h2>{ad.itemName}</h2>
          <p className={classes.description}>{ad.description}</p>
          <p className={classes.price}>$ {ad.price}</p>
        </div>

        <nav className={classes.contentNav}>
          <span
            className={navActive === "details" ? classes.navActive : ""}
            onClick={() => {
              setNavActive("details");
            }}>
            Details
          </span>
          <span
            className={navActive === "qAndA" ? classes.navActive : ""}
            onClick={() => {
              setNavActive("qAndA");
            }}>
            Q&A
          </span>
          <span
            className={navActive === "seller" ? classes.navActive : ""}
            onClick={() => {
              setNavActive("seller");
            }}>
            Seller
          </span>
        </nav>

        {navActive === "details" && (
          <div className={classes.details}>
            <div className={classes.cardTags}>
              <button>{ad.condition}</button>
              <button>{ad.category}</button>
              <button className={!isActive ? classes.redBtn : ""}>{isActive ? "Active" : "Disabled"}</button>
            </div>
            <div className={classes.locationTime}>
              <p>
                <LocationOnIcon /> {ad.location}
              </p>
              <p>
                <AccessTimeIcon /> {daysAgoConverter(ad.createdAt) === 0 ? "<1" : daysAgoConverter(ad.createdAt)} {daysAgoConverter(ad.createdAt) < 1 ? "day" : "days"} ago
              </p>
              {userContext?.userData?._id === ad.userId && (
                <button className={classes.editAdBtn} onClick={moveToEditHandler}>
                  Edit Ad
                </button>
              )}
            </div>
          </div>
        )}

        {navActive === "seller" && (
          <div className={classes.details}>
            <div className={classes.userImgBox}>
              <img src={adOwner?.profilePicture} alt="" srcset="" className={classes.userImg} />
            </div>
            <div className={classes.userText}>
              <p>
                <PersonIcon className={classes.icon} /> {adOwner?.username}
              </p>
              <p>
                <EmailIcon className={classes.icon} /> <a href="gmail.com"> {adOwner?.email}</a>
              </p>
              <p>
                <LoyaltyIcon className={classes.icon} /> Member since {getYear(adOwner?.createdAt)}
              </p>
            </div>
          </div>
        )}

        {navActive === "qAndA" && (
          <div className={classes.details}>
            {ad.questions?.map((question) => {
              return (
                <div className={classes.qAndA}>
                  <div className={classes.qandABox}>
                    <h3>Q</h3>
                    <p>{question.questionText}</p>
                  </div>
                  {question.answerText && (
                    <div className={classes.qandABox}>
                      <h3>A</h3>
                      <p>{question.answerText}</p>
                    </div>
                  )}
                  {!question.answerText && userContext?.userData?._id === ad.userId && (
                    <div className={classes.qandABox}>
                      <h3>A</h3>
                      <textarea name="response" id="" placeholder="Please respond to customer" onChange={textChangeHandler}></textarea>
                      <button
                        onClick={() => {
                          answerQuestionHandler(question._id);
                        }}>
                        Send
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

            {userContext?.userData?._id !== ad.userId && (
              <div className={`${classes.qandABox} ${classes.questionBox}`}>
                <textarea name="response" id="" placeholder="Ask Your Question" onChange={textChangeHandler}></textarea>
                <button onClick={sendQuestionHandler}>Send</button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdFullDisplay;
