// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import EnquiryPage from "./pages/EnquiryPage";
import OurProducts from "./pages/OurProducts";
import Registration from "./pages/registration";
import Courses from "./pages/Courses";
import TeamPage from "./pages/TeamPage";
import "./App.css";
import Footer from "./components/Footer";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/ScrollToTop"; // Import the component
import PrivacyPolicy from "./pages/privacypolicy";
import BackendPage from "./pages/backendPage";
import MeitRegistration from "./pages/MietRegistration";


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ae3a94", // Red as the primary color
      },
      secondary: {
        main: "#58a6ff", // Light grey as the secondary color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        {/* Header at the top of the page */}
        <Header />

        {/* Main content */}

        {/* Routing setup for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<EnquiryPage />} />
          <Route path="/TeamPage" element={<TeamPage />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/OurProducts" element={<OurProducts />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/backendPage" element={<BackendPage />} />
          <Route path="/MietRegistration" element={<MeitRegistration />} />
          
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
