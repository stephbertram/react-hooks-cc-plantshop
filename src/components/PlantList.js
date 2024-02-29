import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchQuery, onDeleteClick }) { 
    const plantsToDisplay = plants
      .filter(plantObj => searchQuery === "" || plantObj.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(plantObj => <PlantCard plantObj={plantObj} key={plantObj.id} onDeleteClick={onDeleteClick} />)
  
  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
