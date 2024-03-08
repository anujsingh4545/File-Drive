import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NavbarTop from "./common/Navbar/NavbarTop";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
