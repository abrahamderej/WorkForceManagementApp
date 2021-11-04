import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const EditCompany = (props) => {
  const history = useHistory();
  const data = JSON.parse(localStorage.getItem("company"));

  const id = data[0].id; // params
  const [name, setName] = useState(data[0].name);
  const [email, setEmail] = useState(data[0].email);
  const [vision, setVision] = useState(data[0].vision);
  const [address, setAddress] = useState(data[0].address);
  const [country, setCountry] = useState(data[0].country);
  const [employeeCount, setEmployeeCount] = useState(data[0].employeeCount);
  const [phoneNumber, setPhoneNumber] = useState(data[0].phoneNumber);
  const [industry, setIndustry] = useState(data[0].industry);
  const [type, setType] = useState(data[0].type);

  const updatedCompany = {
    id,
    name,
    email,
    vision,
    address,
    country,
    employeeCount,
    phoneNumber,
    industry,
    type,
  };

  const countries = [
    { value: "Nepal", label: "Nepal" },
    { value: "USA", label: "USA" },
    { value: "Peru", label: "Peru" },
  ];

  const companyTypes = [
    { value: "Private", label: "Private" },
    { value: "Pulbic", label: "Public" },
  ];

  const updateCompany = (e) => {
    e.preventDefault();
    Axios.put("http://localhost:3001/company", updatedCompany).then(
      (response) => {
        if (response.data.affectedRows > 0) {
          history.push("/company/info");
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
        <form className="add-form" onSubmit={updateCompany}>
          <div className="form-control-company">
            <label>Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* {Object.keys(nameErrMsg).map((key) => {
                  return <div style={{ color: "red" }}>{nameErrMsg[key]}</div>;
                })} */}
          </div>
          <div className="form-control-company">
            <label>Email *</label>
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
            <label>Vision *</label>
            <input
              type="text"
              value={vision || ""}
              onChange={(e) => setVision(e.target.value)}
            />
            {/* {Object.keys(visionErrMsg).map((key) => {
                  return (
                    <div style={{ color: "red" }}>{visionErrMsg[key]}</div>
                  );
                })} */}
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
              value="Update"
              className="login-btn btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCompany;
