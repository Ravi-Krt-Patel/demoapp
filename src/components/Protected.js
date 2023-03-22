import { useEffect } from "react";
import { useNavigate, useLocation} from "react-router-dom";


export const Protected = (props)=>{
	const {Component} = props;
	const navigate = useNavigate();
	const location = useLocation();
	console.log(location);
	useEffect(()=>{
		if(!localStorage.getItem('login')) {
			localStorage.setItem('url',location.pathname)
			navigate("/login");
			
		}
	},[])
	return (<>
	
	{
		!localStorage.getItem('login')?(<></>):(<><Component/></>)
	}
	 
	</>)
}