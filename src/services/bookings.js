const key = "BOOKINGS";

export const setBookings = (allBooking) =>
  window.localStorage.setItem(key, JSON.stringify(allBooking));
export const getBookings = () =>
  hasBookings()
    ? JSON.parse(window.localStorage.getItem(key) || "")
    : undefined;
export const hasBookings = () => !!window.localStorage.getItem(key);
