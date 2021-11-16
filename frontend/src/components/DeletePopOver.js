import React from "react";
import MenuPopover from "./MenuPopover";
import {
  Box,
  Divider,
  Button,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useRef, useState } from "react";

const DeletePopOver = ({ handleDelete, handleClose, open, anchorEl }) => {
  const ref = useRef(null);
  const anchorRef = useRef(null);
  return (
    <MenuPopover
      open={open}
      onClose={handleClose}
      anchorEl={anchorEl}
      sx={{ width: "20%" }}
    >
      <Box sx={{ display: "flex", my: 1.5, px: 2.5 }}>
        <Typography variant='subtitle1' noWrap>
          {"Are you sure want to delete"}
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          p: 1,
          pt: 1.5,
        }}
      >
        <Button
          color='error'
          variant='outlined'
          onClick={handleClose}
          size='small'
        >
          Cancel
        </Button>
        <Button
          variant='contained'
          color='success'
          onClick={handleDelete}
          size='small'
        >
          Okay
        </Button>
      </Box>
    </MenuPopover>
  );
};

export default DeletePopOver;
