import React from 'react'
import { Outlet } from 'react-router-dom'
import "./UserPage.css"

const UserPage = () => {
  return (
    <div id='user-page-outlet'>
      <Outlet></Outlet>
    </div>
  )
}

export default UserPage
