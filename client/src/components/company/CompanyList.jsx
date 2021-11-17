import React, { useState, useEffect } from "react";
import Axios from "axios";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanyList();
  }, []);

  const getCompanyList = () => {
    Axios.get("http://localhost:3001/company").then((response) => {
      const data = response.data;
      setCompanies(data);
      console.log(data);
      localStorage.setItem("companies", JSON.stringify(data));
    });
  };

  return (
    <div>
      <h3>Company List</h3>
      {companies.map((company) => {
        return (
          <List
            sx={{ width: "100%", maxWidth: "60%", bgcolor: "background.paper" }}
          >
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
              </ListItemAvatar>
              <ListItemText
                primary={company.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      // sx={{ display: "inline" }}
                      component='div'
                      variant='body2'
                      color='text.primary'
                    >
                      VISION: {company.vision}
                    </Typography>
                    <Typography
                      // sx={{ display: "inline" }}
                      component='div'
                      variant='body2'
                      color='text.primary'
                    >
                      ADDRESS: {company.address}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant='inset' component='li' />
          </List>
        );
      })}
    </div>
  );
};

export default CompanyList;
