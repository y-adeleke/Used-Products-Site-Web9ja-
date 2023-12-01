import classes from "./globalForm.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Profile from "../../images/cat.jpg";
import NewAdForm from "../ads/create ad form/NewAdForm";
import AdCard from "../ads/ad card/AdCard";
import AdsContext from "../../store/ads-context";
import { useContext } from "react";
import UserContext from "../../store/user-context";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import UIContext from "../../store/ui-context";
import UpdateForm from "../auth/update form/Update";
import { getDailyTimeSegment } from "../global helper/greetings";

const GlobalForm = () => {
  const adsContext = useContext(AdsContext);
  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);
  const uiContext = useContext(UIContext);
  const navigate = useNavigate();

  //This function will set the form values to the ad data to be edited
  //it doesnt edit the ad directly here...its just setting the form values for the clicked ad
  const editAdShowHandler = (ad) => {
    uiContext.setFormNavactive("ad");
    adsContext.setActiveAdData({
      itemName: ad.itemName,
      description: ad.description,
      category: ad.category,
      condition: ad.condition,
      price: ad.price,
      location: ad.location,
      endAt: ad.endAt,
      imageUrls: ad.pictures,
      id: ad._id,
    });
  };

  //This back icon will navigate to the ads page if there is no active ad data, if you are in the posted ads page and you click an ad to edit, if you click the back icon, it will take you back to the posted ads page.
  //please carefully analyze the behavior of the back icon.
  const arrowbackHandler = () => {
    if (!adsContext.activeAdData) {
      navigate("/ads");
      uiContext.setNavActive("explore");
    } else {
      uiContext.setFormNavactive("posted");
      adsContext.setActiveAdData(null);
    }
  };

  //This function will log out the user
  const logoutHandler = () => {
    authContext.logOut();
    navigate("/ads");
    uiContext.setNavActive("explore");
  };

  return (
    <main className={classes.adForm}>
      <nav className={classes.sideBar}>
        <div className={classes.profileBox}>
          <img src={userContext.userData?.profilePicture ? userContext.userData?.profilePicture : Profile} alt="" srcSet="" />
          <span>
            <span className={classes.greeting}>{getDailyTimeSegment()}, </span>
            {userContext.userData?.firstName}
          </span>
        </div>
        <div className={classes.navList}>
          <div className={classes.listNav}>
            <span
              className={uiContext.formNavActive === "ad" && !adsContext.activeAdData ? classes.active : ""}
              onClick={() => {
                uiContext.setFormNavactive("ad");
                adsContext.setActiveAdData(null);
              }}>
              Create an Ad
            </span>
            <span
              className={uiContext.formNavActive === "posted" || adsContext.activeAdData ? classes.active : ""}
              onClick={() => {
                uiContext.setFormNavactive("posted");
                adsContext.setActiveAdData(null);
              }}>
              Posted Ads
            </span>
            <span
              className={uiContext.formNavActive === "user profile" ? classes.active : ""}
              onClick={() => {
                uiContext.setFormNavactive("user profile");
                adsContext.setActiveAdData(null);
              }}>
              User Profile
            </span>
          </div>
          <button type="button" onClick={logoutHandler}>
            Log out
          </button>
        </div>
      </nav>

      <div className={classes.adFormBox}>
        <nav className={classes.topNav}>
          <ArrowBackIosIcon className={classes.closeIcon} onClick={arrowbackHandler} />
        </nav>
        {uiContext.formNavActive === "ad" && <NewAdForm />}
        {uiContext.formNavActive === "posted" && (
          <div className={classes.formConatiner}>
            <main className={classes.mainBox}>
              {adsContext.ads.map((ad, index) => {
                if (ad.userId !== userContext.userData._id) return null;
                if (new Date(ad.endAt) < new Date()) ad.isActive = false;
                return (
                  <AdCard
                    key={index}
                    id={ad._id}
                    imageSrc={ad.pictures[0]}
                    title={ad.itemName}
                    description={ad.description}
                    category={ad.category}
                    condition={ad.condition}
                    price={ad.price}
                    isActive={ad.isActive}
                    fav={userContext.userData.favorites.includes(ad._id)}
                    onClick={() => {
                      editAdShowHandler(ad);
                    }}
                  />
                );
              })}
            </main>
          </div>
        )}
        {uiContext.formNavActive === "user profile" && (
          <div className={classes.formConatiner}>
            <UpdateForm />
          </div>
        )}
      </div>
    </main>
  );
};
export default GlobalForm;
