// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
} from "@mui/material";

const teamMembers = [
  {
    name: "Gnanavel Durairaj",
    role: "Chief Executive Officer/Director",
    image: "public/team/dg.jpg",
    bio: "A dynamic leader with a vision for innovation and growth.",
    category: "Leadership & Management Team",
  },
  {
    name: "Jai Rangachari",
    role: "Chief Operating Officer/Director",
    image: "/team/jai.png",
    bio: "Expert in operations and strategic planning.",
    category: "Leadership & Management Team",
  },

  {
    name: "Abdul Basheer",
    role: "Senior Developer",
    image: "/team/dummy.png",
    bio: "Expert in software development and AI-driven solutions.",
    category: "Technology",
  },
  {
    name: "Raveendar",
    role: "Senior Developer",
    image: "/team/dummy.png",
    bio: "Expert in software development and AI-driven solutions.",
    category: "Technology",
  },
];

const groupedMembers = teamMembers.reduce((acc, member) => {
  if (!acc[member.category]) {
    acc[member.category] = [];
  }
  acc[member.category].push(member);
  return acc;
}, {});

const TeamPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to bottom,rgb(87, 44, 97),rgb(87, 44, 97))",
        padding: "80px 40px",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 4, color: "#f8f8f8" }}
        >
          Meet Our Team
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          A group of dedicated professionals committed to excellence.
        </Typography>

        {Object.keys(groupedMembers).map((category, index) => (
          <Box key={index} sx={{ mt: 6 }}>
            <Divider
              sx={{ backgroundColor: "#fff", marginBottom: 3, height: 2 }}
            />
            <Typography
              variant="h4"
              align="center"
              sx={{ fontWeight: "bold", mb: 4, color: "#f8f8f8" }}
            >
              {category}
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {groupedMembers[category].map((member, idx) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={idx}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Card
                    sx={{
                      width: 300,
                      height: 430,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: 4,
                      boxShadow: 8,
                      transition: "transform 0.3s ease-in-out",
                      backgroundColor: "#ffffff",
                      color: "#333",
                      "&:hover": { transform: "scale(1.08)" },
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        objectFit: "cover",
                        width: "300px",
                        height: "300px",
                        objectPosition: "top center",
                      }}
                      image={member.image}
                      alt={member.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" align="center" fontWeight={700}>
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                      >
                        {member.role}
                      </Typography>
                      <Typography
                        variant="body2"
                        align="center"
                        mt={1}
                        sx={{ fontStyle: "italic" }}
                      >
                        {member.bio}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default TeamPage;
