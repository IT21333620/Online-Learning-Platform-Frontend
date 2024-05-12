import { Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MyDrop from "../CourseContent/MyDrop";

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
    if (addNew && !addNew.title == "") {
      handleErrors("title", false);
    } else {
      handleErrors("title", true);
    }
  }, [addNew.title]);

  const handleAdd = () => {
    console.log("dads");
    let isValid = true;
    if (!addNew.title) {
      handleErrors("title", true);
      isValid = false;
    }
    if (!addNew.description) {
      handleErrors("description", true);
      isValid = false;
    }

    if (isValid) {

        const payload = {
            title: addNew.title,
            description: addNew.description,
        }

        const formData = new FormData()
        formData().append("file", acceptedFile);
        formData().append("courseContent", JSON.stringify(payload));

      Swal.fire({
        title: "Success",
        text: "Content added successfully",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}}>
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
            Add your next Course here. You can add course related image. This may take time based on your connection
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
