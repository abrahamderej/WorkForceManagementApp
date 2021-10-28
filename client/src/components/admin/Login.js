import React from "react";
import { useState } from "react";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/ninja-logo.jpg";
import Axios from "axios";
import Header from "../header/header";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../../store/actions";
import { setUserProfile } from "../../store/actions";

const Login = () => {
  const login = useSelector((state) => state.user.isLogin);
  const usernameState = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onSubmit = (e) => {
    console.log(usernameState);
    console.log(username + " us-pass" + password);
    e.preventDefault();
    if (!username || !password) {
      alert("Enter username and password");
      return;
    }
    console.log("username:" + username);
    onLogin({ username, password });
    console.log("checking routing");
    setUsername("");
    setPassword("");
  };

  const onLogin = ({ username, password }) => {
    console.log("submitted" + username);
    Axios.post("http://localhost:3001/login", { username, password }).then(
      (response) => {
        console.log(response);
        if (response.data.length > 0) {
          const data = response.data[0];
          console.log(data);
          dispatch(setUserProfile(data));
          console.log("routing to dashboard");
          history.push("/dashboard");
        }
      }
    );
  };

  return (
    <div className="container-login">
      <img alt="logo" className="login-logo" src={logo} />
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control-login">
          <label>UserName</label>
          <input
            type="text"
            placeholder=" Add UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-control-login">
          <label>Password</label>
          <input
            type="password"
            placeholder="Add Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type="submit" value="Login" className="login-btn btn-block" />
      </form>
    </div>
  );
};

export default Login;
