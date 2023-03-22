import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react";


export const Detail = ()=>{
	const params = useParams()
	const location = useLocation();
	const navigete = useNavigate();
	console.log(params,location);
	

	useEffect(()=>{
		if(!location.state){
			navigete("*");
		}
	},[])

	return (<>
	
	   <h2>Title: {location.state?(location.state.title):(<></>)}</h2>
	   <p>Description: {location.state?(location.state.description):(<></>)}</p>


	
	</>)
}