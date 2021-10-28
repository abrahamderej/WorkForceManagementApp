import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/ninja-logo.jpg";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile } from "../../store/actions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErrMsg, setUsernameErrMsg] = useState({});
  const [passwordErrMsg, setPasswordErrMsg] = useState({});
  const [loginErrMsg, setLoginErrMsg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validation();

    if (isFormValid) {
      onLogin({ username, password });
    }
    setUsername("");
    setPassword("");
  };

  const validation = () => {
    let isValid = true;
    const usernameErr = {};
    const passwordErr = {};

    if (username.trim().length < 3) {
      usernameErr.shortLen = " Username should be at least 3 characters";
      isValid = false;
    }
    if (username.trim().length > 10) {
      usernameErr.bigLen = " Username should be at most 10 characters";
      isValid = false;
    }
    if (password.trim().length < 5) {
      passwordErr.shortLen = " Password should be at least 5 characters";
      isValid = false;
    }

    setUsernameErrMsg(usernameErr);
    setPasswordErrMsg(passwordErr);

    return isValid;
  };

  const onLogin = ({ username, password }) => {
    Axios.post("http://localhost:3001/login", { username, password }).then(
      (response) => {
        console.log(response.data.length);
        if (response.data.length > 0) {
          const data = response.data[0];
          console.log(data);
          dispatch(setUserProfile(data));
          history.push("/dashboard");
        } else {
          console.log("we are in else");
          setLoginErrMsg("Please Enter correct User Name and correct Password");
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
          {Object.keys(usernameErrMsg).map((key) => {
            return <div style={{ color: "red" }}>{usernameErrMsg[key]}</div>;
          })}
        </div>
        <div className="form-control-login">
          <label>Password</label>
          <input
            type="password"
            placeholder="Add Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {Object.keys(passwordErrMsg).map((key) => {
            return <div style={{ color: "red" }}>{passwordErrMsg[key]}</div>;
          })}
        </div>

        <div style={{ color: "red" }}>{loginErrMsg}</div>
        <input type="submit" value="Login" className="login-btn btn-block" />
      </form>
    </div>
  );
};

export default Login;
