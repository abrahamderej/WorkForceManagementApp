import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import editFill from "@iconify/icons-eva/edit-fill";
import { Link as RouterLink } from "react-router-dom";
import trash2Outline from "@iconify/icons-eva/trash-2-outline";
import moreVerticalFill from "@iconify/icons-eva/more-vertical-fill";
import Axios from "axios";
import MenuPopover from "../../MenuPopover";
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
import { styled } from "@mui/material/styles";
import DeletePopOver from "../../DeletePopOver";
// material

// ----------------------------------------------------------------------

export default function UserMoreMenu({ handleDelete, handleEdit, keyid }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: "100%" },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem sx={{ color: "text.secondary" }}>
          <ListItemButton ref={anchorRef} onClick={handleOpen} keyid={keyid}>
            <ListItemIcon>
              <Icon icon={trash2Outline} width={24} height={24} />
            </ListItemIcon>
            <ListItemText
              primary='Delete'
              primaryTypographyProps={{ variant: "body2" }}
            />
          </ListItemButton>
        </MenuItem>

        <MenuItem sx={{ color: "text.secondary" }}>
          <ListItemButton onClick={handleEdit}>
            <ListItemIcon>
              <Icon icon={editFill} width={24} height={24} />
            </ListItemIcon>
            <ListItemText
              primary='Edit'
              primaryTypographyProps={{ variant: "body2" }}
            />
          </ListItemButton>
        </MenuItem>
        <DeletePopOver
          handleDelete={handleDelete}
          open={open}
          handleClose={handleClose}
          anchorEl={anchorRef.current}
        />
      </Menu>
    </>
  );
}
