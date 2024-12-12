import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Registration from "../../Pages/Registation"


function Router() {
    let router=createBrowserRouter([
        {
            path:"/",element:<Registration/>
        },
        {
            path:"/login",element:<h1>login</h1>
        },
        {
            path:"/varification",element:<h1>varification</h1>
        },
        {
            path:"/Otp-varification",element:<h1>Otp-varification</h1>
        },
        {
            path:"/reset-passwrod",element:<h1>reset-passwrod</h1>
        },
    ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Router