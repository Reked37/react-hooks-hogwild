import React from "react"

function FilterHogs({onSelectOption, onNameSearch, onWeightSearch}){

  

    return(
        <div>
            <h4>Hog Filter</h4>
            <select onChange={onSelectOption}>
                <option>All</option>
                <option>Greased</option>
                <option>Not Greased</option>
            </select>
            <label> Name: </label>
            <input onChange={onNameSearch} type="text" id="name" ></input>
            <label> Weight: </label>
            <input onChange={onWeightSearch} type="number" id="weight"></input>
           
        </div>
    )
}

export default FilterHogs