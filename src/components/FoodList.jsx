import React, { useState } from 'react';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import SearchBar from './SearchBar'
import foodsJson from "../foods.json";


function FoodList() {
  const [foods, setFoods] = useState(foodsJson)
  const [term, setSearchTerm] = useState('')

  const deleteItem = (foodId) => {
    const updatedFoods = foods.filter((food) => food.id !== foodId)
    setFoods(updatedFoods)
  }

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term)
  }
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div className="FoodList">
      <h2>Search</h2>
      <SearchBar onSearch={handleSearch} />
      <h1>Food List</h1>
      <div className="list">
        {filteredFoods.length === 0 ? (<p> Oops! There is no more content to show! </p>) : filteredFoods.map((food) => <FoodBox key={food.id} food={food} onDelete={deleteItem} />)}
      </div>
      <AddFoodForm onAddFood={addFood} />
    </div>
  );
}

export default FoodList