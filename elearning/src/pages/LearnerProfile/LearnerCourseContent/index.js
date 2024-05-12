import {
  Button,
  Card,
  CardActionArea,
  Grid,
  TextField,
  Box,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useUserID } from "../../../hooks/customHooks";
import Swal from "sweetalert2";

const data = {
  id: "663b877583bee14060f7b032",
  courseId: "C001",
  name: "Artificial Inteligance",
  conductorId: "CD001",
  approved: false,
  description: "Learn Artificial Inteligance A to Z",
  createdAt: "2024-05-08T14:08:52.988+00:00",
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
    title: "Part 3",
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

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary Icon={"ic:sharp-expand-more"} {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const CourseConetetn = ({ course, onBack }) => {
  console.log(course);
  const [expanded, setExpanded] = useState("panel1");
  const [unenrolmenrCourseId, setunenrolmentCourseId] = useState("");

  const [completionCourseId, setCompletionCourseId] = useState("");
  const [completionUserId, setCompletionUserId] = useState("");

  useEffect(() => {
    console.log("Unenrolment Status: ", unenrolmenrCourseId);
  }, [unenrolmenrCourseId]);

  const username = useUserID();

  console.log("User ID: ".username);

  function renderMedia(url) {
    const extension = url.split("?")[0].split(".").pop();

    switch (extension) {
      case "mp4":
        return (
          <ReactPlayer
            url={url}
            style={{ position: "absolute", top: 0, left: 0 }}
            width="100%"
            height="100%"
            playing
            controls
          />
        );
      case "jpg":
      case "png":
      case "jpeg":
        return (
          <img
            src={url}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            alt="Media content"
          />
        );
      default:
        return null;
    }
  }

  const handleClickComplete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Complete Course!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCompletionCourseId(id);
        setCompletionUserId(username);
        Swal.fire({
          title: "Successful!",
          text: "Course completed successfully",
          icon: "success",
        });
      }
    });
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClickUnenrol = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Unenroll me!",
    }).then((result) => {
      if (result.isConfirmed) {
        setunenrolmentCourseId(id);
        Swal.fire({
          title: "Unenrolled!",
          text: "User unenrolled successfully",
          icon: "success",
        });
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
        xs={8}
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
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "flex-start", mt: 5 }}
      >
        <Typography variant="h4">Course Content</Typography>
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          onClick={() => handleClickUnenrol(courseData[0].id)}
        >
          Unenroll
        </Button>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{ display: "flex", justifyContent: "flex-start", mt: 5 }}
      ></Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", mt: 5 }}
      >
        <Grid container spacing={2}>
          {courseData.map((content, index) => (
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
              key={index}
            >
              <Accordion
                expanded={expanded === index}
                onChange={handleChange(index)}
                sx={{ width: "100%" }}
              >
                <AccordionSummary
                  aria-controls={`panel${index}d-content`}
                  id={`panel${index}d-header`}
                >
                  <Typography>{content.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", justifyContent: "flex-start" }}
                    >
                      <Typography variant="body2">
                        {content.description}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "90%",
                          paddingTop: "56.25%",
                        }}
                      >
                        {/* 16:9 aspect ratio */}
                        {renderMedia(content.media.url)}
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{ display: "flex", justifyContent: "flex-start" }}
                    >
                      {/* <Button
                        variant="contained"
                        onClick={() => handleClickOpen(content.id)}
                      >
                        update
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(content.id)}
                      >
                        delete
                      </Button> */}

                      {index === courseData.length - 1 && (
                        <Button
                          variant="contained"
                          onClick={() => handleClickComplete(content.courseId)}
                        >
                          Complete Course
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CourseConetetn;
