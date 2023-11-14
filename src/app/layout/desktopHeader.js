import { Avatar, Dropdown } from "antd";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { userLogout } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function DesktopHeader() {
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
  return (
    <div className="w-full z-50 h-full shadow-[0px_4px_6px_-6px_black]">
      <div className="md:w-[96%] md:ml-[2%]  lg:w-[92%] lg:ml-[4%] h-full flex  items-center justify-between">
        <div className="md:w-[10%] flex items-center justify-start">
          <img src="/logo.png" alt="logo" className="w-[80px] h-[20px]" />
        </div>
        <ul className="md:w-[74%] lg:w-[70%] xl:w-[60%] m-0 p-0  flex md:gap-x-1 lg:gap-x-5 items-center justify-around list-none">
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
            onClick={() => navigate("/app")}
            className="cursor-pointer"
          >
            Help & Support
          </li>
        </ul>
        <div className="md:w-[10%] flex items-center justify-end">
          <Dropdown
            trigger={["click"]}
            menu={{
              items: dropdownItems,
            }}
            className="cursor-pointer z-20"
          >
            <Avatar shape="circle" icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
