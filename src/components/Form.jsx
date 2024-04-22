import { useState } from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../Store/slice/userSlice';

const Form = () => {
  const lastUser = useSelector(store => {
    const userDetails = store.user.userDetails;
    return userDetails.length > 0 ? userDetails[userDetails.length - 1] : { userID: 0 };
  });

  const [userInfo, setUserInfo] = useState({
    userID: lastUser?.userID + 1 || 1,
    fullName: '',
    email: '',
    address: '',
    phone: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    dispatch(setUser(userInfo));
    setUserInfo((prevUserInfo) => ({
      userID: prevUserInfo.userID + 1,
      fullName: '',
      email: '',
      address: '',
      phone: '',
    }));
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Center vertically on the screen
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '70%',
          borderRadius: '15px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          padding: '20px',
        }}
      >
        <Typography variant="h5">Detail Form</Typography>
        <form onSubmit={handleSubmit}>
        <TextField
            label="userID"
            type="number"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled
            name="userID"
            value={userInfo.userID}
            // onChange={handleChange}
          />
          <TextField
            label="Full Name"
            type="text"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="fullName"
            value={userInfo.fullName}
            onChange={handleChange}
          />
          <TextField
            label="Address"
            type="text"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="address"
            value={userInfo.address}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <TextField
            label="Phone"
            type="text"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
          />
          
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Form;



// <div>
//       <h1>Detail Form</h1>
//       <ThemeProvider theme={theme}>
//         <FormGroup>
//           <FormControl>
//             <InputLabel>Full Name</InputLabel>
//             <Input />
//           </FormControl>
//           <FormControl>
//             <InputLabel>Address</InputLabel>
//             <Input />
//           </FormControl>
//           <FormControl>
//             <InputLabel>Email</InputLabel>
//             <Input />
//           </FormControl>
//           <FormControl>
//             <InputLabel>Phone</InputLabel>
//             <Input />
//           </FormControl>
//           <Button variant="contained" color="primary">
//             Submit
//           </Button>
//         </FormGroup>
//       </ThemeProvider>
//     </div>