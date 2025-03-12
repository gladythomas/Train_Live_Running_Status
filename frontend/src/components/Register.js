import React, { useState } from 'react'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

export default function Register() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

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

      if(error.response){
        alert(`Registration failed ${error.response.data.message || "unknown error"}`);
      }
      else if(error.request){
        alert("Network error . please try again");
      }
      else{
        alert(`Error : ${error.message}`);
      }

    };

  }
  return (

    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  )
}
