import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Modal from '../modal'

import {useHistory} from 'react-router-dom'

export default ({ toggleMenu, toggleSearch, sideBarOpen }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const history = useHistory();
  const handleCompanyDashboard = () => {
    history.push('/company');
  }
  const openLeftSideBar = () =>{
    
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <i
        className="fas fa-bars fa-lg sidemenu-toggle-icon"
        onClick={toggleMenu}
      ></i>
      <NavLink className="navbar-brand" to="/">
        <img
          alt="logo"
          className="nav-logo"
          src={logo}
        />
      </NavLink>
      <button className="header-btn" onClick={handleCompanyDashboard}>Company</button>
      <button className="header-btn">Client</button>
      <button className="header-btn">Project</button>
      <button className="header-btn">Policy</button>
      <button className="header-btn">Profile</button>
      <button className="header-btn">Users</button>
      
      <Modal
        title="Search procorem..."
        isOpen={isSearchOpen}
        footer={
          <Fragment>
            
            <button
              type="button"
              style={{ float: "left" }}
              className="btn btn-secondary"
              onClick={() => {
                setIsSearchOpen(false);
              }}
            >
              Close
            </button>

            <button type="button" className="btn btn-primary">
              Search
            </button>
          </Fragment>
        }
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search all of procorem"
          />
        </div>

        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="cbIncludeFiles"
            />
            <label className="form-check-label" htmlFor="cbIncludeFiles">
              Include Files
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="cbIncludeTasks"
            />
            <label className="form-check-label" htmlFor="cbIncludeTasks">
              Include Tasks
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="cbIncludePosts"
            />
            <label className="form-check-label" htmlFor="cbIncludePosts">
              Include Posts
            </label>
          </div>
        </div>
      </Modal>
      <ul className="navbar-nav">
        <li className="nav-item">
          <span
            className="nav-link"
            onClick={() => {
              setIsSearchOpen(true);
            }}
          >
            <i className="fab fa-searchengin fa-lg"></i>
          </span>
        </li>
        <li className="nav-item">
          <NavLink
            to="/profile/messages"
            className="nav-link"
            activeClassName="fake"
          >
            <i className="fas fa-inbox fa-lg"></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" className="nav-link" activeClassName="fake">
            <i className="fas fa-user-circle fa-lg"></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" activeClassName="fake">
            <i className="fas fa-sign-out-alt fa-lg"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
