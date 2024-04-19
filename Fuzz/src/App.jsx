import * as React from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
// import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import NavBar from "./NavBar";
// import Hero from "./components/Hero";
// import LogoCollection from './components/LogoCollection';
import Video from './Video';
import Tattoos from './Tattoos';
import Biography from "./Biography";
// import Testimonials from './components/Testimonials';
// import FAQ from './components/FAQ';
import Footer from './Footer';
import getLPTheme from "./getLPTheme";

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100dvw",
        position: "fixed",
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: "background.default",
          "& .Mui-selected": {
            pointerEvents: "none",
          },
        }}
      >
      </ToggleButtonGroup>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default function LandingPage() {
  const [mode, setMode] = React.useState("light");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <NavBar mode={mode} toggleColorMode={toggleColorMode} />
      {/* <Hero /> */}
      <Box sx={{ bgcolor: "background.default" }}>
        {/* <LogoCollection /> */}
        <Biography />
        {/* <Divider /> */}
        {/* <Testimonials /> */}
        {/* <Divider /> */}
        <Tattoos />
        <Video />
        {/* <Divider /> */}
        {/* <Divider /> */}
        {/* <FAQ /> */}
        {/* <Divider /> */}
        <Footer />
      </Box>
      <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      />
    </ThemeProvider>
  );
}
