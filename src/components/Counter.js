import PropTypes from "prop-types";
import { useState } from "react";

const Counter = ({title, price})=>{

	const [count, setCount] = useState({
		description:title,
		count:0
	})


	return (<>
	<div>{count.description}</div>
	<div>{count.count}</div>

	<button onClick={()=>{
		setCount((e)=>{
			if(e.count <10){
				return {...e,count:e.count+1,description:"monitor"}
			}
			// return {...e}
			
		})
	}} >add</button>

	<button >remove</button>
	</>)
}

Counter.prototype = {
	title:PropTypes.string.isRequired,
	price: PropTypes.number
}

export default Counter;