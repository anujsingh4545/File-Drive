import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NavbarTop from "./common/Navbar/NavbarTop";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import Favourite from "./components/DashBoard/Favourite";
import DeleteFile from "./components/DashBoard/DeleteFile";
import AllFiles from "./components/DashBoard/AllFiles";
import {Toaster} from "react-hot-toast";
import {useRecoilState} from "recoil";
import UserData from "./recoil/atoms/UserData";
import {useEffect} from "react";
import {verifyUser} from "./common/VerifyUser";
import LoadingData from "./recoil/atoms/LoadingUserData";
import NotFound from "./pages/NotFound";

function App() {
  const [user, setuser] = useRecoilState(UserData);

  const [loading_data, setLoadingData] = useRecoilState(LoadingData);

  useEffect(() => {
    setLoadingData(true);
    const getdata = async () => {
      const data = await verifyUser();
      if (data) {
        setuser(data);
        setLoadingData(false);
      } else {
        setLoadingData(false);
      }
    };
    getdata();
  }, []);

  return (
    <>
      <Toaster />
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
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
