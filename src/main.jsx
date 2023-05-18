import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Layout/Home.jsx'
import Layout from './Components/Layout/Layout.jsx'
import AllToy from './Components/Pages/AllToy.jsx'
import MyToy from './Components/Pages/MyToy.jsx'
import AddToy from './Components/Pages/AddToy.jsx'
import Category from './Components/Pages/Sections/Category.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>
  },
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path:'alltoy',
        element:<AllToy></AllToy>
      },
      {
        path:'mytoy',
        element:<MyToy></MyToy>
      },
      {
        path:'addtoy',
        element: <AddToy></AddToy>
      },
      {
        path:'cat/:name',
        element:<Category></Category>,
        loader:({params})=>fetch(`http://localhost:5000/items?subcategory=${params.name}`)
        
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-11/12 mx-auto'>
    <RouterProvider router={router}>

<App />
</RouterProvider>
    </div>
  </React.StrictMode>,
)
