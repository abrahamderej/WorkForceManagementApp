import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/ninja-logo.jpg";
import Axios from "axios";
import validator from "validator";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogin, setUserProfile } from "../../store/actions";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const CompanyRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [vision, setVision] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [employeeCount, setEmployeeCount] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [industry, setIndustry] = useState("");
  const [type, setType] = useState("");

  const [nameErrMsg, setNameErrMsg] = useState({});
  const [emailErrMsg, setEmailErrMsg] = useState({});
  const [visionErrMsg, setVisionErrMsg] = useState({});
  const [registerErrMsg, setRegisterErrMsg] = useState("");

  const [userProfileId, setUserProfileId] = useState(0);

  const countries = [
    { value: "Nepal", label: "Nepal" },
    { value: "USA", label: "USA" },
    { value: "Peru", label: "Peru" },
  ];

  const companyTypes = [
    { value: "Private", label: "Private" },
    { value: "Pulbic", label: "Public" },
  ];
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const isFormValid = validation();

    if (isFormValid) {
      onRegister({
        name,
        email,
        vision,
        address,
        country,
        employeeCount,
        phoneNumber,
        industry,
        type,
      });
    }
    setName("");
    setEmail("");
    setAddress("");
    setPhoneNumber("");
    setType("");
    setCountry("");
    setEmployeeCount(0);
    setVision("");
    setIndustry("");
  };

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validation = () => {
    let isValid = true;
    const nameErr = {};
    const emailErr = {};
    const visionErr = {};

    if (name.trim().length < 5) {
      nameErr.shortLen = " Name should be at least 5 characters";
      isValid = false;
    }
    if (name.trim().length > 100) {
      nameErr.bigLen = " Username should be at most 100 characters";
      isValid = false;
    }
    if (!validator.isEmail(email)) {
      emailErr.wrongEmail = "Invalid Email ";
      isValid = false;
    }
    if (vision.trim().length === 0) {
      visionErr.empty = " Vision should not be empty";
      isValid = false;
    }

    setNameErrMsg(nameErr);
    setEmailErrMsg(emailErr);
    setVisionErrMsg(visionErr);

    return isValid;
  };

  const onRegister = ({
    name,
    email,
    vision,
    address,
    country,
    employeeCount,
    phoneNumber,
    industry,
    type,
  }) => {
    Axios.post("http://localhost:3001/company", {
      name,
      email,
      vision,
      address,
      country,
      employeeCount,
      phoneNumber,
      industry,
      type,
    }).then((response) => {
      console.log(response.data);
      if (response.data.affectedRows > 0) {
        alert("Company Successfull Registered");
        history.push("/info");
        const data = response.data;
        // console.log(data.userProfile_id + "userid");
        // setUserProfileId(data.userProfile_id);
        // getUserProfile(data.userProfile_id);
        // dispatch(setUserLogin(data));
        // history.push("/dashboard");
      } else {
        setRegisterErrMsg("Please Try Again!!");
      }
    });
  };

  return (
    <div className="container-company">
      <div style={{ color: "red" }}>{registerErrMsg}</div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control-company">
          <label>Name *</label>
          <input
            type="text"
            placeholder=" Add Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {Object.keys(nameErrMsg).map((key) => {
            return <div style={{ color: "red" }}>{nameErrMsg[key]}</div>;
          })}
        </div>
        <div className="form-control-company">
          <label>Email *</label>
          <input
            type="email"
            placeholder="Add email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {Object.keys(emailErrMsg).map((key) => {
            return <div style={{ color: "red" }}>{emailErrMsg[key]}</div>;
          })}
        </div>

        <div className="form-control-company">
          <label>Vision *</label>
          <input
            type="text"
            placeholder="Add Vision"
            value={vision}
            onChange={(e) => setVision(e.target.value)}
          />
          {Object.keys(visionErrMsg).map((key) => {
            return <div style={{ color: "red" }}>{visionErrMsg[key]}</div>;
          })}
        </div>
        <div className="form-control-company">
          <label>Address</label>
          <input
            type="text"
            placeholder="Add Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {/* {Object.keys(addressErrMsg).map((key) => {
            return <div style={{ color: "red" }}>{addressErrMsg[key]}</div>;
          })} */}
        </div>
        <div className="form-control-company">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Country
            </InputLabel>
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              label="----Select Country---"
            >
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="form-control-company">
          <label>Employee Count</label>
          <input
            type="number"
            placeholder="Add Employee Count"
            value={employeeCount}
            onChange={(e) => setEmployeeCount(e.target.value)}
          />
          {/* {Object.keys(employeeCountErrMsg).map((key) => {
            return (
              <div style={{ color: "red" }}>{employeeCountErrMsg[key]}</div>
            );
          })} */}
        </div>
        <div className="form-control-company">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Add Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {/* {Object.keys(phoneNumberErrMsg).map((key) => {
            return <div style={{ color: "red" }}>{phoneNumberErrMsg[key]}</div>;
          })} */}
        </div>
        <div className="form-control-company">
          <label>Industry</label>
          <input
            type="text"
            placeholder="Add Industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
          {/* {Object.keys(industryErrMsg).map((key) => {
            return <div style={{ color: "red" }}>{industryErrMsg[key]}</div>;
          })} */}
        </div>

        <div className="form-control-company">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Company Type
            </InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              label="----Select Company Type---"
            >
              {companyTypes.map((type) => (
                <MenuItem value={type.value}>{type.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="form-control-company">
          <input
            type="submit"
            value="Upload Logo"
            className="login-btn btn-block"
          />
        </div>
        <div className="form-control-company">
          <input
            type="submit"
            value="Register"
            className="login-btn btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default CompanyRegister;
