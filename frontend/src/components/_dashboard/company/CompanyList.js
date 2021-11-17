import { filter } from "lodash";
import { Icon } from "@iconify/react";
import { sentenceCase } from "change-case";
import { useState } from "react";
import plusFill from "@iconify/icons-eva/plus-fill";
import listFill from "@iconify/icons-eva/list-fill";
import { Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";
import Axios from "axios";
import companyLogo from "./logo.png";
import MenuPopover from "../../MenuPopover";
import { useNavigate } from "react-router";

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

import Label from "../../../components/Label";
import Scrollbar from "../../../components/Scrollbar";
import SearchNotFound from "../../../components/SearchNotFound";
import {
  UserListHead,
  UserListToolbar,
  UserMoreMenu,
} from "../../../components/_dashboard/user";
//
import USERLIST from "../../../_mocks_/user";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name", alignRight: false },
  { id: "email", label: "Email", alignRight: false },
  { id: "phoneNumber", label: "PhoneNumber", alignRight: false },
  { id: "address", label: "Address", alignRight: false },
  { id: "industry", label: "Industry", alignRight: false },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function CompanyList() {
  const [buttonType, setButtonType] = useState("list");
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [companies, setCompanies] = useState([]);
  const [isToolBarOpen, setIsToolBarOpen] = useState(false);
  const companiesData = JSON.parse(localStorage.getItem("companies"));

  const navigate = useNavigate();

  useEffect(() => {
    getCompanyList();
    if (selected.length > 0) {
      setIsToolBarOpen(true);
    }
  }, [isToolBarOpen]);

  const getCompanyList = () => {
    Axios.get("http://localhost:3001/company").then((response) => {
      const data = response.data;
      setCompanies(data);
      console.log(data);
      localStorage.setItem("companies", JSON.stringify(data));
    });
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = companies.map((n) => n.id);
      setSelected(newSelecteds);
      console.log(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    console.log(selected + " selected values");

    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
    console.log(selected + " selected values");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    console.log(event.target.value);
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredCompanies = applySortFilter(
    companies,
    getComparator(order, orderBy),
    filterName
  );

  const isUserNotFound = filteredCompanies.length === 0;

  const handleDeleteFunc = () => {
    selected.map((key, index) => {
      Axios.delete("http://localhost:3001/company/" + key).then((response) => {
        getCompanyList();
      });
      setSelected([]);
      setIsToolBarOpen(false);
      console.log("Failed to delete");
    });
  };

  const handleDelete = (e, id) => {
    Axios.delete("http://localhost:3001/company/" + id).then((response) => {
      const data = response.data;
      getCompanyList();
      console.log(data);
    });
    console.log("Failed to delete");
  };

  const handleEdit = (e, id) => {
    console.log("In edit id of company: " + id);
    if (companies.length > 0) {
      {
        let curCompany = companiesData.filter((c) => c.id == id);
        console.log(JSON.stringify(curCompany) + "inside let ");
        //setCompany(curCompany[0]);
        localStorage.setItem("company", JSON.stringify(curCompany[0]));
      }
    }
    navigate("/dashboard/companies/edit", {
      state: {
        companyId: id,
      },
    });

    // Axios.put("http://localhost:3001/company/" + id).then((response) => {
    //   const data = response.data;
    //   getCompanyList();
    //   console.log(data);
    // });
    // console.log("Failed to delete")
  };

  return (
    <Card>
      <UserListToolbar
        isToolBarOpen={isToolBarOpen}
        numSelected={selected.length}
        filterName={filterName}
        onFilterName={handleFilterByName}
        handleDelete={handleDeleteFunc}
      />

      <Scrollbar>
        <TableContainer sx={{ minWidth: 800 }}>
          <Table>
            <UserListHead
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={companies.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
            />
            <TableBody>
              {filteredCompanies
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const { id, name, email, phoneNumber, address, industry } =
                    row;
                  const isItemSelected = selected.indexOf(id) !== -1;

                  return (
                    <TableRow
                      hover
                      keyid={id}
                      tabIndex={-1}
                      role='checkbox'
                      selected={isItemSelected}
                      aria-checked={isItemSelected}
                    >
                      <TableCell padding='checkbox'>
                        <Checkbox
                          checked={isItemSelected}
                          onChange={(event) => handleClick(event, id)}
                        />
                      </TableCell>
                      <TableCell component='th' scope='row' padding='none'>
                        <Stack direction='row' alignItems='center' spacing={2}>
                          <Avatar alt={name} src={companyLogo} />
                          <Typography variant='subtitle2' noWrap>
                            {name}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align='left'>{email}</TableCell>
                      <TableCell align='left'>{phoneNumber}</TableCell>
                      <TableCell align='left'>{address}</TableCell>
                      <TableCell align='left'>{industry}</TableCell>

                      <TableCell align='right'>
                        <UserMoreMenu
                          handleEdit={(e) => {
                            handleEdit(e, id);
                          }}
                          handleDelete={(e) => {
                            handleDelete(e, id);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 1 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            {isUserNotFound && (
              <TableBody>
                <TableRow>
                  <TableCell align='center' colSpan={6} sx={{ py: 3 }}>
                    <SearchNotFound searchQuery={filterName} />
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Scrollbar>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={companies.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
}
