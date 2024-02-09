import React from "react";
import { NavLink } from "react-router-dom";
import { GiBookAura } from "react-icons/gi";
import "./navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="containe w-full flex justify-between items-center bg-[#282A35] ">
        <NavLink to="/MSLbooks/">
          {" "}
          <div className="text-[#ddd] text-center font-semibold text-xl items-center justify-center flex">
            <GiBookAura className="m-2" />
            <span className="text-[#EEB63D]">MSL</span>BOOKS
          </div>
        </NavLink>

        <ul>
          <li className="inline-block m-5 text-[#ddd] font-semibold relative	">
            <NavLink exact to="/MSLbooks/">home</NavLink>
          </li>
          <li className="inline-block m-5 text-[#ddd] font-semibold relative	">
            <NavLink exact to="/about">about</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
