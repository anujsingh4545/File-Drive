import axios from "axios";
import {lookInSession, removeFromSession} from "./Session";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export const verifyUser = async () => {
  let userSession = lookInSession("user");

  if (!userSession) return null;

  try {
    const res = await axios.post(
      "https://file-drive-backend.vercel.app/api/v1/user/getuser",
      {},
      {
        headers: {
          authorization: `Bearer ${userSession}`,
        },
      }
    );

    if (res.data.success) {
      return res.data;
    } else {
      return null;
    }
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
