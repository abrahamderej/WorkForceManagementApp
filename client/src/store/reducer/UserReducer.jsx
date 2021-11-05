const userReducer = (
  state = {
    userLogin: { username: "", password: "", isLogin: false, roleName: "" },
    userProfile: {},
  },
  action
) => {
  switch (action.type) {
    case "SETUSER":
      return {
        ...state,
        userLogin: {
          username: action.payload.userName,
          password: action.payload.password,
          isLogin: true,
          roleName: action.payload.roleName,
        },
      };
    case "SETUSERPROFILE":
      return {
        ...state,
        userProfile: {
          fullName: action.payload.firstName + " " + action.payload.lastName,
          email: action.payload.email,
          phoneNumber: action.payload.phoneNumber,
          address:
            action.payload.street +
            " " +
            action.payload.state +
            " " +
            action.payload.zipCode +
            " " +
            action.payload.country,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
