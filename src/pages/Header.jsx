import { Outlet, Link } from "react-router"
import React from 'react'
import Nav from "../components/nav"
import "../App.css"

function Header() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Header
