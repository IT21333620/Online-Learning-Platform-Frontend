import {
  Avatar,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

import React from "react";

const ProgressCriteria = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CardHeader
              title={
                <Typography variant="h5" fontWeight="bold">
                  Progress Criteria
                </Typography>
              }
            ></CardHeader>
            <Grid container spacing={6}>
              <Grid item xs={4}>
                <Card>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe">:)</Avatar>}
                    title="Total Student Enrolments"
                    subheader="A flexbox with avatar, title, subtitle and actionA flexbox with avatar, title, subtitle and actionA flexbox with avatar, title, subtitle and action"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      paddingLeft: "16px", // Adjust padding as needed
                    }}
                  />
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe">:)</Avatar>}
                    title="CardHeader Example"
                    subheader="A flexbox with avatar, title, subtitle and action"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      paddingLeft: "16px", // Adjust padding as needed
                    }}
                  />
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe">:)</Avatar>}
                    title="CardHeader Example"
                    subheader="A flexbox with avatar, title, subtitle and action"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      paddingLeft: "16px", // Adjust padding as needed
                    }}
                  />
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProgressCriteria;
