import React, { Fragment } from "react";
// import { NavLink } from "react-router-dom";

export default ({ history }) => {
  // window.setTimeout(() => {
  //   history.push("/");
  // }, 1000);
  return (
    <Fragment>
      <div className="alert alert-secondary">
        <i className="fas fa-spinner fa-pulse"></i> Welcome Back! You are
        already logged in, redirecting you...
      </div>
    </Fragment>
  );
};