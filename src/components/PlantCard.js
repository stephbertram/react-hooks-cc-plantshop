import { useState } from "react";
import { FaTrash } from "react-icons/fa"

function PlantCard({ plantObj, onDeleteClick }) {

  const { name, image, price, id } = plantObj
  const [inStock, setInStock] = useState("true")

  const handleButtonClick = () => {
    setInStock(current => !current)
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
        method: "DELETE"
      })
      .then (resp => resp.json())
      .then (() => onDeleteClick(plantObj))
  }

  return (
    <li className="card" data-testid="plant-item">
      <button className="remove" onClick={handleDeleteClick}><FaTrash /></button>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" value={inStock} onClick={handleButtonClick}>In Stock</button>
      ) : (
        <button value={inStock} onClick={handleButtonClick}>Out of Stock</button>
      )}
      
    </li>
  );
}

export default PlantCard;
