import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NavbarTop from "./common/Navbar/NavbarTop";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import Favourite from "./components/DashBoard/Favourite";
import DeleteFile from "./components/DashBoard/DeleteFile";
import AllFiles from "./components/DashBoard/AllFiles";

function App() {
  return (
    <>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="/dashboard" element={<AllFiles />} />
          <Route path="/dashboard/files" element={<AllFiles />} />
          <Route path="/dashboard/favourites" element={<Favourite />} />
          <Route path="/dashboard/trash" element={<DeleteFile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
