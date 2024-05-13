import { Icon } from "@iconify/react";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useUserName } from "../../hooks/customHooks";
import ImageGallery from "react-image-gallery";
import OpenCourse from "./OpenCourse.js";

// CSS
import 'react-image-gallery/styles/css/image-gallery.css';

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

const images = [
  {
    original: "https://firebasestorage.googleapis.com/v0/b/online-learning-platform-a414b.appspot.com/o/30939ab3-eeb8-455d-9e8b-1b21bc73e177.png?alt=media",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://firebasestorage.googleapis.com/v0/b/online-learning-platform-a414b.appspot.com/o/533c78f7-78e0-4734-a847-0bdc70bb4ca5.png?alt=media",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnairametrics.com%2F2022%2F08%2F17%2F6-websites-for-online-teaching-jobs-paying-up-to-35-an-hour%2F&psig=AOvVaw2aoohSjvUo0ZIntvDMKtBQ&ust=1715619015674000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMC0z4HJiIYDFQAAAAAdAAAAABAx",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Home = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const username = useUserName();

  const handleOnCourseClick = (course) => {
    setSelectedCourse(course);
  };

  if (selectedCourse) {
    return (
      <OpenCourse
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
      />
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h2">Courses</Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" ,width: '50%', height: 'auto'}} >
      <ImageGallery items={images} showPlayButton={false} autoPlay={true} showNav={false} showFullscreenButton={false} showThumbnails={false} slideInterval={7000} />
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
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
