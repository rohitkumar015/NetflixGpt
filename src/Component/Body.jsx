import React from 'react'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import Browser from './Browser'
import { RouterProvider } from 'react-router-dom'
import Signup from './Signup'
const Body = () => {


    const appRouters =createBrowserRouter(
        [
            {
                element:<Login/>,
                path:'/'
            },
            {
                element:<Browser/>,
                path:'/Browser'
            },
            {
                element:<Signup/>,
                path:'/Signup'
            }
        ]
    )
  return (
    <div>
        <RouterProvider router={appRouters}>
            
        </RouterProvider>
        
    </div>
  )
}

export default Body