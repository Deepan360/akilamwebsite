import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Box,
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
    name: "Premium Web App",
    details:
      "Create high-performance web apps with advanced functionalities and seamless user experiences.",
    price: "$499",
  },
  {
    id: 2,
    name: "Enterprise Mobile App",
    details:
      "Develop native and cross-platform mobile apps that cater to enterprise-level requirements.",
    price: "$899",
  },
  {
    id: 3,
    name: "Cloud Hosting",
    details:
      "Get reliable, secure, and scalable cloud hosting services tailored to your business needs.",
    price: "$299/year",
  },
  {
    id: 4,
    name: "AI Analytics Suite",
    details:
      "Leverage our AI-powered analytics suite to gain actionable insights from your business data.",
    price: "$999",
  },
  {
    id: 5,
    name: "DevOps Automation",
    details:
      "Enhance your CI/CD pipelines with our DevOps automation solutions for faster deployments.",
    price: "$399",
  },
  {
    id: 6,
    name: "Custom CRM Solution",
    details:
      "Build a custom CRM to streamline your customer interactions and improve engagement.",
    price: "$1499",
  },
  {
    id: 7,
    name: "UI/UX Design Package",
    details:
      "Elevate your brand’s digital presence with a custom UI/UX design package.",
    price: "$699",
  },
  {
    id: 8,
    name: "E-Commerce Store",
    details:
      "Set up a feature-rich and visually appealing e-commerce store to boost online sales.",
    price: "$1299",
  },
  // {
  //   id: 9,
  //   name: "24/7 IT Support",
  //   details:
  //     "Our dedicated IT support services ensure your business operations run smoothly, 24/7.",
  //   price: "$199/month",
  // },
];


const OurProducts = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to bottom,rgb(64, 34, 70),rgb(45, 33, 48,1))",
        padding: "80px 40px",
        color: "#fff",
      }}
    >
      {/* Services Section */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "#ffffff",
          marginBottom: "40px",
          position: "relative",
          "&:after": {
            content: '""',
            display: "block",
            width: "80px",
            height: "4px",
            backgroundColor: "primary.main",
            margin: "10px auto 0",
          },
        }}
        align="center"
      >
        Our Services
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {services.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                background:
                  "linear-gradient(145deg, #242424, #1e1e1e, #2b2b2b)",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 12px 25px rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                {service.icon}
              </Box>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#ffffff",
                    textAlign: "center",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#b0b0b0",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
              <Box textAlign="center" sx={{ paddingBottom: "20px" }}>
                <Button
                  variant="contained"
                  href={service.link}
                  sx={{
                    backgroundColor: "primary.main",
                    "&:hover": { backgroundColor: "primary.main" },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Products Section */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "#ffffff",
          margin: "60px 0 40px",
          position: "relative",
          "&:after": {
            content: '""',
            display: "block",
            width: "80px",
            height: "4px",
            backgroundColor: "#1dd1a1",
            margin: "10px auto 0",
          },
        }}
        align="center"
      >
        Our Products
      </Typography>
      <Grid container spacing={5} justifyContent="start">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                padding: "20px",
                background: "linear-gradient(145deg, #1f1f1f, #2c2c2c)",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "600",
                  marginBottom: "10px",
                  color: "#f2f2f2",
                }}
              >
                {product.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#b3b3b3", marginBottom: "15px" }}
              >
                {product.details}
              </Typography>
              {/* <Typography
                variant="h5"
                sx={{
                  fontWeight: "600",
                  margin: "20px 0",
                  color: "#00b894",
                  textAlign: "center",
                }}
              >
                {product.price}
              </Typography> */}
              <Button
                variant="contained"
                href="/ContactUs"
                sx={{
                  backgroundColor: "#00b894",
                  "&:hover": {
                    backgroundColor: "#00b894",
                  },
                  borderRadius: "8px",
                  padding: "10px",
                  fontWeight: "bold",
                }}
                fullWidth
              >
                Reach Now
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurProducts;
