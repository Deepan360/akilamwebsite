// src/pages/CourseForm.jsx
import { useState, useEffect } from "react";
import {
  Container,
  Box,
  TextField,
  MenuItem,
  Button,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  CircularProgress,
  Avatar,
} from "@mui/material";
import { CloudUpload, Link as LinkIcon, Save } from "@mui/icons-material";
import { API_BASE_URL } from "../config";


export default function CourseForm() {
  const [form, setForm] = useState({
    course: "",
    courseimage: "",
    coursedetails: "",
    courseduration: "",
    coursecategory: "",
    coursecouponid: "",
  });

  const [categories, setCategories] = useState([]);
  const [coupons, setCoupons] = useState([]);

  const [imageMode, setImageMode] = useState("url");
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, couponRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/categories`),
          fetch(`${API_BASE_URL}/api/couponvalues`),
        ]);

        if (!catRes.ok || !couponRes.ok) throw new Error("Failed to fetch");

        setCategories(await catRes.json());
        setCoupons(await couponRes.json());
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({
    ...form,
    [name]:
      name === "coursecategory" || name === "coursecouponid"
        ? value === ""
          ? null
          : Number(value) // always send number or null
        : value,
  });
};

  const handleImageModeChange = (e, newMode) => {
    if (newMode) setImageMode(newMode);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("courseImage", file);

    try {
      setUploading(true);
      const res = await fetch(`${API_BASE_URL}/api/upload`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();

      setForm({ ...form, courseimage: data.imagePath });
    } catch (err) {
      console.error("Upload error:", err);
      alert("❌ Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/course`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("✅ Course inserted successfully!");
        setForm({
          course: "",
          courseimage: "",
          coursedetails: "",
          courseduration: "",
          coursecategory: "",
          coursecouponid: "",
        });
      } else {
        alert("❌ Error inserting course");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("❌ Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box>
      <Container maxWidth="md" sx={{ mt: 5, mb: 5, p: 3 }}>
        <Card elevation={8} sx={{ borderRadius: 4 }}>
          <CardHeader
            title="🎓 Add New Course"
            subheader="Fill in the details below to add a new course"
            sx={{
              background: "linear-gradient(135deg, #030303ff 0%, #0e0e0eff 100%)",
              color: "white",
              textAlign: "center",
              py: 3,
            }}
          />
          <Divider />

          <CardContent sx={{ p: 4 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Course Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Course Name"
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    fullWidth
                    required
                    placeholder="e.g. Full Stack Development"
                  />
                </Grid>

                {/* Image input + Preview */}
                <Grid item xs={12} sm={6}>
                  <ToggleButtonGroup
                    value={imageMode}
                    exclusive
                    onChange={handleImageModeChange}
                    fullWidth
                    sx={{ mb: 1 }}
                  >
                    <ToggleButton value="url">
                      <LinkIcon sx={{ mr: 1 }} /> URL
                    </ToggleButton>
                    <ToggleButton value="upload">
                      <CloudUpload sx={{ mr: 1 }} /> Upload
                    </ToggleButton>
                  </ToggleButtonGroup>

                  {imageMode === "url" ? (
                    <TextField
                      label="Course Image URL"
                      name="courseimage"
                      value={form.courseimage}
                      onChange={handleChange}
                      fullWidth
                      placeholder="https://example.com/image.png"
                    />
                  ) : (
                    <Button
                      variant="outlined"
                      component="label"
                      fullWidth
                      disabled={uploading}
                      startIcon={
                        uploading ? (
                          <CircularProgress size={20} />
                        ) : (
                          <CloudUpload />
                        )
                      }
                    >
                      {uploading ? "Uploading..." : "Choose File"}
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleFileUpload}
                      />
                    </Button>
                  )}

                  {/* Image Preview */}
                  {form.courseimage && (
                    <Box sx={{ mt: 2, textAlign: "center" }}>
                      <Avatar
                        src={form.courseimage}
                        alt="preview"
                        variant="rounded"
                        sx={{ width: 120, height: 80, mx: "auto" }}
                      />
                      <Typography variant="caption" display="block" mt={1}>
                        Preview
                      </Typography>
                    </Box>
                  )}
                </Grid>

                {/* Course Details */}
                <Grid item xs={12}>
                  <TextField
                    label="Course Details"
                    name="coursedetails"
                    value={form.coursedetails}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={3}
                    placeholder="Brief description of the course..."
                  />
                </Grid>

                {/* Duration */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Course Duration"
                    name="courseduration"
                    value={form.courseduration}
                    onChange={handleChange}
                    fullWidth
                    placeholder="e.g. 6 months"
                  />
                </Grid>

                {/* Category Dropdown */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="Category"
                    name="coursecategory"
                    value={form.coursecategory}
                    onChange={handleChange}
                    fullWidth
                    required
                  >
                    {categories.map((cat) => (
                      <MenuItem key={cat.id} value={cat.id}>
                        {cat.category_name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Coupon Dropdown */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="Coupon"
                    name="coursecouponid"
                    value={form.coursecouponid}
                    onChange={handleChange}
                    fullWidth
                  >
                    {coupons.map((c) => (
                      <MenuItem key={c.id} value={c.id}>
                        {c.couponcode} ({c.discount}%)
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Submit */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    startIcon={
                      submitting ? <CircularProgress size={20} /> : <Save />
                    }
                    disabled={submitting}
                    sx={{
                      py: 1.5,
                      fontSize: "1rem",
                      borderRadius: 3,
                      textTransform: "none",
                      background:
                        "linear-gradient(135deg, #000000ff 0%, #020202ff 100%)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #000000ff 0%, #000000ff 100%)",
                        transform: "scale(1.02)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {submitting ? "Saving..." : "🚀 Save Course"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
