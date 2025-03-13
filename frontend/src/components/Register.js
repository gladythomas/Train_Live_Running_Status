import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/register', {
                fullName,
                email,
                password,
            });

            alert(res.data.message || "Registration successful! Please log in.");
            navigate('/login');
        } catch (error) {
            if (error.response) {
                alert(`Registration failed: ${error.response.data.message || "Unknown error"}`);
            } else if (error.request) {
                alert("Network error. Please try again.");
            } else {
                alert(`Error: ${error.message}`);
            }
        }
    };

    return (
        <Grid
            container
            sx={{
                height: '100vh',
                background: 'url("https://source.unsplash.com/1600x900/?nature,abstract") no-repeat center center/cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Container maxWidth="sm">
                <Paper elevation={6} sx={{ padding: 4, borderRadius: 4 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Create an Account
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            label="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            variant="outlined"
                            fullWidth
                            required
                        />

                        <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            fullWidth
                            required
                        />

                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                            fullWidth
                            required
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2, borderRadius: '20px' }}
                        >
                            Register
                        </Button>

                        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                            Already have an account?{' '}
                            <span
                                style={{ color: '#3f51b5', cursor: 'pointer', fontWeight: 'bold' }}
                                onClick={() => navigate('/')}
                            >
                                Login
                            </span>
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Grid>
    );
}
