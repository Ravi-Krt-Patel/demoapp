import { useState } from "react"


export const TodoInput = ({getData})=>{
	const [text, setText] = useState("");

	const handleChange = (e)=>{
		setText(e.target.value);
		
	}
	
	return (<>
	<input onChange={handleChange} value={text} />
	<button onClick={()=>{
		getData(text);
		setText("")
	}} >add todo</button>
	</>)
}