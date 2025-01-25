import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import {
  Create as VisionIcon,
  Lightbulb as MissionIcon,
  TrendingUp as ActionIcon,
  Group as TeamIcon,
  Public as ImpactIcon,
} from "@mui/icons-material";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#161b22",
        color: "#c9d1d9",
        minHeight: "100vh",
      }}
    >
      {/* Section Header */}
      <Box
        sx={{
          textAlign: "center",
          py: 5,
          background: "linear-gradient(135deg, #0d1117, #161b22)",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          About Us
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#8892b0", maxWidth: "700px", mx: "auto" }}
        >
          We strive to create impactful solutions that enhance businesses, solve
          societal challenges, and foster innovation. With an expert team and a
          deep commitment to change, we focus on making a lasting impact across
          the globe. Every initiative we take is aimed at empowering individuals
          and communities, making a significant difference in today's fast-paced
          world. Our approach blends creativity with technology to drive
          sustainable growth.
        </Typography>
      </Box>

      {/* Vision, Mission, and Action Cards */}
      <Box
        sx={{
          padding: "50px 20px",
        }}
      >
        <Grid container spacing={5} justifyContent="center">
          {/* Vision Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 6,
                background: "linear-gradient(135deg, #1c1f26, #252932)",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.6)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", color: "#fff" }}>
                <VisionIcon
                  sx={{ fontSize: 60, color: "#64b5f6", marginBottom: 2 }}
                />
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Our Vision
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.8, color: "#e0e0e0" }}
                >
                  To provide an exceptional platform and solutions that tackle
                  social issues, improve businesses, and enhance existing
                  platforms with innovation and efficiency.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Mission Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 6,
                background: "linear-gradient(135deg, #1c1f26, #252932)",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.6)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", color: "#fff" }}>
                <MissionIcon
                  sx={{ fontSize: 60, color: "#ffa726", marginBottom: 2 }}
                />
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Our Mission
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.8, color: "#e0e0e0" }}
                >
                  To empower and train the local workforce, helping them
                  automate innovative ideas to drive social and economic growth.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Action Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 6,
                background: "linear-gradient(135deg, #1c1f26, #252932)",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.6)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", color: "#fff" }}>
                <ActionIcon
                  sx={{ fontSize: 60, color: "#f06292", marginBottom: 2 }}
                />
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Our Action
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.8, color: "#e0e0e0" }}
                >
                  We engage communities, equip individuals with skills, and
                  solve real-world challenges through cutting-edge technology
                  and sustainable strategies.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* New Section: Innovation and Vision */}
      <Divider sx={{ backgroundColor: "#252932", my: 5 }} />
      <Box
        sx={{
          py: 5,
          px: 3,
          background: "linear-gradient(135deg, #0d1117, #161b22)",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {/* Innovation Section */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 8,
                background: "#1c1f26",
                boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.6)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", p: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                  Innovation at Its Core
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#e0e0e0",
                    maxWidth: "80%",
                    mx: "auto",
                    lineHeight: 1.8,
                  }}
                >
                  Our approach is rooted in creativity and forward-thinking
                  solutions. By leveraging cutting-edge technology and
                  groundbreaking ideas, we aim to create lasting value for our
                  clients and communities. Our focus is on bringing innovation
                  to life and making an impact across various industries.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Vision for the Future */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 8,
                background: "#1c1f26",
                boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.6)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", p: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                  Our Vision for the Future
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#e0e0e0",
                    maxWidth: "80%",
                    mx: "auto",
                    lineHeight: 1.8,
                  }}
                >
                  We envision a world where innovation and sustainability drive
                  positive change. Our future-focused approach aims to bring
                  together people, technology, and ideas to solve the most
                  pressing challenges of our time. Together, we strive to build
                  a better tomorrow for all.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
