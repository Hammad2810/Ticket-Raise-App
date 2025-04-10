import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-blue-950 text-white text-center shadow-inner">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} TicketRaiseApp. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">👉 Built for - MindStack Solutions Pvt. Ltd. 🏢</p>
      </div>
    </footer>
  );
};

export default Footer;
