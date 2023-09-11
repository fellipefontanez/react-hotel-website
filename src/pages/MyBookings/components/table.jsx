import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../../../public/style/bookingTable.css";
import {
  minusDay,
  plusDay,
  removeAll,
  removeByPosition,
} from "../../../store/reducers/booking";
import ProceedCheckout from "./proceed";

export default function BookingTable() {
  const selectedRooms = useSelector((state) => state.booking);
  const dispatch = useDispatch();
  const [totalValue, setTotalValue] = useState();

  useEffect(() => {
    setTotalValue(calculateTotalValue());
  }, [selectedRooms]);

  function addDay(index) {
    dispatch(plusDay(index));
  }
  function removeDay(index) {
    dispatch(minusDay(index));
  }
  function removeBooking(index) {
    dispatch(removeByPosition(index));
  }
  function deleteAllBookings() {
    dispatch(removeAll());
  }
  const calculateTotalValue = () => {
    let total = 0;
    for (const book of selectedRooms) total += book.bookPrice;
    return total;
  };

  return (
    <section className="bookingTableContainer">
      <table className="bookingTable">
        <thead>
          <tr className="bookingTable__header">
            <th></th>
            <th>Location</th>
            <th>Days</th>
            <th>Price</th>
            <th className="trashAll" onClick={deleteAllBookings}>
              <iconify-icon icon="mdi:trash"></iconify-icon>
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedRooms.map((room, index) => (
            <tr className="bookingTable__body" key={index}>
              <td>{index + 1}</td>
              <td>{room.location}</td>
              <td className="tableDays">
                <button
                  type="button"
                  className="buttonDays"
                  onClick={() => removeDay(index)}
                  disabled={room.days <= 1}
                >
                  <iconify-icon icon="ei:minus"></iconify-icon>
                </button>
                {room.days}
                <button
                  type="button"
                  className="buttonDays"
                  onClick={() => addDay(index)}
                >
                  <iconify-icon icon="ei:plus"></iconify-icon>
                </button>
              </td>
              <td>{room.bookPrice}</td>
              <td className="trash" onClick={() => removeBooking(index)}>
                <iconify-icon icon="mdi:trash"></iconify-icon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bookingResults">
        Total value <span>${totalValue}</span>
      </div>
      <ProceedCheckout />
    </section>
  );
}
