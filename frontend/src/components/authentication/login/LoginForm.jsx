import React from "react";
import * as Yup from "yup";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider, ErrorMessage } from "formik";
import { Icon } from "@iconify/react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import Axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  formLabelClasses,
  Button,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogin, setUserProfile } from "../../../store/actions";

const LoginForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userProfileId, setUserProfileId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    login: Yup.string().required("Username & Password should be valid!!"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      remember: true,
      login: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (values, errors) => {
      onLogin(values, errors);
    },
  });

  const onLogin = (values, { setFieldError }) => {
    const username = values.username;
    const password = values.password;
    Axios.post("http://localhost:3001/login", { username, password }).then(
      (response) => {
        console.log(JSON.stringify(response.data));
        if (response.data !== "Error") {
          const data = response.data[0];
          console.log(data);
          console.log(data.userProfile_id + "userid");
          setUserProfileId(data.userProfile_id);
          getUserProfile(data.userProfile_id);
          dispatch(setUserLogin(data));
          setIsLoading(true);

          window.setTimeout(() => {
            navigate("/dashboard/app", { replace: true });
          }, 1500);
        } else {
          console.log("we are in else");
          // alert("I am unvalid for now");
          // setFieldError("username", "Username is invalid ");
          formik.setSubmitting(false);
          setFieldError("login", "Please type correct username and password!!");
        }
      }
    );
  };

  const getUserProfile = (id) => {
    console.log(id + "inside the get method");
    Axios.get("http://localhost:3001/users/" + id).then((response) => {
      console.log(response.data + " in user profile");
      const data = response.data;
      localStorage.setItem("userProfile", JSON.stringify(data));
      dispatch(setUserProfile(data));
      console.log("dispatched it" + JSON.stringify(data));
    });
  };

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="text"
            label="Username"
            {...getFieldProps("username")}
            error={Boolean(touched.username && errors.username)}
            helperText={touched.username && errors.username}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="Password"
            {...getFieldProps("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...getFieldProps("remember")}
                checked={values.remember}
              />
            }
            label="Remember me"
          />
          <Link component={RouterLink} variant="subtitle2" to="#">
            Forgot password?
          </Link>
        </Stack>
        <ErrorMessage name="login" component="div" className="error" />
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          disabled={isLoading}
        >
          Login
          {isLoading && <CircularProgress />}
        </Button>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
