import React from "react";
import { Link } from "react-router-dom";
import { userLogout } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";

function AppSideMenu(props) {
  const { toggelNavbar } = props;
  const token = useSelector((state) => state.AuthReducer.token);

  const dispatch = useDispatch();

  return (
    <div className="bg-white h-[calc(100vh-60px)]  md:h-[100vh] z-50">
      <section
        className="h-[60px]  w-full flex justify-between  text-black 
                items-center"
      >
        <p className="bold text-2xl pl-4 ">Menu</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 pr-4 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          onClick={toggelNavbar}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </section>
      <section className="w-full h-[calc(100vh-120px)] z-50">
        <ul className="m-0 p-0 list-none space-y-4 py-10 w-full">
          <li onClick={toggelNavbar} className="w-[90%] ml-[5%]">
            <Link to="/app/profile" className="no-underline text-white">
              <button
                className="w-full border-none text-left pl-4 bg-[#23262d] py-4 
              cursor-pointer
              rounded-md text-white"
              >
                Profile
              </button>
            </Link>
          </li>

          <li onClick={toggelNavbar} className="w-[90%] ml-[5%]">
            <Link to="/app/promotions" className="no-underline text-white">
              <button
                className="w-full border-none text-left pl-4 bg-[#23262d] py-4 rounded-md text-white
                            cursor-pointer
              "
              >
                Rewards
              </button>
            </Link>
          </li>

          <li onClick={toggelNavbar} className="w-[90%] ml-[5%]">
            <Link to="/app/promotions" className="no-underline text-white">
              <button
                className="w-full border-none text-left pl-4 bg-[#23262d] py-4 rounded-md text-white
                            cursor-pointer
              "
              >
                Promotions
              </button>
            </Link>
          </li>

          <li onClick={toggelNavbar} className="w-[90%] ml-[5%]">
            <Link to="/app/point-history" className="no-underlin">
              <button
                className="w-full border-none text-left pl-4 bg-[#23262d] py-4 rounded-md
                cursor-pointer                text-white"
              >
                Point History
              </button>
            </Link>
          </li>

          <li onClick={toggelNavbar} className="w-[90%] ml-[5%]">
            <Link to="/app/scan-qr" className="no-underline text-white">
              <button
                className="w-full border-none text-left pl-4 bg-[#23262d] py-4 rounded-md text-white
                            cursor-pointer
              "
              >
                Scan QR
              </button>
            </Link>
          </li>

          <li onClick={toggelNavbar} className="w-[90%] ml-[5%]">
            <Link to="/signin" className="no-underline text-white">
              <button className="w-full border-none text-left pl-4 bg-[#23262d] py-4 rounded-md text-white">
                Help & Support
              </button>
            </Link>
          </li>
        </ul>
      </section>
      <section
        className="h-[60px] absolute  bottom-[90px] md:bottom-2 w-full flex justify-center text-black 
                items-center"
      >
        <button
          className="w-[90%] border-none py-4 rounded-md font-bold               cursor-pointer"
          onClick={() => {
            dispatch(userLogout(token));
          }}
        >
          Log Out
        </button>
      </section>
    </div>
  );
}

export default AppSideMenu;
