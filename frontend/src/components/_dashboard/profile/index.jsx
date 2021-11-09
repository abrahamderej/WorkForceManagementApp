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

const ProfileIndex = () => {
  const data = JSON.parse(localStorage.getItem("userProfile"));
  const user = useSelector((state) => state.user.userProfile);
  const navigate = useNavigate();

  const onEditButton = () => {
    console.log("Edit button Clicked");
    navigate("/dashboard/profile/edit", { replace: true });
  };

  return (
    <div>
      <Card sx={{ minWidth: 275, marginRight: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              P
            </Avatar>
          }
          action={
            <Button onClick={onEditButton} size="small">
              {/* <Link to="profile/edit">
                <i>
                  <EditIcon />
                  Edit
                </i>
              </Link> */}
              <i>
                <EditIcon />
                Edit
              </i>
            </Button>
          }
          title="User Profile"
        >
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
          />
        </CardHeader>
        <CardContent>
          <Typography variant="h5" m>
            {user.fullName}
          </Typography>
          <Typography sx={{ fontSize: 14, paddingBottom: 1 }} component="div">
            Email : {user.email + " "}
          </Typography>
          <Typography sx={{ fontSize: 14, paddingBottom: 1 }} component="div">
            Address : {user.address + " "}
          </Typography>
          <Typography sx={{ fontSize: 14, paddingBottom: 1 }} component="div">
            Phone : {user.phoneNumber + " "}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default ProfileIndex;
