import logo from './logo.svg';
import './App.css';

import { Provider } from "react-redux";
import { useStore } from "./store/store.js";
import MyRoutes from './myRoutes';
import { BrowserRouter } from "react-router-dom";

function App(props) {
  const store = useStore(props.initialReduxState);
  return (
    <Provider store={useStore(store)}>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
