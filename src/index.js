import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInSide from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/DashBoard';
import Favorites from './pages/Favorites';
import UserManagement from './pages/UserManagement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInSide/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/home",
    element: <Dashboard/>
  },
  {
    path: "/favorites",
    element: <Favorites/>
  },
  {
    path: "/users",
    element: <UserManagement/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);