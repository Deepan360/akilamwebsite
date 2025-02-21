/* eslint-disable no-unused-vars */
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

// Categorized Course Data
const courses = [
  {
    category: "Frontend Development",
    courses: [
      {
        title: "Angular",
        description:
          "Master Angular for building scalable web applications with TypeScript.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "3 months",
        rating: 4.7,
      },
      {
        title: "React.js",
        description:
          "Learn React.js for developing dynamic and interactive user interfaces.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "3 months",
        rating: 4.8,
      },
      {
        title: "Bootstrap, HTML & CSS",
        description:
          "Fundamentals of responsive web design with HTML5, CSS3, and Bootstrap.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "2 months",
        rating: 4.6,
      },
    ],
  },
  {
    category: "Backend Development",
    courses: [
      {
        title: "Node.js",
        description:
          "Build scalable backend applications using Node.js and Express.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "4 months",
        rating: 4.6,
      },
      {
        title: "Django",
        description:
          "Develop fast and secure applications with Django and Python.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "4 months",
        rating: 4.7,
      },
      {
        title: "Spring Boot",
        description:
          "Learn Spring Boot for enterprise Java application development.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "5 months",
        rating: 4.8,
      },
      {
        title: ".NET Framework & MVC",
        description:
          "Comprehensive .NET Framework and MVC training for web applications.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "5 months",
        rating: 4.7,
      },
      {
        title: ".NET Core",
        description:
          "Master .NET Core for cross-platform enterprise-level development.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "5 months",
        rating: 4.7,
      },
    ],
  },
  {
    category: "Full-Stack Development",
    courses: [
      {
        title: "MERN Stack",
        description:
          "Full-stack development with MongoDB, Express.js, React, and Node.js.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "6 months",
        rating: 4.7,
      },
      {
        title: "Full-Stack Java (Spring Boot & Angular)",
        description:
          "Develop full-stack applications using Spring Boot and Angular.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "6 months",
        rating: 4.8,
      },
      {
        title: "Full-Stack Python (Django & React)",
        description: "Learn Django for backend and React.js for frontend.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "6 months",
        rating: 4.8,
      },
    ],
  },
  {
    category: "Mobile App Development",
    courses: [
      {
        title: "Flutter",
        description:
          "Create cross-platform mobile applications using Flutter and Dart.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "4 months",
        rating: 4.7,
      },
      {
        title: "React Native",
        description: "Develop iOS and Android apps using React Native.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "4 months",
        rating: 4.6,
      },
    ],
  },
  {
  category: "Cloud Computing",
  courses: [
    {
      title: "AWS Certified Solutions Architect",
      description:
        "Learn how to design, deploy, and manage scalable applications on AWS.",
      imageUrl: "https://via.placeholder.com/300x200",
      duration: "4 months",
      rating: 4.8,
    },
    {
      title: "Microsoft Azure Fundamentals",
      description:
        "Master the basics of cloud computing and Azure services.",
      imageUrl: "https://via.placeholder.com/300x200",
      duration: "3 months",
      rating: 4.7,
    },
    {
      title: "Google Cloud Associate Engineer",
      description:
        "Develop skills to deploy and manage applications on Google Cloud.",
      imageUrl: "https://via.placeholder.com/300x200",
      duration: "4 months",
      rating: 4.7,
    },
    {
      title: "DevOps with AWS & Kubernetes",
      description:
        "Implement DevOps practices using AWS, Kubernetes, and CI/CD pipelines.",
      imageUrl: "https://via.placeholder.com/300x200",
      duration: "5 months",
      rating: 4.8,
    },
    {
      title: "Cloud Security & Compliance",
      description:
        "Understand cloud security best practices, compliance, and risk management.",
      imageUrl: "https://via.placeholder.com/300x200",
      duration: "3 months",
      rating: 4.6,
    }
  ]
}
,
  {
    category: "Digital Marketing",
    courses: [
      {
        title: "SEO & Content Marketing",
        description:
          "Master SEO strategies, keyword optimization, and content marketing techniques.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "3 months",
        rating: 4.5,
      },
      {
        title: "Social Media Marketing",
        description:
          "Learn advertising, branding, and engagement strategies on social media platforms.",
        imageUrl: "https://via.placeholder.com/300x200",
        duration: "2 months",
        rating: 4.6,
      },
    ],
  },
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
    <Box sx={{ background: "#1b2c50", color: "#c9d1d9", minHeight: "100vh" }}>
      <Container
        sx={{
          paddingTop: "80px",
          paddingBottom: "80px",
         
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 4, color: "#f8f8f8" }}
        >
          Explore Our Courses
        </Typography>

        {courses.map((category, index) => (
          <div key={index}>
            <Typography
              variant="h5"
              sx={{ mt: 3, mb: 3, color: "#fff", fontWeight: "bold" }}
            >
              {category.category}
            </Typography>

            <Grid container spacing={3}>
              {category.courses.map((course, idx) => (
                <Grid item key={idx} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      background: "#1E1E1E",
                      color: "#fff",
                      borderRadius: "12px",
                      boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.15)",
                      transition: "0.3s ease-in-out",
                      "&:hover": {
                        boxShadow: "0px 4px 20px #BB86FC",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={course.imageUrl}
                      alt={course.title}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#BB86FC" }}
                      >
                        {course.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
                        {course.description}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Duration:</strong> {course.duration}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Rating:</strong> {course.rating} ⭐
                      </Typography>
                    </CardContent>
                    <Button
                      onClick={() => handleOpenModal(course)}
                      sx={{
                        width: "100%",
                        backgroundColor: "#BB86FC",
                        color: "#fff",
                        borderRadius: "0px 0px 12px 12px",
                        fontWeight: "bold",
                        "&:hover": { backgroundColor: "#9B5CFF" },
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

        {/* Modal */}
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle
            sx={{ background: "#1E1E1E", color: "#fff", fontWeight: "bold" }}
          >
            Enroll in {selectedCourse?.title}
          </DialogTitle>
          <DialogContent sx={{ background: "#1E1E1E", color: "#fff" }}>
            <Typography variant="body1">
              {selectedCourse?.description}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              <strong>Duration:</strong> {selectedCourse?.duration}
            </Typography>
            <Typography variant="body2">
              <strong>Rating:</strong> {selectedCourse?.rating} ⭐
            </Typography>
            <Box
              sx={{
                mt: 3,
                background: "#BB86FC",
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Interested? Contact us for more details!
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions sx={{ background: "#1E1E1E" }}>
            <Button
              onClick={handleCloseModal}
              sx={{ color: "#BB86FC", fontWeight: "bold" }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Courses;
