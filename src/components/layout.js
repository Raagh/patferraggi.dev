import React from "react"
import Navbar from "../components/navbar"

export default ({ children }) => (
  <main className="layout">
    <Navbar></Navbar>
    {children}
  </main>
)
