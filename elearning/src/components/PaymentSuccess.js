import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
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
              src="/images/success.gif"
              alt="Payment Success"
              style={{
                width: "500px",
                height: "auto",
                margin: "auto",
                display: "block",
              }}
            />
            <Typography variant="h5" align="center" gutterBottom>
              Payment Successful!
            </Typography>
            <Typography variant="body1" align="center">
              Thank you for your payment. You now have access to the course
              content.
            </Typography>
            <Grid container justifyContent="center" style={{ marginTop: 16 }}>
              <Button
                component={Link}
                to="/course"
                variant="contained"
                color="primary"
              >
                Go to Course
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PaymentSuccess;
