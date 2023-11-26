//Register
const signUp = {
  success: true,
  message: "User created successfully",
};

//Sign in
const signinres = {
  success: true,
  token: "",
  message: "users logged in successfully",
  addInfo: "save the token in the client side (cookies) and send it in the header for all requests that require authentication",
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phone: "",
    address: "",
    profilePicture: "",
    bio: "",
    createdAt: "",
    favorites: [],
    postedAds: [],
  },
};

//update user
const updateUser = {
  success: true,
  message: "User updated successfully",
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phone: "",
    address: "",
    profilePicture: "",
    bio: "",
    createdAt: "",
    favorites: [],
    postedAds: [],
  },
};

//Delete
const deleteUser = {
  success: true,
  message: "User deleted successfully",
};
