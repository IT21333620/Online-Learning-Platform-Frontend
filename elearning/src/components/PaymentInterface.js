import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const StripeLogo = styled("img")({
  width: 150,
  margin: "auto",
  display: "block",
  marginBottom: (theme) => theme.spacing(2),
});

const PaymentInterface = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="user-id"
                  name="userId"
                  label="User ID"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="course-id"
                  name="courseId"
                  label="Course ID"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="amount"
                  name="amount"
                  label="Amount"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Pay Now
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
