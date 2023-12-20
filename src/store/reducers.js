// import { combineReducers } from "redux";
import * as types from "./actionTypes";

const initialAuthState = {
  // username: null,
  token: null,
  loadingLogin: false,
  userId: null,
  userData: {},
  globals: null,
  favouriteMenus: null,
  urlToGo: null,
  messages: [],
  newMessage: null,
  session: null,
  darkMode: false,
  point: null,
};

const AuthReducer = (state = initialAuthState, { type, payload }) => {
  switch (type) {
    case types.URL:
      return {
        ...state,
        urlToGo: payload.UrlToGo,
      };

    case types.DARK_MODE:
      return {
        ...state,
        darkMode: payload.darkMode,
      };

    case types.USER_POINT:
      return {
        ...state,
        point: payload.point,
      };

    case types.CHAT_MESSAGE:
      return {
        ...state,
        messages: payload.messages,
      };

    case types.NEW_MESSAGE:
      return {
        ...state,
        newMessage: payload.newMessage,
      };

    case types.CHAT_SESSION:
      return {
        ...state,
        session: payload.session,
      };

    case types.USER_DATA:
      return {
        ...state,
        userData: payload.userData,
      };
    case types.USER_DETAIL:
      return {
        ...state,
        token: payload.token,
        loadingLogin: payload.loadingLogin,
        userId: payload.userId,
        // username: payload.username,
        // userId: payload.userId,
      };

    default:
      return state;
  }
};

export default AuthReducer;
