import {TodoItem} from "./TodoItem";
import {TodoInput} from "./TodoInput";
import { useState } from "react";

export const Todo = ()=>{
	const [editIndex,setEditIndex] = useState(0);
	const [editItem, setEditItem] = useState("");
	const [item, setItem] = useState([]);

	const handleDelete = (index)=>{
		item.splice(index, 1);
		setItem([...item]);
	}

	const handleEdit = (index)=>{
		item.splice(index, 1, editItem);
		setItem([...item]);
	}

	return (<>
	<div>Add Todo Item</div>
	<TodoInput getData = {(text)=>{
		setItem([...item, text]);
	}} />

<div>
	<input value={editItem} onChange={(e)=>{
		setEditItem(e.target.value);
	}} />
	<button onClick={()=>{
		handleEdit(editIndex)
	}} >edit</button>
</div>


	{item.map((e,ind)=>(
	<div key={ind} >
	   <TodoItem  text = {e} />
	   <button onClick={()=>{
		handleDelete(ind)
	   }
	   } >delete</button>
	   <button onClick={()=>{
		setEditItem(e)
		setEditIndex(ind)
	   }} >edit</button>
	</div>
	  
	))}
	</>
	)
}