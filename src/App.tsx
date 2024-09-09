import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./components/customization";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import { Fragment } from "react/jsx-runtime";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={customTheme}>
        <Home />
        <AboutMe />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
