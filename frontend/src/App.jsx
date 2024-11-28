import React, { useEffect, useState } from "react";

import Home from './HomePage.jsx'
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import { SearchBar } from "./components/Navbar.jsx";
import './index.css'



function App() {
  return (
    <div>
      <Header />
      <Navbar />
      
    </div>
      
  );
}

export default App;
