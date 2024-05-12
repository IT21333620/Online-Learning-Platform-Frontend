import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const PaymentCancel = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <img
              src="/images/cancel.png"
              alt="Payment Success"
              style={{
                width: "150px",
                height: "auto",
                margin: "auto",
                display: "block",
                marginBottom: "50px",
              }}
            />
            <Typography variant="h5" align="center" gutterBottom>
              Payment Canceled!
            </Typography>
            <Typography variant="body1" align="center">
              Something went wrong. Check your payment details and try again.
            </Typography>
            <Grid container justifyContent="center" style={{ marginTop: 16 }}>
              <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
              >
                Go to Home
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PaymentCancel;
