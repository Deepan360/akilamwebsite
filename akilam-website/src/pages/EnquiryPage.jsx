import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import Footer from "../components/Footer";

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
      <Container maxWidth="xl" sx={{ marginTop: 10 }}>
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
            gutterBottom
            sx={{ textAlign: "center" }}
            color="secondary.main"
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
                  228 YISHUN STREET 21
                  <br />
                  #05-482
                  <br />
                  SINGAPORE (760228)
                  <br />
                  <Link
                    href="https://www.google.com/maps?q=228+Yishun+Street+21,+#05-482,+Singapore+(760228)"
                    target="_blank"
                    rel="noopener"
                    sx={{
                      color: "primary.main",
                      textDecoration: "underline",
                    }}
                  >
                    View on Google Maps
                  </Link>
                  <br />2 other entities registered at this address (1 live or
                  active entities)
                </Typography>
                <Typography variant="body1">
                  <strong>Contact Number:</strong>
                  <br />
                  +65-66802065
                  <br />
                  +65-83057419
                </Typography>
                <Typography variant="body1">
                  <strong>Email Id:</strong>
                  <br />
                  sales@civerams.com
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
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.566327591418!2d103.83496547496593!3d1.4354012985510793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da14639382945d%3A0xfbc36db73210dd7!2s228%20Yishun%20Street%2021%2C%20Block%20228%2C%20Singapore%20760228!5e0!3m2!1sen!2sin!4v1735365257606!5m2!1sen!2sin"
                width="100%"
                height="85%"
                style={{ border: "0" }}
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
              gutterBottom
              align="center"
              color="secondary.main"
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
      <Footer />
    </>
  );
};

export default EnquiryPage;
