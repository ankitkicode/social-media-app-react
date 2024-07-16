import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthLayout = () => {
 const isAuthenticated = false
  return (
    <div>
      {isAuthenticated ? (
        <Navigate to='/'/>
      ) : (
        <section>
          <Outlet/>
        </section>
      )}
    </div>
  )
}

export default AuthLayout
