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
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

export const CompanyInfo = ({}) => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    getCompanyInfo();
  }, []);

  const getCompanyInfo = () => {
    Axios.get("http://localhost:3001/company/7").then((response) => {
      const data = response.data;
      setCompany(data);
      localStorage.setItem("company", JSON.stringify(data));
    });
  };

  return (
    <div>
      {company.map((c, index) => {
        return (
          <div key="{index}">
            <Card sx={{ minWidth: 275, marginRight: 2 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <Button size="small">
                    <Link to={"edit"}>
                      <i>
                        <EditIcon />
                        Edit
                      </i>
                    </Link>
                  </Button>
                }
                title="Company Profile"
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
                  {c.name}
                </Typography>
                <Typography
                  sx={{ fontSize: 14, paddingBottom: 1 }}
                  component="div"
                >
                  Email : {c.email + " "}
                </Typography>
                <Typography
                  sx={{ fontSize: 14, paddingBottom: 1 }}
                  component="div"
                >
                  Location : {c.address + " " + c.country}
                </Typography>
                <Typography
                  sx={{ fontSize: 14, paddingBottom: 1 }}
                  component="div"
                >
                  Phone : {c.phoneNumber + " "}
                </Typography>
                <Typography
                  sx={{ fontSize: 14, paddingBottom: 1 }}
                  component="div"
                >
                  Number Of Employees : {c.employeeCount + " "}
                </Typography>
                <Typography
                  sx={{ fontSize: 14, paddingBottom: 1 }}
                  component="div"
                >
                  Company Type : {c.type + " "}
                </Typography>
                <Typography
                  sx={{ fontSize: 14, paddingBottom: 1 }}
                  component="div"
                >
                  Company vision : {c.vision + " "}
                </Typography>
                <Typography
                  sx={{ fontSize: 14, paddingBottom: 1 }}
                  component="div"
                >
                  Industry Type : {c.industry + " "}
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
