
import Home from "./pages/Home"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Homeloader } from "./utils/loaders"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    loader : Homeloader,
  }
])


const App = () => {
  
  return (
      <RouterProvider router={router}/>
      
  )
}

export default App
