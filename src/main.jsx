import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Routes";
import "./index.css";

const mainContent = document.getElementById("mainContent");
const rootMain = ReactDOM.createRoot(mainContent);
rootMain.render(<AppRouter />);
