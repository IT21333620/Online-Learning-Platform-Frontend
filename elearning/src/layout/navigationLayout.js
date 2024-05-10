import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Icon } from "@iconify/react";
import { useUserID, useUserRole } from "../hooks/customHooks";
import UserDropdown from "./UserDropdown";

//page imports
import AdminConsole from "../pages/AdminConsole";
import InstructorConsole from "../pages/InstructorConsole";
import LearnerProfile from "../pages/LearnerProfile";
import ProgressCriteria from "../pages/ProgressCriteria";
import Home from "../pages/Home";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function NavigationLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const userID = useUserID() ?? "";
  const userRole = useUserRole() ?? "";

  console.log(`userID: ${userID}`);
  console.log(`userRole: ${userRole}`);

  const [selectedComponent, setSelectedComponent] = React.useState(
    userRole === "admin" ? (
      <AdminConsole />
    ) : userRole === "course-instructor" ? (
      <InstructorConsole />
    ) : userRole === "learner" ? (
      <Home />
    ) : (
      ""
    )
  );

  console.log(`selectedComponent: ${selectedComponent}`);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleHomeOpen = () => {
    setSelectedComponent(<Home />);
  };

  const handleAdminConsoleOpen = () => {
    setSelectedComponent(<AdminConsole />);
  };

  const handleInstructorConsoleOpen = () => {
    setSelectedComponent(<InstructorConsole />);
  };

  const handleLearnerProfileOpen = () => {
    setSelectedComponent(<LearnerProfile />);
  };

  const handleProgressCriteriaOpen = () => {
    setSelectedComponent(<ProgressCriteria />);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <Icon icon="ic:round-menu" />
          </IconButton>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">E Learning Platform</Typography>

                <UserDropdown />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <Icon icon="uiw:left" />
            ) : (
              <Icon icon="uiw:right" />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {userRole === "admin" && (
            <ListItem disablePadding>
              <ListItemButton onClick={handleAdminConsoleOpen}>
                <ListItemIcon>
                  <Icon icon="solar:user-broken" style={{ fontSize: "25px" }} />
                </ListItemIcon>
                <ListItemText primary="Admin Console" />
              </ListItemButton>
            </ListItem>
          )}
          {userRole === "course-instructor" && (
            <>
              <ListItem disablePadding>
                <ListItemButton onClick={handleInstructorConsoleOpen}>
                  <ListItemIcon>
                    <Icon
                      icon="solar:user-broken"
                      style={{ fontSize: "25px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Course Instructor Console" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={handleProgressCriteriaOpen}>
                  <ListItemIcon>
                    <Icon
                      icon="lets-icons:time-progress"
                      style={{ fontSize: "25px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Progress Criteria" />
                </ListItemButton>
              </ListItem>
            </>
          )}
          {userRole === "learner" && (
            <>
              <ListItem disablePadding>
                <ListItemButton onClick={handleHomeOpen}>
                  <ListItemIcon>
                    <Icon
                      icon="solar:home-broken"
                      style={{ fontSize: "25px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={handleLearnerProfileOpen}>
                  <ListItemIcon>
                    <Icon
                      icon="solar:user-broken"
                      style={{ fontSize: "25px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Learner Profile" />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box sx={{ px: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ px: 2 }}>
              {selectedComponent}
            </Grid>
          </Grid>
        </Box>
      </Main>
    </Box>
  );
}
