import "./styles.css";
import React, { useState } from "react";
import { createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Sidebar";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
