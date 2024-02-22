import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './styles/Global.styles.js'
import { GlobalContextProvider } from './contexts/globalContextProvider.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './components/Home/Home.jsx'
import Income from './components/Income/Income.jsx'
import Expenses from './components/Expenses/Expenses.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: "",
        element: <Home />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "Income",
        element: <Income />
      },
      {
        path: "Expense",
        element: <Expenses />
      },
      {
        path: "Register",
        element: <Register />
      },
      {
        path: "Login",
        element: <Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
      <GlobalContextProvider>
        {/* <App /> */}
        <RouterProvider router={router} />
      </GlobalContextProvider>
  </React.StrictMode>,
)
