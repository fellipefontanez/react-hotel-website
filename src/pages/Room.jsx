import "../../public/style/room.css"
import axios from 'axios';
import { useState, useEffect } from "react";

function Room () {
    const dataUrl = "https://raw.githubusercontent.com/fellipefontanez/mockup/main/fakedb.json";
    const [room, setRoom] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(dataUrl)
            .then(res => {
                setRoom(res.data);
                setLoading(false);
            });
    }, [])

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        )
    }
    const roomAdress = "Avenida 25 de Maio - 120, São Paulo, SP";
    const roomDescription = "This room will guarantee you a clean and beatiful overview of São Paulo. Our room service is ready to attend the most sofisticated request. Book in and feel home.";
        return (
           <div className="room-container">
               <div className="img-info">
                   <img src={room[8].image} alt="Room Image" />
                   <div className="imgTextContainer">
                       <div className="roomName">
                            <p id="roomLocation" className="roomLocation">{room[8].location}</p>
                            <p className="value">${ room[8].price} Day</p>
                       </div>
                       <div className="roomRating">
                           <p id="stars">&#9733; 4.8 </p>
                           <p id="comments">25 Comments</p>
                           <p id="type">Grand-Confort</p>
                           <p id="adress">{ roomAdress }</p>
                       </div>
                   </div>
               </div>
               <div className="roomDesc">
                    <p id="description">{ roomDescription }</p>
                   <img src="https://img.icons8.com/ios/50/000000/tags--v1.png"/>
               </div>
                <div className="reserve-container">
                    <form action="">
                        <input className="reserveBtn" type="button" value="Book in" />
                    </form>
               </div>
           </div>
       )
    }

export default Room;