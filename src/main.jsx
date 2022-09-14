import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { DarkThemeProvider } from "./contexts/DarkThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkThemeProvider>
      <Router>
        <App />
      </Router>
    </DarkThemeProvider>
  </React.StrictMode>
);
