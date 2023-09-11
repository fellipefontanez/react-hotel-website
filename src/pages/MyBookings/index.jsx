import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookingTable from "./components/table";
import EmptyPage from "./components/emptyPage";
import styles from "../../../public/style/bookingPage.css";

export default function MyBookings() {
  const bookedRooms = useSelector((state) => state.booking);
  const [CurrentComponent, setCurrentComponent] = useState(<EmptyPage />);
  const obj = {
    empty: <EmptyPage />,
    table: <BookingTable />,
  };
  useEffect(() => {
    setCurrentComponent(bookedRooms?.length ? obj["table"] : obj["empty"]);
  }, [bookedRooms]);

  return <main className="bookingMain">{CurrentComponent}</main>;
}
