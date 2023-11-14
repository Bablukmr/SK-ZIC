import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../store/action";
// import axios from "axios";

export default function AdminMenu(props) {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.AuthReducer.token);

  const { setNavbarOpen, isMobile } = props;
  const [menuItems] = useState([
    { id: 1, value: "Dashboard", link: "/admin" },
    { id: 2, value: "Manage User Account", link: "/admin/manage-users" },
    { id: 3, value: "Manage Promotions", link: "/admin/manage-promotions" },
    { id: 4, value: "Generate QR Codes", link: "/admin/generate-qr" },
    { id: 10, value: "Expired QR", link: "/admin/expired-qr" },
    { id: 11, value: "Verify Users", link: "/admin/verify-users" },
    { id: 12, value: "Update Expired QR", link: "/admin/update-expired-qr" },
    { id: 13, value: "Update Unused QR", link: "/admin/update-unused-qr" },

    { id: 14, value: "upload-qr", link: "/admin/upload-qr" },

    { id: 6, value: "View Analytics", link: "#" },
    { id: 7, value: "Live Chat With Users", link: "/admin/admin-chat" },
    { id: 9, value: "QR XLSX Download ", link: "/admin/download-qr" },
    { id: 8, value: "Download QR Csv", link: "#" },
  ]);
  const [selected, setSelected] = useState(1);

  return (
    <div className="w-[280px] text-white bg-[#23262d] h-[calc(100vh-50px)] overflow-auto">
      <div className="flex items-center   h-[180px] flex-col">
        {isMobile && (
          <div className="h-[40px] items-center w-full flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 pr-4"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}

        <div className="bg-white mt-8 rounded-full w-[100px] h-[100px] p-1">
          <img
            src="/2df2.jpg"
            className="rounded-full object-cover h-[100px] w-[100px]"
          />
        </div>

        <p className="m-0 p-0 mt-3"> Jerry Maguire</p>
      </div>

      <ul className="list-none m-0 p-0 mt-10 md:mt-6 pb-6 space-y-2 mx-2">
        {menuItems.map((d) => {
          return (
            <div key={d.id}>
              <Link to={d.link} className="no-underline text-white">
                <li
                  className={`rounded pl-6 py-1 cursor-pointer  ${
                    selected === d.id &&
                    "bg-gradient-to-r from-[#8c8c8c] to-[#5C5C5C]"
                  }`}
                  key={d.id}
                  onClick={() => {
                    setSelected(d.id);
                    if (d.id === 8) {
                      window.open(
                        "https://api-dev.skzicph.com/qr/generate-csv",
                        "_blank"
                      );
                    }
                    if (isMobile) setNavbarOpen(false);
                  }}
                >
                  <small>{d.value}</small>
                </li>
              </Link>
            </div>
          );
        })}
      </ul>

      {isMobile && (
        <div className="absolute bottom-6 flex justify-center items-center w-full">
          <button
            className="py-2 px-4 bg-[#000000] outline-none border-0 text-white rounded-md"
            onClick={() => dispatch(userLogout(token))}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
