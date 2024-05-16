import { Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MyDrop from "../CourseContent/MyDrop";
import apiDefinitions from "../../../api/apiDefinitions";

const AddCourse = () => {
  const [open, setOpen] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [acceptedFile, setAcceptedFile] = useState(null);

  const handleFileAccepted = (file) => {
    setAcceptedFile(file);
  };

  const handleAddValue = (field, value) => {
    setAddNew((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleErrors = (field, value) => {
    setFieldErrors((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAddNew({});
    setFieldErrors({});
  };

  useEffect(() => {
    if (addNew && !addNew.courseId == "") {
      handleErrors("courseId", false);
    } else {
      handleErrors("courseId", true);
    }
  }, [addNew.courseId]);

  useEffect(() => {
    if (addNew && !addNew.name == "") {
      handleErrors("name", false);
    } else {
      handleErrors("name", true);
    }
  }, [addNew.name]);

  useEffect(() => {
    if (addNew && !addNew.description == "") {
      handleErrors("description", false);
    } else {
      handleErrors("description", true);
    }
  }, [addNew.description]);

  const handleAdd = () => {
    let isValid = true;

    if (!addNew.courseId) {
      handleErrors("courseId", true);
      isValid = false;
    }

    if (!addNew.name) {
      handleErrors("name", true);
      isValid = false;
    }

    if (!addNew.description) {
      handleErrors("description", true);
      isValid = false;
    }

    if (!acceptedFile) {
      handleErrors("file", true);
      isValid = false;
    }

    console.log(isValid);

    if (isValid) {
      const payload = {
        courseId: "123",
        conductorId: "123",
        name: addNew.name,
        description: addNew.description,
      };

      console.log(acceptedFile);
      console.log(payload);

      const formData = new FormData();
      formData.append("file", acceptedFile);
      // formData.append("course", JSON.stringify(payload));
      formData.append(
        "course",
        new Blob([JSON.stringify(payload)], { type: "application/json" })
      );

      console.log(formData);

      apiDefinitions
        .postCourseContent(formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.status === 201) {
            Swal.fire({
              title: "Success",
              text: "Content added successfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
          } else {
            Swal.fire({
              title: "Error",
              text: "Content not added",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen()}
        >
          Add New Course
        </Button>
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
        <DialogTitle>Add Course</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your next Course here. You can add course related image. This
            may take time based on your connection
          </DialogContentText>
          <TextField
            value={addNew.courseId}
            autoFocus
            required
            margin="dense"
            id="courseId"
            name="courseId"
            label="Course ID"
            fullWidth
            variant="standard"
            error={fieldErrors.courseId}
            helperText={fieldErrors.courseId && "Course ID is required"}
            onChange={(e) => handleAddValue("courseId", e.target.value)}
          />
          <TextField
            value={addNew.name}
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Course Name"
            fullWidth
            variant="standard"
            error={fieldErrors.name}
            helperText={fieldErrors.name && "Course name is required"}
            onChange={(e) => handleAddValue("name", e.target.value)}
          />
          <TextField
            value={addNew.description}
            autoFocus
            required
            rows={3}
            margin="dense"
            id="description"
            name="description"
            label="Description"
            fullWidth
            variant="standard"
            error={fieldErrors.description}
            helperText={fieldErrors.description && "Description is required"}
            onChange={(e) => handleAddValue("description", e.target.value)}
          />
          <div className="App">
            <h1>Drop Image below </h1>
            <MyDrop onFileAccepted={handleFileAccepted} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default AddCourse;
