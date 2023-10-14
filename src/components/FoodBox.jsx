import React from 'react';
import { Button } from "antd";

function FoodBox ({food, onDelete}) {
    const totalCalories = food.servings * food.calories

    const handleDelete = () => {
        onDelete(food.id);
      }

    return <div className = "food-container">
    <p>{food.name}</p>
    <hr />
  
    <img src={food.image} alt={food.name} />
  
    <p>Calories: {food.calories}</p>
    <p>Servings {food.servings}</p>
  
    <p>
      <b>Total Calories: {totalCalories}</b> kcal
    </p>
  
    <Button className="custom-button" onClick = {handleDelete}>Delete</Button>
  </div>
}

export default FoodBox