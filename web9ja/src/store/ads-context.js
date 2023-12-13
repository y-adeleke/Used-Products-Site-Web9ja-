import { createContext } from "react";
import UIContext from "./ui-context";
import UserContext from "./user-context";
import { useState, useContext, useEffect } from "react";

const AdsContext = createContext({
  ads: [],
  activeAdData: null,
  filterAdChoice: {
    category: "all",
    condition: "all",
    status: "all",
  },
  searchData: "",
  setFilterAdChoice: (data) => {},
  setSearch: (data) => {},
  setAds: (data) => {},
  createAd: (data) => {},
  editAd: (data, adId) => {},
  deleteAd: (adId, token) => {},
  toggleFavourite: (userID, adId, token) => {},
  setActiveAdData: (adId) => {},
  askQuestion: (data, adId) => {},
  answerQuestion: (answerText, adId, questionId, token) => {},
  getUserById: (userId) => {},
});

let backendUrl = process.env.REACT_APP_BACKEND_URL;
backendUrl = "https://web9ja-backend.onrender.com";

export const AdsContextProvider = (props) => {
  const [ads, setAds] = useState([]);
  const [activeAdData, setActiveAdData] = useState(null);
  const [searchData, setSearch] = useState("");
  const [filterAdChoice, setFilterAdChoice] = useState({
    category: "all",
    condition: "all",
    status: "all",
  });

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
    const formData = new FormData(); // Initialize a FormData object
    Object.keys(data).forEach((key) => {
      if (key !== "pictures") {
        formData.append(key, data[key]);
      }
    });

    data.pictures.forEach((file, index) => {
      formData.append("pictures", file);
    });
    try {
      uiContext.setLoading(true);
      const res = await fetch(`${backendUrl}/ads`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
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
      return true;
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
      const formData = new FormData();
      // Append non-image data
      formData.append("category", data.category);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("endAt", data.endAt);

      // Append images - differentiate between File objects and URLs
      data.pictures.forEach((picture) => {
        if (typeof picture === "string") {
          formData.append("retainedPictures", picture); // Retained image URL
        } else {
          formData.append("pictures", picture); // New image File
        }
      });

      const res = await fetch(`${backendUrl}/ads/${adId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const resData = await res.json();
        const errorMessage = resData.message || "Unable to edit Ad!...";
        throw new Error(errorMessage);
      }
      const resData = await res.json();
      console.log(resData);
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
      const res = await fetch(`${backendUrl}/ads`);
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
      const res = await fetch(`${backendUrl}/ads/disable/${adId}`, {
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
      const res = await fetch(`${backendUrl}/ads/favorites/${userID}/${adId}`, {
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

  //this function is used to set the filter ad choice
  const setFilterAdChoiceHandler = (type, data) => {
    setFilterAdChoice((prev) => {
      return {
        ...prev,
        [type]: data,
      };
    });
  };

  //This function is used to search for ads by title
  const searchAdsHandler = (data) => {
    if (searchData.trim().length === 0) {
      setFilterAdChoice((prev) => {
        return {
          ...prev,
          category: "all",
          condition: "all",
          status: "all",
        };
      });
    }
    setSearch(data);
  };

  //This function is used to ask a question
  const askQuestionHandler = async (data, adId) => {
    try {
      uiContext.setLoading(true);
      const res = await fetch(`${backendUrl}/ads/questions/${adId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const resData = await res.json();
        const errorMessage = resData.message || "Unable to perform this action!...";
        throw new Error(errorMessage);
      }
      const resData = await res.json();
      const newAd = resData.ad;
      const adIndex = ads.findIndex((ad) => ad._id === adId);
      const newAds = [...ads];
      newAds[adIndex] = newAd;
      setAds(newAds);
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: true,
        message: resData.message,
      });
      return true;
    } catch (error) {
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: false,
        message: error.message,
      });
    }
  };

  //This function is used to answer a question
  const answerQuestionHandler = async (answerText, adId, questionId, token) => {
    try {
      uiContext.setLoading(true);
      const res = await fetch(`${backendUrl}/ads/questions/${adId}/answer/${questionId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          answerText: answerText,
        }),
      });
      if (!res.ok) {
        const resData = await res.json();
        const errorMessage = resData.message || "Unable to perform this action!...";
        throw new Error(errorMessage);
      }
      const resData = await res.json();
      const newAd = resData.ad;
      const adIndex = ads.findIndex((ad) => ad._id === adId);
      const newAds = [...ads];
      newAds[adIndex] = newAd;
      setAds(newAds);
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: true,
        message: resData.message,
      });
      return true;
    } catch (error) {
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: false,
        message: error.message,
      });
    }
  };

  //Get user by id (this function is used to get the user data of the ad owner)
  const getUserById = async (userId) => {
    try {
      uiContext.setLoading(true);
      const res = await fetch(`${backendUrl}/users/${userId}`);
      if (!res.ok) {
        const resData = await res.json();
        const errorMessage = resData.message || "Unable to get user!...";
        throw new Error(errorMessage);
      }
      const resData = await res.json();
      console.log(resData);
      uiContext.setLoading(false);
      return resData.data;
    } catch (error) {
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: false,
        message: error.message,
      });
    }
  };

  const contextValue = {
    ads: ads,
    setAds: setAdsFunc,
    filterAdChoice: filterAdChoice,
    searchData: searchData,
    setSearch: searchAdsHandler,
    setFilterAdChoice: setFilterAdChoiceHandler,
    createAd: createAdHandler,
    editAd: editAdHandler,
    deleteAd: disableAdHandler,
    toggleFavourite: toggleFavouriteHamdler,
    activeAdData: activeAdData,
    setActiveAdData: activeAdDataHandler,
    askQuestion: askQuestionHandler,
    answerQuestion: answerQuestionHandler,
    getUserById: getUserById,
  };

  return <AdsContext.Provider value={contextValue}>{props.children}</AdsContext.Provider>;
};
export default AdsContext;
