import MyButton from "../../components/button";
import CheckMobileHook480 from "../../components/checkMobile";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { notification } from "antd";
import LoadingAni from "../../components/loading";

export default function UserDetail() {
  const isMobile = CheckMobileHook480();
  let { id } = useParams();
  const token = useSelector((state) => state.AuthReducer.token);

  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const [pointData, setPointData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api-dev.skzicph.com/qr/user-point?id=${id}`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((d) => {
          setLoading1(false);
          setPointData(d.data && d.data[0]);
        })
        .catch((e) => {
          setLoading1(false);
          notification["error"]({
            message: "Error !!",
            description: "Something went wrong, try again ",
          });
        });

      axios
        .get(`https://api-dev.skzicph.com/users/user-id/?id=${id}`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((d) => {
          setLoading2(false);
          console.log("(d.data", d.data);
          setUserData(d.data && d.data[0]);
        })
        .catch((e) => {
          setLoading2(false);
          notification["error"]({
            message: "Error !!",
            description: "Something went wrong, try again ",
          });
        });
    }
  }, [id]);

  return loading1 || loading2 ? (
    <div className="mt-20">
      <LoadingAni className="mt-8" />
    </div>
  ) : (
    <div className="w-full md:w-[80%] md:ml-[10%] mt-[10px] flex flex-col items-center justify-center">
      <div
        className="bg-[#23262d] text-white w-full md:w-[80%] flex flex-col rounded-md 
            h-[200px] md:h-[160px]  md:px-5 pt-4 pb-8"
      >
        <small className="text-[#888888] text-right pr-2">
          Status: Activated
        </small>
        <div className="bg-[greeen] flex h-full justify-between items-center">
          <div className="w-[45%] md:w-[35%] flex justify-center items-center bg-[greeen]">
            <div className="rounded-full w-[120px] h-[120px]">
              <img
                src="/2df2.jpg"
                className="rounded-full object-cover h-[120px] w-[120px]"
              />
            </div>
          </div>
          <div className="w-[55%] md:w-[65%] bg-[reed] flex flex-col md:flex-row justify-between items-center md:px-2">
            <div className="flex flex-col items-center justify-center text-center bg-[gereen]">
              <p className="m-0 p-0 font-semibold">
                {userData?.first_name + " " + userData?.last_name}
              </p>
              <small className="m-0 p-0 mt-0.5 text-[#c4c4c4]">
                Id: {userData?.id}
              </small>
            </div>
            <div className="flex my-3 flex-col justify-center items-center mr-0 md:mr-6">
              <p className="p-0 m-0">{pointData?.points}</p>
              <small className="p-0 m-0">Available Points</small>
            </div>
            <MyButton
              text="Adjust"
              mdh="h-[30px]"
              mdw="w-[70px]"
              textColor="text-[23262d]"
            />
          </div>
        </div>
      </div>

      <div className="mt-[10px] flex md:flex-col h-[90px] justify-around items-center w-full">
        <MyButton
          text="Restrict"
          mdh="h-[30px]"
          mdw={`${isMobile ? "w-[45%]" : "w-[50%]"}`}
          textColor="text-[#23262d]"
          bgColor="bg-[#E6E6E6]"
        />
        <MyButton
          text="Delete"
          mdh="h-[30px]"
          mdw={`${isMobile ? "w-[45%]" : "w-[50%]"}`}
          textColor="text-white"
          bgColor="bg-[#23262d]"
        />
      </div>
      <div className="relative mt-[10px] flex w-full md:w-[50%]  rounded-md bg-[#E6E6E6] text-[#333333] py-4">
        <p className="absolute text-center w-full m-0 p-0 font-semibold mb-4">
          User Detail
        </p>

        <div className="px-4 w-1/2 space-y-2 mt-10">
          <p className="m-0 text-[14px] p-0">Id:</p>
          <p className="m-0 text-[14px] p-0">RTO Name: </p>
          <p className="m-0 text-[14px] p-0">Address:</p>
          <p className="m-0 text-[14px] p-0">Email: </p>
          <p className="m-0 text-[14px] p-0">Phone Number:</p>
        </div>

        <div className="px-4 w-1/2 space-y-2  mt-10">
          <p className="m-0 text-[14px] p-0"> {userData?.id}</p>
          <p className="m-0 text-[14px] p-0"> {userData?.profilee?.rtoName}</p>
          <p className="m-0 text-[14px] p-0">{userData?.profilee?.address}</p>
          <p className="m-0 text-[14px] p-0">{userData?.profilee?.email_c} </p>
          <p className="m-0 text-[14px] p-0">
            {userData?.profilee?.phoneNumber}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
