import axios from "axios";
import { useState, useEffect, useRef } from "react";
import WebSocketInstance from "../../chat/websocket";
import { SendOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { notification, Select, Input, Form, Button } from "antd";

import { useSelector } from "react-redux";

const { Option } = Select;
const { TextArea } = Input;

const SubmitButton = ({ form, chatSessionId }) => {
  const [submittable, setSubmittable] = useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          if (chatSessionId) setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);
  return (
    <Button
      type="primary"
      htmlType="submit"
      disabled={!submittable}
      size="large"
      shape="circle"
      icon={<SendOutlined className="pl-1 pt-1" />}
    />
  );
};

function AdminChat() {
  const [users, setUsers] = useState(null);
  const [connection, setConnection] = useState(false);
  const [messageList, setMessageList] = useState([]);
  const [chatSessionId, setChatSessionId] = useState(null);

  const chatRef = useRef(null);
  const scrollREf = useRef(null);
  const formRef = useRef(null);
  const [form] = Form.useForm();

  // const token = useSelector((state) => state.AuthReducer.token);
  const userData = useSelector((state) => state.AuthReducer.userData);

  useEffect(() => {
    if (!connection) {
      const interval = setInterval(() => {
        if (WebSocketInstance.state() !== 0) {
          if (WebSocketInstance.state() === 1) {
            setConnection(true);
            clearInterval(interval);
            console.log(WebSocketInstance.state());
            // callback();
            // return;
          }
        } else {
          console.log("waiting for connection");
        }
      }, 100);
    }
    // return () => {
    //   setConnection(false);
    // };
  }, [chatSessionId]);

  useEffect(() => {
    if (connection) {
      WebSocketInstance.addCallbacks(
        setMessages,
        addMessage
        // initialCheckActiveChatSession,
        // updatedetCHatSession
      );
      WebSocketInstance.fetchMessages(chatSessionId);
      // WebSocketInstance.fetchUserChatGroups(chatSessionId);
    }
  }, [connection]);

  console.log("connection", connection);

  const setMessages = (data) => {
    // console.log("fetch messages", data);
    setMessageList(data);
  };
  const addMessage = (message) => {
    setMessageList((messageList) => [...messageList, message]);
  };

  const onChange = (value) => {
    setConnection(false);

    axios
      .get(`http://localhost:8000/chat/chat-master?id=${value}`)
      .then((d) => {
        // console.log(d.data);
        setChatSessionId(d.data[0]?.id);
        WebSocketInstance.connect(d.data[0]?.id);
        // WebSocketInstance.fetchMessages(d.data[0]?.id);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const onSearch = (value) => {
    axios
      .get(`http://localhost:8000/chat/users`)
      .then((d) => {
        // console.log(d.data);
        setUsers(d.data);
      })
      .catch((e) => {
        notification["error"]({
          message: "Error",
        });
      });
  };

  const renderMessages = (messages) => {
    const currentUser = userData?.pk;
    return messages.map((message, i) => (
      <li
        key={message.id}
        className={`
          ${message.author !== currentUser ? " " : "ml-[20%] "}
          w-[80%] break-words overflow-wrap  rounded-xl`}
      >
        <div
          className={`
            ${
              message.author !== currentUser
                ? " justify-start items-start "
                : " items-end justify-end  "
            } flex flex-col rounded-xl my-4`}
        >
          <p
            className={`${
              message.author !== currentUser
                ? "bg-[#f0f0f0] text-left rounded-r-full rounded-tl-full "
                : "text-right bg-[#3369FF] text-white rounded-l-full rounded-br-full"
            } px-3 py-1 rounded-md z-100 break-words`}
          >
            {message.message}
          </p>
        </div>
      </li>
    ));
  };

  useEffect(() => {
    scrollREf.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  const userId = userData?.pk;

  const sendMessageHandler = (values) => {
    const messageObject = {
      from: userId,
      content: values.chatMessage,
      sessionId: chatSessionId,
    };
    // console.log("messageObjectmessageObject", messageObject);
    WebSocketInstance.newChatMessage(messageObject);
    form.resetFields();
  };

  const userOptions = users?.map((d) => <Option key={d.id}>{d.email}</Option>);

  return (
    <div className="w-full h-full flex flex-col ">
      <div className="h-[50px] flex items-center">
        <Select
          showSearch
          placeholder="Select a user"
          // optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          className="w-[280px]"
        >
          {userOptions}
        </Select>
      </div>

      {/* h-[100vh] */}
      <div className="flex h-[calc(100%-50px)] border border-[#d9d9d9] border-solid">
        <div className="w-full flex flex-col justify-between" ref={chatRef}>
          <section className="h-[88%] overflow-x-auto">
            <ul className="list-none m-0 p-0 mx-4 md:mx-8">
              {messageList && renderMessages(messageList)}
              <div ref={scrollREf} />
            </ul>
          </section>

          <div className="h-[12%] w-full flex items-center bg-[#f0f0f0]">
            <Form
              name="validateOnly"
              layout="inline"
              form={form}
              ref={formRef}
              onFinish={sendMessageHandler}
              className="flex w-[100%] justify-arousnd justify-center h-[100%] items-center"
            >
              <Form.Item
                name="chatMessage"
                className="w-[72%]"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <TextArea
                  // autoSize={{ minRows: 2, maxRows: 2 }}
                  placeholder="Your messages here !!"
                  // onKeyUp={(e) => {
                  //   if (!isMobile) {
                  //     if (
                  //       e.code === "Enter" &&
                  //       (e.code !== "ShiftLeft" || e.code !== "ShiftRight")
                  //     ) {
                  //       form.submit();
                  //     }
                  //   }
                  // }}
                />
              </Form.Item>
              <Form.Item>
                <SubmitButton form={form} chatSessionId={chatSessionId} />
                {/* <Button
                  disabled={connection ? false : true}
                  size="large"
                  type="primary"
                  htmlType="submit"
                  shape="circle"
                  icon={<SendOutlined className="pl-1 pt-1" />}
                >
                  {form.getFieldValue(["chatMessage"])}
                </Button> */}
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminChat;
