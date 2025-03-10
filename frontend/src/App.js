import './App.css';
import Login from './components/Login';
import { Box } from "@mui/material";
function App() {
  return (
    <div className="App">

<Box
      sx={{
        minHeight: "100vh",
        bgcolor: "cream", // Sets the entire background to black
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Login/>
     
    </Box>

    </div>
  );
}

export default App;
