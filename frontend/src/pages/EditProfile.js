import { Icon } from "@iconify/react";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// material
import { Grid, Button, Container, Stack, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import {
  BlogPostCard,
  BlogPostsSort,
  BlogPostsSearch,
} from "../components/_dashboard/blog";
//
import POSTS from "../_mocks_/blog";
// import EditProfile from "../components/_dashboard/profile/EditProfile";
import { EditUserProfile } from "../components/_dashboard/profile";

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];

// ----------------------------------------------------------------------

export default function EditProfile() {
  return (
    <Page title="Dashboard: EditProfile | WFM">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            User Profile
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard/profile"
            startIcon={<Icon icon={plusFill} />}
          >
            Back
          </Button>
        </Stack>

        <Stack mb={5}>
          <EditUserProfile />
        </Stack>
      </Container>
    </Page>
  );
}
