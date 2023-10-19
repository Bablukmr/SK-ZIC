import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import WebSocketInstance from "../../chat/websocket";
import { SendOutlined, CloseCircleOutlined } from "@ant-design/icons";

import { notification, Select, Input, Form, Button } from "antd";
const { TextArea } = Input;

const SubmitButton = ({ form }) => {
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
          setSubmittable(true);
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

export default function Webchat() {
  const session = useSelector((state) => state.AuthReducer.session);
  const messages = useSelector((state) => state.AuthReducer.messages);
  const newMessage = useSelector((state) => state.AuthReducer.newMessage);

  const userData = useSelector((state) => state.AuthReducer.userData);
  const userId = userData?.pk;

  const chatRef = useRef(null);
  const scrollREf = useRef(null);
  const formRef = useRef(null);
  const [form] = Form.useForm();

  console.log("messages", messages);

  const [chatMessages, setChatMessages] = useState([]);
  const [connection, setConnection] = useState(false);

  //   useEffect(() => {
  //     if (session) {

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
  }, [session]);

  //   console.log("abc");
  //   WebSocketInstance.fetchMessages(session);
  // }
  //   }, [session]);

  useEffect(() => {
    if (connection) {
      //   WebSocketInstance.addCallbacks(
      //     setMessages,
      //     addMessage
      // initialCheckActiveChatSession,
      // updatedetCHatSession
      //   );
      WebSocketInstance.fetchMessages(session);
      // WebSocketInstance.fetchUserChatGroups(chatSessionId);
    }
  }, [connection]);

  useEffect(() => {
    setChatMessages(messages);
  }, [messages]);

  useEffect(() => {
    setChatMessages((messages) => [...messages, newMessage]);
  }, [newMessage]);

  useEffect(() => {
    scrollREf.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  const renderMessages = (messages) => {
    const currentUser = userData?.pk;
    return messages.map((message, i) => (
      <li
        key={message?.id}
        className={`
          ${message?.author !== currentUser ? " " : "ml-[20%] "}
          w-[80%] break-words overflow-wrap  rounded-xl`}
      >
        <div
          className={`
            ${
              message?.author !== currentUser
                ? " justify-start items-start "
                : " items-end justify-end  "
            } flex flex-col rounded-xl my-4`}
        >
          <p
            className={`${
              message?.author !== currentUser
                ? "bg-[#f0f0f0] text-left rounded-r-full rounded-tl-full "
                : "text-right bg-[#3369FF] text-white rounded-l-full rounded-br-full"
            } px-3 py-1 rounded-md z-100 break-words`}
          >
            {message?.message}
          </p>
        </div>
      </li>
    ));
  };

  const sendMessageHandler = (values) => {
    const messageObject = {
      from: userId,
      content: values.chatMessage,
      sessionId: session,
    };
    // console.log("messageObjectmessageObject", messageObject);
    WebSocketInstance.newChatMessage(messageObject);
    form.resetFields();
  };

  return (
    <div className="flex h-[calc(100vh-60px)]">
      <div className="w-full flex flex-col justify-between" ref={chatRef}>
        <section className="h-[88%] overflow-x-auto">
          <ul className="list-none m-0 p-0 mx-4 md:mx-8">
            {chatMessages && renderMessages(chatMessages)}
            <div ref={scrollREf} />
          </ul>
        </section>

        <div className="h-[12%] w-full flex items-center bg-[#ccc]">
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
              <SubmitButton form={form} />

              {/* <Button
                // disabled={connection ? false : true}
                size="large"
                type="primary"
                htmlType="submit"
                shape="circle"
                icon={<SendOutlined className="pl-1 pt-1" />}
              /> */}
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
