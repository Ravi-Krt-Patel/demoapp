import {useState } from 'react';

import { useEffect } from 'react';

import { useSelector } from 'react-redux';
export const UpdatePage  = ()=>{

	return (<>
	<div>
		<h2>This is update page for user detail</h2>
		<input placeholder='enter user name here......' />
		<br/>
		<input placeholder='Enter user password here.....' />
		<br/>
		<input placeholder='Enter user email here.....' />
		<br/>
	</div>
	</>)
}