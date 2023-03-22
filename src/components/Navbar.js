import styles from "./Navbar.module.css"
import {Link,Outlet,NavLink} from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "./context/AboutContext";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export const Navbar = ()=>{
	const {counter,count} = useContext(AppContext);

	const count1 = useSelector((store)=>store.counterReducer)

	// console.log(count1)
	// console.log(counter)
	return(<>
	<div className={styles.container} >
		<Link to="/" > 
		<div>logo</div>
		</Link>
		<div>counter:{count1.count} </div>
		<p>{count1.appName}</p>
		<div className={styles["container-child"]} >
			<NavLink to="about"  style={({isActive})=>{return {backgroundColor:isActive?'red':''}}}  >
			  <div className={styles["container-child-child"]} >About</div>
			</NavLink>
			<NavLink to="blog" style={({isActive})=>{return {backgroundColor:isActive?'red':''}}} >
			  <div className={styles["container-child-child"]} >Blog</div>
			</NavLink>
			<NavLink to ="login" style={({isActive})=>{return {backgroundColor:isActive?'red':''}}} >
			 <div className={styles["container-child-child"]} >Log in</div>
			</NavLink>
			<NavLink to="signup" style={({isActive})=>{return {backgroundColor:isActive?'red':''}}} >
			  <div className={styles["container-child-child"]} >Sign up</div>
			</NavLink>
			<NavLink to="createBlog" style={({isActive})=>{return {backgroundColor:isActive?'red':''}}} >
			  <div className={styles["container-child-child"]} >Create Blog</div>
			</NavLink>
			
			
		</div>
		
	</div>
	<Outlet/>
	</>)
}