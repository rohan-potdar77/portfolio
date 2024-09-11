import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./components/customization";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import { Fragment } from "react/jsx-runtime";
import Technology from "./components/Technology";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={customTheme}>
        <Home />
        <AboutMe />
        <Technology />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
