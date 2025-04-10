import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Ticket {
  id: number;
  title: string;
  issue: string;
  description: string;
  status: "Open" | "Closed";
}

const initialState: Ticket[] = JSON.parse(localStorage.getItem("tickets") || "[]");

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<Ticket>) => {
      state.push(action.payload);
      localStorage.setItem("tickets", JSON.stringify(state));
    },
    markResolved: (state, action: PayloadAction<number>) => {
      const ticket = state.find((t) => t.id === action.payload);
      if (ticket) {
        ticket.status = "Closed";
        localStorage.setItem("tickets", JSON.stringify(state));
      }
    },
    deleteTicket: (state, action: PayloadAction<number>) => {
      const updated = state.filter((t) => t.id !== action.payload);
      localStorage.setItem("tickets", JSON.stringify(updated));
      return updated;
    },
  },
});

export const { addTicket, markResolved, deleteTicket } = ticketSlice.actions;
export default ticketSlice.reducer;