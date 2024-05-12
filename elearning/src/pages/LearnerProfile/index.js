import { Icon } from "@iconify/react";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import CourseContent from "./LearnerCourseContent";
import { useUserName } from "../../hooks/customHooks";

const data = [
  {
    id: "663f1621e00e5a1596d7ac12",
    userId: "user01@7",
    courseId: "C002",
    course: {
      data: {
        id: "663b877583bee14060f7b032",
        courseId: "C001",
        name: "Artificial Inteligance",
        conductorId: "CD001",
        approved: false,
        description: "Learn Artificial Inteligance A to Z",
        createdAt: "2024-05-08T14:08:52.988+00:00",
        updatedAt: null,
        url: null,
      },
      message: "Course found",
      status: 200,
    },
    createdAt: "2024-05-11T06:54:24.466+00:00",
    updatedAt: null,
    status: false,
  },
  {
    id: "663db14bf9a86a0d80a95ea5",
    userId: "user01@7",
    courseId: "C001",
    course: {
      data: {
        id: "663b877583bee14060f7b032",
        courseId: "C001",
        name: "Artificial Inteligance",
        conductorId: "CD001",
        approved: false,
        description: "Learn Artificial Inteligance A to Z",
        createdAt: "2024-05-08T14:08:52.988+00:00",
        updatedAt: null,
      },
      message: "Course found",
      status: 200,
    },
    createdAt: "2024-05-10T05:31:55.329+00:00",
    updatedAt: "2024-05-10T06:58:32.905+00:00",
    status: true,
  },
];

const LearnerProfile = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const username = useUserName();

  const handleOnCourseClick = (course) => {
    setSelectedCourse(course);
    console.log(course);
  };

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
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h4" fontWeight={"bold"}>
          ENROLLED COURSES
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      ></Grid>
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
            sx={{ maxWidth: 345 }}
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
                  {course.course.data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.course.data.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Icon
                icon="material-symbols:circle"
                style={{ fontSize: "13px", marginLeft: 10 }}
                color={course.status === true ? "#22bb33" : "#bb2124"}
              />
              {course.status === true ? (
                <Typography variant="body2" color="text.secondary">
                  Completed
                </Typography>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Incomplete
                </Typography>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default LearnerProfile;
