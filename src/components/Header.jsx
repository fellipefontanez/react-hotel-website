import logo from "../assets/images/4.png";
import { Link } from "react-router-dom";
import {useContext} from "react";
import {SearchContext} from "../Routes";

const Header = () => {
  const { setSearch, search } = useContext(SearchContext);


    return (
        <div className="navbar-container">
      <div className="type">
        <img src={logo} alt="logo" />
        <div className="type-container">
          <label htmlFor="search" className="lblSearch">Search</label>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Where you wanna stay?"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="line"></div>
      <div className="navbar">
        <Link to={'home'}>Home</Link>
        <Link to={'profile'}>Profile</Link>
        <Link to={'bookings'}>My bookings</Link>
      </div>
    </div>
    )
}

export default Header;