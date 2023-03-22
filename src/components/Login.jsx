
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext,useState,useEffect } from "react";
import { AppContext } from "./context/AboutContext";
import { useDispatch, useSelector } from "react-redux";
import {incCount} from "./redux/action";
import {decCount} from "./redux/action";
import {About} from "./About";
import { useMemo } from "react";


export const Login = ()=>{
	const navigate = useNavigate();
	const {handleCounter,setCounter} = useContext(AppContext);

	const [count, setCount] = useState(0);
	const [count2,setCount2] = useState(0);
	const dispatch = useDispatch();

	 const isCalculated = (num)=>{
		for(let i=0; i<1900000000; i++){
		}
		alert("count is calculated...")
		return num;
	}
	const calculatedCount = useMemo(()=>{ return isCalculated(count)},[count]);

	return (<>
	<h2>this is a login page</h2>
	<About/>


	<button onClick={()=>{
		localStorage.setItem('login',true);
		navigate(localStorage.getItem('url'));
	}} >login</button>
	{/* <button onClick={()=>{
		// setCounter((p)=>p+5)
		dispatch(incCount(100))
	
	}} >Add Count</button>
	<button onClick={()=>{
		// setCounter((p)=>p+5)
		dispatch(decCount(50))
	
	}} >Dec Count</button> */}

<button onClick={()=>{
	setCount((p)=>p+1);
}} >add count{count} </button> {calculatedCount}
<br/>
<button onClick={()=>{setCount2(count2+1)}} >Deff count {count2} </button>
	
	</>)
}