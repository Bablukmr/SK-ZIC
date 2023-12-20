import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../store/action";
// import axios from "axios";

export default function AdminMenu(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.AuthReducer.token);

  const { setNavbarOpen, isMobile } = props;

  const [selected, setSelected] = useState(0);
  const [selectedsub, setSelectedsub] = useState(0);
<<<<<<< HEAD
  // console.log("submenuOpen",submenuOpen);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  // console.log("selectedsub",selectedsub);
=======
  const [submenuOpen, setSubmenuOpen] = useState(null);
>>>>>>> origin/main

  const navigate = useNavigate();
  const [menuItems] = useState([
    { id: 1, value: "Dashboard", link: "/admin" },
<<<<<<< HEAD
    {
      id: 2,
      value: "Manage ",
      submenu: [
        { id: 3, value: "Manage User Account", link: "/admin/manage-users" },
        {
          id: 13,
          value: "Manage Promotions",
=======
    { id: 2, value: "Manage User Account", link: "/admin/manage-users" },

    {
      id: 3,
      value: "Promotions",
      submenu: [
        { id: 4, value: "Manage Promotionss", link: "/admin/promotion-list" },
        {
          id: 5,
          value: "Create Promotion",
>>>>>>> origin/main
          link: "/admin/manage-promotions",
        },
      ],
    },
<<<<<<< HEAD
    { id: 4, value: "Generate QR Codes", link: "/admin/generate-qr" },
    { id: 10, value: "Expired QR", link: "/admin/expired-qr" },
    { id: 11, value: "Verify Users", link: "/admin/verify-users" },
    {
      id: 12,
      value: "Update QR",
      submenu: [
        {
          id: 14,
          value: "Update Expired QR",
          link: "/admin/update-expired-qr",
        },
        { id: 15, value: "Update Unused QR", link: "/admin/update-unused-qr" },
      ],
    },
    { id: 6, value: "View Analytics", link: "#" },
    { id: 7, value: "Live Chat With Users", link: "/admin/admin-chat" },
    {
      id: 9,
      value: "Download",
      submenu: [
        { id: 16, value: "QR XLSX Download", link: "/admin/download-qr" },
        { id: 17, value: "Download QR Csv", link: "#" },
=======
    { id: 6, value: "Generate QR Codes", link: "/admin/generate-qr" },
    { id: 7, value: "Expired QR", link: "/admin/expired-qr" },

    {
      id: 8,
      value: "Verification",
      submenu: [
        {
          id: 9,
          value: "Verify Users",
          link: "/admin/verify-users",
        },
        { id: 10, value: "Verify Rewards", link: "/admin/verify-rewards" },
      ],
    },

    {
      id: 11,
      value: "Update QR",
      submenu: [
        {
          id: 12,
          value: "Update Expired QR",
          link: "/admin/update-expired-qr",
        },
        { id: 13, value: "Update Unused QR", link: "/admin/update-unused-qr" },
      ],
    },
    { id: 14, value: "View Analytics", link: "#" },
    { id: 15, value: "Live Chat With Users", link: "/admin/admin-chat" },
    {
      id: 16,
      value: "Download",
      submenu: [
        { id: 17, value: "QR XLSX Download", link: "/admin/download-qr" },
        { id: 21, value: "Download Used QR", link: "/admin/download-used-qr" },
        { id: 18, value: "Download QR Csv", link: "#" },
      ],
    },

    {
      id: 19,
      value: "CMS",
      submenu: [
        {
          id: 20,
          value: "Branding Images",
          link: "/admin/branding-images",
        },
        // { id: 21, value: "Verify Rewards", link: "/admin/verify-rewards" },
>>>>>>> origin/main
      ],
    },
  ]);

  // const subMenuForUpdate = [
  //   { id: 12, value: "Update Expired QR", link: "/admin/update-expired-qr" },
  //   { id: 13, value: "Update Unused QR", link: "/admin/update-unused-qr" },
  // ];
  //bg-[#23262d]
  return (
    <div
      className={`w-[280px] text-white bg-[#23262d] ${
        isMobile ? "h-[calc(100vh)] " : "h-[calc(100vh-50px)]"
<<<<<<< HEAD
      }overflow-auto`}
=======
      } overflow-auto`}
>>>>>>> origin/main
    >
      <div className="flex items-center h-[180px] flex-col">
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
            alt="/"
            className="rounded-full object-cover h-[100px] w-[100px]"
          />
        </div>

        <p className="m-0 p-0 mt-3">Jerry Maguire</p>
      </div>

<<<<<<< HEAD
      <ul className="list-none active:select-none m-0 p-0 mt-10 md:mt-6 pb-6 space-y-2 mx-2">
=======
      <ul className="list-none active:select-none m-0 p-0 mt-10 md:mt-6 pb-6 space-y-3 mx-2">
>>>>>>> origin/main
        {menuItems.map((menuItem) => (
          <div key={menuItem.id}>
            <li
              className={`pl-6 py-[7px] cursor-pointer rounded-md transition duration-300 ${
                selected === menuItem.id &&
                "bg-gradient-to-r from-[#8c8c8c] to-[#5C5C5C] "
              }`}
              onClick={() => {
                setSelected(menuItem.id);
                navigate(menuItem.link);
                if (menuItem.submenu) {
                  setSubmenuOpen(
                    submenuOpen === menuItem.id ? null : menuItem.id
                  );
                } else {
                  if (isMobile) setNavbarOpen(false);
<<<<<<< HEAD
                }
              }}
            >
              {/* <Link to={menuItem.link} className="no-underline text-white"> */}
=======
                  setSubmenuOpen(null);
                  setSelectedsub(0);
                }
              }}
            >
>>>>>>> origin/main
              <div className="flex items-center justify-between">
                <small>{menuItem.value}</small>
                {menuItem.submenu && (
                  <div className="flex items-center pr-4 ml-auto">
                    {submenuOpen === menuItem.id ? (
<<<<<<< HEAD
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                    
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    
=======
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
>>>>>>> origin/main
                    )}
                  </div>
                )}
              </div>
<<<<<<< HEAD

              {/* <small>{menuItem.value}</small>
              {menuItem.submenu && (
                <small className=" justify-end">
                  {submenuOpen === menuItem.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </small>
              )} */}
              {/* </Link> */}
            </li>

            {/* subMenu */}
            {menuItem.submenu && (
              <ul
                className={`list-none m-0 p-0 my-2 space-y-2 pl-2 transition duration-300 ${
=======
            </li>

            {menuItem.submenu && (
              <ul
                className={`list-none m-0 p-0 my-2 space-y-1 pl-2 transition duration-300 ${
>>>>>>> origin/main
                  submenuOpen === menuItem.id
                    ? "opacity-100"
                    : "opacity-0 hidden"
                }`}
              >
                {menuItem.submenu.map((submenuItem) => (
                  <li
                    key={submenuItem.id}
                    className={`py-[7px] pl-6 rounded-md cursor-pointer transition duration-300 ${
                      selectedsub === submenuItem.id &&
                      "bg-gradient-to-r from-[#8c8c8c] to-[#5C5C5C]"
                    } `}
                    onClick={() => {
<<<<<<< HEAD
=======
                      if (submenuItem.id === 18) {
                        window.open(
                          "http://localhost:8000/qr/generate-csv",
                          "_blank"
                        );
                      }

>>>>>>> origin/main
                      navigate(submenuItem.link);
                      setSelectedsub(submenuItem.id);
                      if (isMobile) setNavbarOpen(false);
                    }}
                  >
<<<<<<< HEAD
                    {/* <Link
                      to={submenuItem.link}
                      className="no-underline text-white"
                      onClick={() => {
                        setSelectedsub(submenuItem.id);
                        if (isMobile) setNavbarOpen(false);
                      }}
                    > */}
                    <small className="flex items-center ">{submenuItem.value}</small>
                    {/* </Link> */}
=======
                    <small className="flex items-center ">
                      {submenuItem.value}
                    </small>
>>>>>>> origin/main
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
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

// import { useState } from "react";
// import { Link } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import { userLogout } from "../../store/action";
// // import axios from "axios";

// export default function AdminMenu(props) {
//   const dispatch = useDispatch();

//   const token = useSelector((state) => state.AuthReducer.token);

//   const { setNavbarOpen, isMobile } = props;
//   const [menuItems] = useState([
//     { id: 1, value: "Dashboard", link: "/admin" },
//     { id: 2, value: "Manage User Account", link: "/admin/manage-users" },
//     { id: 3, value: "Manage Promotions", link: "/admin/manage-promotions" },
//     { id: 4, value: "Generate QR Codes", link: "/admin/generate-qr" },
//     { id: 10, value: "Expired QR", link: "/admin/expired-qr" },
//     { id: 11, value: "Verify Users", link: "/admin/verify-users" },
//     { id: 12, value: "Update Expired QR", link: "/admin/update-expired-qr" },
//     { id: 13, value: "Update Unused QR", link: "/admin/update-unused-qr" },

//     { id: 14, value: "upload-qr", link: "/admin/upload-qr" },

//     { id: 6, value: "View Analytics", link: "#" },
//     { id: 7, value: "Live Chat With Users", link: "/admin/admin-chat" },
//     { id: 9, value: "QR XLSX Download ", link: "/admin/download-qr" },
//     { id: 8, value: "Download QR Csv", link: "#" },
//   ]);
//   const [selected, setSelected] = useState(1);

//   return (
//     <div className="w-[280px] text-white bg-[#23262d] h-[calc(100vh-50px)] overflow-auto">
//       <div className="flex items-center   h-[180px] flex-col">
//         {isMobile && (
//           <div className="h-[40px] items-center w-full flex justify-end">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6 pr-4"
//               onClick={() => {
//                 setNavbarOpen(false);
//               }}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </div>
//         )}

//         <div className="bg-white mt-8 rounded-full w-[100px] h-[100px] p-1">
//           <img
//             src="/2df2.jpg"
//             className="rounded-full object-cover h-[100px] w-[100px]"
//           />
//         </div>

//         <p className="m-0 p-0 mt-3"> Jerry Maguire</p>
//       </div>

//       <ul className="list-none m-0 p-0 mt-10 md:mt-6 pb-6 space-y-2 mx-2">
//         {menuItems.map((d) => {
//           return (
//             <div key={d.id}>
//               <Link to={d.link} className="no-underline text-white">
//                 <li
//                   className={`rounded pl-6 py-1 cursor-pointer  ${
//                     selected === d.id &&
//                     "bg-gradient-to-r from-[#8c8c8c] to-[#5C5C5C]"
//                   }`}
//                   key={d.id}
//                   onClick={() => {
//                     setSelected(d.id);
//                     if (d.id === 8) {
//                       window.open(
//                         "http://localhost:8000/qr/generate-csv",
//                         "_blank"
//                       );
//                     }
//                     if (isMobile) setNavbarOpen(false);
//                   }}
//                 >
//                   <small>{d.value}</small>
//                 </li>
//               </Link>
//             </div>
//           );
//         })}
//       </ul>

//       {isMobile && (
//         <div className="absolute bottom-6 flex justify-center items-center w-full">
//           <button
//             className="py-2 px-4 bg-[#000000] outline-none border-0 text-white rounded-md"
//             onClick={() => dispatch(userLogout(token))}
//           >
//             Log Out
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
