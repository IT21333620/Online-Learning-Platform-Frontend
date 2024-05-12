import { Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Swal from "sweetalert2";
import MyDrop from "./MyDrop";

const ContentAdd = (prop) => {
  const [open, setOpen] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [acceptedFile, setAcceptedFile] = useState(null);
  const course = useState(prop.id);


  const handleFileAccepted = (file) => {
    setAcceptedFile(file);
  };


  useEffect(() => {
    console.log(acceptedFile)
    }, [acceptedFile]);

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

  useEffect(() => {
    if (addNew && !addNew.title == "") {
      handleErrors("title", false);
    } else {
      handleErrors("title", true);
    }
  }, [addNew.title]);

  useEffect(() => {
    if (addNew && !addNew.description == "") {
      handleErrors("description", false);
    } else {
      handleErrors("description", true);
    }
  }, [addNew.description]);

  console.log(prop);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAddNew({});
    setFieldErrors({});
  };

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
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={() => handleOpen()}>
          Add Content
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
        <DialogTitle>Add Content</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your next content here. You can add a video, a document, or a
            image. This may take time based on your connection
          </DialogContentText>
          <TextField
            value={addNew.title}
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Title"
            fullWidth
            variant="standard"
            error={fieldErrors.title}
            helperText={fieldErrors.title && "Title is required"}
            onChange={(e) => handleAddValue("title", e.target.value)}
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
            <h1>Drop file below </h1>
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

export default ContentAdd;
