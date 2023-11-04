import React, { useEffect, useState } from "react";
import CheckMobileHook480 from "../../components/checkMobile";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";
import MyButton from "../../components/button";
import { notification } from "antd";

function UnverifiedUserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = useSelector((state) => state.AuthReducer.token);

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/users/user-id?id=${id}`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((d) => {
          console.log(d.data);

          setApiData(d.data && d.data[0]);
        });
    }
  }, []);

  const onClick = () => {
    axios
      .get(`http://localhost:8000/users/update-user?id=${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((d) => {
        notification["success"]({
          message: "Success !!",
          description: "User Verified.",
        });
        navigate("/admin/verify-users");
      })
      .catch((e) => {
        notification["error"]({
          message: "Error !!",
          description: "Something went wron, try again..",
        });
      });
  };

  // const onClick = () => {
  //   axios
  //     .put(
  //       `http://localhost:8000/users/update-user/${id}`,
  //       {
  //         is_active: true,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       }
  //     )
  //     .then((d) => {
  //       notification["success"]({
  //         message: "Success !!",
  //         description: "User Verified.",
  //       });
  //       navigate("/admin/verify-users");
  //     })
  //     .catch((e) => {
  //       notification["error"]({
  //         message: "Error !!",
  //         description: "Something went wron, try again..",
  //       });
  //     });
  // };

  const isMobile = CheckMobileHook480();
  return (
    <div className="w-full">
      <div className="flex justify-between w-full md:w-3/5 items-center">
        <h2 className="px-2">Verify Users</h2>
      </div>

      <div className=" flex">
        <div className="flex w-1/2">
          <div className="w-[40%]">
            <p>User Name :</p>
            <p>First Name :</p>
            <p>Last Name :</p>
            <p>Email :</p>
            <p>Date Joined :</p>
          </div>
          <div className="w-[60%] font-bold">
            <p>{apiData?.username}</p>
            <p>{apiData?.first_name}</p>
            <p>{apiData?.last_name}</p>
            <p>{apiData?.email}</p>
            {/* <p>{new Date(apiData?.date_joined).toString()}</p> */}
            <p>{moment(apiData?.date_joined).format("DD-MM-YYYY")} </p>
          </div>
        </div>

        <div className="flex w-1/2">
          <div className="w-[40%]">
            <p>Address :</p>
            <p>Rto Name :</p>
            <p>Email Company :</p>
            <p>Phone Number :</p>
          </div>
          <div className="w-[60%] font-bold">
            <p>{apiData?.profilee?.address}</p>
            <p>{apiData?.profilee?.rtoName}</p>
            <p>{apiData?.profilee?.email_c}</p>
            <p>{apiData?.profilee?.phoneNumber}</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[50%] bg-[#f5f5f5] mt-8 h-[300px]">
          <a
            href={apiData?.profilee?.imgId}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img height={300} alt="logo" src={apiData?.profilee?.imgId} />
          </a>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <MyButton
            onClick={onClick}
            text="Verify User"
            mdh="h-[40px]"
            mdw="w-[120px]"
            bgColor="bg-[#23262d]"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
}
export default UnverifiedUserDetail;
