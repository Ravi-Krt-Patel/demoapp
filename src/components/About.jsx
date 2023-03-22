import  AboutChild  from "./AboutData/AboutChild"
import { memo } from "react";

const t = ()=>{

	console.log("this is about page")

	return (<>
	<h2>this is a about page.....</h2>
	<AboutChild />
	</>)
};
export const About = memo(t);

