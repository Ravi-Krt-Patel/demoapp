// import  AboutGChild  from "./AboutGChild"
import {memo} from "react";
import { useContext } from "react"
import { AppContext } from "../context/AboutContext";
import { lazy,Suspense } from "react";
const AboutGChild = lazy(()=>import('./AboutGChild'))

const AboutChild = ()=>{
	console.log("this child of about page")
	const aboutData = useContext(AppContext);
	return(<>
	<h1>{aboutData.title}</h1>
	<h2>this is child component</h2>
	<Suspense   fallback={<div>Loading.....</div>} >
	  <AboutGChild/>
	</Suspense>
	</>)
}

export default memo(AboutChild);