import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import ForgotPassword from '../components/ForgotPassword';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SignUp />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/forgotPassword',
        element: <ForgotPassword />
    }
])

export default router;