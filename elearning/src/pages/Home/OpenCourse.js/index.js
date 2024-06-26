import { Box, Button, Card, CardActionArea, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import apiDefinitions from "../../../api/apiDefinitions";
import toast from "react-hot-toast";
import { useUserID } from "../../../hooks/customHooks";
import Home from '../index'

const data = {
  id: "663a620baff39f74c16e50f9",
  courseId: "SE3012",
  name: "Distributed Systems",
  conductorId: "dr2321",
  approved: false,
  description: "Detailed course about Distributed Systems and it's nature",
  createdAt: "2024-05-07T17:16:59.016+00:00",
  updatedAt: null,
  url: "https://firebasestorage.googleapis.com/v0/b/online-learning-platform-a414b.appspot.com/o/30939ab3-eeb8-455d-9e8b-1b21bc73e177.png?alt=media",
};

const courseData = [
  {
    id: "663cfdb3d88f0333b9f6a229",
    courseId: "SE3012",
    title: "Part 1",
    description: "Introduction to Distributed Systems in 2 hours",
    media: {
      id: "663cfdb2d88f0333b9f6a228",
      url: "https://firebasestorage.googleapis.com/v0/b/online-learning-platform-a414b.appspot.com/o/419328cc-60d5-4cf5-8a1f-5097dedb40a2.mp4?alt=media",
      createdAt: "2024-05-09T16:45:36.588+00:00",
      updatedAt: null,
    },
    createdAt: "2024-05-09T16:45:39.150+00:00",
    updatedAt: "2024-05-10T02:24:16.067+00:00",
  },
  {
    id: "663cfde1d88f0333b9f6a22b",
    courseId: "SE3012",
    title: "Part 2",
    description: "Web socket and message passing",
    media: {
      id: "663cfde1d88f0333b9f6a22a",
      url: "https://firebasestorage.googleapis.com/v0/b/online-learning-platform-a414b.appspot.com/o/e5c64e54-54b1-4ef3-a054-d5c8953c670e.png?alt=media",
      createdAt: "2024-05-09T16:46:24.761+00:00",
      updatedAt: null,
    },
    createdAt: "2024-05-09T16:46:25.670+00:00",
    updatedAt: null,
  },
  {
    id: "663d6885f7ee5f0df75d3e4c",
    courseId: "SE3012",
    title: "Part 2",
    description: "Web socket and message passing",
    media: {
      id: "663d6885f7ee5f0df75d3e4b",
      url: "https://firebasestorage.googleapis.com/v0/b/online-learning-platform-a414b.appspot.com/o/b990758f-2aea-4dac-8490-3b4022acd8c8.jpg?alt=media",
      createdAt: "2024-05-10T00:21:22.636+00:00",
      updatedAt: null,
    },
    createdAt: "2024-05-10T00:21:25.512+00:00",
    updatedAt: null,
  },
];

const OpenCourse = ({ course, onBack }) => {
  const [data, setData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [enrollSuceess, setEnrollSuccess] = useState(false);

  const courseId = course;
  const userID = useUserID() || "";
  console.log(courseId);
  console.log(userID);

  useEffect(() => {
    if (courseId !== "") {
      apiDefinitions
        .getCourseById(courseId)
        .then((res) => {
          if (res.data.status === 200) {
            setData(res.data.data);
            console.log(res.data.data);
          } else {
            throw new Error(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(`Error: ${err.message}`);
        });
    }
  }, [courseId]);

  useEffect(() => {
    if (courseId !== "") {
      apiDefinitions
        .getCourseContentById(courseId)
        .then((res) => {
          if (res.data.status === 200) {
            setCourseData(res.data.data);
            console.log(res.data.data);
          } else {
            throw new Error(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(`Error: ${err.message}`);
        });
    }
  }, [courseId]);

  if (enrollSuceess) {
    return <Home />;
  }

  const handleEnrolmentAdd = () => {
    Swal.fire({
      title: "Are you sure you want enroll this course?",
      showCancelButton: true,
      confirmButtonText: "Enroll",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "swal2-popup",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const payload = {
          userId: userID,
          courseId: courseId,
          status: false,
        };

        console.log("Payload:", payload);

        apiDefinitions
          .postEnrollToCourse(payload)
          .then((res) => {
            if (res.data.status === 201) {
              toast.success("Successfully Enrolled!");
              setEnrollSuccess(true);
            } else {
              throw new Error(res.data.message);
            }
          })
          .catch((err) => {
            console.log(err);
            toast.error( `Error Enrolling to Course! ${err.response.data.message}`);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled Enrolment", "", "info");
      }
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Button onClick={onBack} variant="contained">
          Back
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h3">{data.name}</Typography>
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Card sx={{ width: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={data.url ? data.url : "https://source.unsplash.com/random"}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Box>
          <Typography variant="body1">{data.description}</Typography>
        </Box>
        <Box></Box>
      </Grid>

      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Typography variant="h4">Course Content</Typography>
        <Typography> </Typography>
        <Grid container spacing={2}>
          {courseData.map((content, index) => (
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              key={index}
            >
              <Typography>{content.title}</Typography>
              <Typography variant="body2">{content.description}</Typography>
              <Typography> </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="success"
          onClick={handleEnrolmentAdd}
        >
          Enroll
        </Button>
      </Grid>
    </Grid>
  );
};

export default OpenCourse;
