import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NavbarTop from "./common/Navbar/NavbarTop";

function App() {
  return (
    <>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
