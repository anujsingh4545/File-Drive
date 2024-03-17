import {MoveRight} from "lucide-react";
import {getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
import {auth} from "../../common/Firebase";
import {FacebookAuthProvider} from "firebase/auth";
import axios from "axios";
import {useRecoilState} from "recoil";
import UserData from "../../recoil/atoms/UserData";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {storeInSession} from "../../common/Session";

const LoginMedia = ({name, profile}: {name: string; profile: string}) => {
  const [user, setUser] = useRecoilState(UserData);

  const navigate = useNavigate();

  //

  const loginSocial = async () => {
    if (name) {
      let provider;
      if (name == "Google") {
        provider = new GoogleAuthProvider();
      } else if (name == "Facebook") {
        provider = new FacebookAuthProvider();
      } else if (name == "Github") {
        provider = new GithubAuthProvider();
      }

      signInWithPopup(auth, provider!)
        .then(async (result) => {
          const user = result.user;

          if (user) {
            const userData = {
              name: user.displayName,
              email: user.email,
              profile: user.photoURL,
            };
            await axios
              .post("http://localhost:4000/api/v1/user", userData)
              .then((result) => {
                setUser(result.data);
                storeInSession("user", result.data.token);
                navigate("/dashboard");
                toast.success(result.data.message);
              })
              .catch((e) => {
                toast.error("Some error Occured !");
              });
          }
        })
        .catch((error) => {
          toast.error("Something went wrong, please try again!");
          console.log(error);
        });
    }
  };

  return (
    <section className=" w-full  rounded-full bg-white/50 shadow-md  cursor-pointer  py-2  flex justify-between items-center px-5  " onClick={loginSocial}>
      <div className=" flex items-center justify-between gap-5  ">
        <img src={profile} alt="" className=" h-8" />
        <p>Login with {name}</p>
      </div>

      <MoveRight size={20} className=" text-slate-700 " />
    </section>
  );
};

export default LoginMedia;
