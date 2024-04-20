// import React from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define custom theme
const theme = createTheme({
  components: {
    MuiFormGroup: {
      styleOverrides: {
        root: {
          boxShadow: '0px 0px 8px rgba(0,0,0,0.5)',
          padding: '20px',
          marginTop: '5px',
          borderRadius : '12px'
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: '15px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          marginTop: '15px',
        },
      },
    },
  },
});

const Form = () => {
  return (
    <div>
      <h1>Detail Form</h1>
      <ThemeProvider theme={theme}>
        <FormGroup>
          <FormControl>
            <InputLabel>Full Name</InputLabel>
            <Input />
          </FormControl>
          <FormControl>
            <InputLabel>Address</InputLabel>
            <Input />
          </FormControl>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input />
          </FormControl>
          <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input />
          </FormControl>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </FormGroup>
      </ThemeProvider>
    </div>
  );
};

export default Form;
