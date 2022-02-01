import "./App.css";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";

function App() {
    return (
        <div className="App">
            <h1>WS AUTH PT</h1>
            <NavBar />
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
