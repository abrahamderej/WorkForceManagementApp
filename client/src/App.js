import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Layout from "./components/Layout";
import Routes from "./routes";
import Login from "./components/admin/Login";
import { Dashboard } from "./components/Dashboard";
import "./assets/styles/bootstrap.css";
import "./assets/styles/bootstrap.overrides.css";
import "./assets/styles/main.scss";
import "./assets/styles/heatmap.css";
import "./assets/styles/tabs.css";
import "./assets/styles/login.css";
import { useSelector } from "react-redux";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
