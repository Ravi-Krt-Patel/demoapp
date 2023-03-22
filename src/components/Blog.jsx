import {Link} from "react-router-dom";


export const Blog = ()=>{

	const blogs = [
		{ title:"About JavaScript",
		 author:"Raju",
		 description:"Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look."}
		 ,{ title:"About Java",
		 author:"Sunil",
		 description:"Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look."}
		 ,{ title:"About C++",
		 author:"Mahesh",
		 description:"Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look."}
	]


	return (<>
	{blogs.map((el,ind)=>(<Link to={"/blog/"+ind} state={el} ><div key={ind} style={{width:"300px",margin:'20px'}}  >
		<h2> Title: {el.title}</h2>
		<p>Description: {el.description}</p>
	</div></Link>
	))}
	</>)
}