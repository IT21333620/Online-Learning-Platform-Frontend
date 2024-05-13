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

import React from "react";
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

const mockProgressData = [
  {
    data: {
      learnerProgressList: [
        {
          id: "663ac342cdfd495ab5b437b9",
          userId: "u001",
          courseId: "c001",
          course: null,
          createdAt: "2024-05-08T00:11:46.485+00:00",
          updatedAt: null,
          status: null,
          data: null,
        },
        {
          id: "663ac54acdfd495ab5b437ba",
          userId: "u002",
          courseId: "c002",
          course: null,
          createdAt: "2024-05-08T00:20:26.721+00:00",
          updatedAt: null,
          status: null,
          data: null,
        },
        {
          id: "663ac55acdfd495ab5b437bb",
          userId: "u003",
          courseId: "c003",
          course: null,
          createdAt: "2024-05-08T00:20:42.318+00:00",
          updatedAt: null,
          status: null,
          data: null,
        },
        {
          id: "663bad76fdfcde4f4e378c20",
          userId: "user01@2",
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
          createdAt: "2024-05-08T16:51:01.706+00:00",
          updatedAt: null,
          status: null,
          data: null,
        },
        {
          id: "663c124526ab5b7371e8d452",
          userId: "user01@3",
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
          createdAt: "2024-05-09T00:01:08.736+00:00",
          updatedAt: null,
          status: null,
          data: null,
        },
        {
          id: "663c2485b2eb5406f1b51cdf",
          userId: "user01@4",
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
          createdAt: "2024-05-09T01:19:00.956+00:00",
          updatedAt: null,
          status: null,
          data: null,
        },
        {
          id: "663d8077d5e350650c8ca705",
          userId: "u005",
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
          createdAt: "2024-05-10T02:03:34.411+00:00",
          updatedAt: null,
          status: null,
          data: null,
        },
        {
          id: "663d8391dfa5de44481bc962",
          userId: "u006",
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
          createdAt: "2024-05-10T02:16:48.700+00:00",
          updatedAt: null,
          status: null,
          data: null,
        },
        {
          id: "663d89faf9a86a0d80a95ea3",
          userId: "u007",
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
          createdAt: "2024-05-10T02:44:09.635+00:00",
          updatedAt: null,
          status: "false",
          data: null,
        },
        {
          id: "663d8a11f9a86a0d80a95ea4",
          userId: "u008",
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
          createdAt: "2024-05-10T02:44:33.243+00:00",
          updatedAt: "2024-05-10T15:16:36.120+00:00",
          status: "true",
          data: null,
        },
        {
          id: "663db14bf9a86a0d80a95ea5",
          userId: "u009",
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
          status: "true",
          data: null,
        },
        {
          id: "663e491a37a76568decdbe7d",
          userId: "user01@5",
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
          createdAt: "2024-05-10T16:19:37.701+00:00",
          updatedAt: null,
          status: "false",
          data: null,
        },
        {
          id: "663f0b56f40fe57550d4a000",
          userId: "user01@6",
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
              url: null,
            },
            message: "Course found",
            status: 200,
          },
          createdAt: "2024-05-11T06:08:21.365+00:00",
          updatedAt: null,
          status: "false",
          data: null,
        },
      ],
      totalCount: 13,
      trueCount: 2,
    },
    message: "Progress retrieved successfully",
    status: 200,
  },
];

const getUserCountMockData = [
  {
    data: {
      u002: {
        unknown: 1,
      },
      u001: {
        unknown: 1,
      },
      u003: {
        unknown: 1,
      },
      "user01@4": {
        unknown: 1,
      },
      "user01@5": {
        false: 1,
      },
      "user01@6": {
        false: 1,
      },
      u009: {
        true: 2,
        false: 1,
      },
      "user01@2": {
        unknown: 1,
      },
      "user01@3": {
        unknown: 1,
      },
      u006: {
        unknown: 1,
      },
      u005: {
        unknown: 1,
      },
      u008: {
        true: 1,
      },
      u007: {
        false: 1,
      },
    },
    message: "UserId counts retrieved successfully",
    status: 200,
  },
];

const getCourseCountMockData = [
  {
    data: {
      C001: {
        false: 3,
        true: 2,
        unknown: 5,
      },
      c002: {
        unknown: 1,
        false: 3,
        true: 10,
      },
      c001: {
        unknown: 1,
      },
      c003: {
        false: 3,
        true: 6,
        unknown: 1,
      },
    },
    message: "CourseId counts retrieved successfully",
    status: 200,
  },
];

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
  const courseData = getCourseCountMockData[0].data;
  const uniqueCourseCount = Object.keys(courseData).length;

  const getCourseCountData = getCourseCountMockData[0].data;

  // Initialize variables to store true and false counts
  let trueCount = 0;
  let falseCount = 0;

  // Iterate over the course data to sum up the true and false counts
  Object.values(getCourseCountData).forEach((course) => {
    trueCount += course.true || 0;
    falseCount += course.false || 0;
  });

  // Calculate the percentage
  const coursePercent = (trueCount / (trueCount + falseCount)) * 100;
  const coursePercentage = coursePercent.toFixed(2);

  const studentsData = Object.keys(getUserCountMockData[0].data).map((key) => ({
    name: key,
    true: getUserCountMockData[0].data[key].true || 0,
    false: getUserCountMockData[0].data[key].false || 0,
  }));

  const courseCountData = Object.keys(getCourseCountMockData[0].data).map(
    (key) => ({
      name: key,
      true: getCourseCountMockData[0].data[key].true || 0,
      false: getCourseCountMockData[0].data[key].false || 0,
    })
  );

  // Find the most popular course based on true counts
  let mostPopularCourse = { name: "", trueCount: 0 };
  Object.keys(getCourseCountMockData[0].data).forEach((courseId) => {
    const course = getCourseCountMockData[0].data[courseId];
    const trueCount = course.true || 0;

    if (trueCount > mostPopularCourse.trueCount) {
      mostPopularCourse = { name: courseId, trueCount: trueCount };
    }
  });

  console.log("Most Pop: ", mostPopularCourse);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //Progress Calculation
  const percentage =
    (mockProgressData[0].data.trueCount / mockProgressData[0].data.totalCount) *
    100;

  const roundedPercentage = percentage.toFixed(2);

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
                        Total Student Enrolments:{" "}
                        {mockProgressData[0].data.totalCount}
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
                    sx={{ position: "relative", left: "550px" }}
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
                    sx={{ position: "relative", left: "580px" }}
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
