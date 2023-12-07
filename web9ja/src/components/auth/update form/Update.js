import React, { useState, useContext, useEffect } from "react";
import classes from "../../global form page/globalForm.module.css";
import UserContext from "../../../store/user-context";
import AuthContext from "../../../store/auth-context";
import { useNavigate } from "react-router-dom";

const UpdateForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phone: "",
    address: "",
    profilePicture: "",
  });
  const [imagePreview, setImagePreview] = useState([]);

  //State from context
  const authCtx = useContext(AuthContext);
  //const uiCtx = useContext(UIContext);
  const ctx = useContext(UserContext);
  const navigate = useNavigate();

  //Set userData state from context
  useEffect(() => {
    if (!ctx.userData) return;
    setUserData({
      firstName: ctx.userData?.firstName,
      lastName: ctx.userData?.lastName,
      email: ctx.userData?.email,
      username: ctx.userData?.username,
      phone: ctx.userData?.phone.includes("+") ? ctx.userData?.phone : "+" + ctx.userData?.phone,
      address: ctx.userData?.address,
      profilePicture: ctx.userData?.profilePicture,
    });
    setImagePreview(ctx.userData?.profilePicture);
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
  //Image handler (for ads picture)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Generate Data URLs for previews
    const imagePriviewUrl = URL.createObjectURL(file);
    // Update state with the new files and previews
    setUserData((data) => ({
      ...data,
      profilePicture: file,
    }));
    setImagePreview(imagePriviewUrl);

    e.target.value = null;
  };

  //Submit handler (for updating user form submission)
  const onSubmitHandler = (e) => {
    e.preventDefault();
    ctx.updateUser(userData, ctx.userData._id, authCtx.token);
  };

  //Delete handler (for deleting user )
  const deleteHandler = async () => {
    const userRes = window.confirm("Are you sure you want to delete your account?");
    if (!userRes) return;
    const res = await ctx.deleteUser(ctx.userData._id, authCtx.token);
    if (res) {
      authCtx.setToken(null);
      ctx.setUserData(null);
      authCtx.logOut();
      navigate("/ads");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes.btnCon}>
        <button
          type="button"
          onClick={deleteHandler}
          style={{
            backgroundColor: "red",
          }}>
          Delete Account
        </button>
        <button type="submit">Update Account</button>
      </div>

      <div className={classes.inputFormBox}>
        <div className={classes.inputBox}>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" type="text" placeholder="First Name" onChange={changeHandler} value={userData.firstName} />
        </div>

        <div className={classes.inputBox}>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" type="text" placeholder="Last Name" onChange={changeHandler} value={userData.lastName} />
        </div>

        <div className={classes.inputBox}>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Email" onChange={changeHandler} disabled value={userData.email} />
        </div>

        <div className={classes.inputBox}>
          <label htmlFor="username">Username</label>
          <input name="username" type="text" placeholder="Unique username" onChange={changeHandler} disabled value={userData.username} />
        </div>

        <div className={classes.inputBox}>
          <label htmlFor="phone">Phone</label>
          <input name="phone" type="text" placeholder="+123456789" onChange={changeHandler} value={userData.phone} />
        </div>

        <div className={classes.inputBox}>
          <label htmlFor="address">Address</label>
          <input name="address" type="text" placeholder="Address" onChange={changeHandler} value={userData.address} />
        </div>
      </div>
      <div className={classes.imgContainer}>
        <div className={classes.imgSingleBoxProfile}>
          <img src={imagePreview} alt="" srcSet="" />
        </div>

        <div className={classes.profile}>
          <button type="button">Upload Profile</button>
          <input type="file" onChange={handleImageChange} className={classes.fileInput} />
        </div>
      </div>
    </form>
  );
};
export default UpdateForm;
