import { Icon } from "@iconify/react";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// material
import { Grid, Button, Container, Stack, Typography } from "@mui/material";
// components
import Page from "../components/Page";

import { UserProfile } from "../components/_dashboard/profile";

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];

// ----------------------------------------------------------------------

export default function Profile() {
  return (
    <Page title="Dashboard: Profile | WFM">
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
            to="/dashboard/profile/edit"
            // onClick={handleSubmit}
            startIcon={<Icon icon={plusFill} />}
          >
            Edit Profile
          </Button>
        </Stack>

        <Stack mb={5}>
          <UserProfile />
        </Stack>
      </Container>
    </Page>
  );
}
