import logo from "./logo.svg";
import "./App.css";
import ThemeConfig from "./theme";
import { LoginForm } from "../src/components/authentication/login";
import { Login } from "../src/pages/index";

function App() {
  return (
    <ThemeConfig>
      <Login />
    </ThemeConfig>
  );
}

export default App;
