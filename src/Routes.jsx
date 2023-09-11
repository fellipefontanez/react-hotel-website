import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "./pages/Template";
import Home from "./pages/Home";
import Room from "./pages/Room";
import LoginForm from "./pages/Login-Form";
import { Navigate } from "react-router-dom";
import { createContext, useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import MyBookings from "./pages/MyBookings";

export const SearchContext = createContext();

const AppRouter = () => {
  const [search, setSearch] = useState("");

  return (
    <Provider store={store}>
      <SearchContext.Provider value={{ search, setSearch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Template />}>
              <Route index element={<Home />} />
              <Route path="room" element={<Room />} />
              <Route path="profile" element={<LoginForm />} />
              <Route path="bookings" element={<MyBookings />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchContext.Provider>
    </Provider>
  );
};

export default AppRouter;
