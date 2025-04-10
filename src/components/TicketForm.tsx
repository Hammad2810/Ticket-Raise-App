import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTicket } from "../redux/ticketSlice";
import { toast, Toaster } from "react-hot-toast";

const TicketForm: React.FC = () => {

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    issue: "",
    description: "",
    status: "Open" as "Open" | "Closed",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.title || !form.issue || !form.description) {
      toast.error("All fields are required ✍");
      return;
    }

    dispatch(addTicket({ ...form, id: Date.now() }));
    toast.success("Ticket submitted successfully ✔");
    setForm({ title: "", issue: "", description: "", status: "Open" });
    
  };

  return (
    <div className="max-w-xl pt-24 mx-auto p-6 bg-white rounded-lg">

      <Toaster position="top-right" toastOptions={{ duration: 3000 , style: {marginTop: "80px"}}} />

      <h2 className="text-2xl text-center underline font-bold pt-16 mb-6 text-gray-800">
        Raise a Ticket
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 mt-20">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-900"
        />
        <input
          name="issue"
          placeholder="Issue"
          value={form.issue}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-900"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-900"
        />
        <input
          name="status"
          value={form.status}
          readOnly
          className="w-full border outline-none p-3 rounded cursor-not-allowed"
        />
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 font-bold rounded hover:bg-blue-950 transition"
        >
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;