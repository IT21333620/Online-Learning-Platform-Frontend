import {
  Avatar,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Icon,
  Divider,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import apiDefinitions from "../../api/apiDefinitions";
import React, { useEffect, useState } from "react";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import PersonIcon from "@mui/icons-material/Person";
import LocalFireDepartmentTwoToneIcon from "@mui/icons-material/LocalFireDepartmentTwoTone";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LinearProgress from "@mui/material/LinearProgress";

function CustomTabPanel(props) {
  const { children, value, index, studentsData, ...other } = props;

  if (!studentsData) {
    return null; // or any fallback UI if appropriate
  }

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  {value === 0 ? (
                    <TableCell>Student Name</TableCell>
                  ) : (
                    <TableCell>Course Name</TableCell>
                  )}
                  <TableCell>Progress</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studentsData.map((student, index) => (
                  <TableRow key={student.name}>
                    <TableCell>{index + 1}</TableCell>{" "}
                    {/* Add the row number */}
                    <TableCell>{student.name}</TableCell>
                    <TableCell>
                      <LinearProgress
                        variant="determinate"
                        value={
                          (student.true / (student.true + student.false)) * 100
                        }
                        sx={{
                          height: 10, // Adjust the height to increase thickness
                          borderRadius: 5, // Optional: Add borderRadius for rounded edges
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProgressCriteria = () => {
  const [mockProgressData, setMockProgressData] = useState([]);
  const [getCourseCountMockData, setGetCourseCountMockData] = useState([]);
  const [getUserCountMockData, setGetUserCountMockData] = useState([]);
  const [trueProgressCount, setTrueProgressCount] = useState(0);
  const [totalProgressCount, setTotalProgressCount] = useState(0);
  let coursePercentage = NaN;
  let roundedPercentage = 0.0;

  useEffect(() => {
    fetchAllProgress();
    fetchAllProgressByCourse();
    fetchAllProgressByStudent();
  }, []);

  const fetchAllProgress = async () => {
    try {
      const response = await apiDefinitions.getAllProgress();
      console.log(response);
      if (response.data.status === 200) {
        setMockProgressData(response.data);
        setTrueProgressCount(response.data.data.trueCount);
        setTotalProgressCount(response.data.data.totalCount);
      }
    } catch (error) {
      console.error("Error fetching progress:", error);
    }
  };

  const fetchAllProgressByCourse = async () => {
    try {
      const response = await apiDefinitions.getAllProgressByCourse();
      console.log(response);
      if (response.data.status === 200) {
        setGetCourseCountMockData(response.data);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const fetchAllProgressByStudent = async () => {
    try {
      const response = await apiDefinitions.getAllProgressByStudent();
      console.log(response);
      if (response.data.status === 200) {
        console.log("shittttttttttt", response.data.data);
        setGetUserCountMockData(response.data);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const courseData = getCourseCountMockData.data;

  const uniqueCourseCount = courseData ? Object.keys(courseData).length : 0;

  // const getCourseCountData = getCourseCountMockData.data;

  let trueCount = 0;
  let falseCount = 0;

  if (courseData !== undefined) {
    Object.values(courseData).forEach((course) => {
      trueCount += course.true || 0;
      falseCount += course.false || 0;
    });

    const coursePercent = (trueCount / (trueCount + falseCount)) * 100;
    coursePercentage = coursePercent.toFixed(2);
  }

  let studentsData = [];

  if (getUserCountMockData && getUserCountMockData.data) {
    studentsData = Object.keys(getUserCountMockData.data).map((key) => ({
      name: key,
      true: getUserCountMockData.data[key].true || 0,
      false: getUserCountMockData.data[key].false || 0,
    }));
  } else {
    console.error("getUserCountMockData.data is undefined or null");
  }

  let courseCountData = [];

  if (getCourseCountMockData && getCourseCountMockData.data) {
    courseCountData = Object.keys(getCourseCountMockData.data).map((key) => ({
      name: key,
      true: getCourseCountMockData.data[key].true || 0,
      false: getCourseCountMockData.data[key].false || 0,
    }));
  } else {
    console.error("getCourseCountMockData.data is undefined or null");
  }

  let mostPopularCourse = { name: "", trueCount: 0 };

  if (getCourseCountMockData && getCourseCountMockData.data) {
    Object.keys(getCourseCountMockData.data).forEach((courseId) => {
      const course = getCourseCountMockData.data[courseId];
      const trueCount = course.true || 0;

      if (trueCount > mostPopularCourse.trueCount) {
        mostPopularCourse = { name: courseId, trueCount: trueCount };
      }
    });
  }

  console.log("Most Pop: ", mostPopularCourse);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Progress Calculation
  const percentage = (trueProgressCount / totalProgressCount) * 100;

  roundedPercentage = percentage.toFixed(2);

  console.log("Percentage: ", roundedPercentage);

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
                    avatar={
                      <PersonIcon
                        aria-label="recipe"
                        fontSize="large"
                      ></PersonIcon>
                    }
                    subheader={
                      <Typography variant="h7" fontWeight={"bold"}>
                        Total Student Enrolments: {totalProgressCount}
                      </Typography>
                    }
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      paddingLeft: "16px",
                      height: "120px",
                    }}
                  />
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card>
                  <CardHeader
                    avatar={
                      <StickyNote2Icon
                        aria-label="recipe"
                        fontSize="large"
                      ></StickyNote2Icon>
                    }
                    subheader={
                      <Typography variant="h7" fontWeight={"bold"}>
                        Courses Available: {uniqueCourseCount}
                      </Typography>
                    }
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      paddingLeft: "16px",
                      height: "120px",
                    }}
                  />
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card>
                  <CardHeader
                    avatar={
                      <LocalFireDepartmentTwoToneIcon
                        aria-label="recipe"
                        fontSize="large"
                      ></LocalFireDepartmentTwoToneIcon>
                    }
                    subheader={
                      <Typography variant="h7" fontWeight={"bold"}>
                        Top Course: {mostPopularCourse.name}
                      </Typography>
                    }
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      paddingLeft: "16px",
                      height: "120px",
                    }}
                  />
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={6}>
                  <Grid
                    item
                    xs={2}
                    sx={{ position: "relative", left: "250px" }}
                  >
                    <CircularProgressbar
                      value={roundedPercentage}
                      text={`${roundedPercentage}%`}
                      styles={buildStyles({})}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sx={{ position: "relative", left: "650px" }}
                  >
                    <CircularProgressbar
                      value={coursePercentage}
                      text={`${coursePercentage}%`}
                      styles={buildStyles({})}
                    />
                  </Grid>
                  <Grid item xs={8}></Grid>
                  <Grid
                    item
                    xs={2}
                    sx={{ position: "relative", left: "270px" }}
                  >
                    <Typography>Student Course Completions</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sx={{ position: "relative", left: "650px" }}
                  >
                    <Typography>Total Course Completions</Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <Box sx={{ width: "100%" }}>
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          aria-label="basic tabs example"
                        >
                          <Tab label="Progress By Student" {...a11yProps(0)} />
                          <Tab label="Progress By Course" {...a11yProps(1)} />
                        </Tabs>
                      </Box>
                      <CustomTabPanel
                        value={value}
                        index={0}
                        studentsData={studentsData}
                      ></CustomTabPanel>
                      <CustomTabPanel
                        value={value}
                        index={1}
                        studentsData={courseCountData}
                      ></CustomTabPanel>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProgressCriteria;
