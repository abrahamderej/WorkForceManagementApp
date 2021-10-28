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
        username: action.payload.username,
        password: action.payload.password,
        isLogin: true,
      };
    default:
      return state;
  }
};

export default userReducer;
