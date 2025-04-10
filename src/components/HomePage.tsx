import React, { useState } from "react";
import help from "../assets/help.png";

const HomePage: React.FC = () => {
  
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-36 text-gray-800 relative">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to TicketRaise</h1>
          <p className="text-lg text-gray-600">
            Your one-stop solution for managing support tickets efficiently and effortlessly.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">What is TicketRaise?</h2>
            <p>
              TicketRaise is a lightweight, easy-to-use application designed to streamline the process of raising,
              tracking, and resolving support tickets. Whether you're part of a helpdesk, IT team, or customer support,
              TicketRaise keeps everything organized in one place.
            </p>
          </div>
          <div>
            <img
              src={help}
              className="w-full h-auto md:ml-10"
              loading="lazy"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Raise tickets with detailed issue descriptions</li>
            <li>Get Ticket No.</li>
            <li>Track ticket status: Open , Resolved</li>
            <li>Get email or in-app notifications</li>
            <li>Get fast resolving</li>
          </ul>
        </section>
      </div>









      <div className="fixed bottom-20 right-6">
        <button
          className="bg-blue-900 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-950 transition"
          onClick={() => setIsChatOpen((prev) => !prev)}>
          💬 Chat with us
        </button>
      </div>




    
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white border rounded-xl shadow-lg z-50 flex flex-col">
          <div className="bg-blue-900 text-white px-4 py-2 rounded-t-xl flex justify-between items-center">
            <span>Support Chat</span>
            <button onClick={() => setIsChatOpen(false)} className="text-white text-sm">
              ✖
            </button>
          </div>
          <div className="p-4 h-60 overflow-y-auto text-sm text-gray-700">
            <p><strong>Support:</strong> Hi there! How can we help you today?</p>
          </div>
          <div className="p-2 border-t flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow px-3 py-2 border rounded-l-md text-sm focus:outline-none"
            />
            <button 
              onClick={() => alert("Chat Support Coming Soon !!!")}
              className="bg-blue-900 text-white px-4 rounded-r-md hover:bg-blue-950 transition text-sm">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;


