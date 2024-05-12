import { Icon } from "@iconify/react";
import { CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import CourseContent from "./CourseContent";
import { useUserName } from "../../hooks/customHooks";

const data = [
  {
    id: "663a620baff39f74c16e50f9",
    courseId: "SE3012",
    name: "Distributed Systems",
    conductorId: "dr2321",
    approved: false,
    description: "Detailed course about Distributed Systems and it's nature",
    createdAt: "2024-05-07T17:16:59.016+00:00",
    updatedAt: null,
    url: null,
  },
  {
    id: "663b877583bee14060f7b032",
    courseId: "C001",
    name: "Artificial Inteligance",
    conductorId: "CD001",
    approved: false,
    description: "Learn Artificial Inteligance A to Z with practical examples",
    createdAt: "2024-05-08T14:08:52.988+00:00",
    updatedAt: null,
    url: null,
  },
  {
    id: "663b881f83bee14060f7b033",
    courseId: "C002",
    name: "Machine Learning",
    conductorId: "CD002",
    approved: false,
    description: "Learn Artificial Inteligance & Machine Learning A to Z",
    createdAt: "2024-05-08T14:11:43.932+00:00",
    updatedAt: null,
    url: null,
  },
  {
    id: "663dae641a0930661c35c3ae",
    courseId: "SE3050",
    name: "Deep Learning",
    conductorId: "dr2321",
    approved: true,
    description: "Detailed course about Mechine learning and deep learning",
    createdAt: "2024-05-10T05:19:32.456+00:00",
    updatedAt: null,
    url: "https://firebasestorage.googleapis.com/v0/b/online-learning-platform-a414b.appspot.com/o/30939ab3-eeb8-455d-9e8b-1b21bc73e177.png?alt=media",
  },
];

const InstructorConsole = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const username = useUserName();

  const handleOnCourseClick = (course) => {
    setSelectedCourse(course);
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
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h2">My Courses</Typography>
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
