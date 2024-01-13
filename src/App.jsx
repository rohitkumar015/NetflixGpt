import { createBrowserRouter,  } from "react-router-dom";
import "./App.css";

import Browser from "./Component/Browser";
import { RouterProvider } from "react-router-dom";
import Signup from "./Component/Signup";
import Body from "./Component/Body";

import Login from "./Component/Login";


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
       
       <Browser></Browser>
     
      </RouterProvider>
    </div>
  );
}

export default App;
