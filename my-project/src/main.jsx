import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Details from './Components/Details/Details.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/about',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/comments'),
        element:<About></About>
      },
      {
        path:'/about/:id',
        element:<Details></Details>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
      }
      ,
      {
        path:'/contact',
        element:<Contact></Contact>
      },
    ]
  },
 
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
