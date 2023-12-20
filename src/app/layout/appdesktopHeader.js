import { Avatar, Dropdown, Badge, Space } from "antd";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { userLogout } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

export default function DesktopHeader(props) {
  const { count } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.AuthReducer.token);
  const [showModel, setShowModal] = useState(false);
  const dropdownItems = [
    {
      label: "My Profile",
      key: "0",
      // onClick: () => {
      //     // navigate("/console/profile");
      // },
    },
    {
      label: "Change Password",
      key: "1",
      onClick: () => {
        setShowModal(true);
      },
    },
    {
      type: "divider",
    },
    {
      label: "Log Out",
      key: "3",
      onClick: () => {
        dispatch(userLogout(token));
      },
    },
  ];
  const dropdownNotification = [
    {
      label: `${count ? count : "No"} new messages from Admin`,
      key: "0",
      onClick: () => {
        navigate("/app/chat");
      },
    },
  ];

  return (
    <div className="w-full z-50 h-full shadow-[0px_4px_6px_-6px_black]">
      <div className="md:w-[96%] md:ml-[2%]  lg:w-[92%] lg:ml-[4%] h-full flex  items-center justify-between">
        <div className="md:w-[10%] flex items-center justify-start">
          <Link to="/app">
            <img src="/logo.png" alt="logo" className="w-[80px] h-[20px]" />
          </Link>
        </div>
        <ul className="w-[90%] md:w-[84%] lg:w-[70%] xl:w-[60%] m-0 p-0  flex md:gap-x-1 lg:gap-x-5 items-center justify-around list-none">
          <li onClick={() => navigate("/app")} className="cursor-pointer">
            Home
          </li>
          <li
            onClick={() => navigate("/app/promotions")}
            className="cursor-pointer"
          >
            Rewards
          </li>
          <li
            onClick={() => navigate("/app/promotions")}
            className="cursor-pointer"
          >
            Promotions
          </li>
          <li
            onClick={() => navigate("/app/point-history")}
            className="cursor-pointer"
          >
            Point History
          </li>
          <li
            onClick={() => navigate("/app/upload-qr")}
            className="cursor-pointer"
          >
            Upload Qr
          </li>

          <li onClick={() => navigate("#")} className="cursor-pointer">
            Help & Support
          </li>
        </ul>
        <div className="md:w-[10%] flex items-center justify-end">
          <Space>
            <Dropdown
              trigger={["click"]}
              menu={{
                items: dropdownNotification,
              }}
              className="cursor-pointer mr-6 z-20"
            >
              <Badge count={count ? count : ""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                  />
                </svg>
              </Badge>
            </Dropdown>

            <Dropdown
              trigger={["click"]}
              menu={{
                items: dropdownItems,
              }}
              className="cursor-pointer z-20"
            >
              <Avatar shape="circle" icon={<UserOutlined />} />
            </Dropdown>
          </Space>
        </div>
      </div>
    </div>
  );
}
