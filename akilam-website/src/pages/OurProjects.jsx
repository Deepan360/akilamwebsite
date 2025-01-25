// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Footer from "../components/Footer";

const OurProjects = () => {
  // Project data with images
  const projects = [
    {
      title: "I-Quest International Business Park Lot 07270M & 09345C",
      description: "Electrical & ELV Systems",
      image: "/assets/image/a6.jpg", // Replace with the actual image URL
    },
    {
      title: "OGH 8-Story Hotel Development Project",
      description: "Electrical & ELV Systems",
      image: "/assets/image/OGH-Building.jpg", // Replace with the actual image URL
    },
    // {
    //   title: "Worker’s Dormitory @ 11 Kanji Crescent", 
    //   description: "Fire Protection System",
    //   image: "/assets/image/a1.jpg", // Replace with the actual image URL
    // },
    {
      title: "Temporary Ancillary Workers' Dormitory @ Chin Bee Avenue",
      description: "Fire Protection System",
      image: "/assets/image/ch.jpg", // Replace with the actual image URL
    },
    {
      title: "TMC Academy Fire Alarm Systems",
      description: "Fire Protection System",
      image: "/assets/image/TMC Academy.jpg", // Replace with the actual image URL
    },
  ];

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: 10, marginBottom: 5}}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          color="primary.main"
        >
          Our Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={project.image} // Use the image from project data
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="secondary.main">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default OurProjects;
