import "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Footer = () => {
  const quickLinks = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/AboutUs" },
    { name: "Our Products", route: "/OurProducts" },
    { name: "Courses", route: "/courses" },
    { name: "Team", route: "/Courses" },
    { name: "Contact Us", route: "/ContactUs" },
  ];

  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", padding: " 10px" }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Quick Links Section */}
        <Grid item xs={12} sm={4} md={3} sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              marginBottom: 2,
              fontWeight: "bold",
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "primary.main",
              fontSize: "1.3rem",
              transition: "all 0.3s ease",
            }}
          >
            Quick Links
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.route}
                color="inherit"
                variant="body2"
                sx={{
                  marginBottom: 1,
                  textTransform: "uppercase",
                  fontWeight: "500",
                  textDecoration: "none",
                  letterSpacing: 1,
                  fontSize: "12px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {link.name}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Contact Us Section */}
        <Grid item xs={12} sm={4} md={3} sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              marginBottom: 2,
              fontWeight: "bold",
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "primary.main",
              fontSize: "1.3rem",
              transition: "all 0.3s ease",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginBottom: 1,
              fontSize: "14px",
              letterSpacing: 0.5,
              transition: "all 0.3s ease",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Email:{" "}
            <Link href="mailto:akilamtechnology@gmail.com" color="inherit">
              akilamtechnology@gmail.com
            </Link>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginBottom: 1,
              fontSize: "14px",
              letterSpacing: 0.5,
              transition: "all 0.3s ease",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Phone: +91 94894 25524
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginBottom: 1,
              fontSize: "14px",
              letterSpacing: 0.5,
              transition: "all 0.3s ease",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            T-4, Third Floor, JC Tower, Karur Bypass Road, Annamalai Nagar,
            Trichy TN 620018
          </Typography>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={4} md={3} sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              marginBottom: 2,
              fontWeight: "bold",
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "primary.main",
              fontSize: "1.3rem",
              transition: "all 0.3s ease",
            }}
          >
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton
              href="https://www.facebook.com"
              target="_blank"
              color="inherit"
              sx={{ marginRight: 2 }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://www.twitter.com"
              target="_blank"
              color="inherit"
              sx={{ marginRight: 2 }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com"
              target="_blank"
              color="inherit"
              sx={{ marginRight: 2 }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://www.instagram.com"
              target="_blank"
              color="inherit"
            >
              <Instagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          marginTop: 4,
          textAlign: "center",
          borderTop: "1px solid #333",
          paddingTop: 2,
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: 0.5,
            color: "#f1f1f1",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          &copy; {new Date().getFullYear()} Akilam Technology. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
