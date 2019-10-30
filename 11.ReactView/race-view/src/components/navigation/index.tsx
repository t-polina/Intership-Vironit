import { NavLink } from "react-router-dom";
import React from 'react'

const Navigation = () => (
    <div className="App" >
    <ul className="navBar">
      <li><NavLink to="/user">Users</NavLink></li>
      <li><NavLink to="/league">League</NavLink></li>
      <li><NavLink to="/stage">Stage</NavLink></li>
      <li><NavLink to="/race">Race</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/registration">Registration</NavLink></li>
    </ul>
  </div>
)

export default Navigation