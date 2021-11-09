export const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

export const setUserLogin = (user) => ({
  type: "SETUSER",
  payload: user,
});

// export const hideSnackBar = () => ({
//   type: SNACKBAR_HIDE,
// });
export const setUserProfile = (userProfile) => ({
  type: "SETUSERPROFILE",
  payload: userProfile,
});
