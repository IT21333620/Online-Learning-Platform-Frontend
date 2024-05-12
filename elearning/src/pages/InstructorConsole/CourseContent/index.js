import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Button, Card, CardActionArea, Grid, TextField, Box } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import ReactPlayer from "react-player";
import Swal from "sweetalert2";
import ContentAdd from "./ContentAdd";
import { useUserName } from "../../../hooks/customHooks";

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
  const [open, setOpen] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [contentTitle, setContentTitle] = useState("");
  const [contentDescription, setContentDescription] = useState("");

  const username = useUserName();

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

  const handleClickOpen = (id) => {
    setOpen(true);
    setUpdateId(id);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Content deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleUpdate = (id) => {
    handleClose();
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "Content of the course will updated for students as well!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Updated!",
          text: "Content updated.",
          icon: "success",
        });
      } else {
        handleOpen();
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
        <Box>
          <Typography variant="body2">Conducted by: {username}</Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "flex-start", mt: 5 }}
      >
        <Typography variant="h4">Course Content</Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <ContentAdd id={data.courseId} />
      </Grid>
      <Grid
        item
        xs={3}
        sx={{ display: "flex", justifyContent: "flex-start", mt: 5 }}
      >
        <Timeline>
          {courseData.map((content, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent color="textSecondary">
                {new Date(content.createdAt).toLocaleDateString("en-GB")}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>{content.title}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
      <Grid
        item
        xs={9}
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
                      <Button
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
                      </Button>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You Can Only update Title and Description of the content
          </DialogContentText>
          <TextField
            value={contentTitle}
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Title"
            fullWidth
            variant="standard"
            onChange={(e) => setContentTitle(e.target.value)}
          />
          <TextField
            value={contentDescription}
            autoFocus
            required
            rows={3}
            margin="dense"
            id="description"
            name="description"
            label="Description"
            fullWidth
            variant="standard"
            onChange={(e) => setContentDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleUpdate(updateId)}>Update</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default CourseConetetn;
