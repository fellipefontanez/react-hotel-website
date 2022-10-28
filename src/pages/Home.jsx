import axios from "axios";
import {useContext , useEffect, useState} from "react";
import {SearchContext} from "../Routes";
import { useNavigate } from "react-router-dom";

// URL's dos dados
const dataUrl = "https://raw.githubusercontent.com/fellipefontanez/mockup/main/fakedb.json";

const Home = () => {
  
  const navigate = useNavigate();

  //Fetch data from mock
  const [quarto, setQuarto] = useState([]);
  
  const {search} = useContext(SearchContext);
  const [filtredList, setFiltredList] = useState(quarto);
  let effectSearch;

  useEffect(()=>{
    axios.get(dataUrl)
      .then(res => {
        setQuarto(res.data)
      })
  }, [])

    useEffect(() => {
      clearTimeout(effectSearch);
      const searchList = quarto.filter((room) => {
        switch (true) {
          case room.location.toUpperCase().includes(search.toUpperCase()):
            return true;
          case room.price <= Number(search):
            return true;
          case room.tags.some((tag) => tag.toUpperCase().includes(search.toUpperCase())):
            return true;
          default:
            return false;
        }
      });
      effectSearch = setTimeout(() => setFiltredList(searchList), 600);
    },[search,quarto]);

    const handleCard = (link) => {
      navigate(link);
    }

    //Body of page
    return (
      <div className="main">
      {filtredList.map((room,index) => (
        <div key={room.location + room.tags + index} onClick={() => handleCard('room')} className="container">
        <img className="imgRoom houston" src={room.image} alt="Room" />
        <div className="content-container">
          <p className="city">{room.location}</p>
          <div className="tags">
            <ul>
              {room.tags.map((tag ,index) => (
                  <li key={tag + index}>{index !== 0 && <span>•</span>}{tag}</li>
              ))}
            </ul>
          </div>
          <div className="price">
            <div className="value">${room.price}</div>
            <div className="per">Day</div>
          </div>
        </div>
      </div>
      ))}
    </div>
    )
}

export default Home;