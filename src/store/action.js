import * as types from "./actionTypes.js";
import axios from "axios";
import { notification } from "antd";

export const changeDarkMode = (mode) => {
  return (dispatch) => {
    dispatch({
      type: types.DARK_MODE,
      payload: {
        darkMode: mode,
      },
    });
  };
};

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

export const userLogout = (token) => {
  return (dispatch) => {
    axios
      .post("https://api-dev.skzicph.com/users/logout/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((d) => {
        console.log(d);
        localStorage.removeItem("token");
        dispatch({
          type: types.USER_DETAIL,
          payload: {
            token: null,
          },
        });
      })
      .catch((e) => {
        localStorage.removeItem("token");
        dispatch({
          type: types.USER_DETAIL,
          payload: {
            token: null,
          },
        });
      });

    // localStorage.removeItem("token");
    // logout

    // return (dispatch) => {
    //   dispatch({
    //     type: types.USER_DETAIL,
    //     payload: {
    //       token: null,
    //     },
    //   });
    // };
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
      .post("https://api-dev.skzicph.com/dj-rest-auth/login/", {
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
        try {
          let d = e?.response?.data;
          console.log("ddddd", d);
          if (d) {
            if (d.non_field_errors && d.non_field_errors[0]) {
              if (d.non_field_errors[0] === "E-mail is not verified.") {
                notification["error"]({
                  message: "Error !!",
                  description: "Email is not verified..",
                });
              } else if (
                d.non_field_errors[0] ===
                "Unable to log in with provided credentials."
              ) {
                notification["error"]({
                  message: "Error !!",
                  description: "Wrong Credentials.",
                });
              }
            }
          } else {
            notification["error"]({
              message: "Error !!",
              description: "Something went wrong, try again.",
            });
          }
        } catch {
          notification["error"]({
            message: "Error !!",
            description: "Something went wrong, try again.",
            // description: "Wrong Credentialssss.",
          });
        }
        // console.log(e.response.data.non_field_errors[0]);
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
      // .get("https://api-dev.skzicph.com/dj-rest-auth/user/", {
      .get("https://api-dev.skzicph.com/users/loggedInUser/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log("res", res?.data[0]);
        dispatch({
          type: types.USER_DATA,
          payload: {
            userData: res?.data[0],
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

export const getUserPoint = (token, userId) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8000/qr/user-point?id=${userId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((d) => {
        dispatch({
          type: types.USER_POINT,
          payload: {
            point: d.data && Array.isArray(d.data) && d.data[0],
          },
        });
        // setPoint(d.data && Array.isArray(d.data) && d.data[0]);
        // console.log(d.data);
      })
      .catch((e) => {
        notification["error"]({
          message: "Error !!",
          description: "Something went wrong fetching user point.",
        });
      });

    // axios
    //   // .get("http://localhost:8000/dj-rest-auth/user/", {
    //   .get("http://localhost:8000/users/loggedInUser/", {
    //     headers: {
    //       Authorization: `Token ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log("res", res?.data[0]);
    //     dispatch({
    //       type: types.USER_DATA,
    //       payload: {
    //         userData: res?.data[0],
    //       },
    //     });
    //   })
    //   .catch((e) => {
    //     notification["error"]({
    //       message: "Error !!",
    //       description: "Something went wrong fetching user data.",
    //     });
    //   });
  };
};
