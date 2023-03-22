import {useState} from "react";
import PropTypes from "prop-types";


const Header = ({title,price})=>{

	const [data, setData] = useState({
		productName:title,
		count:0
	});

	const [text,setText] = useState(true);

	const [textChange , setTextChange] = useState("");

	const handleTextChange =(e)=>{
		setTextChange(e.target.value);
	}

	
	return (<>
	<div>
		{/* <h1>{title}</h1> */}
		{/* <h2>{price + 2}  </h2> */}
		<h1>{  text?data.productName:textChange}</h1>
		{/* <input onChange={handleTextChange} value={textChange} /> */}
		<h2>{data.count}</h2>

		<button onClick={()=>{

			setData((a)=>{
				if(a.count<10){
					return {...a,count:a.count+1}
					
					// return {count:a.count+1}
				}
				return a
			})

		}} >add</button>

		<button onClick={()=>{

			setData((p)=>{
				if(p.count>0){
					return {...p,count:p.count-1}
					// return {count:p.count-1}
				}
				return p
			})

		}} >reduce</button>

		{/* <button onClick={()=>{
			// const test =()=>{
			// 	text?setText(false):setText(true)
			// }
			text?setText(false):setText(()=>{
				// setTextChange("")
				return true
			})
			
		}} >add text</button> */}



	</div>
	</>)
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	price:PropTypes.number
}



export default Header;