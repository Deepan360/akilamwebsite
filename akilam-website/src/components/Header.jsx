import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/AboutUs" },
  { name: "OurProducts", route: "/OurProducts" },
  { name: "Courses", route: "/courses" },
  { name: "Team", route: "/Courses" },
  { name: "ContactUs", route: "/ContactUs" },
];

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolling ? "primary.main" : "transparent",
        transition: "background-color 0.3s ease",
        boxShadow: scrolling ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
        color: scrolling ? "#fff" : "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              lineHeight: "1.5",
              fontWeight: "500",
              letterSpacing: ".05rem",
              color: "inherit",
              textDecoration: "none",
            
            }}
          >
            <img
              src="/AkilamTechmidlogo.png" // Replace with the actual path to your logo
              alt="AkilamTechmidlogo"
              style={{
                height: "40px", // Adjust the height as per your design
                marginRight: "10px", // Add some spacing between the logo and text
              }}
            />
            Akilam Technology
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.route}
                sx={{
                  color: scrolling ? "#fff" : "#fff",
                  fontWeight: 500,
                  fontSize: "1rem",
                  textTransform: "none",
                  fontFamily: "'Poppins', sans-serif",
                  "&:hover": {
                    
                    color: scrolling ? "#fff" : "primary.main",
                    background: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              sx={{ color: scrolling ? "#fff" : "#fff" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  component={Link}
                  to={page.route}
                  onClick={handleMenuClose}
                  sx={{
                    "&:hover": {
                      background: "rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
