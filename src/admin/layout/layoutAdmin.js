import { useEffect, useState } from "react";
import AdminMenu from "./menu";
import AdminHeader from "./header";
import AdminRoutes from "../adminRoutes";
import { useNavigate } from "react-router-dom";
import CheckMobileHook480 from "../../components/checkMobile";
import { useSelector, useDispatch } from "react-redux";

import { userLogin, getUserData } from "../../store/action";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const isMobile = CheckMobileHook480();
  const dispatch = useDispatch();

  const [navbarOpen, setNavbarOpen] = useState(false);

  const token = useSelector((state) => state.AuthReducer.token);
  const userGlobals = useSelector((state) => state.AuthReducer.globals);

  useEffect(() => {
    if (!token) {
      const tokenn = localStorage.getItem("token");
      if (tokenn) {
        dispatch(userLogin(tokenn));
        dispatch(getUserData(tokenn));
      } else {
        navigate("/admin-signin");
        window.location.reload();
      }
    }
  }, [token]);

  useEffect(() => {
    console.log(navbarOpen);
  });

  return (
    <div className="flex flex-col w-full h-screen">
      <AdminHeader setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen} />

      <div className="flex mt-[50px] h-[calc(100vh-50px)]">
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
