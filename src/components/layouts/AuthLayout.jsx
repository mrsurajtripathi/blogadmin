import React from 'react'
import { Outlet } from 'react-router'
import { Navbars } from '../Navbars'
export const AuthLayout = () => {
  return (
    <>
        <Navbars/>
        <Outlet/>
    </>
  )
}
