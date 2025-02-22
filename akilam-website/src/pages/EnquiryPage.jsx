import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";


const EnquiryPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar visibility
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // State for Snackbar type

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate form fields
  const isFormValid = () => {
    if (!formData.name.trim()) {
      setResponseMessage("Name is required.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setResponseMessage("A valid email is required.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return false;
    }
    if (!formData.message.trim()) {
      setResponseMessage("Message cannot be empty.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    try {
      const response = await fetch(
        "https://cevirams.onrender.com/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setSnackbarSeverity("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
        setSnackbarOpen(true);
      } else {
        setResponseMessage(data.error || "Failed to send message.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.",error);
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  // Handle Snackbar close
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(rgb(26, 36, 54),rgb(25, 40, 71))",
          color: "#fff",
          minHeight: "100vh",
          paddingBottom: 5,
        }}
      >
        <Container maxWidth="xl" sx={{ paddingTop: 10 }}>
          {/* Snackbar for response messages */}
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={snackbarSeverity}
              sx={{ width: "100%" }}
            >
              {responseMessage}
            </Alert>
          </Snackbar>

          {/* Contact Information Section */}
          <Box
            sx={{
              marginBottom: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{ fontWeight: "bold", mb: 4, color: "#f8f8f8" }}
            >
              Contact Information
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  marginRight: { sm: 3 },
                  marginBottom: { xs: 3, sm: 0 },
                }}
              >
                <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
                  <Typography variant="body1" paragraph>
                    <strong>Registered Address:</strong>
                    <br />
                    T-4, THIRD FLOOR, JC TOWER, KARUR BYPASS ROAD,
                    <br />
                    ANNAMALAI NAGAR,
                    <br />
                    TRICHY 620 018.
                  </Typography>
                  <Typography variant="body1">
                    <strong>Contact Number:</strong>
                    <br />
                    +91 94894 25524
                  </Typography>
                  <Typography variant="body1">
                    <strong>Email Id:</strong>
                    <br />
                    akilamtechnology@gmail.com
                  </Typography>
                </Paper>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  height: 300,
                  position: "relative",
                  borderRadius: 5,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7815927990005!2d78.6848529757364!3d10.828019358238562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5bb8e1f64b9%3A0x752cc34f4ae7e7ac!2sJC%20Towers!5e0!3m2!1sen!2sin!4v1740136996706!5m2!1sen!2sin"
                  width={500}
                  height={300}
                  style={{ border: 2, borderRadius: 5 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </Box>
            </Box>
          </Box>

          {/* Enquiry Form Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%", marginBottom: "10px" }}>
              <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: "bold", mb: 4, color: "#f8f8f8" }}
              >
                Enquiry Form
              </Typography>

              <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    sx={{ marginBottom: 2 }}
                    aria-label="Name"
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    sx={{ marginBottom: 2 }}
                    aria-label="Email"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    rows={4}
                    margin="normal"
                    sx={{ marginBottom: 2 }}
                    aria-label="Message"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ width: "100%", padding: 1 }}
                  >
                    Submit
                  </Button>
                </form>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default EnquiryPage;
