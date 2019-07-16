import React from "react"
import Navbar from "../components/navbar"
import Logo from "../components/logo"

export default ({ children }) => (
  <main className="layout">
    <Logo></Logo>
    <Navbar></Navbar>
    {children}
  </main>
)
