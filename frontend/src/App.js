import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import DashBoard from './components/Dashboard';
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">

      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "yellow", // Sets the entire background to black
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<DashBoard />} />

          </Routes>

        </Router>

      </Box>

    </div>
  );
}

export default App;
