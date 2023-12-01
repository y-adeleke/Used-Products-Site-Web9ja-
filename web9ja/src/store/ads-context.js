import { createContext } from "react";
import UIContext from "./ui-context";
import UserContext from "./user-context";
import { useState, useContext, useEffect } from "react";
import { adsFakeData } from "../components/ads/ads";

const AdsContext = createContext({
  ads: [],
  activeAdData: null,
  setAds: (data) => {},
  createAd: (data) => {},
  editAd: (data, adId) => {},
  deleteAd: (adId, token) => {},
  toggleFavourite: (userID, adId, token) => {},
  setActiveAdData: (adId) => {},
});

export const AdsContextProvider = (props) => {
  const [ads, setAds] = useState(adsFakeData);
  const [activeAdData, setActiveAdData] = useState(null);

  //UI store
  const uiContext = useContext(UIContext);
  const userContext = useContext(UserContext);

  //load all ads on component mount
  useEffect(() => {
    getAllAdsHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //This function is used to create an ad
  const createAdHandler = async (data, token) => {
    console.log(data);

    try {
      uiContext.setLoading(true);
      const res = await fetch(`https://web9ja-backend.onrender.com/ads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const resData = await res.json();
        const errorMessage = resData.message || "Unable to create Ad!...";
        throw new Error(errorMessage);
      }
      const resData = await res.json();
      setAds((prev) => {
        return [...prev, resData.data];
      });
      console.log(resData);
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: true,
        message: resData.message,
      });
    } catch (error) {
      console.log(error);
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: false,
        message: error.message,
      });
    }
  };

  //This function is used to edit an ad
  const editAdHandler = async (data, adId, token) => {
    try {
      uiContext.setLoading(true);
      const res = await fetch(`https://web9ja-backend.onrender.com/ads/${adId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ category: data.category, description: data.description, price: data.price, pictures: data.pictures, endAt: data.endAt }),
      });
      if (!res.ok) {
        const resData = await res.json();
        const errorMessage = resData.message || "Unable to edit Ad!...";
        throw new Error(errorMessage);
      }
      const resData = await res.json();
      uiContext.setLoading(false);
      //find the ad with the id
      const adIndex = ads.findIndex((ad) => ad._id === adId);
      //replace the ad with the new ad
      const newAds = [...ads];
      newAds[adIndex] = resData.data;
      setAds(newAds);
      uiContext.setSnackBar({
        show: true,
        success: true,
        message: resData.message,
      });
    } catch (error) {
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: false,
        message: error.message,
      });
    }
  };

  //This function is used to get all ads (we only use it once on component mount)
  const getAllAdsHandler = async () => {
    try {
      uiContext.setLoading(true);
      const res = await fetch(`https://web9ja-backend.onrender.com/ads`);
      if (!res.ok) {
        const resData = await res.json();
        const errorMessage = resData.message || "Unable to get Ads!...";
        throw new Error(errorMessage);
      }
      const resData = await res.json();
      uiContext.setLoading(false);
      setAds(resData.data);
      uiContext.setSnackBar({
        show: true,
        success: true,
        message: "Ads loaded successfully",
      });
    } catch (error) {
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: false,
        message: error.message,
      });
    }
  };

  //This function is used to disable an ad, reset the ad data and set the ad to inactive
  const disableAdHandler = async (adId, token) => {
    try {
      uiContext.setLoading(true);
      const res = await fetch(`https://web9ja-backend.onrender.com/ads/disable/${adId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const resData = await res.json();
        const errorMessage = resData.message || "Unable to Disable Ad!...";
        throw new Error(errorMessage);
      }
      const resData = await res.json();
      //get the index of the ad
      const adIndex = ads.findIndex((ad) => ad._id === adId);
      //get the ad
      const ad = ads[adIndex];
      //set the ad to inactive
      ad.isActive = false;
      //replace the ad with the new ad
      const newAds = [...ads];
      newAds[adIndex] = ad;
      setAds(newAds);
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: true,
        message: resData.message,
      });
    } catch (error) {
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: false,
        message: error.message,
      });
    }
  };

  //This function is used to toggle favourite ads
  const toggleFavouriteHamdler = async (userID, adId, token) => {
    try {
      uiContext.setLoading(true);
      const res = await fetch(`https://web9ja-backend.onrender.com/ads/favorites/${userID}/${adId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const resData = await res.json();
        const errorMessage = resData.message || "Unable to perform this action!...";
        throw new Error(errorMessage);
      }
      const resData = await res.json();
      uiContext.setLoading(false);
      localStorage.setItem("userData", JSON.stringify(resData.user));
      userContext.setUserData((prev) => {
        return {
          ...prev,
          favorites: resData.user.favorites,
        };
      });
      uiContext.setSnackBar({
        show: true,
        success: true,
        message: resData.message,
      });
    } catch (error) {
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: false,
        message: error.message,
      });
    }
  };

  //This function is used to set the active ad data
  const activeAdDataHandler = (ad) => {
    setActiveAdData(ad);
  };

  //This function is used to set ads (it is used in the delete user function to remove the user ads from the ads state)
  const setAdsFunc = (data) => {
    setAds(data);
  };

  /*
  const askQuestionHandler = () => {};

  const answerQuestionHandler = () => {};
 */

  const contextValue = {
    ads: ads,
    setAds: setAdsFunc,
    createAd: createAdHandler,
    editAd: editAdHandler,
    deleteAd: disableAdHandler,
    toggleFavourite: toggleFavouriteHamdler,
    activeAdData: activeAdData,
    setActiveAdData: activeAdDataHandler,
    // askQuestion: askQuestionHandler,
    // answerQuestion: answerQuestionHandler,
  };

  return <AdsContext.Provider value={contextValue}>{props.children}</AdsContext.Provider>;
};
export default AdsContext;
