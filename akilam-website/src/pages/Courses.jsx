/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
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
  TextField,
  Snackbar,
  Alert,
  Skeleton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";
import { CircularProgress } from "@mui/material";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [popoverMessage, setPopoverMessage] = useState("");
  const [popoverType, setPopoverType] = useState("error");

  // coupon/payment states
  const [couponCode, setCouponCode] = useState("");
  const [finalFee, setFinalFee] = useState(null);

  const navigate = useNavigate();

  // --- Helpers ---
const normalizeCourse = (item, baseUrl = `${window.location.origin}`) => {
  let img = item?.imageUrl ?? item?.courseimage ?? item?.image ?? "";

  // Ensure full URL if it's just a path
  if (img && !img.startsWith("http")) {
    img = `${baseUrl}${img.startsWith("/") ? "" : "/"}${img}`;
  }

  return {
    id: item?.id ?? item?.courseid ?? item?._id ?? null,
    title: item?.title ?? item?.course ?? item?.name ?? "Untitled",
    imageUrl: img, // 👈 always normalized here
    description: item?.description ?? item?.coursedetails ?? "",
    duration: item?.duration ?? item?.courseduration ?? item?.time ?? "—",
    fee: item?.coursefee ?? 0,
    category:
      item?.category ?? item?.coursecategory ?? item?.categoryname ?? "General",
  };
};


  const groupByCategory = useCallback((flat) => {
    const byCat = new Map();
    flat.forEach((raw) => {
      const c = normalizeCourse(raw);
      if (!byCat.has(c.category)) {
        byCat.set(c.category, { category: c.category, courses: [] });
      }
      byCat.get(c.category).courses.push(c);
    });
    return Array.from(byCat.values());
  }, []);
  const commonTextFieldProps = {
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      sx: {
        color: "#aaa",
        "&.Mui-focused": { color: "primary.main" },
        fontSize: "0.9rem",
        fontWeight: 500,
      },
    },
    InputProps: {
      sx: {
        color: "#fff",
        fontSize: 14,
        borderRadius: 2,
        background: "#1B1B1B",
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#333" },
        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#555" },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.main",
        },
      },
    },
  };

  // Fetch courses
  useEffect(() => {
    setLoading(true); // Start loading
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/courses`);
        const data = await response.json();

        if (!Array.isArray(data)) {
          console.warn("Unexpected API shape. Expected an array.", data);
          setCourses([]);
          return;
        }

        const looksGrouped =
          data.length > 0 &&
          data.every(
            (x) =>
              typeof x === "object" &&
              "category" in x &&
              Array.isArray(x.courses)
          );

        if (looksGrouped) {
          const normalized = data.map((cat) => ({
            category: cat.category ?? "General",
            courses: Array.isArray(cat.courses)
              ? cat.courses.map(normalizeCourse)
              : [],
          }));
          setCourses(normalized);
        } else {
          const grouped = groupByCategory(data);
          setCourses(grouped);
        }
      } catch (err) {
        console.error("Failed to fetch courses:", err);
        setCourses([]);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchCourses();
  }, [groupByCategory]);

  const handleOpenModal = (course) => {
    setSelectedCourse(course ?? null);
    setFinalFee(null);
    setCouponCode("");
    setOpenModal(true);
  };

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  // apply coupon
  const handleApplyCoupon = async () => {
    if (!couponCode || !selectedCourse) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/validate-coupon`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          couponCode,
          courseFee: selectedCourse.fee,
        }),
      });
      const data = await res.json();

      if (data.valid) {
        setFinalFee(data.finalAmount);
        setPopoverMessage(data.message);
        setPopoverType("success");
      } else {
        setFinalFee(null);
        setPopoverMessage(data.message);
        setPopoverType("error");
      }
    } catch (err) {
      console.error(err);
      setPopoverMessage("Error validating coupon");
      setPopoverType("error");
    }
  };

  // handle payment + registration
  // handle payment + registration
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    // 1️⃣ Frontend validation
    if (!selectedCourse || !selectedCourse.id) {
      setPopoverMessage("⚠️ Please select a valid course.");
      setPopoverType("error");
      return;
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.mobile ||
      !formData.dob
    ) {
      setPopoverMessage("⚠️ All required fields must be filled.");
      setPopoverType("error");
      return;
    }

    // 2️⃣ Calculate fee (from backend logic or coupon applied)
    const payable = finalFee ?? selectedCourse.fee;

    // 3️⃣ Step 1: Register user
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
    console.log("RegisterData:", registerData);

    if (!registerData.success || !registerData.registrationId) {
      throw new Error(registerData.message || "Registration failed");
    }

    const { registrationId, coursefee } = registerData;

    // ✅ 4️⃣ Skip payment if free course
    if (Number(coursefee) === 0 || Number(payable) === 0) {
      setPopoverMessage("🎉 You’re successfully registered for FREE!");
      setPopoverType("success");
      setOpenModal(false);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        dob: "",
        mobile: "",
        email: "",
        message: "",
      });

      return; // ⛔ Exit early, no Razorpay
    }

    // 5️⃣ Step 2: Create Razorpay order
    const orderRes = await fetch(`${API_BASE_URL}/api/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ registrationId }),
    });

    const orderData = await orderRes.json();
    console.log("OrderData:", orderData);

    if (!orderData.success || !orderData.orderId) {
      throw new Error(orderData.message || "Order creation failed");
    }

    // 6️⃣ Razorpay options
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Akilam Academy",
      description: selectedCourse?.title,
      image: "/akilam-website/public/AkilamTechmidlogo.png",
      order_id: orderData.orderId,
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.mobile,
      },
      notes: { registrationId, course: selectedCourse?.title },
      theme: { color: "#ae3a94" },

      handler: async function (response) {
        try {
          const verifyRes = await fetch(`${API_BASE_URL}/api/verify-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const result = await verifyRes.json();

          if (result.success) {
            setPopoverMessage("🎉 You’re successfully registered!");
            setPopoverType("success");
            setOpenModal(false);

            setFormData({
              firstName: "",
              lastName: "",
              dob: "",
              mobile: "",
              email: "",
              message: "",
            });
          } else {
            setPopoverMessage(result.message || "Payment verification failed.");
            setPopoverType("error");
          }
        } catch (err) {
          console.error("Verification error:", err);
          setPopoverMessage("Something went wrong in verification.");
          setPopoverType("error");
        }
      },

      modal: {
        ondismiss: () => {
          setPopoverMessage("Payment popup closed.");
          setPopoverType("warning");
        },
      },
    };

    // 7️⃣ Open Razorpay checkout
    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Order Error:", error);
    setPopoverMessage(error.message || "Payment failed. Try again.");
    setPopoverType("error");
  } finally {
    setLoading(false);
  }
};

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCourse(null);
  };

  return (
    <Box sx={{ background: "#1b2c50", color: "#c9d1d9", minHeight: "100vh" }}>
      <Container
        sx={{ paddingTop: "80px", paddingBottom: "80px", color: "#fff" }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 4, color: "#f8f8f8" }}
        >
          Explore Our Courses
        </Typography>

        {/* Loader → Courses → No Courses */}
        {loading ? (
          <Grid container spacing={3}>
            {[...Array(6)].map((_, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    background: "#1E1E1E",
                    borderRadius: "12px",
                    p: 2,
                    height: "100%",
                  }}
                >
                  {/* Image Placeholder */}
                  <Skeleton
                    variant="rectangular"
                    height={200}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      mb: 2,
                    }}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    {/* Title */}
                    <Skeleton
                      variant="text"
                      width="70%"
                      height={28}
                      sx={{ bgcolor: "rgba(255,255,255,0.15)", mb: 1 }}
                    />

                    {/* Description */}
                    <Skeleton
                      variant="text"
                      width="100%"
                      height={20}
                      sx={{ bgcolor: "rgba(255,255,255,0.08)", mb: 1 }}
                    />
                    <Skeleton
                      variant="text"
                      width="90%"
                      height={20}
                      sx={{ bgcolor: "rgba(255,255,255,0.08)", mb: 2 }}
                    />

                    {/* Duration & Fee */}
                    <Skeleton
                      variant="text"
                      width="50%"
                      height={20}
                      sx={{ bgcolor: "rgba(255,255,255,0.1)", mb: 1 }}
                    />
                    <Skeleton
                      variant="text"
                      width="40%"
                      height={20}
                      sx={{ bgcolor: "rgba(255,255,255,0.1)", mb: 2 }}
                    />
                  </CardContent>

                  {/* Button Placeholder */}
                  <Skeleton
                    variant="rectangular"
                    height={45}
                    sx={{
                      bgcolor: "rgba(174,58,148,0.3)",
                      borderRadius: "0px 0px 12px 12px",
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : courses.length > 0 ? (
          courses.map((category, index) => (
            <div key={category?.category ?? index}>
              <Typography
                variant="h5"
                sx={{ mt: 3, mb: 3, color: "#fff", fontWeight: "bold" }}
              >
                {category?.category ?? "General"}
              </Typography>
              <Grid container spacing={3}>
                {(category?.courses ?? []).map((course, idx) => (
                  <Grid
                    item
                    key={`${course?.title ?? "untitled"}-${idx}`}
                    xs={12}
                    sm={6}
                    md={4}
                  >
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
                          boxShadow: "0px 4px 20px #ae3a94",
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        sx={{ objectFit: "contain", background: "#fff" }}
                        image={course?.imageUrl || ""}
                        alt={course?.title || "Course image"}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "bold", color: "primary.main" }}
                        >
                          {course?.title ?? "Untitled"}
                        </Typography>
                        {course?.description && (
                          <Typography
                            variant="body2"
                            sx={{ opacity: 0.8, mb: 1 }}
                          >
                            {course.description}
                          </Typography>
                        )}
                        <Typography variant="body2">
                          <strong>Duration:</strong> {course?.duration ?? "—"}
                        </Typography>
                        <Typography variant="body2">
                          <strong>Fee:</strong> ₹{course?.fee ?? "—"}
                        </Typography>
                      </CardContent>
                      <Button
                        onClick={() => handleOpenModal(course)}
                        sx={{
                          width: "100%",
                          backgroundColor: "primary.main",
                          color: "#fff",
                          borderRadius: "0px 0px 12px 12px",
                          fontWeight: "bold",
                          "&:hover": { backgroundColor: "secondary.main" },
                        }}
                      >
                        Register
                      </Button>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          ))
        ) : (
          <Typography align="center" sx={{ opacity: 0.9 }}>
            No courses available.
          </Typography>
        )}

        {/* Registration Modal */}
        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              background: "#121212",
              borderRadius: 3,
              overflow: "hidden",
            },
          }}
        >
          {/* Header */}
          <Box sx={{ background: "#1E1E1E", p: 3 }}>
            <Typography
              variant="h5"
              sx={{ color: "#F8F8F8", fontWeight: "bold" }}
            >
              Register & Pay
            </Typography>
            {selectedCourse && (
              <Typography variant="subtitle1" sx={{ color: "#aaa", mt: 0.5 }}>
                {selectedCourse.title}
              </Typography>
            )}
          </Box>

          {/* Content */}
          <DialogContent sx={{ p: 3, background: "#121212" }}>
            {/* Course Summary */}
            {selectedCourse && (
              <Box
                sx={{
                  mb: 3,
                  p: 2,
                  background: "#1B1B1B",
                  borderRadius: 2,
                  border: "1px solid #333",
                }}
              >
                <Typography variant="body1" sx={{ color: "#fff", mb: 1 }}>
                  {selectedCourse.description}
                </Typography>
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                  <strong>Duration:</strong> {selectedCourse.duration}
                </Typography>
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                  <strong>Original Fee:</strong> ₹{selectedCourse.fee}
                </Typography>
                {finalFee !== null && (
                  <Typography
                    variant="h6"
                    sx={{ mt: 1, color: "primary.main", fontWeight: "bold" }}
                  >
                    Payable: ₹{finalFee}
                  </Typography>
                )}
              </Box>
            )}

            {/* Coupon Field */}
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
                sx={{
                  backgroundColor: "primary.main",
                  fontWeight: "bold",
                  px: 3,
                  "&:hover": { backgroundColor: "#c450b3" },
                }}
              >
                Apply
              </Button>
            </Box>

            {/* Registration Form */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
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
                InputLabelProps={{
                  shrink: true,
                  sx: {
                    color: "#aaa",
                    "&.Mui-focused": { color: "primary.main" },
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  },
                }}
                inputProps={{
                  placeholder: "",
                }}
              />

              <TextField
                label="Mobile"
                name="mobile"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    mobile: e.target.value.replace(/[^0-9]/g, ""),
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

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  fontWeight: "bold",
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: 16,
                  "&:hover": { backgroundColor: "#c450b3" },
                }}
                disabled={loading}
              >
                {loading ? "Processing Payment..." : "Pay & Register"}
              </Button>
            </Box>
          </DialogContent>

          {/* Footer */}
          <DialogActions sx={{ background: "#1E1E1E", px: 3, pb: 2 }}>
            <Button onClick={handleCloseModal} sx={{ color: "#aaa" }}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={!!popoverMessage}
          autoHideDuration={3000}
          onClose={() => setPopoverMessage("")}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setPopoverMessage("")}
            severity={popoverType}
            variant="filled"
          >
            {popoverMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Courses;
