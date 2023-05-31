import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: theme.spacing(3),
      backgroundColor: '#f0f0f0', // Set a darker background color for the container
      padding: theme.spacing(2), // Add padding to the container
      borderRadius: theme.spacing(2), // Add border radius to the container
      margin: '0 auto', // Center align the container horizontally
      maxWidth: 500, // Set a maximum width for the container
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(2),
    },
    textField: {
      marginBottom: theme.spacing(2),
    },
    submitButton: {
      marginTop: theme.spacing(2),
    },
    title: {
      textAlign: 'center',
      marginBottom: theme.spacing(3),
    },
  }));
  
  const CreateVacationRequestPage = () => {
    const classes = useStyles();
  
    const [formData, setFormData] = useState({
      type: '',
      description: '',
      startDate: '',
      endDate: '',
      isHalfDay: false,
    });
  
    const handleFormChange = (e) => {
      const { name, value, type, checked } = e.target;
      const fieldValue = type === 'checkbox' ? checked : value;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: fieldValue,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform form submission logic here
      console.log(formData);
      // Reset the form
      setFormData({
        type: '',
        description: '',
        startDate: '',
        endDate: '',
        isHalfDay: false,
      });
    };
  
    return (
      <div className={classes.container}>
        <Typography variant="h5" component="h2" className={classes.title}>
          Create Vacation Request
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="type"
                label="Type"
                select
                fullWidth
                required
                value={formData.type}
                onChange={handleFormChange}
                className={classes.textField}
                variant="outlined"
              >
                <MenuItem value="Work From Home">Work From Home</MenuItem>
                <MenuItem value="Vacation">Vacation</MenuItem>
                <MenuItem value="Sick Leave">Sick Leave</MenuItem>
                <MenuItem value="Business Travel">Business Travel</MenuItem>
                <MenuItem value="Out of Office">Out of Office</MenuItem>
                <MenuItem value="Work From Offsite">Work From Offsite</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Description"
                fullWidth
                multiline
                rows={4}
                required
                value={formData.description}
                onChange={handleFormChange}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="startDate"
                label="Start Date"
                type="date"
                fullWidth
                required
                value={formData.startDate}
                onChange={handleFormChange}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="endDate"
                label="End Date"
                type="date"
                fullWidth
                required
                value={formData.endDate}
                onChange={handleFormChange}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="isHalfDay"
                    checked={formData.isHalfDay}
                    onChange={handleFormChange}
                  />
                }
                label="Half Day"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitButton}
              >
                Create Request
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  };
  
  export default CreateVacationRequestPage;