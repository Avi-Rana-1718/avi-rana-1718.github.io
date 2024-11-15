import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/Index.jsx'
import Blog from './pages/Blog.jsx'

let router = createBrowserRouter([
  {
    path:"/",
    element: <Index />
  },
  {
    path: "/blogs/:id",
    element: <Blog />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
