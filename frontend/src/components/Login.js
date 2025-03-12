import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  maxWidth: 400,
  margin: "auto",
  padding: "20px",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
  borderRadius: "12px",
  
});



const Login = () => { 
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
      const res=await axios.post('http://localhost:5000/api/users/login', {email, password});

      localStorage.setItem('token', res.data.token);
      window.location.href='/dashboard';
    } catch (error) {
      alert("Login Failed");
    }
  }

  return (
    <Container maxWidth="sm" sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <StyledCard>
        <CardContent>
          <Box display="flex" justifyContent="center" mb={2}>
            <LockIcon fontSize="large" color="primary" />
          </Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Login
          </Typography>
      <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="normal"
            type="email"
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="email"
            required="true"
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            onChange={(e)=> setPassword(e.target.value)}
            required="true"
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, borderRadius: "8px", fontWeight: "bold" }}
            type="submit"
          >
            Login
          </Button>

          </form>

          <Grid container justifyContent="space-between" mt={2}>
            <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
              Forgot Password?
            </Typography>
            <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}
            component={Link}
            to='/register'
            
            >
              Sign Up
            </Typography>
          </Grid>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default Login;
