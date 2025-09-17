// MietRegistration.jsx
import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Container,
  Button,
  Snackbar,
  Alert,
  Paper,
  Divider,
} from "@mui/material";
import { API_BASE_URL } from "../config";

const defaultCourse = {
  id: 40,
  title: "AI One Day Workshop",
  description:
    "Learn AI basics, explore top tools, and build your first AI project.",
  duration: "1 Day",
  fee: 999,
};

const MietRegistration = () => {
  const [selectedCourse] = useState(defaultCourse);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [finalFee, setFinalFee] = useState(defaultCourse.fee);
  const [popoverMessage, setPopoverMessage] = useState("");
  const [popoverType, setPopoverType] = useState("error");

  const commonTextFieldProps = {
    fullWidth: true,
    variant: "outlined",
    InputLabelProps: { shrink: true },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyCoupon = async () => {
    if (!couponCode) return;
    try {
     const res = await fetch(`${API_BASE_URL}/api/validate-coupon`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ couponCode, courseFee: selectedCourse.fee }),
     });

      const data = await res.json();
      if (data.valid) {
        setFinalFee(data.finalAmount);
        setPopoverMessage(data.message || "Coupon applied!");
        setPopoverType("success");
      } else {
        setFinalFee(selectedCourse.fee);
        setPopoverMessage(data.message || "Invalid coupon!");
        setPopoverType("error");
      }
    } catch (err) {
      console.error(err);
      setPopoverMessage("Error validating coupon");
      setPopoverType("error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.mobile ||
      !formData.dob
    ) {
      setPopoverMessage("All fields are required!");
      setPopoverType("error");
      setLoading(false);
      return;
    }

    try {
      const payable = finalFee ?? selectedCourse.fee;

      // Register user
      const registerRes = await fetch(`${API_BASE_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          courseId: selectedCourse.id,
          couponCode: couponCode || null,
        }),
      });
      const registerData = await registerRes.json();

      if (!registerData.success)
        throw new Error(registerData.message || "Registration failed");

      if (payable === 0) {
        setPopoverMessage("You are successfully registered for FREE!");
        setPopoverType("success");
        setFormData({
          firstName: "",
          lastName: "",
          dob: "",
          mobile: "",
          email: "",
          message: "",
        });
        setCouponCode("");
        setFinalFee(selectedCourse.fee);
        setLoading(false);
        return;
      }

      // Create Razorpay order
      const orderRes = await fetch(`${API_BASE_URL}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registrationId: registerData.registrationId }),
      });
      const orderData = await orderRes.json();
      if (!orderData.success)
        throw new Error(orderData.message || "Order creation failed");

      // Razorpay checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Akilam Academy",
        description: selectedCourse.title,
        image: "/AkilamTechmidlogo.png",
        order_id: orderData.orderId,
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.mobile,
        },
        notes: {
          registrationId: registerData.registrationId,
          course: selectedCourse.title,
        },
        theme: { color: "#ae3a94" },
        handler: async function (response) {
          const verifyRes = await fetch(`${API_BASE_URL}/api/verify-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const verifyData = await verifyRes.json();
          setPopoverMessage(
            verifyData.success ? "Payment Successful!" : verifyData.message
          );
          setPopoverType(verifyData.success ? "success" : "error");
        },
        modal: {
          ondismiss: () => {
            setPopoverMessage("Payment popup closed.");
            setPopoverType("warning");
          },
        },
      };
      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      setPopoverMessage(err.message || "Payment failed");
      setPopoverType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0f172a, #3b0764, #9333ea)",
        minHeight: "100vh",
        py: 8,
      }}
    >
      <Container maxWidth="sm">
        <Paper sx={{ p: 4, borderRadius: 3 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#ae3a94", mb: 1 }}
          >
            Register & Pay
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ mb: 3 }}>
            {selectedCourse.title}
          </Typography>
          <Box
            sx={{
              mb: 3,
              p: 2,
              borderRadius: 2,
              border: "1px solid #ddd",
              background: "#fafafa",
            }}
          >
            <Typography>{selectedCourse.description}</Typography>
            <Divider sx={{ my: 1 }} />
            <Typography>
              <strong>Duration:</strong> {selectedCourse.duration}
            </Typography>
            <Typography>
              <strong>Original Fee:</strong> ₹{selectedCourse.fee}
            </Typography>
            <Typography sx={{ mt: 1, color: "#ae3a94", fontWeight: "bold" }}>
              Payable: ₹{finalFee}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
            <TextField
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              {...commonTextFieldProps}
            />
            <Button
              onClick={handleApplyCoupon}
              variant="contained"
              disabled={!couponCode}
              sx={{
                backgroundColor: "#ae3a94",
                "&:hover": { backgroundColor: "#8d2c77" },
              }}
            >
              Apply
            </Button>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "grid", gap: 2 }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    firstName: e.target.value.replace(/[^a-zA-Z ]/g, ""),
                  }))
                }
                required
                {...commonTextFieldProps}
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    lastName: e.target.value.replace(/[^a-zA-Z ]/g, ""),
                  }))
                }
                required
                {...commonTextFieldProps}
              />
            </Box>
            <TextField
              label="Date of Birth"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              {...commonTextFieldProps}
              inputProps={{ max: new Date().toISOString().split("T")[0] }}
            />
            <TextField
              label="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={(e) =>
                setFormData((p) => ({
                  ...p,
                  mobile: e.target.value.replace(/[^0-9]/g, "").slice(0, 10),
                }))
              }
              required
              {...commonTextFieldProps}
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              {...commonTextFieldProps}
            />
            <TextField
              label="Message (Optional)"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={3}
              {...commonTextFieldProps}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                backgroundColor: "#ae3a94",
                py: 1.5,
                "&:hover": { backgroundColor: "#8d2c77" },
              }}
            >
              {loading ? "Processing..." : "Pay & Register"}
            </Button>
          </Box>
        </Paper>
      </Container>

      <Snackbar
        open={!!popoverMessage}
        autoHideDuration={3000}
        onClose={() => setPopoverMessage("")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={popoverType}
          onClose={() => setPopoverMessage("")}
          variant="filled"
        >
          {popoverMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default MietRegistration;
