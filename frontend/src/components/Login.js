import React from "react";
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

          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="normal"
            type="email"
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, borderRadius: "8px", fontWeight: "bold" }}
          >
            Login
          </Button>

          <Grid container justifyContent="space-between" mt={2}>
            <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
              Forgot Password?
            </Typography>
            <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
              Sign Up
            </Typography>
          </Grid>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default Login;
