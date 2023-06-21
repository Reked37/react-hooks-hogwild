import React, {useState} from "react"
import HogCard from "./HogCard"
import FilterHogs from "./FilterHogs"

function Hoglist({data}){
    
    
    const filterHogs=data.filter(hogObj=> hogObj.greased ===false)
    // console.log(filterHogs)
    
    const mapHogs=data.map(hogObj=>{
        return(
        <HogCard  
            key={hogObj.name}
            name={hogObj.name} 
            img={hogObj.image}
            specialty={hogObj.specialty} 
            greased={hogObj.greased}
            weight={hogObj.weight} 
            placement={hogObj["highest medal achieved"]} />
        )
    })

    


    return(
        <div className="ui grind container">
           {mapHogs} 
        </div>
    )
}

export default Hoglist