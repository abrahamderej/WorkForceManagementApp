import React from "react";
import { useState, useEffect, useHistory } from "react";
import { Navigate, useNavigate } from "react-router";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../../../store/actions";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import { useFormik, Form, FormikProvider, ErrorMessage } from "formik";
import { Icon } from "@iconify/react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import Axios from "axios";
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  formLabelClasses,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoginSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("last Name is required"),
    phoneNumber: Yup.string().required("PhoneNumber is Required!!"),
    state: Yup.string().required("State is Required!!"),
    street: Yup.string().required("Street is Required!!"),
    city: Yup.string().required("City is Required!!"),
    zipCode: Yup.string().required("Zip Code is Required!!"),
    country: Yup.string().required("Country is Required!!"),
  });

  const data = JSON.parse(localStorage.getItem("userProfile"));

  const formik = useFormik({
    initialValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      state: data.state,
      street: data.street,
      city: data.city,
      zipCode: data.zipCode,
      country: data.country,
      id: data.id,
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      updateProfile(values);
    },
  });

  const updateProfile = (values) => {
    Axios.put("http://localhost:3001/profile", values).then((response) => {
      console.log("Response" + response);
      if (response.data.affectedRows > 0) {
        localStorage.setItem("userProfile", JSON.stringify(values));
        dispatch(setUserProfile(values));
        navigate("/dashboard/profile");
      } else {
        alert("Please Try Again!!");
      }
    });
  };
  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              autoComplete="First Name"
              type="text"
              label="First Name"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              autoComplete="Last Name"
              type="text"
              label="LastName"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              autoComplete="Email"
              type="email"
              label="Email"
              {...getFieldProps("email")}
            />

            <TextField
              fullWidth
              autoComplete="Phone Number"
              type="text"
              label="Phone Number"
              {...getFieldProps("phoneNumber")}
              error={Boolean(touched.phoneNumber && errors.phoneNumber)}
              helperText={touched.phoneNumber && errors.phoneNumber}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              autoComplete="street"
              type="text"
              label="Street"
              {...getFieldProps("street")}
              error={Boolean(touched.street && errors.street)}
              helperText={touched.street && errors.street}
            />
            <TextField
              fullWidth
              autoComplete="state"
              type="text"
              label="State"
              {...getFieldProps("state")}
              error={Boolean(touched.state && errors.state)}
              helperText={touched.state && errors.state}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              autoComplete="city"
              type="text"
              label="city"
              {...getFieldProps("city")}
              error={Boolean(touched.city && errors.city)}
              helperText={touched.city && errors.city}
            />
            <TextField
              fullWidth
              autoComplete="zipCode"
              type="text"
              label="Zip Code"
              {...getFieldProps("zipCode")}
              error={Boolean(touched.zipCode && errors.zipCode)}
              helperText={touched.zipCode && errors.zipCode}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              autoComplete="country"
              type="text"
              label="Country"
              {...getFieldProps("country")}
              error={Boolean(touched.country && errors.country)}
              helperText={touched.country && errors.country}
            />
            <TextField
              fullWidth
              type="file"
              // {...getFieldProps("country")}
            />
          </Stack>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Update
          </LoadingButton>
        </Stack>
        <ErrorMessage name="login" component="div" className="error" />
      </Form>
    </FormikProvider>
    // <div>
    //   <div className="container-company">
    //     {/* <div style={{ color: "red" }}>{registerErrMsg}</div> */}
    //     <form className="add-form" onSubmit={updateProfile}>
    //       <div className="form-control-company">
    //         <label>FirstName</label>
    //         <input
    //           type="text"
    //           value={firstName}
    //           onChange={(e) => setFirstName(e.target.value)}
    //           readOnly={true}
    //         />
    //         {/* {Object.keys(nameErrMsg).map((key) => {
    //               return <div style={{ color: "red" }}>{nameErrMsg[key]}</div>;
    //             })} */}
    //       </div>
    //       <div className="form-control-company">
    //         <label>LastName</label>
    //         <input
    //           type="text"
    //           value={lastName}
    //           onChange={(e) => setLastName(e.target.value)}
    //           readOnly={true}
    //         />
    //         {/* {Object.keys(nameErrMsg).map((key) => {
    //               return <div style={{ color: "red" }}>{nameErrMsg[key]}</div>;
    //             })} */}
    //       </div>
    //       <div className="form-control-company">
    //         <label>Email</label>
    //         <input
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           readOnly={true}
    //         />
    //         {/* {Object.keys(emailErrMsg).map((key) => {
    //               return <div style={{ color: "red" }}>{emailErrMsg[key]}</div>;
    //             })} */}
    //       </div>

    //       <div className="form-control-company">
    //         <label>Street</label>
    //         <input
    //           type="text"
    //           placeholder="Add Address"
    //           value={street}
    //           onChange={(e) => setStreet(e.target.value)}
    //         />
    //         {/* {Object.keys(addressErrMsg).map((key) => {
    //               return <div style={{ color: "red" }}>{addressErrMsg[key]}</div>;
    //             })} */}
    //       </div>
    //       <div className="form-control-company">
    //         <label>City</label>
    //         <input
    //           type="text"
    //           placeholder="Add Address"
    //           value={city}
    //           onChange={(e) => setCity(e.target.value)}
    //         />
    //         {/* {Object.keys(addressErrMsg).map((key) => {
    //               return <div style={{ color: "red" }}>{addressErrMsg[key]}</div>;
    //             })} */}
    //       </div>
    //       <div className="form-control-company">
    //         <label>State</label>
    //         <input
    //           type="text"
    //           placeholder="Add Address"
    //           value={state}
    //           onChange={(e) => setState(e.target.value)}
    //         />
    //         {/* {Object.keys(addressErrMsg).map((key) => {
    //               return <div style={{ color: "red" }}>{addressErrMsg[key]}</div>;
    //             })} */}
    //       </div>
    //       <div className="form-control-company">
    //         <label>ZipCode</label>
    //         <input
    //           type="text"
    //           placeholder="Add ZipCode"
    //           value={zipCode}
    //           onChange={(e) => setZipCode(e.target.value)}
    //         />
    //         {/* {Object.keys(addressErrMsg).map((key) => {
    //               return <div style={{ color: "red" }}>{addressErrMsg[key]}</div>;
    //             })} */}
    //       </div>
    //       <div className="form-control-company">
    //         <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
    //           <InputLabel id="demo-simple-select-standard-label">
    //             Country
    //           </InputLabel>
    //           <Select
    //             value={country}
    //             onChange={(e) => setCountry(e.target.value)}
    //             label="----Select Country---"
    //           >
    //             {countries.map((country) => (
    //               <MenuItem value={country.value}>{country.label}</MenuItem>
    //             ))}
    //           </Select>
    //         </FormControl>
    //       </div>

    //       <div className="form-control-company">
    //         <label>Phone Number</label>
    //         <input
    //           type="text"
    //           value={phoneNumber}
    //           onChange={(e) => setPhoneNumber(e.target.value)}
    //         />
    //         {/* {Object.keys(phoneNumberErrMsg).map((key) => {
    //               return <div style={{ color: "red" }}>{phoneNumberErrMsg[key]}</div>;
    //             })} */}
    //       </div>
    //       <div className="form-control-company">
    //         <input
    //           type="submit"
    //           value="Update"
    //           className="login-btn btn-block"
    //         />
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default EditProfile;
