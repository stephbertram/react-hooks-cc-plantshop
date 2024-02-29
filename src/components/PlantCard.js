import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa"

function PlantCard({ plantObj, onDeleteClick, onEditClick }) {

  const [inStock, setInStock] = useState("true")

  const handleButtonClick = () => {
    setInStock(current => !current)
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/plants/${plantObj.id}`, {
        method: "DELETE"
      })
      .then (resp => resp.json())
      .then (() => onDeleteClick(plantObj))
  }

  // Start Here -- create edit functionality

  const handleEditClick = () => {
    fetch(`http://localhost:6001/plants/${plantObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: updatedPrice,
      }),
    })
      .then(resp => resp.json())
      .then((editedPlant) => onEditClick(editedPlant))
  }

  return (
    <li className="card" data-testid="plant-item">
      <button className="edit" onClick={handleEditClick}><FaPencilAlt /></button>
      <button className="remove" onClick={handleDeleteClick}><FaTrash /></button>
      <img src={plantObj.image} alt={plantObj.name} />
      <h4>{plantObj.name}</h4>
      <p>Price: {plantObj.price}</p>
      {inStock ? (
        <button className="primary" value={inStock} onClick={handleButtonClick}>In Stock</button>
      ) : (
        <button value={inStock} onClick={handleButtonClick}>Out of Stock</button>
      )}
      
    </li>
  );
}

export default PlantCard;
