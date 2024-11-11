import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import LoginPage from './component/LoginPage.jsx'
import ChangePassword from './component/ChangePassword.jsx'
import ForgotPassword from './component/ForgotPassword.jsx'
import RegisterForm from './component/RegisterForm.jsx'
import LoginForm from './component/LoginForm.jsx'
import TestForm from './component/TestForm.jsx'
import NomalForm from './component/NomalForm.jsx'
import TodoList from './component/TodoList.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />
  },
  {
    path: "/test",
    element: <TestForm />
  },
  {
    path: "/nomal",
    element: <NomalForm />
  },
  {
    path: "/todo",
    element: <TodoList />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
