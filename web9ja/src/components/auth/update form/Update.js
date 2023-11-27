import React, { useState, useContext, useEffect } from "react";
import myClasses from "./update.module.css";
import classes from "../authHelper.module.css";
import UserContext from "../../../store/user-context";
import AuthContext from "../../../store/auth-context";
import UIContext from "../../../store/ui-context";
import CloseIcon from "@mui/icons-material/Close";

const UpdateForm = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phone: "",
    address: "",
    profilePicture: "",
  });

  //State from context
  const authCtx = useContext(AuthContext);
  const uiCtx = useContext(UIContext);
  const ctx = useContext(UserContext);

  //Set userData state from context
  useEffect(() => {
    if (!ctx.userData) return;
    console.log(ctx.userData);
    setUserData({
      firstName: ctx.userData?.firstName,
      lastName: ctx.userData?.lastName,
      email: ctx.userData?.email,
      username: ctx.userData?.username,
      phone: ctx.userData?.phone,
      address: ctx.userData?.address,
      profilePicture: ctx.userData?.profilePicture,
    });
  }, [ctx.userData]);

  //Change handler (for input fields)
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: name === "phone" && !value.includes("+") ? "+" + value : value,
      };
    });
  };

  //Image handler (for profile picture)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
      console.log(imageUrl);
    }
    console.log(file);
  };

  //Submit handler (for updating user form submission)
  const onSubmitHandler = (e) => {
    e.preventDefault();
    userData.bio = "";
    ctx.updateUser(userData, ctx.userData._id, authCtx.token);
  };

  //Delete handler (for deleting user )
  const deleteHandler = async () => {
    const res = await ctx.deleteUser(ctx.userData._id, authCtx.token);
    if (res) {
      authCtx.setToken(null);
    }
  };

  const closeFormHandler = () => {
    uiCtx.setOpenUpdateForm(false);
  };

  return (
    <main className={`${uiCtx.openUpdateForm && myClasses.overlay}`}>
      <div className={` ${!uiCtx.updateForm && myClasses.conHide} ${uiCtx.openUpdateForm && myClasses.container} `}>
        <form className={`${classes.signUpForm} ${myClasses.updateForm}`} onSubmit={onSubmitHandler}>
          <CloseIcon className={myClasses.closeIcon} onClick={closeFormHandler} />
          <h2>Update Your Information</h2>

          <div className={myClasses.nameBox}>
            <div className={myClasses.inputBox}>
              <label htmlFor="firstName">First Name</label>
              <input name="firstName" type="text" placeholder="First Name" onChange={changeHandler} value={userData.firstName} />
            </div>
            <div className={myClasses.inputBox}>
              <label htmlFor="lastName">Last Name</label>
              <input name="lastName" type="text" placeholder="Last Name" onChange={changeHandler} value={userData.lastName} />
            </div>
          </div>

          <div className={`${myClasses.inputBox} ${myClasses.inputBoxDisabled}`}>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder="Email" onChange={changeHandler} disabled value={userData.email} />
          </div>

          <div className={`${myClasses.inputBox} ${myClasses.inputBoxDisabled}`}>
            <label htmlFor="username">Username</label>
            <input name="username" type="text" placeholder="Unique username" onChange={changeHandler} disabled value={userData.username} />
          </div>

          <div className={myClasses.inputBox}>
            <label htmlFor="phone">Phone</label>
            <input name="phone" type="text" placeholder="+123456789" className={myClasses.phoneText} onChange={changeHandler} value={userData.phone} />
          </div>

          <div className={myClasses.inputBox}>
            <label htmlFor="address">Address</label>
            <input name="address" type="text" placeholder="Address" onChange={changeHandler} className={myClasses.address} value={userData.address} />
          </div>

          <div className={myClasses.profile}>
            <button type="button">Upload Profile</button>
            <input type="file" onChange={handleImageChange} className={myClasses.fileInput} />
          </div>

          <button type="submit" className={classes.submitBtn}>
            Update Account
          </button>
          <button type="button" className={`${classes.submitBtn} ${myClasses.dangerBtn}`} onClick={deleteHandler}>
            Delete Account
          </button>
        </form>
      </div>
    </main>
  );
};
export default UpdateForm;
