import React, { useEffect, useState } from "react";


import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import { SearchBar } from "./components/Navbar.jsx";
import InventoryTable from "./components/InventoryTable.jsx";
import './index.css'



function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <InventoryTable />
    </div>
      
  );
}

export default App;
