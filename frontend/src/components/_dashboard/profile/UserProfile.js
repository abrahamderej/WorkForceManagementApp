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
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const data = JSON.parse(localStorage.getItem("userProfile"));
  const user = useSelector((state) => state.user.userProfile);
  const navigate = useNavigate();

  const onEditButton = () => {
    console.log("Edit button Clicked");
    navigate("/dashboard/profile/edit", { replace: true });
  };

  return (
    <div>
      <Card sx={{ marginRight: 2, marginBottom: 5, maxWidth: "100%" }}>
        <CardContent>
          <Typography variant="h5" m>
            Basic Info
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
            component="div"
          >
            <p style={{ marginRight: "50px", flex: "50%" }}>NAME:</p>
            <p style={{ marginLeft: "40px", flex: "50%", color: "blue" }}>
              {user.fullName + " "}
            </p>
            <hr style={{ color: "gray", opacity: 0.2 }} />
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 450, marginRight: 2 }}>
        <CardContent>
          <Typography variant="h5" m>
            Contact Info
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
            component="div"
          >
            <p style={{ marginRight: "50px", flex: "50%" }}>EMAIL:</p>
            <p style={{ marginLeft: "40px", flex: "50%", color: "blue" }}>
              {user.email + " "}
            </p>
            <hr style={{ color: "gray", opacity: 0.2 }} />
          </Typography>
          <Typography
            sx={{
              padding: 3,
              marginLeft: 2,
              fontSize: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
            component="div"
          >
            <p style={{ marginRight: "50px", flex: "50%" }}>ADDRESS:</p>
            <p style={{ marginLeft: "40px", flex: "50%", color: "blue" }}>
              {user.address + " "}
            </p>
            <hr style={{ color: "gray", opacity: 0.2 }} />
          </Typography>
          <Typography
            sx={{
              padding: 3,
              marginLeft: 2,
              fontSize: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
            component="div"
          >
            <p style={{ marginRight: "50px", flex: "50%" }}>PHONE NUMBER:</p>
            <p style={{ marginLeft: "40px", color: "blue", flex: "50%" }}>
              {user.phoneNumber + " "}
            </p>
            <hr style={{ color: "gray", opacity: 0.3 }} />
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default UserProfile;
