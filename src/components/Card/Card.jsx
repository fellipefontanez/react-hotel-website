import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ room, position }) {
  const navigate = useNavigate();
  const handleCard = (link) => {
    window.scroll({ top: 0, behavior: "instant" });
    navigate(link);
  };
  return (
    <div
      key={room.location + room.tags + position}
      onClick={() => handleCard("room")}
      className="container"
    >
      <img className="imgRoom houston" src={room.image} alt="Room" />
      <div className="content-container">
        <p className="city">{room.location}</p>
        <div className="tags">
          <ul>
            {room.tags.map((tag, index) => (
              <li key={tag + index}>
                {index !== 0 && <span>•</span>}
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="price">
          <div className="value">${room.price}</div>
          <div className="per">Day</div>
        </div>
      </div>
    </div>
  );
}
