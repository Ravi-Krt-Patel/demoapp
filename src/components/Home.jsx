
import { useSelector ,useDispatch} from "react-redux"
import { useEffect } from "react";
import axios from "axios";
import {getBlogs} from "./redux/action";

export const Home = ()=>{
	
	const dispatch = useDispatch();
	
	const blogs = useSelector((store)=>store.getBlogReducer);

	

	// async function getUser() {
	// 	try {
	// 	  const response = await axios.get('http://localhost:8000/blog');
	// 	  console.log(response);
	// 	  dispatch(getBlogs());
	// 	} catch (error) {
	// 	  console.error(error);
	// 	}
	//   }

	useEffect(()=>{
		console.log(blogs)
		if(blogs.data.length === 0){
			dispatch(getBlogs());
		}
		
	},[])

	return (<>
	<h1>this is home page</h1>
	{blogs.data.map((el)=>(
		<div>{el.title} {el.category} </div>
	))}
	</>)
}