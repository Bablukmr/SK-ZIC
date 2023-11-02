import { useEffect, useState } from "react";
import AdminMenu from "./menu";
import { Result, Button } from "antd";
import AdminHeader from "./header";
import AdminRoutes from "../adminRoutes";
import { useNavigate } from "react-router-dom";
import CheckMobileHook480 from "../../components/checkMobile";
import { useSelector, useDispatch } from "react-redux";

import { userLogin, getUserData, userLogout } from "../../store/action";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const isMobile = CheckMobileHook480();
  const dispatch = useDispatch();

  const [navbarOpen, setNavbarOpen] = useState(false);

  const [group, setGroup] = useState("");

  const token = useSelector((state) => state.AuthReducer.token);
  const userData = useSelector((state) => state.AuthReducer.userData);

  console.log("userData", userData?.groups && userData?.groups[0]);

  // const group = userData?.groups && userData?.groups[0];

  useEffect(() => {
    if (!token) {
      const tokenn = localStorage.getItem("token");
      if (tokenn) {
        dispatch(userLogin(tokenn));
        dispatch(getUserData(tokenn));
      } else {
        navigate("/");
        window.location.reload();
      }
    }
  }, [token]);

  useEffect(() => {
    console.log(navbarOpen);
  });

  useEffect(() => {
    if (userData) {
      setGroup(userData?.groups && userData?.groups[0]);
    }
  }, [userData]);

  return group !== 1 ? (
    <div className="flex items-center justify-center  w-full h-screen">
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(userLogout(token));
            }}
            className="cursor-pointer w-[15rem] sm:w-[22rem] h-[2.3rem] mt-3 rounded-md bg-[#333333] hover:bg-[#333333de] text-white"
          >
            Log Out
          </button>
        }
      />
    </div>
  ) : (
    <div className="flex flex-col w-full h-screen">
      <AdminHeader setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen} />

      <div className="flex mt-[50px] h-[calc(100vh-50px)] bg-[green]">
        {!isMobile ? (
          <AdminMenu isMobile={isMobile} />
        ) : (
          <div
            className={`${
              !navbarOpen
                ? "-translate-x-full"
                : "translate-x-0 shadow-[20px_0px_100px_0px_rgba(191,191,191,.7)]"
            } 
                        left-0 w-[280px] h-[100%] z-50  min-h-screen top-0 fixed transition duration-300 `}
          >
            <AdminMenu setNavbarOpen={setNavbarOpen} isMobile={isMobile} />
          </div>
        )}

        <div className="flex-1 content  bg-white overflow-auto p-4">
          <AdminRoutes />
        </div>
      </div>
    </div>
  );
}
