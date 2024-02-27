import { useState } from "react";

function PlantCard({ name, image, price }) {

const [inStock, setInStock] = useState("true")

const handleButtonClick = () => {
  setInStock(current => !current)
}

  return (
    <li className="card" data-testid="plant-item">
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
