import { useState } from "react";
import {
  Dropdown,
  Avatar,
  Modal,
  Form,
  Input,
  Button,
  notification,
} from "antd";
import axios from "axios";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../store/action";
// import { useNavigate } from "react-router-dom";
import MyButton from "../../components/button";

export default function AdminDesktopHeader() {
  const [form] = Form.useForm();
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.AuthReducer.token);

  const [showModel, setShowModal] = useState(false);
  const [loadingg, setLoadingg] = useState(false);

  const formItemLayout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const buttonItemLayout = {
    wrapperCol: {
      span: 14,
      offset: 10,
    },
  };

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

  const handleChangePassword = (values) => {
    if (values.password !== values.confirm) {
      notification["error"]({
        message: "Error !!",
        description: "Password do not match.",
      });
    } else {
      setLoadingg(true);
      axios
        .post(
          "http://localhost:8000/dj-rest-auth/password/change/",
          {
            old_password: values.current,
            new_password1: values.password,
            new_password2: values.confirm,
          },
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        )
        .then((d) => {
          notification["success"]({
            message: "Success !!",
            description: "Password changed.",
          });
          setLoadingg(false);
          form.resetFields();
          setShowModal(false);
        })
        .catch((e) => {
          notification["error"]({
            message: "Error !!",
            description: "Something went wrong changing password.",
          });
          setLoadingg(false);
        });
    }
  };

  return (
    <>
      <div className="header flex h-[50px] bg-[#f0f0f0] w-full fixed items-center justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-5 h-5 mr-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>

        <Dropdown
          trigger={["click"]}
          menu={{
            items: dropdownItems,
          }}
          className="cursor-pointer mr-6 z-20"
        >
          <Avatar shape="circle" icon={<UserOutlined />} />
        </Dropdown>

        <div className="absolute w-full flex justify-center items-center bg-[ccyan]">
          <img src="/logo.png" className="w-[80px] h-[20px]" />
        </div>
      </div>

      <Modal
        centered
        footer={null}
        loading={loadingg}
        title="Change password"
        open={showModel}
        destroyOnClose={true}
        onCancel={() => {
          setShowModal(false);
          // form.resetFields();
        }}
      >
        <div className="py-6 px-6 mt-6">
          <Form
            name="normal_login"
            form={form}
            {...formItemLayout}
            onFinish={handleChangePassword}
            labelAlign="left"
          >
            <Form.Item
              label="Current password"
              name="current"
              rules={[
                {
                  required: true,
                  message: "Input current password",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="New Password"
              rules={[
                {
                  required: true,
                  message: "Input password",
                },
                {
                  min: 4,
                  message: "Minimum 4 characters required.",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              rules={[
                {
                  required: true,
                  message: "Confirm password",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <MyButton
                // type='submit'
                text="Change Password"
                mdh="h-[35px]"
                mdw="w-[140px]"
                bgColor="bg-[#23262d]"
                textColor="text-white"
                onClick={() => {
                  form.submit();
                }}
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
}
