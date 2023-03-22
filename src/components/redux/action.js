import axios from "axios";
import { useSelector ,useDispatch} from "react-redux"
export const incCount = (payload)=>({
	type:"INC_COUNT",
	payload
});

export const decCount = (payload)=>({
	type:"DEC_COUNT",
	payload
})


export const getBlogs = ()=>{

	// axios.get('http://localhost:8000/blog')
	// .then((res)=>{
	// 	return {type:"GET_BLOG",payload:res.data}
	// })
	console.log("re-rendering...")
	return async(dis)=>{
		const res = await axios.get('http://localhost:8000/blog');
		dis({type:"GET_BLOG",payload:res.data})
	}

}
	