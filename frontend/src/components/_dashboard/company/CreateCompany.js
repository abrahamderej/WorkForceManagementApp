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

const CreateCompany = ({ buttonType, setButtonType, setOnboarding }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Company Name is required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("PhoneNumber is Required!!"),
    vision: Yup.string().required("Vision is Required!!"),
    industry: Yup.string().required("Industry is Required!!"),
    address: Yup.string().required("Address is Required!!"),
    employeeCount: Yup.number().required("Please Enter Number!!"),
    country: Yup.string().required("Country is Required!!"),
    type: Yup.string().required("Type is required!!"),
  });

  const data = JSON.parse(localStorage.getItem("userProfile"));

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      vision: "",
      address: "",
      country: "",
      employeeCount: 0,
      phoneNumber: "",
      industry: "",
      type: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      onRegister(values);
    },
  });

  const onRegister = (values) => {
    Axios.post("http://localhost:3001/company", values).then((response) => {
      console.log(response.data);
      if (response.data.affectedRows > 0) {
        localStorage.setItem("companyOnboarding", JSON.stringify([values]));
        setButtonType("view");
        setOnboarding(true);
      } else {
        alert("Error happend");
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
              autoComplete="Company Name"
              type="text"
              label="Name"
              {...getFieldProps("name")}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
            />

            <TextField
              fullWidth
              autoComplete="Email"
              type="email"
              label="Email"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              autoComplete="Vision"
              type="text"
              label="Vision"
              {...getFieldProps("vision")}
              error={Boolean(touched.vision && errors.vision)}
              helperText={touched.vision && errors.vision}
            />

            <TextField
              fullWidth
              autoComplete="Industry"
              type="text"
              label="Industry"
              {...getFieldProps("industry")}
              error={Boolean(touched.industry && errors.industry)}
              helperText={touched.industry && errors.industry}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              autoComplete="Address"
              type="text"
              label="Address"
              {...getFieldProps("address")}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />
            <TextField
              fullWidth
              autoComplete="Country"
              type="text"
              label="Country"
              {...getFieldProps("country")}
              error={Boolean(touched.country && errors.country)}
              helperText={touched.country && errors.country}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              autoComplete="EmployeeCount"
              type="number"
              label="Employee Count"
              {...getFieldProps("employeeCount")}
              error={Boolean(touched.employeeCount && errors.employeeCount)}
              helperText={touched.employeeCount && errors.employeeCount}
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
              autoComplete="type"
              type="text"
              label="Company Type"
              {...getFieldProps("type")}
              error={Boolean(touched.type && errors.type)}
              helperText={touched.type && errors.type}
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
            Register
          </LoadingButton>
        </Stack>
        <ErrorMessage name="login" component="div" className="error" />
      </Form>
    </FormikProvider>
  );
};

export default CreateCompany;
