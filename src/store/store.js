import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./reducers/booking";

export default configureStore({
  reducer: { booking: bookingReducer },
});
