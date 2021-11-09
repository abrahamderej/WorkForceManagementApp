import React from "react";
import { useState, useEffect, useHistory } from "react";
import { Navigate, useNavigate } from "react-router";
import Axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../../../store/actions";

const EditProfile = () => {
  const data = JSON.parse(localStorage.getItem("userProfile"));

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
  const [street, setStreet] = useState(data.street);
  const [city, setCity] = useState(data.city);
  const [state, setState] = useState(data.state);
  const [zipCode, setZipCode] = useState(data.zipCode);
  const [country, setCountry] = useState(data.country);
  const id = data.id;

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const countries = [
    { value: "Nepal", label: "Nepal" },
    { value: "USA", label: "USA" },
    { value: "Peru", label: "Peru" },
  ];

  // useEffect(() => {
  //   getCompanyInfo();
  // }, []);

  const updatedProfile = {
    id,
    firstName,
    lastName,
    email,
    street,
    city,
    zipCode,
    country,
    state,
    phoneNumber,
  };

  const updateProfile = (e) => {
    e.preventDefault();
    Axios.put("http://localhost:3001/profile", updatedProfile).then(
      (response) => {
        if (response.data.affectedRows > 0) {
          localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
          dispatch(setUserProfile(updatedProfile));
          navigation("/dashboard/profile");
        } else {
          alert("Please Try Again!!");
        }
      }
    );
  };

  return (
    <div>
      <div className="container-company">
        {/* <div style={{ color: "red" }}>{registerErrMsg}</div> */}
        <form className="add-form" onSubmit={updateProfile}>
          <div className="form-control-company">
            <label>FirstName</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              readOnly={true}
            />
            {/* {Object.keys(nameErrMsg).map((key) => {
                  return <div style={{ color: "red" }}>{nameErrMsg[key]}</div>;
                })} */}
          </div>
          <div className="form-control-company">
            <label>LastName</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              readOnly={true}
            />
            {/* {Object.keys(nameErrMsg).map((key) => {
                  return <div style={{ color: "red" }}>{nameErrMsg[key]}</div>;
                })} */}
          </div>
          <div className="form-control-company">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly={true}
            />
            {/* {Object.keys(emailErrMsg).map((key) => {
                  return <div style={{ color: "red" }}>{emailErrMsg[key]}</div>;
                })} */}
          </div>

          <div className="form-control-company">
            <label>Street</label>
            <input
              type="text"
              placeholder="Add Address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            {/* {Object.keys(addressErrMsg).map((key) => {
                  return <div style={{ color: "red" }}>{addressErrMsg[key]}</div>;
                })} */}
          </div>
          <div className="form-control-company">
            <label>City</label>
            <input
              type="text"
              placeholder="Add Address"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {/* {Object.keys(addressErrMsg).map((key) => {
                  return <div style={{ color: "red" }}>{addressErrMsg[key]}</div>;
                })} */}
          </div>
          <div className="form-control-company">
            <label>State</label>
            <input
              type="text"
              placeholder="Add Address"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            {/* {Object.keys(addressErrMsg).map((key) => {
                  return <div style={{ color: "red" }}>{addressErrMsg[key]}</div>;
                })} */}
          </div>
          <div className="form-control-company">
            <label>ZipCode</label>
            <input
              type="text"
              placeholder="Add ZipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
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
            <label>Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {/* {Object.keys(phoneNumberErrMsg).map((key) => {
                  return <div style={{ color: "red" }}>{phoneNumberErrMsg[key]}</div>;
                })} */}
          </div>
          <div className="form-control-company">
            <input
              type="submit"
              value="Update"
              className="login-btn btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
