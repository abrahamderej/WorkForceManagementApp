import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Axios from "axios";
import { useState, useEffect, useHistory } from "react";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const data = JSON.parse(localStorage.getItem("userProfile"));
  const user = useSelector((state) => state.user.userProfile);
  const navigate = useNavigate();

  const onEditButton = () => {
    console.log("Edit button Clicked");
    navigate("/dashboard/profile/edit", { replace: true });
  };

  const TitleTypography = styled(Typography)({
    marginRight: "50px",
    flex: "50%",
    fontWeight: 100,
    fontSize: "1.2rem",
  });

  const ValueTypoGraphy = styled(Typography)({
    //   marginLeft: "10%",
    flex: "50%",
    color: "black",
    fontSize: "1.2rem",
  });

  return (
    <div>
      <Card sx={{ marginRight: 2, marginBottom: 5, maxWidth: "100%" }}>
        <CardContent>
          <Typography variant='h5' m>
            Basic User Info
          </Typography>
          <hr style={{ color: "gray", opacity: 0.3 }} />
          <Typography
            sx={{
              padding: 3,
              marginLeft: 2,
              fontSize: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
            component='div'
          >
            <TitleTypography>NAME</TitleTypography>
            <ValueTypoGraphy>{user.fullName}</ValueTypoGraphy>
            <hr style={{ marginRight: 10, color: "gray", opacity: 0.2 }} />
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 450, marginRight: 2 }}>
        <CardContent>
          <Typography variant='h5' m>
            Contact Information
          </Typography>
          <hr style={{ color: "gray", opacity: 0.3 }} />
          <Typography
            sx={{
              padding: 3,
              marginLeft: 2,
              fontSize: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
            component='div'
          >
            <TitleTypography>EMAIL</TitleTypography>
            <ValueTypoGraphy>{user.email}</ValueTypoGraphy>
            <hr style={{ marginRight: 10, color: "gray", opacity: 0.2 }} />
          </Typography>
          <Typography
            sx={{
              padding: 3,
              marginLeft: 2,
              fontSize: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
            component='div'
          >
            <TitleTypography>ADDRESS</TitleTypography>
            <ValueTypoGraphy>{user.address}</ValueTypoGraphy>
            <hr style={{ marginRight: 10, color: "gray", opacity: 0.2 }} />
          </Typography>
          <Typography
            sx={{
              padding: 3,
              marginLeft: 2,
              fontSize: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
            component='div'
          >
            <TitleTypography>PHONE NUMBER</TitleTypography>
            <ValueTypoGraphy>{user.phoneNumber}</ValueTypoGraphy>
            <hr style={{ marginRight: 10, color: "gray", opacity: 0.2 }} />
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default UserProfile;
