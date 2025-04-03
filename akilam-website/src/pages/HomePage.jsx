
import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
//import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Parallax from "react-rellax";

import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HomePage = () => {
  const [expanded, setExpanded] = useState(null);

  // Handle the opening and closing of panels
  const handleChange = (panel) => (event, isExpanded) => {
    // Close the current panel if it's already expanded, otherwise open the new one
    setExpanded(isExpanded ? panel : null);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 900, // Scroll to the very top of the page
      behavior: "smooth", // Smooth scrolling effect
    });
  };
  const faqData = [
    {
      question: "What is our product?",
      answer:
        "Our product is an innovative software solution designed to streamline business processes, improve efficiency, and foster collaboration within teams. We provide a scalable platform that adapts to your company’s needs, whether you're a startup or an enterprise.",
    },
    {
      question: "Who can benefit from our product?",
      answer:
        "Our product is designed for businesses of all sizes, including startups, SMBs, and enterprises. Whether you're in tech, retail, healthcare, or any other industry, our software will help you reduce operational costs, optimize workflows, and enhance customer engagement.",
    },
    {
      question: "How does your product work?",
      answer:
        "Our product uses cutting-edge technology, powered by AI and machine learning, to automate mundane tasks, improve decision-making, and provide actionable insights in real-time. It's easy to implement and integrates seamlessly with existing systems, ensuring a smooth transition for your team.",
    },
    {
      question: "Is your product customizable?",
      answer:
        "Yes, our product is highly customizable. We understand that every business is unique, which is why we offer tailored solutions to meet your specific needs. You can easily add features, modify workflows, and customize the user interface to align with your business objectives.",
    },
    {
      question: "How can I get started with your product?",
      answer:
        "Getting started is simple! Just sign up for a free demo or schedule a consultation with one of our product experts. We’ll walk you through the setup process, help you integrate our solution with your systems, and ensure you get the most out of our platform.",
    },
    // {
    //   question: "What kind of support do you offer?",
    //   answer: "We offer 24/7 customer support via chat, email, and phone. Our dedicated support team is here to assist with any questions, troubleshooting, or customization needs. We also provide in-depth documentation and training resources to ensure you can maximize the value of our product.",
    // },
    {
      question: "What is your pricing model?",
      answer:
        "Our pricing is flexible and based on your business size and needs. We offer a subscription-based model with different tiers, depending on the features you require. Contact us for a personalized pricing plan and we’ll help you choose the best option for your budget and business goals.",
    },
    {
      question: "How secure is your product?",
      answer:
        "Security is a top priority for us. Our product follows industry best practices to ensure your data is always protected. We use encryption, multi-factor authentication, and regular security audits to keep your information safe. We also comply with GDPR and other data protection regulations.",
    },
  ];

  const techStack = [
    {
      name: "HTML5",
      description: "The standard markup language for creating web pages.",
      icon: "/assets/image/1l.png",
    },
    {
      name: "CSS3",
      description: "The latest version of the Cascading Style Sheets language.",
      icon: "/assets/image/2l.png",
    },
    {
      name: "JavaScript",
      description:
        "A high-level programming language essential for interactive web development.",
      icon: "/assets/image/3l.png",
    },
    {
      name: "TypeScript",
      description:
        "A superset of JavaScript that adds static typing, enhancing code quality.",
      icon: "/assets/image/4l.png",
    },
    {
      name: "React",
      description:
        "A JavaScript library for building user interfaces, particularly SPAs.",
      icon: "/assets/image/logo_dark.svg",
    },
    {
      name: "Angular",
      description:
        "A platform for building client applications using HTML and TypeScript.",
      icon: "/assets/image/6l.png",
    },
    {
      name: "Python",
      description:
        "A versatile, high-level programming language known for its readability.",
      icon: "/assets/image/7l.png",
    },
    {
      name: "Java",
      description:
        "A class-based, object-oriented language used for enterprise-scale apps.",
      icon: "/assets/image/8l.png",
    },
    {
      name: "C#",
      description:
        "A modern, object-oriented programming language for building varied applications.",
      icon: "/assets/image/9l.png",
    },
    {
      name: "Go (Golang)",
      description:
        "A statically typed, compiled language known for its simplicity.",
      icon: "/assets/image/10l.png",
    },
    {
      name: "Rust",
      description:
        "A systems programming language focused on safety and speed.",
      icon: "/assets/image/16l.svg",
    },
    {
      name: "PHP",
      description:
        "A widely-used open-source scripting language for web development.",
      icon: "/assets/image/12l.png",
    },
    {
      name: "Node.js",
      description: "A JavaScript runtime enabling server-side scripting.",
      icon: "/assets/image/nodejs.webp",
    },
    {
      name: "Next.js",
      description:
        "A React framework for building server-side rendered and statically generated web applications.",
      icon: "/assets/image/dango-inner-2.webp", // Path to Next.js icon or image
    },

    {
      name: "MySQL",
      description: "An open-source relational database management system.",
      icon: "/assets/image/14l.png",
    },
    {
      name: "PostgreSQL",
      description:
        "An object-relational database system known for extensibility.",
      icon: "/assets/image/15l.png",
    },
    {
      name: "MongoDB",
      description: "A NoSQL database known for flexibility and scalability.",
      icon: "/assets/image/mongo.svg",
    },
    {
      name: "SQLite",
      description:
        "A small, fast, self-contained, high-reliability SQL database engine.",
      icon: "/assets/image/sqllite.jpg",
    },
    {
      name: "Oracle Database",
      description:
        "A multi-model database management system produced by Oracle.",
      icon: "/assets/image/18l.png",
    },
    {
      name: "Microsoft SQL Server",
      description:
        "A relational database management system developed by Microsoft.",
      icon: "/assets/image/19l.png",
    },
    {
      name: "Redis",
      description:
        "An in-memory data structure store used as a database, cache, and message broker.",
      icon: "/assets/image/20l.webp",
    },
  ];

  const [isHovered, setIsHovered] = useState(false); // To control the hover state

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "encyclo.png",
    "mission.png",
    "techworld.png",
    "vision.png"
  ];
  const words = ["Think", "Mission", "Dream", "Vision"]; // Words to highlight

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change every 1 seconds
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <Box
      sx={{ backgroundColor: "#161b22", color: "#c9d1d9", minHeight: "100vh" }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(#000,rgb(25, 40, 71))",
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
          justifyContent: "center",
          textAlign: { xs: "center", md: "left" }, // Center text on mobile
        }}
      >
        {/* Parallax Background */}
        <Parallax speed={-3}>
          <Box
            sx={{
              position: "absolute",
              width: "150%",
              height: "150%",
              top: "-30%",
              left: "-30%",
              background: "radial-gradient(circle, #ae3a94, #240c36)",
              filter: "blur(120px)",
              zIndex: 0,
              transform: "rotate(-45deg)",
            }}
          />
        </Parallax>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            {/* Left Section: Text Content */}
            <Grid item xs={12} md={6}>
              <Zoom>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "5rem" }, // Adjust size for mobile
                    lineHeight: 1.2,
                    color: "#ffffff",
                    mb: { xs: 1.5, md: 3 },
                    mt: { xs: 3, md: 0 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Elevate Your{" "}
                  <span style={{ color: "#ae3a94" }}>
                    {words[currentIndex]}
                  </span>
                </Typography>
              </Zoom>
              <Fade left>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.3rem" },
                    color: "#b0b0b0",
                    mb: 3,
                    maxWidth: { xs: "100%", sm: "90%", md: "85%" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Transform your innovative ideas into impactful, tech-forward
                  solutions.
                </Typography>
              </Fade>
              <Fade bottom>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" }, // Stack on mobile, inline on desktop
                      gap: 2, // Adds spacing between buttons
                      alignItems: "center", // Keeps buttons aligned properly
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        padding: "10px 24px",
                        backgroundColor: "#ae3a94",
                        fontSize: { xs: "0.9rem", md: "1.2rem" },
                        color: "#fff",
                        fontWeight: "bold",
                        borderRadius: "50px",
                        boxShadow: "0 8px 30px rgba(174, 58, 148, 0.5)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#95007e",
                          transform: "translateY(-3px) scale(1.05)",
                        },
                        mb: { xs: 2, md: 0 }, // Margin-bottom only for mobile
                      }}
                      onClick={handleScrollToTop}
                    >
                      Get Started
                    </Button>

                    <Button
                      variant="outlined"
                      sx={{
                        padding: "10px 24px",
                        fontSize: { xs: "0.9rem", md: "1.2rem" },
                        color: "#b0b0b0",
                        border: "2px solid #b0b0b0",
                        borderRadius: "50px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "#fff",
                          color: "#fff",
                          backgroundColor: "rgba(174, 58, 148, 0.2)",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>

            {/* Right Section: Slideshow */}
            <Grid item xs={12} md={6}>
              <Fade right>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    width: "100%",
                    height: { xs: "280px", sm: "350px", md: "500px" }, // Adjust image height for mobile
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={`illustration_and_gif/${image}`}
                        alt={`Illustration ${index + 1}`}
                        style={{
                          position: "absolute",
                          width: "90%", // Reduce width for mobile
                          height: "100%",
                          objectFit: "contain",
                          opacity: currentIndex === index ? 1 : 0,
                          transition: "opacity 1s ease-in-out",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          backgroundColor: "#161b22",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 4, color: "#f8f8f8" }}
          >
            Why Choose Us?
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Cards */}
            {[
              {
                img: "/Cooperative_Business_Characters/Cooperative_Business_Characters/PNG/artificial_intelligence.png",
                title: "Modern Collaboration",
                description:
                  "Work smarter with powerful tools that keep your team aligned.",
              },
              {
                img: "/Cooperative_Business_Characters/Cooperative_Business_Characters/PNG/data_analytics.png",
                title: "Scalable Solutions",
                description:
                  "Build for now and the future with scalable, reliable tools.",
              },
              {
                img: "/Cooperative_Business_Characters/Cooperative_Business_Characters/PNG/remote_work.png",
                title: "Global Community",
                description:
                  "Connect with millions of creators and developers worldwide.",
              },
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Fade bottom delay={index * 200}>
                  <Box
                    sx={{
                      backgroundColor: "#0d1117",
                      borderRadius: "16px",
                      textAlign: "center",
                      padding: "30px",
                      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
                      },
                    }}
                  >
                    <img
                      src={feature.img}
                      alt={feature.title}
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        marginBottom: "20px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "primary.main",
                        mb: 2,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#8b949e",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        fontFamily: "'Roboto', sans-serif",
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box
        sx={{
          py: 12,
          backgroundImage: "linear-gradient(to top, #240c36, #161b22)",
        }}
      >
        <Container maxWidth="lg">
          <Fade bottom>
            <Typography
              variant="h4"
              align="center"
              sx={{ fontWeight: "bold", mb: 4, color: "#f8f8f8" }}
            >
              What Our Clients Are Saying
            </Typography>
          </Fade>
          <Grid container spacing={6}>
            {[...Array(3)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Fade bottom delay={index * 200}>
                  <Box
                    sx={{
                      backgroundColor: "#161b22",
                      padding: "30px",
                      borderRadius: "15px",
                      textAlign: "center",
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "290px",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#8b949e",
                        fontSize: "1.1rem",
                        mb: 3,
                        fontFamily: "'Roboto', sans-serif",
                        fontStyle: "italic",
                      }}
                    >
                      {index === 0 &&
                        "Partnering with this team has completely transformed our business. Their cutting-edge technology and personalized service have enabled us to achieve unprecedented growth. We're more agile and efficient, thanks to their solutions!"}
                      {index === 1 &&
                        "Their expertise has been invaluable in optimizing our operations. With their support, we’ve been able to streamline processes, improve communication, and significantly reduce overhead costs. Highly recommend their services to any business looking to innovate!"}
                      {index === 2 &&
                        "The team’s approach to problem-solving is exceptional. They not only understand our challenges but offer practical, scalable solutions that drive measurable results. Our productivity has surged, and we couldn’t be happier with the outcome."}
                    </Typography>
                    {/* <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                        color: "#58a6ff",
                        mb: 1,
                        textTransform: "uppercase",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      Customer Name {index + 1}
                    </Typography> */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "16px",
                            color: "#fff",
                          }}
                        >
                          {index + 1}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          py: 12,

          backgroundImage: "linear-gradient(to top, rgb(28, 54, 83), #240c36)",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ position: "relative", zIndex: 1, overflow: "hidden" }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 4, color: "#f8f8f8" }}
          >
            Our Technology Stack
          </Typography>

          {/* Container for two rows */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              paddingY: "20px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Row 1 */}
            <motion.div
              style={{
                display: "flex",
                gap: "20px",
                flexDirection: "row",
              }}
              animate={{
                x: ["0%", "-100%"], // Row 1 moves left
              }}
              transition={{
                repeat: Infinity,
                duration: 30, // Adjust speed for smooth movement
                ease: "linear",
              }}
            >
              {[...techStack.slice(0, 10), ...techStack.slice(0, 10)].map(
                (tech, index) => (
                  <Box
                    key={index}
                    sx={{
                      minWidth: "150px",
                      backgroundColor: "#1f2329",
                      padding: "20px",
                      borderRadius: "12px",
                      textAlign: "center",
                      boxShadow: isHovered
                        ? "0 18px 36px rgba(0, 0, 0, 0.6)"
                        : "0 9px 18px rgba(255, 255, 255, 0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 18px 36px rgba(0, 0, 0, 0.6)",
                      },
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <Box
                      component="img"
                      src={tech.icon}
                      alt={tech.name}
                      sx={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain",
                        marginBottom: "10px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        fontSize: "0.9rem",
                        color: "main.secondary",
                        mb: 0,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {tech.name}
                    </Typography>
                  </Box>
                )
              )}
            </motion.div>

            {/* Row 2 (opposite movement) */}
            <motion.div
              style={{
                display: "flex",
                gap: "20px",
                flexDirection: "row",
              }}
              animate={{
                x: ["-100%", "-0%"], // Row 2 moves right
              }}
              transition={{
                repeat: Infinity,
                duration: 30, // Adjust speed for smooth movement
                ease: "linear",
              }}
            >
              {[...techStack.slice(10, 21), ...techStack.slice(10, 21)].map(
                (tech, index) => (
                  <Box
                    key={index}
                    sx={{
                      minWidth: "150px",
                      backgroundColor: "#1f2329",
                      padding: "20px",
                      borderRadius: "12px",
                      textAlign: "center",
                      boxShadow: isHovered
                        ? "0 18px 36px rgba(0, 0, 0, 0.6)"
                        : "0 9px 18px rgba(255, 255, 255, 0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 18px 36px rgba(0, 0, 0, 0.6)",
                      },
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <Box
                      component="img"
                      src={tech.icon}
                      alt={tech.name}
                      sx={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain",
                        marginBottom: "10px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        fontSize: "0.9rem",
                        color: "main.secondary",
                        mb: 0,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {tech.name}
                    </Typography>
                  </Box>
                )
              )}
            </motion.div>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          py: 12,
          backgroundImage:
            "linear-gradient(to top,rgb(0, 0, 0), rgb(28, 54, 83))",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 4, color: "#f8f8f8" }}
          >
            Frequently Asked Questions
          </Typography>

          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  marginBottom: 2,
                  backgroundColor: "#1d1d1d",
                  "&:before": { display: "none" }, // Remove default divider line
                  borderRadius: "12px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  sx={{
                    backgroundColor: "#333333",
                    borderRadius: "0px",
                    padding: "12px 20px",
                    "&:hover": {
                      backgroundColor: "#444444",
                      boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "1rem",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#222222",
                    color: "#ccc",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    padding: "20px 20px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "1rem", lineHeight: 1.5 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
