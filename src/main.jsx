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
import Cart from './Components/Pages/Cart/Cart.jsx'
import AuthProvider from './Components/Provider/AuthProvider.jsx'
import Login from './Components/Pages/Login/Login.jsx'
import Reg from './Components/Pages/Reg/Reg.jsx'

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
        element:<AllToy></AllToy>,
        loader:()=> fetch('http://localhost:5000/items')
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
        
      },
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'reg',
        element:<Reg></Reg>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <div className='w-11/12 mx-auto'>
    <RouterProvider router={router}>

<App />
</RouterProvider>
    </div>
  </AuthProvider>
  </React.StrictMode>,
)
