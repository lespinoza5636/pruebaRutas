import React from 'react'
import { Navigate } from 'react-router-dom';

function Login() {

  const isAuthenticated = true;

  if (isAuthenticated)
    return <Navigate to="/" />

  return (
    <div>Login</div>
  )
}

export default Login