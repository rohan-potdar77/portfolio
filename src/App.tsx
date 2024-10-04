import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Fragment } from "react/jsx-runtime";
import AboutMe from "./components/AboutMe";
import { customTheme } from "./components/customization";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Technology from "./components/Technology";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={customTheme}>
        <Home />
        <AboutMe />
        <Technology />
        <Projects />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
