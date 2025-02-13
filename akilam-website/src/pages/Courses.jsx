// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

// Sample course data
const courses = [
  {
    category: "Tech Courses",
    courses: [
      {
        title: "Introduction to MERN",
        description:
          "Learn the basics of full-stack development using MongoDB, Express, React, and Node.js.",
        language: "JavaScript",
        techStack: ["MongoDB", "Express", "React", "Node.js"],
        contactLink: "https://www.example.com/contact",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "3 months", // Updated to months 
        rating: 4.5,
      },
      {
        title: "Advanced MERN",
        description:
          "Dive deeper into MERN stack, covering authentication, deployment, and performance optimization.",
        language: "JavaScript",
        techStack: ["MongoDB", "Express", "React", "Node.js"],
        contactLink: "https://www.example.com/contact",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "6 months", // Updated to months
        rating: 4.7,
      },
      {
        title: "Python for Data Science",
        description:
          "Learn Python programming to analyze data, visualize data, and apply machine learning models.",
        language: "Python",
        techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
        contactLink: "https://www.example.com/contact",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "4 months", // Updated to months
        rating: 4.8,
      },
      {
        title: "Web Development Bootcamp",
        description:
          "A comprehensive course on HTML, CSS, JavaScript, and back-end development with Node.js.",
        language: "JavaScript",
        techStack: ["HTML", "CSS", "JavaScript", "Node.js"],
        contactLink: "https://www.example.com/contact",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "5 months", // Updated to months
        rating: 4.6,
      },
    ],
  },
  // Add other categories if necessary
];

const Courses = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCourse(null);
  };

  return (
    <Container sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Typography variant="h4" gutterBottom align="center">
        Explore Tech Courses
      </Typography>

      {courses.map((courseCategory, index) => (
        <div key={index}>
          <Typography variant="h5" gutterBottom>
            {courseCategory.category}
          </Typography>

          <Grid container spacing={4}>
            {courseCategory.courses.map((course, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={course.imageUrl}
                    alt={course.title}
                    sx={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {course.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Language: {course.language}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Typography variant="body2" color="textSecondary">
                        Duration: {course.duration}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{ mr: 1 }}
                        >
                          {course.rating}
                        </Typography>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                      </Box>
                    </Box>
                  </CardContent>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleOpenModal(course)}
                    sx={{
                      borderRadius: "0 0 10px 10px",
                    }}
                  >
                    Contact Us
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}

      {/* Modal for course details */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>{selectedCourse?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" paragraph>
            {selectedCourse?.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Language: {selectedCourse?.language}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Tech Stack:{" "}
            {selectedCourse?.techStack.map((tech, idx) => (
              <span key={idx}>
                {tech}
                {idx < selectedCourse?.techStack.length - 1 ? ", " : ""}
              </span>
            ))}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Duration: {selectedCourse?.duration}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Rating: {selectedCourse?.rating}{" "}
            <span role="img" aria-label="star">
              ⭐
            </span>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
          <Button
            component="a"
            href={selectedCourse?.contactLink}
            target="_blank"
            color="primary"
          >
            Contact Us
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Courses;
