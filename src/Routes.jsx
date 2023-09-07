import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "./pages/Template";
import Home from "./pages/Home";
import Room from "./pages/Room";
import LoginForm from "./pages/Login-Form";
import { Navigate } from "react-router-dom";
import { createContext, useState } from "react";

export const SearchContext = createContext();

const AppRouter = () => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route index element={<Home />} />
            <Route path="/room" element={<Room />} />
            <Route path="profile" element={<LoginForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchContext.Provider>
  );
};

export default AppRouter;
