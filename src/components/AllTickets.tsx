import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteTicket, markResolved } from "../redux/ticketSlice";
import { MdDeleteForever } from "react-icons/md";

const AllTickets: React.FC = () => {

  const tickets = useSelector((state: RootState) => state.tickets);

  const dispatch = useDispatch();

  const [searchId, setSearchId] = useState("");
  
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredTickets = [...tickets]
    .filter((ticket) =>
      searchId.trim() === "" || ticket.id.toString().includes(searchId.trim())
    )
    .filter((ticket) => {
      if (statusFilter === "All") return true;
      return ticket.status === statusFilter;
    })
    .sort((a, b) => a.id - b.id);

  return (
    <div className="max-w-4xl pt-24 mx-auto">
      <div className="sticky top-16 z-10 bg-white pt-6 pb-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 underline">All Tickets</h2>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by Ticket ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-900"/>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-3 border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring focus:ring-blue-900">
          <option value="All">All</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      </div>

      <div className="space-y-4">
        {tickets.length === 0 && "No Tickets..."}
        {filteredTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="p-4 border rounded-lg shadow-md bg-white transition-all">
            <div className="flex justify-between items-center mb-2">
              <h3
                className={`text-lg font-semibold ${ticket.status === "Closed" ? "line-through text-gray-600" : ""}`}>
                #{ticket.id}
              </h3>
              <div className="flex gap-2">
                {ticket.status !== "Closed" && (
                  <button
                    onClick={() => dispatch(markResolved(ticket.id))}
                    className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600">
                    Mark As Resolved
                  </button>
                )}
                <button
                  onClick={() => dispatch(deleteTicket(ticket.id))}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">
                  <MdDeleteForever />
                </button>
              </div>
            </div>
            <p
              className={`mb-1 ${ticket.status === "Closed" ? "line-through text-gray-600" : ""}`}>
              <strong>Title:</strong> {ticket.title}
            </p>
            <p
              className={`mb-1 ${ ticket.status === "Closed" ? "line-through text-gray-600" : "" }`}>
              <strong>Issue:</strong> {ticket.issue}
            </p>
            <p
              className={`mb-2 ${ticket.status === "Closed" ? "line-through text-gray-600" : ""}`}>
              <strong>Description:</strong> {ticket.description}
            </p>
            <span
              className={`text-sm font-medium ${ticket.status === "Closed" ? "text-red-500" : "text-green-600"}`}>
              <strong>Status:</strong> {ticket.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTickets;