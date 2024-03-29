import { useLocation } from "react-router-dom";
import "../../public/style/room.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/reducers/booking";

function Room() {
  const [room, setRoom] = useState();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();

  function triggerAnimation() {
    const button = document.getElementById("bookIn");
    button.classList.add("button-animation");
    button.innerText = "Booked";
    button.setAttribute("disabled", true);
    setTimeout(() => {
      button.classList.remove("button-animation");
    }, 3000);
  }

  function bookIn() {
    triggerAnimation();
    dispatch(add(room));
  }

  function setSelectedRoom() {
    setRoom(location.state?.room);
    setLoading(false);
  }

  useEffect(() => {
    setSelectedRoom();
  }, []);

  if (loading)
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );

  if (room)
    return (
      <main className="room-container">
        <section className="room-details">
          <div className="img-info">
            <img src={room.image} alt="Room Image" />
            <div className="imgTextContainer">
              <div className="roomName">
                <p id="roomLocation" className="roomLocation">
                  {room.location}
                </p>
                <p className="value">${room.price} Day</p>
              </div>
              <div className="roomRating">
                <p id="stars">&#9733; 4.8 </p>
                <p id="comments">25 Comments</p>
                <p id="type">Grand-Confort</p>
              </div>
              <p id="adress">{room.address}</p>
            </div>
          </div>
          <div className="roomDesc">
            <p id="description">{room.description}</p>
          </div>
          <div className="reserve-container">
            <button
              className="reserveBtn"
              type="button"
              id="bookIn"
              onClick={bookIn}
            >
              Book in
            </button>
          </div>
        </section>
      </main>
    );
  else return <>Não há quarto selecionado</>;
}

export default Room;
