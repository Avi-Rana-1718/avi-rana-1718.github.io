import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/Index.jsx'
import Projects from './pages/Project.jsx'
import Blog from './pages/Blog.jsx'
import Socials from './pages/Socials.jsx'
import Error404 from './pages/Error404.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error404 />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/Blogs",
    element: <Blog />
  },
  {
    path: "/Socials",
    element: <Socials />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
