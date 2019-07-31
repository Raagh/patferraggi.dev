import React from "react"
import Navbar from "../components/shared/navbar"
import Logo from "../components/shared/logo"

export default ({ children }) => (
  <main className="layout">
    <Logo></Logo>
    <Navbar></Navbar>
    {children}
  </main>
)
