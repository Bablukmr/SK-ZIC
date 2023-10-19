import * as types from "./actionTypes.js";
import axios from "axios";
import { notification } from "antd";

export const userLogin = (token) => {
  return (dispatch) => {
    dispatch({
      type: types.USER_DETAIL,
      payload: {
        token: token,
        // loadingLogin: loadingLogin,
        // userId: userId,
        // username: username,
      },
    });
  };
};

export const chatMessages = (messages) => {
  return (dispatch) => {
    dispatch({
      type: types.CHAT_MESSAGE,
      payload: {
        messages: messages,
      },
    });
  };
};
export const newMessage = (newMessage) => {
  return (dispatch) => {
    dispatch({
      type: types.NEW_MESSAGE,
      payload: {
        newMessage: newMessage,
      },
    });
  };
};

export const chatSession = (session) => {
  // console.log("fg", session);
  return (dispatch) => {
    dispatch({
      type: types.CHAT_SESSION,
      payload: {
        session: session,
      },
    });
  };
};

export const userData = (userData) => {
  return (dispatch) => {
    dispatch({
      type: types.USER_DATA,
      payload: {
        userData: userData,
      },
    });
  };
};

export const userLogout = () => {
  localStorage.removeItem("token");
  return (dispatch) => {
    dispatch({
      type: types.USER_DETAIL,
      payload: {
        token: null,
      },
    });
  };
};

export const UrlTo = (url) => {
  return (dispatch) => {
    dispatch({
      type: types.URL,
      payload: {
        UrlToGo: url,
      },
    });
  };
};

export const userLogIn = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: types.USER_DETAIL,
      payload: {
        token: null,
        loadingLogin: true,
      },
    });
    axios
      .post("http://localhost:8000/dj-rest-auth/login/", {
        email: email,
        password: password,
      })
      .then((d) => {
        console.log(d);
        localStorage.setItem("token", d.data.key);
        dispatch(getUserData(d.data.key));
        dispatch({
          type: types.USER_DETAIL,
          payload: {
            token: d.data.key,
            loadingLogin: false,
          },
        });
      })
      .catch((e) => {
        notification["error"]({
          message: "Error !!",
          description: "Wrong Credentials.",
        });
        dispatch({
          type: types.USER_DETAIL,
          payload: {
            token: null,
            loadingLogin: false,
          },
        });
      });
  };
};

export const getUserData = (token) => {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/dj-rest-auth/user/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        // console.log('res', res);
        dispatch({
          type: types.USER_DATA,
          payload: {
            userData: res.data,
          },
        });
      })
      .catch((e) => {
        notification["error"]({
          message: "Error !!",
          description: "Something went wrong fetching user data.",
        });
      });
  };
};
