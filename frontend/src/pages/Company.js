import { filter } from "lodash";
import { Icon } from "@iconify/react";
import { sentenceCase } from "change-case";
import { useState } from "react";
import plusFill from "@iconify/icons-eva/plus-fill";
import listFill from "@iconify/icons-eva/list-fill";
import { Link as RouterLink } from "react-router-dom";
import {
  CompanyList,
  CreateCompany,
  CompanyInfo,
} from "../components/_dashboard/company";

// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";
// components
import Page from "../components/Page";
export default function Company() {
  const [buttonType, setButtonType] = useState("view");
  const handleBoarding = () => {
    setButtonType("onboarding");
  };
  const handleList = () => {
    setButtonType("list");
  };
  return (
    <Page title="Company| WFM">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Company
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            display="inline-flex"
            spacing={2}
          >
            <Button
              onClick={handleBoarding}
              variant="contained"
              startIcon={<Icon icon={plusFill} />}
            >
              Onboarding
            </Button>
            <Button
              variant="contained"
              onClick={handleList}
              startIcon={<Icon icon={listFill} />}
            >
              List
            </Button>
          </Stack>
        </Stack>
        {(() => {
          switch (buttonType) {
            case "list":
              return <CompanyList />;
            case "onboarding":
              return <CreateCompany />;
            case "view":
              return <CompanyInfo />;
            default:
              return null;
          }
        })()}
        {/* {buttonType === "list" ? <CompanyList /> : <CreateCompany />} */}
      </Container>
    </Page>
  );
}
