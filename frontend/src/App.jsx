import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import { SearchBar } from "./components/Navbar.jsx";
import InventoryTable from "./components/InventoryTable.jsx";

import './index.css'

const INVENTORY_URL = 'http://127.0.0.1:5000/example'




function App() {
  
  const [inventoryData, setInventoryData] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch(INVENTORY_URL)
      const data = await response.json()
      console.log(data)
      setInventoryData(data.message)
    };

    fetchData()

  }, [])


  return (
    <div>
      <Header />
      <Navbar />
      <InventoryTable />
      {inventoryData}
    </div>
      
  );
}

export default App;
