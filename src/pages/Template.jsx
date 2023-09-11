import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBookings, hasBookings } from "../services/bookings";
import { useEffect } from "react";
import { addAll } from "../store/reducers/booking";

const Template = () => {
  const dispatch = useDispatch();
  function setBookingsFromLocalStorage() {
    if (hasBookings()) {
      dispatch(addAll(getBookings()));
    }
  }
  useEffect(() => {
    setBookingsFromLocalStorage();
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Template;
