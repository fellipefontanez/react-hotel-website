import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../Routes";
import Card from "../components/Card/Card";

// URL's dos dados
const dataUrl =
  "https://raw.githubusercontent.com/fellipefontanez/mockup/main/fakedb.json";

const Home = () => {
  const [quarto, setQuarto] = useState([]);

  const { search } = useContext(SearchContext);
  const [filtredList, setFiltredList] = useState(quarto);
  let effectSearch;

  useEffect(() => {
    axios.get(dataUrl).then((res) => {
      setQuarto(res.data);
    });
  }, []);

  useEffect(() => {
    clearTimeout(effectSearch);
    const searchList = quarto.filter((room) => {
      switch (true) {
        case room.location.toUpperCase().includes(search.toUpperCase()):
          return true;
        case room.price <= Number(search):
          return true;
        case room.tags.some((tag) =>
          tag.toUpperCase().includes(search.toUpperCase())
        ):
          return true;
        default:
          return false;
      }
    });
    effectSearch = setTimeout(() => setFiltredList(searchList), 600);
  }, [search, quarto]);

  return (
    <main className="main">
      <section className="cards-container">
        {filtredList.map((room, index) => (
          <Card
            room={room}
            position={index}
            key={index}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
