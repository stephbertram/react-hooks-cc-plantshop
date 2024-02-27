import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchQuery }) { 
    const plantsToDisplay = plants
      .filter(plantObj => searchQuery === "" || plantObj.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(plantObj => <PlantCard {...plantObj} key={plantObj.id} />)
  
  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
