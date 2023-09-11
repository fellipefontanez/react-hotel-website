import { createSlice } from "@reduxjs/toolkit";
import { setBookings } from "../../services/bookings";

export const bookingSlice = createSlice({
  name: "booking",
  initialState: [],
  reducers: {
    addAll: (state, action) => {
      setBookings(action.payload);
      return [...action.payload];
    },
    add: (state, action) => {
      state.push({
        ...action.payload,
        days: 1,
        bookPrice: action.payload.price,
      });
      setBookings(state);
    },
    removeByPosition: (state, action) => {
      state.splice(action.payload, 1);
      setBookings(state);
    },
    removeAll: (state) => {
      setBookings("");
      return [];
    },
    plusDay: (state, action) => {
      const book = state[action.payload];
      book.days++;
      book.bookPrice = book.price * book.days;
      setBookings(book);
    },
    minusDay: (state, action) => {
      const book = state[action.payload];
      book.days--;
      book.bookPrice = book.price * book.days;
      setBookings(book);
    },
  },
});

export const { addAll, add, removeByPosition, removeAll, plusDay, minusDay } =
  bookingSlice.actions;
export default bookingSlice.reducer;
