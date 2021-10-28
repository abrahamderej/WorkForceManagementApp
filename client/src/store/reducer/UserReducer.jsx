const userReducer = (
  state = { username: "", password: "", isLogin: false },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        username: "Hira",
        password: "hira",
        isLogin: true,
      };
    case "SETUSER":
      return {
        username: action.payload.userName,
        password: action.payload.password,
        isLogin: true,
      };
    default:
      return {
        username: "default",
        password: "",
        isLogin: false,
      };
  }
};

export default userReducer;
