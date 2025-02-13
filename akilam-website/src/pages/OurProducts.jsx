import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Box,
  CardMedia,
} from "@mui/material";
import {
  Web,
  MobileFriendly,
  Cloud,
  Code,
  Analytics,
  SupportAgent,
  DesignServices,
  Build,
  ShoppingCart,
} from "@mui/icons-material";

const services = [
  {
    id: 1,
    title: "Web App Development",
    description:
      "We create dynamic, responsive, and feature-rich web applications tailored to your business needs.",
    icon: <Web fontSize="large" sx={{ color: "#ff6b6b" }} />,
    link: "/ContactUs",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Our mobile app development services offer native and hybrid solutions for iOS and Android.",
    icon: <MobileFriendly fontSize="large" sx={{ color: "#ffd93d" }} />,
    link: "/ContactUs",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description:
      "We provide scalable cloud solutions, from cloud migration to infrastructure management, ensuring your business stays agile.",
    icon: <Cloud fontSize="large" sx={{ color: "#1dd1a1" }} />,
    link: "/ContactUs",
  },
  {
    id: 4,
    title: "Software Development",
    description:
      "Custom software development tailored to your business requirements, ensuring optimized performance and efficiency.",
    icon: <Code fontSize="large" sx={{ color: "#54a0ff" }} />,
    link: "/ContactUs",
  },
  {
    id: 5,
    title: "Data Analytics",
    description:
      "Leverage data insights to make informed decisions with our advanced data analytics services.",
    icon: <Analytics fontSize="large" sx={{ color: "#ff9ff3" }} />,
    link: "/ContactUs",
  },
  {
    id: 6,
    title: "IT Consulting",
    description:
      "Strategic IT consulting services to help you streamline processes and adopt the latest technologies.",
    icon: <SupportAgent fontSize="large" sx={{ color: "#feca57" }} />,
    link: "/ContactUs",
  },
  {
    id: 7,
    title: "UI/UX Design",
    description:
      "Enhance user engagement with intuitive and visually appealing UI/UX design services.",
    icon: <DesignServices fontSize="large" sx={{ color: "#00d2d3" }} />,
    link: "/ContactUs",
  },
  {
    id: 8,
    title: "DevOps Services",
    description:
      "Optimize your software development lifecycle with our DevOps services, ensuring faster delivery and reliability.",
    icon: <Build fontSize="large" sx={{ color: "#ee5253" }} />,
    link: "/ContactUs",
  },
  {
    id: 9,
    title: "E-Commerce Solutions",
    description:
      "Build robust and scalable e-commerce platforms to enhance your online presence and sales.",
    icon: <ShoppingCart fontSize="large" sx={{ color: "#8395a7" }} />,
    link: "/ContactUs",
  },
];

const products = [
  {
    id: 1,
    name: "Shuttle Pro",
    details:
      "Mobile application for online badminton booking. Easy court configuration for owners and seamless slot booking with online payment for users.",
    image: "/assets/image/shuttle_pro.png",
  },
  {
    id: 2,
    name: "Elite Kitchen",
    details:
      "Restaurant system for managing orders, configurable tables, and food/bar menus with efficient kitchen and billing management.",
    image: "/assets/image/elitekotnew_icon.png",
  },
  {
    id: 3,
    name: "Order Tracking System",
    details:
      "Real-time tracking from order placement to doorstep delivery, enhancing transparency and customer experience.",
    image: "/assets/image/order_tracking.png",
  },
  {
    id: 4,
    name: "Elite POS",
    details:
      "Web-based POS for small to medium businesses to track purchases, sales, and manage simple accounts efficiently.",
    image: "/assets/image/elite_pos.png",
  },
  {
    id: 5,
    name: "ATS",
    details:
      "Manage recruitment with streamlined application collection, review automation, and progress tracking through hiring stages.",
    image: "/assets/image/ats.png",
  },
  {
    id: 6,
    name: "Laundry Tracking",
    details:
      "Monitor laundry orders from pickup to delivery with scheduling, tracking progress, and order notifications.",
    image: "/assets/image/laundry_tracking.png",
  },
  {
    id: 7,
    name: "Registration Web App",
    details:
      "Register for events with discount code options to avail special pricing during the sign-up process.",
    image: "/assets/image/registration_web_app.png",
  },
  {
    id: 8,
    name: "Book My Game",
    details:
      "Browse and book gaming sessions online at various locations, similar to booking platforms for movies or events.",
    image: "../assets/image/book_my_game.png",
  },
];

const OurProducts = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to bottom,rgb(64, 34, 70),rgb(45, 33, 48,1))",
        padding: "80px 40px",
        color: "#fff",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "#ffffff",
          marginBottom: "40px",
        }}
      >
        Our Services
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {services.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                background: "#1e1e1e",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 12px 25px rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                {service.icon}
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ffffff" }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#b0b0b0", marginTop: "10px" }}>
                  {service.description}
                </Typography>
              </CardContent>
              <Box textAlign="center" sx={{ paddingBottom: "20px" }}>
                <Button variant="contained" href={service.link}>
                  Learn More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h3" align="center" sx={{ marginTop: "60px", marginBottom: "40px", color: "#ffffff" }}>
        Our Products
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card sx={{ background: "#000", borderRadius: "5px" }}>
              <CardMedia  alt={product.name} image={product.image} sx={{ height: "250px",width:"250px  " }} />
              <CardContent>
                <Typography variant="h6" sx={{ color: "#fff" }}>{product.name}</Typography>
                <Typography variant="body2" sx={{ color: "#b0b0b0" }}>{product.details}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurProducts;
