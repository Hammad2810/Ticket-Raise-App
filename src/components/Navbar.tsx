import React from "react";
import { NavLink } from "react-router-dom";
import ticket from "../assets/ticket.png";
import { HiMiniHandRaised } from "react-icons/hi2";
import { FaTicketAlt } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex flex-col sm:flex-row sm:justify-between sm:items-center bg-blue-950 text-white p-5 sm:p-7 space-y-4 sm:space-y-0 shadow-md">
      <div>
        <NavLink to="/" className="text-2xl flex items-center gap-2 font-bold">
          <img className="w-8 h-8" src={ticket} />
          Ticket-Raise-App
        </NavLink>
      </div>

      <div className="text-center font-medium text-sm sm:text-base tracking-wide">
        MindStack Solutions : Assessment - 2
      </div>

      <div className="flex gap-6 sm:gap-11 justify-center">
        <NavLink to="/raise-ticket" className={({ isActive }) => isActive ? "font-bold flex items-center underline" : "flex items-center hover:font-bold"}>
          <HiMiniHandRaised className="mr-1" /> Raise Ticket
        </NavLink>
        <NavLink to="/all-tickets" className={({ isActive }) => isActive ? "font-bold flex items-center underline" : "flex items-center hover:font-bold"}>
          <FaTicketAlt className="mr-2" /> All Tickets
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;









