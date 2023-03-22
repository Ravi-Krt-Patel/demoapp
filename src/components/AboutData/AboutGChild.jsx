
import { useContext } from "react"
import { AppContext } from "../context/AboutContext";
import { memo } from "react";
 const AboutGChild = ()=>{

	const aboutData = useContext(AppContext);
	// console.log(aboutData)
	console.log("this is G child of about page added")
	return (<>
	<div style={{backgroundColor:'red'}} >
	<h2>this is G child</h2>
	<h2>{aboutData.AboutData.title}</h2>
	
	</div>
	
	</>)
}

export default memo(AboutGChild);