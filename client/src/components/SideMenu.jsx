import React from "react";
import { matchPath } from "react-router";
import { useLocation } from "react-router-dom";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Accordion from "./accordion";

export default ({ toggleMenu, sideBarOpen }) => {
  const fullName = useSelector((state) => state.user.userProfile.fullName);
  const email = useSelector((state) => state.user.userProfile.email);
  const address = useSelector((state) => state.user.userProfile.address);
  const phoneNumber = useSelector(
    (state) => state.user.userProfile.phoneNumber
  );
  console.log(fullName);
  //let { accountId, workcenterId } = useParams();
  const accountId = 1;
  const workcenterId = 1;
  const location = useLocation();
  const showAccount = () => {
    return matchPath(location.pathname, {
      path: "/accounts/:accountId",
      exact: false,
      strict: true,
    });
  };
  const showWorkcenter = () => {
    return matchPath(location.pathname, {
      path: "/accounts/:accountId/workcenters/:workcenterId",
      exact: false,
      strict: true,
    });
  };
  return (
    <div className="sidemenu" sideBarOpen={sideBarOpen}>
      <div className="card profile-card">
        <div className="text-center mt-4">
          <img
            alt="logo"
            style={{
              height: 120,
              width: 120,
              border: "4px solid #fff",
              borderRadius: "50%",
            }}
            src={require("../assets/images/profile-icon.png")}
          />
        </div>
        <div className="card-body">
          <h4 className="card-title mb-0 pb-0">{fullName}</h4>
        </div>
        <div
          className="card-subtitle p-2"
          style={{ marginLeft: -1, marginBottom: -1 }}
        >
          Address: {address}
          <div className="font-italic">{phoneNumber}</div>
          <div className="font-italic">{email}</div>
        </div>
      </div>

      {/* <NavLink className="link" to="/feed" onClick={toggleMenu}>
        <i className="fas fa-home fa-lg mr-3"></i> Activity Feed
      </NavLink>
      <NavLink className="link" to="/calendar" onClick={toggleMenu}>
        <i className="far fa-calendar-alt fa-lg mr-3"></i> Calendar
      </NavLink>
      <NavLink className="link" to="/tasks" onClick={toggleMenu}>
        <i className="fas fa-tasks fa-lg mr-3"></i> My Tasks
      </NavLink>
      <NavLink className="link" to="/favorites" onClick={toggleMenu}>
        <i className="fas fa-heart fa-lg mr-3"></i> Favorites
      </NavLink>
      <NavLink className="link" to="/accounts" exact onClick={toggleMenu}>
        <i className="fas fa-user fa-lg mr-3"></i> Accounts
      </NavLink> */}
      <h6 style={{ marginBottom: 10 }}>Quick menu</h6>
      <div className="text-center">
        <NavLink className="link inline" to="/feed" onClick={toggleMenu}>
          <i className="fas fa-home fa-lg mr-2"></i>
        </NavLink>{" "}
        <NavLink
          className="link inline"
          to="/accounts"
          exact
          onClick={toggleMenu}
        >
          <i className="fas fa-layer-group fa-lg mr-2"></i>
        </NavLink>{" "}
        <NavLink className="link inline" to="/calendar" onClick={toggleMenu}>
          <i className="far fa-calendar-alt fa-lg mr-2"></i>
        </NavLink>{" "}
        <NavLink className="link inline" to="/tasks" onClick={toggleMenu}>
          <i className="fas fa-tasks fa-lg mr-2"></i>
        </NavLink>{" "}
        <NavLink className="link inline" to="/favorites" onClick={toggleMenu}>
          <i className="fas fa-heart fa-lg mr-2"></i>
        </NavLink>
      </div>

      {showAccount() ? (
        <Accordion
          title="Selected Account"
          defaultOpen={true}
          css="mb-3 mt-2 noborder"
          containerCss="mb-0 p-0"
          headerCss="pl-2 pb-0"
        >
          <NavLink
            className="link"
            to={`/accounts/${accountId}/view`}
            onClick={toggleMenu}
          >
            <i className="fas fa-layer-group fa-lg mr-3"></i> Details
          </NavLink>
          <NavLink
            className="link"
            to={`/accounts/${accountId}/workcenters`}
            exact
            onClick={toggleMenu}
          >
            <i className="fas fa-users fa-lg mr-3"></i> Workcenters
          </NavLink>
          {/* <NavLink
            className="link"
            to={`/accounts/${accountId}/documents`}
            onClick={toggleMenu}
          >
            <i className="fas fa-file fa-lg mr-3"></i> Documents
          </NavLink>
          <NavLink
            className="link"
            to={`/accounts/${accountId}/posts`}
            onClick={toggleMenu}
          >
            <i className="fas fa-comments fa-lg mr-3"></i> Posts
          </NavLink>
          <NavLink
            className="link"
            to={`/accounts/${accountId}/tasks`}
            onClick={toggleMenu}
          >
            <i className="fas fa-tasks fa-lg mr-3"></i> Tasks
          </NavLink> */}
          <NavLink
            className="link"
            to={`/accounts/${accountId}/members`}
            onClick={toggleMenu}
          >
            <i className="fas fa-user-shield fa-lg mr-3"></i> Access Control
          </NavLink>
        </Accordion>
      ) : (
        <br />
      )}

      {showWorkcenter() ? (
        <Accordion
          title="Selected Workcenter"
          defaultOpen={true}
          css="mb-3 mt-2 noborder"
          containerCss="mb-0 p-0"
          headerCss="pl-2 pb-0"
        >
          <NavLink
            className="link"
            to={`/accounts/${accountId}/workcenters/${workcenterId}/view`}
            onClick={toggleMenu}
          >
            <i className="fas fa-users fa-lg mr-3"></i> Details
          </NavLink>
          <NavLink
            className="link"
            to={`/accounts/${accountId}/workcenters/${workcenterId}/documents`}
            onClick={toggleMenu}
          >
            <i className="fas fa-file fa-lg mr-3"></i> Documents
          </NavLink>
          <NavLink
            className="link"
            to={`/accounts/${accountId}/workcenters/${workcenterId}/posts`}
            onClick={toggleMenu}
          >
            <i className="fas fa-comments fa-lg mr-3"></i> Posts
          </NavLink>
          <NavLink
            className="link"
            to={`/accounts/${accountId}/workcenters/${workcenterId}/tasks`}
            onClick={toggleMenu}
          >
            <i className="fas fa-tasks fa-lg mr-3"></i> Tasks
          </NavLink>
          <NavLink
            className="link"
            to={`/accounts/${accountId}/workcenters/${workcenterId}/members`}
            onClick={toggleMenu}
          >
            <i className="fas fa-user-shield fa-lg mr-3"></i> Members
          </NavLink>
        </Accordion>
      ) : (
        <br />
      )}

      <h6>Wizards</h6>
      <NavLink className="link" to="/create/account" onClick={toggleMenu}>
        <i className="fas fa-plus fa-lg mr-3"></i> Create Account
      </NavLink>
      <NavLink className="link" to="/create/workcenter" onClick={toggleMenu}>
        <i className="fas fa-plus fa-lg mr-3"></i> Create Workcenter
      </NavLink>
      <br />
    </div>
  );
};
