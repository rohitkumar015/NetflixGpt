import { createBrowserRouter, useNavigate } from "react-router-dom";
import "./App.css";

import Browser from "./Component/Browser";
import { RouterProvider } from "react-router-dom";
import Signup from "./Component/Signup";
import Body from "./Component/Body";
import appStore from "./Utils/appStore";
import { Provider, useDispatch } from "react-redux";
import Login from "./Component/Login";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./Utils/userSlice";
function App() {

  const appRouters = createBrowserRouter([
    {
      element: <Login />,
      path: "/",
    },
    {
      element: <Browser />,
      path: "/Browser",
    },
    {
      element: <Signup />,
      path: "/Signup",
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={appRouters}>
        <Body></Body>
      </RouterProvider>
    </div>
  );
}

export default App;
