// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Badge,
  Box,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/system";

// Sample product data
const products = [
  {
    id: 1,
    name: "Cloud Management System",
    description: "Effortlessly manage and scale your cloud infrastructure.",
    image: "https://via.placeholder.com/400x300", // Replace with actual product image
    technologies: ["AWS", "Docker", "Kubernetes"],
  },
  {
    id: 2,
    name: "AI Data Analytics",
    description: "Unlock the power of data with AI-driven analytics.",
    image: "https://via.placeholder.com/400x300", // Replace with actual product image
    technologies: ["Python", "TensorFlow", "Pandas"],
  },
];

const darkTheme = createTheme({
  palette: {
    mode: "dark", // Dark mode
  },
});

const OurProducts = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h3" gutterBottom color="white">
          Our Products
        </Typography>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: "#333",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: "cover", borderRadius: 2 }}
                />
                <CardContent>
                  <Typography variant="h6" color="white" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {product.description}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {product.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        badgeContent={tech}
                        color="primary"
                        sx={{ marginRight: 1 }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <Button size="small" variant="contained" sx={{ m: 2 }}>
                  Learn More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default OurProducts;
