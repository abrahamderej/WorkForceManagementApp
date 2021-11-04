import React from "react";
import { Switch, Route } from "react-router";
import Login from "./components/admin/Login";
import Axios from "axios";

import { useHistory } from "react-router-dom";

// import Login from "./pages/login";
import Home from "./pages/Home";
import { Dashboard } from "./components/Dashboard";
import Company from "./components/company/CompanyProfile";
import { Layout } from "./components/Layout";
import { useSelector } from "react-redux";
import CompanyRegister from "./components/company/CompanyRegister";
import { CompanyInfo } from "./components/company/CompanyInfo";
import EditCompany from "./components/company/EditCompany";
// import Favorites from "./pages/favorites";
// import Feed from "./pages/feed";
// import Calendar from "./pages/calendar";
// import ListTasks from "./pages/task-list";
// import ViewTasks from "./pages/task-view";
// import ListAccounts from "./pages/accounts/account-list";
// import ViewAccount from "./pages/accounts/account-view";
// import CreateAccount from "./pages/wizards/account-create";
// import CreateWorkcenter from "./pages/wizards/workcenter-create";
// import Profile from "./pages/profiles/profile-edit";
// import ProfileMessages from "./pages/profiles/profile-inbox";
// import ListWorkcenters from "./pages/workcenters/workcenter-list";
// import ViewWorkcenter from "./pages/workcenters/workcenter-view";

const NotFound = () => (
  <div className="text-center">
    Oops, what you are looking for, does not exist.
  </div>
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <Login />} />
    <Route path="/login" component={() => <Login />} />
    <Layout>
      <Route path="/home" component={() => <Home />} />
      <Route path="/dashboard" component={() => <Dashboard />} />

      <Route
        path="/company"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/`} component={Company} exact />
            <Route path={`${url}/register`} component={CompanyRegister} />
            <Route path={`${url}/info`} component={CompanyInfo} />
            <Route path={`${url}/edit/:id`} component={EditCompany} />
          </>
        )}
      />
    </Layout>

    {/* <Route path="/" exact component={Login} /> */}
    {/* <Route path="/login" exact><Login onLogin={loginSubmit}/></Route> */}
    {/* <Route path="/login" exact component={Login} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/profile/messages" exact component={ProfileMessages} />
    <Route path="/accounts" exact component={ListAccounts} />
    <Route path="/accounts/:accountId/view" exact component={ViewAccount} /> */}
    {/* <Route
      path="/accounts/:accountId/workcenters"
      exact
      component={ListWorkcenters}
    />
    <Route
      path="/accounts/:accountId/workcenters/:workcenterId/view"
      exact
      component={ViewWorkcenter}
    />
    <Route path="/favorites" exact component={Favorites} />
    <Route path="/feed" exact component={Feed} />
    <Route path="/calendar" exact component={Calendar} />
    <Route path="/tasks" exact component={ListTasks} />
    <Route path="/tasks/:taskId" exact component={ViewTasks} />
    <Route path="/create/account" exact component={CreateAccount} />
    <Route path="/create/workcenter" exact component={CreateWorkcenter} />
    {/* ELSE */}
    {/* <Route path="*" exact component={NotFound} /> */}
  </Switch>
);

export default Routes;
