import { Icon } from "@iconify/react";
import { CardActionArea, CardActions, useRadioGroup } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import apiDefinitions from "../../api/apiDefinitions";
import { useUserName } from "../../hooks/customHooks";
import AddCourse from "./AddCourse";
import CourseContent from "./CourseContent";

const InstructorConsole = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const username = useUserName();
  const [data, setData] = useState([]);

  const handleOnCourseClick = (course) => {
    setSelectedCourse(course);
  };

  useEffect(() => {
    apiDefinitions
      .getCoursesByInstructor("dr2321")
      .then((res) => {
        console.log(res.data.status);
        if (res.data.status === 200) {
          setData(res.data.data);
          console.log(res.data.data);
        } else {
          setData([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (selectedCourse) {
    return (
      <CourseContent
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
      />
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="body2">Welcome, {username}!</Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h2">My Courses</Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <AddCourse />
      </Grid>
      {data.map((course, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          sx={{ display: "flex", justifyContent: "center" }}
          key={index}
        >
          <Card
            sx={{ width: "100%", height: "100%" }}
            onClick={(e) => handleOnCourseClick(course.courseId)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={
                  course.url ? course.url : "https://source.unsplash.com/random"
                }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {course.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Icon
                icon="material-symbols:circle"
                style={{ fontSize: "13px", marginLeft: 10 }}
                color={course.approved ? "#22bb33" : "#bb2124"}
              />
              {course.approved ? (
                <Typography variant="body2" color="text.secondary">
                  Approved
                </Typography>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Pending
                </Typography>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default InstructorConsole;
