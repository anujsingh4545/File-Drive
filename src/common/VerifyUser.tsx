import axios from "axios";
import {lookInSession} from "./Session";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export const verifyUser = async () => {
  let userSession = lookInSession("user");

  if (!userSession) return null;

  const res = await axios.post(
    "http://localhost:4000/api/v1/user/getuser",
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
};
