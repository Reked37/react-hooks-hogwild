import React, {useState} from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hoglist from "./Hoglist"
import FilterHogs from "./FilterHogs"

function App() {
	const [hogData, setHogData]=useState(hogs)
	const[greaseButton, setGreasedButton]= useState("All")
	const [nameSearch, setNameSearch]=useState("")
	const [weightSearch, setWeightSearch]=useState("")

	function handleSelectOption(event){
		const selectedGrease= event.target.value
		if(selectedGrease === "Greased"){
			return setGreasedButton(true)
		}else if(selectedGrease =="Not Greased"){
			return setGreasedButton(false)
		}else if(selectedGrease ==="All"){
			return setGreasedButton("All")
		}
	}
	
	function handleNameSearch(event){
		const pigName=event.target.value
		console.log(pigName)
		return setNameSearch(pigName)
	}

	function handleWeightSearch(event){
		const weightText=event.target.value
		if(weightText ==="") return setWeightSearch(weightText)
		const weight= parseFloat(weightText)
		return setWeightSearch(weight)
	}
	
	const filteredHogs= hogData.filter(hogObj=>{
		if(greaseButton==="All") return true
		return hogObj.greased === greaseButton
	}).filter(hogObj=>{
		if(nameSearch==="")return true
		const searchedNameHog = hogObj.name.includes(nameSearch)
		console.log(searchedNameHog)
		return searchedNameHog
	}).filter(hogObj=>{
		if(weightSearch==="") return true
		const searchedWeight= hogObj.weight===weightSearch
		return searchedWeight
	})
	

	return (
		<div className="App">
			<Nav />
			<FilterHogs onSelectOption={handleSelectOption} 
			 onNameSearch={handleNameSearch}
			 onWeightSearch={handleWeightSearch}
			/>
			<Hoglist data={filteredHogs} />
		</div>
	);
}

export default App;
