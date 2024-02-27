import { useState } from "react";

function NewPlantForm({ onPlantFormSubmit }) {

  const [newPlantName, setNewPlantName] = useState("")
  const [newPlantImageUrl, setNewPlantImageUrl] = useState("")
  const [newPlantPrice, setNewPlantPrice] = useState("")


  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newPlant = {
      name: newPlantName,
      image: newPlantImageUrl,
      price: newPlantPrice
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(newPlant)
    })
      .then(resp => resp.json())
      .then(newPlant => onPlantFormSubmit(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlantName} onChange={e => setNewPlantName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlantImageUrl} onChange={e => setNewPlantImageUrl(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlantPrice} onChange={e => setNewPlantPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
