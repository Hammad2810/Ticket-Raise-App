
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import TicketForm from "./components/TicketForm";
import AllTickets from "./components/AllTickets";
import Footer from "./components/Footer";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <HomePage />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/raise-ticket",
      element: (
        <div>
          <Navbar />
          <TicketForm />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/all-tickets",
      element: (
        <div>
          <Navbar />
          <AllTickets />
          <Footer/>
        </div>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;