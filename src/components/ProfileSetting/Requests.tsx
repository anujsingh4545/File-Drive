import React, {useEffect, useState} from "react";
import RequestPart from "./RequestPart";
import {lookInSession} from "../../common/Session";
import axios from "axios";
import toast from "react-hot-toast";
import Empty from "../../common/Empty";
import {useRecoilState} from "recoil";
import NavbarLoad from "../../recoil/atoms/NavbarLoad";

const Requests = () => {
  const [req, setReq] = useState([]);
  const [loading, setLoading] = useState(false);
  const [callLoad, setcallLoad] = useState(false);
  const [navLoad, setnavLoad] = useRecoilState(NavbarLoad);

  useEffect(() => {
    const fetchRequests = async () => {
      let userSession = lookInSession("user");

      if (userSession) {
        setLoading(true);
        await axios
          .post(
            "https://files-drive.vercel.app/api/v1/request/getall",
            {},
            {
              headers: {
                authorization: `Bearer ${userSession}`,
              },
            }
          )
          .then((response: any) => {
            if (response.data.success) {
              setReq(response.data.req);
              setLoading(false);
            } else {
              setLoading(false);
            }
          })
          .catch((e) => {
            toast.error("Something went wrong!");
            setLoading(false);
          });
      }
    };

    fetchRequests();
  }, [callLoad]);

  const acceptRequest = async (id: String, userId: string, groupId: string, role: string): Promise<boolean> => {
    let userSession = lookInSession("user");

    if (id && userId && groupId && role && userSession) {
      const datasent = {
        id: id,
        UserId: userId,
        groupId: groupId,
        role: role,
      };

      await axios
        .post("https://files-drive.vercel.app/api/v1/request/acceptreq", datasent, {
          headers: {
            authorization: `Bearer ${userSession}`,
          },
        })
        .then((response: any) => {
          if (response.data.success) {
            toast.success(response.data.message);
            setcallLoad(!callLoad);
            setnavLoad(!navLoad);
            return true;
          } else {
            return true;
          }
        })
        .catch((e) => {
          toast.error("Something went wrong!");
          return false;
        });
    }

    return false;
  };

  const declineRequest = async (id: String, userId: string, groupId: string, role: string): Promise<boolean> => {
    let userSession = lookInSession("user");
    if (userId && groupId && role && userSession) {
      const datasent = {
        id: id,
        UserId: userId,
        groupId: groupId,
        role: role,
      };

      await axios
        .post("https://files-drive.vercel.app/api/v1/request/declinereq", datasent, {
          headers: {
            authorization: `Bearer ${userSession}`,
          },
        })
        .then((response: any) => {
          if (response.data.success) {
            toast.success(response.data.message);
            setcallLoad(!callLoad);
            return true;
          } else {
            return true;
          }
        })
        .catch((e) => {
          toast.error("Something went wrong!");
          return false;
        });
    }

    return false;
  };

  return (
    <div className="  w-full  h-full  flex  flex-col ">
      <h2>Requests</h2>
      <p className="  text-[0.8rem] text-gray-500  border-b-[0.1px]  pb-2">Manage your requests!</p>

      <main className=" mt-5    flex-1 ">
        {loading ? (
          <div className=" w-full mt-5  flex flex-col items-center justify-center gap-y-5 ">
            <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
            <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
            <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
            <section className=" rounded-full w-full h-3 animate-pulse bg-gray-200 "></section>
          </div>
        ) : req.length > 0 ? (
          <>
            <section className=" grid grid-cols-12 items-start justify-center border-[1px] text-[0.7rem] md:text-[0.8rem] mb-2 mr-1 ">
              <p className=" col-span-4 bg-black/40 p-1  text-center  ">Name</p>
              <p className=" col-span-2 p-1 text-center  bg-black/20   ">Role</p>
              <p className=" col-span-3 text-center  p-1 bg-black/40  ">Date</p>
              <p className=" col-span-3   px-1 text-center py-1 bg-black/20   ">Choose</p>
            </section>

            <div className="  h-[21rem] md:h-[30rem] lg:h-[20rem] overflow-scroll">
              {req.map((request: any) => (
                <RequestPart key={request.id} id={request.id} userId={request.userId} groupId={request.groupId} grpname={request.groupName} role={request.role} reqdate={request.date} acceptRequest={acceptRequest} declineRequest={declineRequest} />
              ))}
            </div>
          </>
        ) : (
          <Empty />
        )}
      </main>
    </div>
  );
};

export default Requests;
