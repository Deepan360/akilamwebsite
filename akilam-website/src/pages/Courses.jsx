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

import Popover from "@mui/material/Popover";


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
  const [openModal, setOpenModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setOpenModal(true);
  };
  const [openContactModal, setOpenContactModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    mobile: "",
    email: "",
    message: "",
  });


  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverMessage, setPopoverMessage] = useState("");
  const [popoverType, setPopoverType] = useState("error"); // "success" or "error"

const handleSubmit = async (e) => {
  e.preventDefault();
  setAnchorEl(null); // Reset popover

  // Validate required fields
  const requiredFields = ["firstName", "lastName", "dob", "mobile", "email"];
  const emptyFields = requiredFields.filter((field) => !formData[field]);

  if (emptyFields.length > 0) {
    setPopoverMessage("Please fill in all required fields.");
    setPopoverType("error");
    setAnchorEl(e.currentTarget); // Show popover
    setTimeout(() => setAnchorEl(null), 3000); // Hide popover after 3 sec
    return;
  }

  const finalFormData = {
    ...formData,
    course: selectedCourse?.title || "No Course Selected",
  };

  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalFormData),
    });

    const result = await response.json();
    if (result.success) {
      setPopoverMessage("Your message has been sent successfully!");
      setPopoverType("success");
      setOpenContactModal(false);
      setFormData({
        firstName: "",
        lastName: "",
        dob: "",
        mobile: "",
        email: "",
        message: "",
      });
    } else {
      setPopoverMessage("Failed to send the message. Please try again later.");
      setPopoverType("error");
    }
  } catch (error) {
    console.error("Error:", error);
    setPopoverMessage("Error sending message.");
    setPopoverType("error");
  }

  setAnchorEl(e.currentTarget); // Show popover
  setTimeout(() => setAnchorEl(null), 3000); // Hide popover after 3 sec
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
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle
            sx={{
              background: "#1E1E1E",
              color: "primary.main",
              fontWeight: "bold",
            }}
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
            <Box
              sx={{
                mt: 3,
                background: "primary.main",
                padding: "10px",
                borderRadius: "8px",
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
              sx={{ color: "secondary.main", fontWeight: "bold" }}
            >
              Close
            </Button>
            <Button
              onClick={() => setOpenContactModal(true)} // Open contact form modal
              sx={{
                backgroundColor: "primary.main",
                color: "#fff",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "primary.dark" },
              }}
            >
              Register Now
            </Button>
          </DialogActions>
        </Dialog>
        {/* Contact Form Modal */}
        <Dialog
          open={openContactModal}
          onClose={() => setOpenContactModal(false)}
          maxWidth="sm"
          fullWidth
        >
          {/* Modal Header */}
          <DialogTitle
            sx={{
              background: "#121212",
              color: "primary.main",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
              py: 2,
            }}
          >
            📩 Get in Touch
          </DialogTitle>

          {/* Modal Content */}
          <DialogContent
            sx={{
              background: "#1E1E1E",
              color: "#fff",
              px: { xs: 2, sm: 4 },
              pb: 3,
            }}
          >
            <Typography
              variant="body2"
              sx={{ textAlign: "center", py: 2, color: "grey.300" }}
            >
              Fill out the form below, and we’ll get back to you soon!
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                backgroundColor: "#2E2E2E",
                padding: { xs: "16px", sm: "24px" },
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Grid container spacing={2}>
                {/* Selected Course */}
                <Grid item xs={12}>
                  <TextField
                    label="Selected Course"
                    variant="filled"
                    fullWidth
                    name="course"
                    value={selectedCourse?.title || ""}
                    InputProps={{ readOnly: true }}
                    sx={{
                      backgroundColor: "#f1f1f1",
                      color: "primary.main",
                      borderRadius: "6px",
                      input: {
                        color: "primary.main",
                        fontWeight: "bold",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      },
                    }}
                  />
                </Grid>

                {/* First Name & Last Name (Stacked on Mobile) */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    variant="filled"
                    fullWidth
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    sx={{
                      backgroundColor: "#333",
                      borderRadius: "6px",
                      input: {
                        color: "#fff",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      },
                      "& .MuiInputLabel-root": { color: "grey.400" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "primary.main",
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    variant="filled"
                    fullWidth
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    sx={{
                      backgroundColor: "#333",
                      borderRadius: "6px",
                      input: {
                        color: "#fff",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      },
                      "& .MuiInputLabel-root": { color: "grey.400" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "primary.main",
                      },
                    }}
                  />
                </Grid>

                {/* Date of Birth */}
                <Grid item xs={12}>
                  <TextField
                    label="Date of Birth"
                    variant="filled"
                    fullWidth
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      backgroundColor: "#333",
                      borderRadius: "6px",
                      input: {
                        color: "#fff",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      },
                      "& .MuiInputLabel-root": { color: "grey.400" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "primary.main",
                      },
                    }}
                  />
                </Grid>

                {/* Mobile Number */}
                <Grid item xs={12}>
                  <TextField
                    label="Mobile Number"
                    variant="filled"
                    fullWidth
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    inputProps={{ maxLength: 10, pattern: "[0-9]{10}" }}
                    sx={{
                      backgroundColor: "#333",
                      borderRadius: "6px",
                      input: {
                        color: "#fff",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      },
                      "& .MuiInputLabel-root": { color: "grey.400" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "primary.main",
                      },
                    }}
                  />
                </Grid>

                {/* Email ID */}
                <Grid item xs={12}>
                  <TextField
                    label="Email ID"
                    variant="filled"
                    fullWidth
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{
                      backgroundColor: "#333",
                      borderRadius: "6px",
                      input: {
                        color: "#fff",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      },
                      "& .MuiInputLabel-root": { color: "grey.400" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "primary.main",
                      },
                    }}
                  />
                </Grid>

                {/* Message Field */}
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    variant="filled"
                    fullWidth
                    multiline
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{
                      backgroundColor: "#333",
                      borderRadius: "6px",
                      input: {
                        color: "#fff",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      },
                      "& .MuiInputLabel-root": { color: "grey.400" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "primary.main",
                      },
                    }}
                  />
                </Grid>
              </Grid>

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "primary.main",
                  color: "#1E1E1E",
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  mt: 3,
                  py: 1.5,
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(249, 38, 221, 0.3)",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                🚀 Send Message
              </Button>
            </Box>
          </DialogContent>

          {/* Close Button */}
          <DialogActions
            sx={{ background: "#121212", justifyContent: "center", pb: 2 }}
          >
            <Button
              onClick={() => setOpenContactModal(false)}
              sx={{
                color: "grey.400",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                "&:hover": { color: "#fff" },
              }}
            >
              ❌ Close
            </Button>
          </DialogActions>
        </Dialog>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Typography
            sx={{
              p: 2,
              backgroundColor: popoverType === "error" ? "red" : "green",
              color: "white",
              borderRadius: "6px",
            }}
          >
            {popoverMessage}
          </Typography>
        </Popover>
      </Container>
    </Box>
  );
};

export default Courses;
