import classes from "../../global form page/globalForm.module.css";
import DatePickerMaterialUI from "./DatePicker";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import UIContext from "../../../store/ui-context";
import UserContext from "../../../store/user-context";
import { useContext, useEffect } from "react";
import dayjs from "dayjs";
import AdsContext from "../../../store/ads-context";
import AuthContext from "../../../store/auth-context";

//Get tomorrow's date
let today = dayjs(); // Convert to Day.js instance
let tomorrow = today.add(1, "day");

const NewAdForm = () => {
  //Use state for ad data
  const [adData, setAdData] = useState({
    itemName: "",
    description: "",
    category: "electronics",
    condition: "new",
    price: "",
    location: "",
    endAt: tomorrow,
    imageUrls: [],
  });

  //UI context for sending any error messages
  const uiContext = useContext(UIContext);
  const userContext = useContext(UserContext);
  const adsContext = useContext(AdsContext);
  const authContext = useContext(AuthContext);

  //populate the ad data for edit or create
  useEffect(() => {
    console.log("tomorrow", tomorrow);
    if (adsContext.activeAdData) {
      setAdData((prev) => {
        return {
          ...prev,
          itemName: adsContext.activeAdData.itemName,
          description: adsContext.activeAdData.description,
          category: adsContext.activeAdData.category,
          condition: adsContext.activeAdData.condition,
          price: adsContext.activeAdData.price,
          location: adsContext.activeAdData.location,
          endAt: dayjs(adsContext.activeAdData.endAt),
          imageUrls: adsContext.activeAdData.imageUrls,
          id: adsContext.activeAdData.id,
        };
      });
    } else
      setAdData((prev) => {
        return {
          ...prev,
          itemName: "",
          description: "",
          category: "electronics",
          condition: "new",
          price: "",
          location: "",
          endAt: tomorrow,
          imageUrls: [],
        };
      });
  }, [adsContext.activeAdData]);

  //Change handler for date picker
  const handleDateChange = (newDate) => {
    setAdData((prev) => {
      return {
        ...prev,
        endAt: newDate,
      };
    });
  };

  //Image handler (for ads picture)
  const handleImageChange = (e) => {
    if (adData.imageUrls.length >= 5) {
      uiContext.setSnackBar({
        show: "Error",
        success: false,
        message: "You can only upload 5 images",
      });
      e.target.value = null;
      return;
    }
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setAdData((ad) => {
          return {
            ...adData,
            imageUrls: [...ad.imageUrls, reader.result],
          };
        });
      };
      reader.onerror = (error) => {
        alert("Error: ", error);
      };
      e.target.value = null;
    }
  };

  //Remove image handler
  const removeImageHandler = (index) => {
    setAdData((ad) => {
      return {
        ...adData,
        imageUrls: ad.imageUrls.filter((_, i) => i !== index),
      };
    });
  };

  //Change handler for ad data
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAdData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //Edit ad handler
  const editAdHandler = (e) => {
    if (adData.id) {
      console.log(adData);
      e.preventDefault();
      const data = { ...adData };
      const endDatae = new Date(data.endAt);
      data.endAt = endDatae;
      data.pictures = data.imageUrls;
      adsContext.editAd(data, adData.id, authContext.token);
    }
  };

  //Create ad handler
  const createAdHandler = (e) => {
    e.preventDefault();
    const data = { ...adData };
    const endDatae = new Date(data.endAt);
    data.endAt = endDatae;
    const fakimages = [
      "https://m.media-amazon.com/images/I/61qauX2nsSL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71gnD2xoEBL._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/71Z5dqa2fPL._AC_SL1500_.jpg",
    ];
    data.pictures = data.imageUrls;
    //data.pictures = fakimages;
    data.userId = userContext.userData._id;

    adsContext.createAd(data, authContext.token);
  };

  //Delete ad handler
  const deleteAdHandler = (e) => {
    e.preventDefault();
    adsContext.deleteAd(adData.id, authContext.token);
    uiContext.setFormNavactive("ad");
    adsContext.setActiveAdData(null);
  };

  return (
    <div className={classes.formConatiner}>
      <form onSubmit={createAdHandler}>
        <div className={classes.btnCon}>
          {adsContext.activeAdData && (
            <button
              type="button"
              onClick={deleteAdHandler}
              style={{
                backgroundColor: "red",
              }}>
              Delete Ad
            </button>
          )}
          {adsContext.activeAdData && (
            <button type="button" onClick={editAdHandler}>
              Update Ad
            </button>
          )}
          {!adsContext.activeAdData && <button type="submit">Create Ad</button>}
        </div>

        <div className={classes.inputFormBox}>
          <div className={classes.inputBox}>
            <label htmlFor="itemName">Item Name</label>
            <input type="text" name="itemName" id="itemName" placeholder="my product" onChange={changeHandler} value={adData.itemName} />
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="10" placeholder="description..." onChange={changeHandler} value={adData.description}></textarea>
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="category">Category</label>
            <select name="category" id="" onChange={changeHandler} value={adData.category}>
              <option value="electronics">Electronics</option>
              <option value="clothing"> Clothings</option>
              <option value="beauty">Beauty</option>
              <option value="furniture">Furniture</option>
              <option value="sports">Sports</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="condition">Condition</label>
            <select name="condition" id="" onChange={changeHandler} value={adData.condition}>
              <option value="new"> New</option>
              <option value="used">Used</option>
              <option value="fair">fair</option>
            </select>
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="price">Price</label>
            <div className={classes.amountBox}>
              <span>$</span>
              <input type="text" name="price" id="price" placeholder="250" onChange={changeHandler} value={adData.price} />
            </div>
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" placeholder="Brampton, Ontario CA" onChange={changeHandler} value={adData.location} />
          </div>
          <div className={classes.inputBox}>
            <label htmlFor="">End Date</label>
            <DatePickerMaterialUI className={classes.datePicker} value={adData.endAt} onChange={handleDateChange} />
          </div>
        </div>

        <div className={classes.imgContainer}>
          {adData.imageUrls.length > 0 && (
            <div className={classes.imgSingleBox}>
              <img src={adData.imageUrls[0]} alt="" srcSet="" />
              <CloseIcon
                className={classes.removeIcon}
                onClick={() => {
                  removeImageHandler(0);
                }}
              />
            </div>
          )}

          <div className={classes.imgScrollBox}>
            {adData.imageUrls.map((url, index) => {
              return (
                index > 0 && (
                  <div className={classes.imgBox} key={index}>
                    <img src={url} alt="" srcSet="" />
                    <CloseIcon
                      className={classes.removeIcon}
                      onClick={() => {
                        removeImageHandler(index);
                      }}
                    />
                  </div>
                )
              );
            })}
          </div>

          <div className={classes.profile}>
            <button type="button">Upload Images</button>
            <input type="file" onChange={handleImageChange} className={classes.fileInput} />
          </div>
        </div>
      </form>
    </div>
  );
};
export default NewAdForm;
