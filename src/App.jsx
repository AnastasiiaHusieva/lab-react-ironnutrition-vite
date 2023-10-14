import "./App.css";
import foodsJson from "./foods.json";
import FoodList from './components/FoodList';
import React, { useState } from 'react';


function App() {
  
  return (
    <div className="App">
       <FoodList />
    </div>
  );
}

export default App;
