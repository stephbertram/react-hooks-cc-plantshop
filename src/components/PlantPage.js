import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [error, setError] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const URL = "http://localhost:6001/plants"
  
  useEffect (() => {
      fetch(URL)
        .then(resp => resp.json())
        .then(data => setPlants(data))
        .catch(err => setError(err.message))
    }
    , [])

  const onPlantFormSubmit = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <main>
      {error ? <span>{error}</span> : null}
      <NewPlantForm onPlantFormSubmit={onPlantFormSubmit}/>
      <Search handleSearch={handleSearch} searchQuery={searchQuery} />
      <PlantList plants={plants} searchQuery={searchQuery}/>
    </main>
  );
}

export default PlantPage;
