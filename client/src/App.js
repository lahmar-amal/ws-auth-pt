import "./App.css";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Home from "./Components/Home";

function App() {
    return (
        <div className="App">
            <h1>WS AUTH PT</h1>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
