import React, {useState} from "react"

function HogCard({name, specialty, greased, weight, img, placement, onClickedHog}){
    const [detailsOfHog, setDetailsHog]=useState(false)
    
    function onClickedHog(){
        setDetailsHog(!detailsOfHog)
    }
    
    return(
        <div onClick={onClickedHog} className="ui eight wide column, pigTile" >
            {detailsOfHog ? (
                <>
                    <h3>{name}</h3>
                    <img className="minPigTile" src={img}></img>
                    <div>Description: {specialty}</div>
                    <div>Greased: {greased? "Yes":"No"}</div>
                    <div>Weight: {weight}</div>
                    <div>Highest Award: {placement}</div>
                </>
                    ) : 
                <>
                    <h3>{name}</h3>
                    <img className="minPigTile" src={img}></img>
                </>
            }
        </div>
    )
}

export default HogCard


{/* <div>Description: {specialty}</div>
<div>Greased: {greased? "Yes":"No"}</div>
<div>Weight: {weight}</div>
<div>Highest Award: {placement}</div> */}