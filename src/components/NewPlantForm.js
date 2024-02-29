import { useState } from "react";

const initialState = {
  name: "",
  image: "",
  price: ""
}

const URL = "http://localhost:6001/plants"

function NewPlantForm({ onPlantFormSubmit }) {

  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON", 
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(newPlant => onPlantFormSubmit(newPlant))
      setFormData(initialState)
      .catch(err => setError(err.message))
  }

  return (
    <div className="new-plant-form">
      {error ? <span>{error}</span> : null}
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.number} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
