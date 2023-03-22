import { useState } from "react"
import axios from "axios";
export const CreateBlog = ()=>{

	const [formData, setFormData] = useState({
		title:"",
		category:"",
		tag:"",
		description:""
	})

	const handleChange = (e)=>{
		setFormData({
			...formData,[e.target.name]:e.target.value
		})
	}

	const createData = async(data)=>{
		try{
			const res = await axios.post('http://localhost:8000/blog',data);
			console.log(res)
			return res.data;
		}catch(error){
			console.log("failed",error)
		}
	}
	

	const handleSubmit = (e)=>{
		e.preventDefault();
		createData(formData).then((data)=>{
			console.log("working.......",data)
		})
	}



	//console.log(formData)

	return(<>
	<div style={{margin:'50px'}} >
		<h2>Create blog......</h2>
		<form onSubmit={handleSubmit} >
			<label>Title</label>
			<input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="title.." />
			<br/>
			<label>Category</label>
			<input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="title.." />
			<br/>
			<lable>Tag</lable>
			<input type="text" name="tag" value={formData.tag} onChange={handleChange} placeholder="title.." />
			<br/>
			<lable>Description</lable>
			<input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="title.." />
			<br/>
			<button type="submit" >Create blog</button>
		</form>
		
	</div>
	</>)
}