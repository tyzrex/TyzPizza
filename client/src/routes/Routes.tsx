import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Register from "../components/pages/auth/Register";
import Login from "../components/pages/auth/Login";

function Approutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Approutes;
