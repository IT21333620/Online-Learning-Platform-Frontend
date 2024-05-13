import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import apiDefinitions from "../api/apiDefinitions";

const StripeLogo = styled("img")({
  width: 150,
  margin: "auto",
  display: "block",
  marginBottom: (theme) => theme.spacing(2),
});

const PaymentInterface = () => {
  const [formData, setFormData] = useState({
    stripeToken: "",
    userId: "",
    courseId: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiDefinitions.createPayment(formData);
      if (!response.ok) {
        throw new Error("Failed to make payment");
      }
      navigate("/payment-success");
    } catch (error) {
      console.error("Error making payment:", error);
      navigate("/payment-cancel");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Card style={{ maxWidth: "500px" }}>
        <CardContent>
          <Grid container sx={{ mb: 1 }}>
            <Grid item xs={12}>
              <StripeLogo src="/images/stripe.png" alt="Stripe Logo" />
            </Grid>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="stripe-token"
                  name="stripeToken"
                  label="Stripe Token"
                  variant="outlined"
                  value={formData.stripeToken}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="user-id"
                  name="userId"
                  label="User ID"
                  variant="outlined"
                  value={formData.userId}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="course-id"
                  name="courseId"
                  label="Course ID"
                  variant="outlined"
                  value={formData.courseId}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="amount"
                  name="amount"
                  label="Amount"
                  variant="outlined"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : "Pay Now"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PaymentInterface;
