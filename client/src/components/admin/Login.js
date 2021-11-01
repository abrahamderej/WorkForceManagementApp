import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/ninja-logo.jpg";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogin, setUserProfile } from "../../store/actions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErrMsg, setUsernameErrMsg] = useState({});
  const [passwordErrMsg, setPasswordErrMsg] = useState({});
  const [loginErrMsg, setLoginErrMsg] = useState("");
  const [userProfileId, setUserProfileId] = useState(0);

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
        console.log(response.data);
        if (response.data.length > 0) {
          const data = response.data[0];
          console.log(data.userProfile_id + "userid");
          setUserProfileId(data.userProfile_id);
          getUserProfile(data.userProfile_id);
          dispatch(setUserLogin(data));
          history.push("/dashboard");
        } else {
          console.log("we are in else");
          setLoginErrMsg("Please Enter correct User Name and correct Password");
        }
      }
    );
  };

  const getUserProfile = (id) => {
    console.log(id + "inside the get method");
    Axios.get("http://localhost:3001/users/" + id).then((response) => {
      console.log(response.data + " in user profile");
      const data = response.data;
      dispatch(setUserProfile(data));
      console.log("dispatched it" + JSON.stringify(data));
    });
  };

  return (
    <div className="container-login">
      <img alt="logo" className="login-logo" src={logo} />
      <form className="add-form-login" onSubmit={onSubmit}>
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
