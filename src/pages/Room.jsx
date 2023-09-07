import { useLocation } from "react-router-dom";
import "../../public/style/room.css";
import { useState, useEffect } from "react";

function Room() {
  const dataUrl =
    "https://raw.githubusercontent.com/fellipefontanez/mockup/main/fakedb.json";
  const [room, setRoom] = useState();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  function setSelectedRoom() {
    setRoom(location.state?.room);
    setLoading(false);
  }

  useEffect(() => {
    setSelectedRoom();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
  if (room)
    return (
      <div className="room-container">
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
              <p id="adress">{room.address}</p>
            </div>
          </div>
        </div>
        <div className="roomDesc">
          <p id="description">{room.description}</p>
          <img src="https://img.icons8.com/ios/50/000000/tags--v1.png" />
        </div>
        <div className="reserve-container">
          <form action="">
            <input className="reserveBtn" type="button" value="Book in" />
          </form>
        </div>
      </div>
    );
  else return <>Não há quarto selecionado</>;
}

export default Room;
