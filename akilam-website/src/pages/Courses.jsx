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
  TextField
} from "@mui/material";
import PropTypes from 'prop-types';

import { useNavigate } from "react-router-dom";

// Categorized Course Data
const courses = [
  {
    category: "Frontend Development",
    courses: [
      {
        title: "Angular",
        description:
          "Master Angular for building scalable web applications with TypeScript.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
        duration: "3 months",
        rating: 4.7,
      },
      {
        title: "React.js",
        description:
          "Learn React.js for developing dynamic and interactive user interfaces.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        duration: "3 months",
        rating: 4.8,
      },
      {
        title: "Bootstrap, HTML & CSS",
        description:
          "Fundamentals of responsive web design with HTML5, CSS3, and Bootstrap.",
        imageUrl:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
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
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        duration: "4 months",
        rating: 4.6,
      },
      {
        title: "Django",
        description:
          "Develop fast and secure applications with Django and Python.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
        duration: "4 months",
        rating: 4.7,
      },
      {
        title: "Spring Boot",
        description:
          "Learn Spring Boot for enterprise Java application development.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
        duration: "5 months",
        rating: 4.8,
      },
      {
        title: ".NET Framework & MVC",
        description:
          "Comprehensive .NET Framework and MVC training for web applications.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",
        duration: "5 months",
        rating: 4.7,
      },
      {
        title: ".NET Core",
        description:
          "Master .NET Core for cross-platform enterprise-level development.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
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
        imageUrl:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*kxPYwfJmkXZ3iCWy.png",
        duration: "6 months",
        rating: 4.7,
      },
      {
        title: "Full-Stack Java (Spring Boot & Angular)",
        description:
          "Develop full-stack applications using Spring Boot and Angular.",
        imageUrl:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/1*NEKvZMKgY6X6fSioYSm-CA.png",
        duration: "6 months",
        rating: 4.8,
      },
      {
        title: "Full-Stack Python (Django & React)",
        description: "Learn Django for backend and React.js for frontend.",
        imageUrl:
          "https://www.saaspegasus.com/static/images/web/modern-javascript/django-react-header.51a983c82dcb.png",
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
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
        duration: "4 months",
        rating: 4.7,
      },
      {
        title: "React Native",
        description: "Develop iOS and Android apps using React Native.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
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
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        duration: "4 months",
        rating: 4.8,
      },
      {
        title: "Microsoft Azure Fundamentals",
        description: "Master the basics of cloud computing and Azure services.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
        duration: "3 months",
        rating: 4.7,
      },
      {
        title: "Google Cloud Associate Engineer",
        description:
          "Develop skills to deploy and manage applications on Google Cloud.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
        duration: "4 months",
        rating: 4.7,
      },
      {
        title: "DevOps with AWS & Kubernetes",
        description:
          "Implement DevOps practices using AWS, Kubernetes, and CI/CD pipelines.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
        duration: "5 months",
        rating: 4.8,
      },
      // {
      //   title: "Cloud Security & Compliance",
      //   description:
      //     "Understand cloud security best practices, compliance, and risk management.",
      //   imageUrl: "https://via.placeholder.com/300x200",
      //   duration: "3 months",
      //   rating: 4.6,
      // },
    ],
  },
  {
    category: "Database Management",
    courses: [
      {
        title: "SQL for Beginners",
        description:
          "Learn SQL from scratch and manage relational databases effectively.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
        duration: "3 months",
        rating: 4.7,
      },
      {
        title: "MySQL & PostgreSQL",
        description:
          "Master MySQL and PostgreSQL for database administration and optimization.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        duration: "4 months",
        rating: 4.8,
      },
      {
        title: "MongoDB NoSQL Database",
        description:
          "Learn NoSQL with MongoDB for scalable and high-performance databases.",
        imageUrl:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*tdiQR1PX3wb-V_bG.jpg",
        duration: "3 months",
        rating: 4.7,
      },
      {
        title: "Microsoft SQL Server & T-SQL",
        description:
          "Gain expertise in Microsoft SQL Server and T-SQL for enterprise applications.",
        imageUrl:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*KIJFYRKcHCfYQaX0.png",
        duration: "4 months",
        rating: 4.6,
      },
      {
        title: "Oracle Database Administration",
        description:
          "Master Oracle Database for enterprise-level database management.",
        imageUrl:
          "https://www.crossjoin.pt/wp-content/uploads/2019/08/ImagemArtigo-Site-1-1024x683.jpg",
        duration: "5 months",
        rating: 4.8,
      },
    ],
  },
  {
    category: "Data Analytics & Business Intelligence",
    courses: [
      {
        title: "Data Analytics with Python",
        description:
          "Learn data analysis, visualization, and manipulation using Python libraries.",
        imageUrl:
          "https://bigdataanalyticsnews.com/wp-content/uploads/2022/10/Python-For-Data-Science.jpg",
        duration: "4 months",
        rating: 4.8,
      },
      {
        title: "Power BI & Business Intelligence",
        description:
          "Master Power BI for interactive dashboards and business insights.",
        imageUrl:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/1*7vuiKbVTu4XJpFTkuAGwFg.png",
        duration: "3 months",
        rating: 4.7,
      },
      {
        title: "Data Science with R",
        description:
          "Analyze data and build predictive models using R programming.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg",
        duration: "4 months",
        rating: 4.6,
      },
      {
        title: "Machine Learning with TensorFlow",
        description:
          "Develop machine learning models using TensorFlow and deep learning techniques.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
        duration: "5 months",
        rating: 4.9,
      },
      {
        title: "Big Data & Apache Hadoop",
        description:
          "Learn big data processing with Hadoop, Spark, and distributed computing.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/3/38/Hadoop_logo_new.svg",
        duration: "5 months",
        rating: 4.7,
      },
    ],
  },
  {
    category: "Digital Marketing",
    courses: [
      {
        title: "SEO & Content Marketing",
        description:
          "Master SEO strategies, keyword optimization, and content marketing techniques.",
        imageUrl:
          "https://5862065.fs1.hubspotusercontent-na1.net/hubfs/5862065/Imported_Blog_Media/seo-vs-content.png",
        duration: "3 months",
        rating: 4.5,
      },
      {
        title: "Social Media Marketing",
        description:
          "Learn advertising, branding, and engagement strategies on social media platforms.",
        imageUrl: "https://www.zoopero.com/img/services/services5-w.png",
        duration: "2 months",
        rating: 4.6,
      },
    ],
  },
];

const Courses = () => {
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedCourse(null);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(rgb(26, 36, 54),rgb(25, 40, 71))",
        color: "#fff",
        minHeight: "100vh",
        paddingBottom: 5,
      }}
    >
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
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      "&:hover": {
                        boxShadow: "0px 4px 20px #ae3a94", // Use primary color for hover effect
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      sx={{ objectFit: "contain", background: "#fff" }}
                      image={course.imageUrl}
                      alt={course.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "primary.main" }} // Heading uses primary color
                      >
                        {course.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
                        {course.description}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Duration:</strong> {course.duration}
                      </Typography>
                      {/* <Typography variant="body2">
                        <strong>Rating:</strong> {course.rating} ⭐
                      </Typography> */}
                    </CardContent>
                    <Button
                      onClick={() => handleOpenModal(course)}
                      sx={{
                        width: "100%",
                        backgroundColor: "primary.main", // Primary color for button
                        color: "#fff",
                        borderRadius: "0px 0px 12px 12px",
                        fontWeight: "bold",
                        "&:hover": { backgroundColor: "secondary.main" }, // Secondary color on hover
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
        <ContactFormModal
          open={open}
          handleClose={handleCloseModal}
          selectedCourse={selectedCourse}
          handleOpenModal={handleOpenModal}
        />
      </Container>
    </Box>
  );
};

const ContactFormModal = ({ open, handleClose, selectedCourse }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, mobile, message } = formData;

    // Basic validation
    if (!firstName || !lastName || !email || !mobile || !message) {
      alert("Please fill in all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Enter a valid email address.");
      return;
    }
    if (!/^\d{10}$/.test(mobile)) {
      alert("Enter a valid 10-digit mobile number.");
      return;
    }

    // Open default mail client with filled details
    const mailtoLink = `mailto:info@example.com?subject=Inquiry about ${selectedCourse?.title}&body=Hello,%0D%0A%0D%0A
      I am ${firstName} ${lastName}.%0D%0A
      Email: ${email}%0D%0A
      Mobile: ${mobile}%0D%0A
      Course Interested: ${selectedCourse?.title}%0D%0A
      Message: ${message}%0D%0A
      Regards,%0D%0A${firstName}`;

    window.location.href = mailtoLink;
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(rgb(26, 36, 54),rgb(25, 40, 71))",
        color: "#fff",
        minHeight: "100vh",
        paddingBottom: 5,
      }}
    >
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
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      "&:hover": {
                        boxShadow: "0px 4px 20px #ae3a94", // Use primary color for hover effect
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      sx={{ objectFit: "contain", background: "#fff" }}
                      image={course.imageUrl}
                      alt={course.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "primary.main" }} // Heading uses primary color
                      >
                        {course.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
                        {course.description}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Duration:</strong> {course.duration}
                      </Typography>
                      {/* <Typography variant="body2">
                        <strong>Rating:</strong> {course.rating} ⭐
                      </Typography> */}
                    </CardContent>
                    <Button
                      // eslint-disable-next-line no-undef
                      onClick={() => handleOpenModal(course)}
                      sx={{
                        width: "100%",
                        backgroundColor: "primary.main", // Primary color for button
                        color: "#fff",
                        borderRadius: "0px 0px 12px 12px",
                        fontWeight: "bold",
                        "&:hover": { backgroundColor: "secondary.main" }, // Secondary color on hover
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
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle
            sx={{
              background: "#1E1E1E",
              color: "primary.main",
              fontWeight: "bold",
            }}
          >
            Enroll in {selectedCourse?.title}
          </DialogTitle>

          <DialogContent
            sx={{
              background: "#1E1E1E",
              color: "#fff",
              paddingBottom: 2,
              borderColor: "primary.main",
            }}
          >
            <Typography variant="body1">
              {selectedCourse?.description}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              <strong>Duration:</strong> {selectedCourse?.duration}
            </Typography>

            <Box
              sx={{ mt: 3, padding: 2, borderRadius: 2, background: "#f1f2f3" }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: "#000", fontWeight: "bold" }}
              >
                Fill in your details to contact us!
              </Typography>

              <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                <TextField
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  sx={{ input: { color: "#000" } }}
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  sx={{ input: { color: "#000" } }}
                />
              </Box>

              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ mt: 2, input: { color: "#000" } }}
                onChange={handleChange}
              />
              <TextField
                name="mobile"
                label="Mobile Number"
                variant="outlined"
                fullWidth
                sx={{ mt: 2, input: { color: "#000" } }}
                onChange={handleChange}
              />
              <TextField
                name="message"
                label="Your Message"
                variant="outlined"
                multiline
                rows={3}
                fullWidth
                sx={{ mt: 2, input: { color: "#000" } }}
                onChange={handleChange}
              />
            </Box>
          </DialogContent>

          <DialogActions sx={{ background: "#1E1E1E", padding: "16px" }}>
            <Button
              onClick={handleClose}
              sx={{ color: "secondary.main", fontWeight: "bold" }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              sx={{
                backgroundColor: "primary.main",
                color: "#fff",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#1565C0" },
              }}
            >
              Send Inquiry
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

ContactFormModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  selectedCourse: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.string,
  }),
};

export default Courses;
