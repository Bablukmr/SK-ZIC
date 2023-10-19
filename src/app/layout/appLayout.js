import { useEffect, useState } from "react";
import AppHeader from "./appHeader";
import AppRoutes from "../appRoutes";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import LoadingAni from "../../components/loading";
import { useLocation } from "react-router-dom";
import { UrlTo } from "../../store/action";
import {
  userLogin,
  getUserData,
  chatSession,
  chatMessages,
  newMessage,
} from "../../store/action";
import axios from "axios";
import WebSocketInstance from "../../chat/websocket";

export default function AppLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const location = useLocation();

  const token = useSelector((state) => state.AuthReducer.token);
  const userData = useSelector((state) => state.AuthReducer.userData);

  const [connection, setConnection] = useState(false);
  //   const [messageList, setMessageList] = useState([]);
  //   const [chatSessionId, setChatSessionId] = useState(null);

  const [count, setCount] = useState(null);

  useEffect(() => {
    if (userData?.pk) {
      axios
        .get(`http://localhost:8000/chat/chat-master?id=${userData?.pk}`)
        .then((d) => {
          //   setChatSessionId(d.data[0]?.id);
          dispatch(chatSession(d.data[0]?.id));
          WebSocketInstance.connect(d.data[0]?.id);
          // WebSocketInstance.fetchMessages(d.data[0]?.id);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [userData]);

  useEffect(() => {
    if (!connection) {
      const interval = setInterval(() => {
        if (WebSocketInstance.state() !== 0) {
          if (WebSocketInstance.state() === 1) {
            setConnection(true);
            clearInterval(interval);
            // callback();
            // return;
          }
        } else {
          console.log("waiting for connection");
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (connection) {
      WebSocketInstance.addCallbacks(
        setMessages,
        addMessage
        // initialCheckActiveChatSession,
        // updatedetCHatSession
      );
      //   WebSocketInstance.fetchMessages(chatSessionId);
      // WebSocketInstance.fetchUserChatGroups(chatSessionId);
    }
  }, [connection]);

  const setMessages = (data) => {
    dispatch(chatMessages(data));
  };
  const addMessage = (message) => {
    setCount((count) => count + 1);
    dispatch(newMessage(message));
  };

  useEffect(() => {
    if (!token) {
      const tokenn = localStorage.getItem("token");
      if (tokenn) {
        dispatch(userLogin(tokenn));
        dispatch(getUserData(tokenn));
        const id = searchParams.get("id");
        let route;
        if (id) {
          route = location?.pathname + "?id=" + id;
        } else {
          route = location?.pathname;
        }
        dispatch(UrlTo(route));
      } else {
        navigate("/signin");
        window.location.reload();
      }
    }
  }, [token]);

  return !token ? (
    <div className="flex items-center h-screen">
      <LoadingAni />
    </div>
  ) : (
    <div className="w-full bg-[redd]">
      <div className="h-[60px]">
        <AppHeader count={count} />
      </div>
      <div className="min-h-[calc(100vh-60px)] bg-[greeen]">
        <AppRoutes />
      </div>
    </div>
  );
}
