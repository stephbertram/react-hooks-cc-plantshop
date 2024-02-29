import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchQuery, onDeleteClick, onEditClick }) { 
    const plantsToDisplay = plants
      .filter(plantObj => searchQuery === "" || plantObj.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(plantObj => <PlantCard plantObj={plantObj} key={plantObj.id} onDeleteClick={onDeleteClick} onEditClick={onEditClick}/>)
  
  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
