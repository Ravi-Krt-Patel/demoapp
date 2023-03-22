
import './App.css';
import {Todo} from "./components/todo/Todo";
import { useEffect,useState } from 'react';
import axios from 'axios';

import {Navbar} from "./components/Navbar";
import { BUTTON,TITLE,BIGBUTTON } from './components/styled-components/styledButton';
import {Routes,Route,Outlet, Navigate} from "react-router-dom";
import {Blog} from "./components/Blog";
import {Detail} from "./components/Detail";
import {Login} from "./components/Login";
import { About } from './components/About';
import { Protected } from './components/Protected';
import { CreateBlog } from './components/CreateBlog';
import {Home} from "./components/Home";
import "./App.css"


function App() {
 
  return (
    <>
  
        <Routes>

          <Route path="/" element={<Navbar/>} >
             <Route index  element={<><Home/></>} />
             <Route path="about" element={<Protected Component={About} />} />
             <Route path="blog" element={<Protected Component={Blog} />} />
             <Route path="login" element={<><Login/></>} />
             <Route path="signup" element={<><h2>This is a sign up page</h2></>} />
             <Route path="createBlog" element={<><CreateBlog/></>} />
             <Route path="blog/:id" element={<Detail/>} />
             <Route path="*" element={<>404 page</>}/>
          </Route>
          
        </Routes>

{/* <div className="App-container" >
  working..........
</div>

<div className="App-container" >working......</div>
<div className="App-container-p" >
  <div className="App-container-c" >1</div>
  <div className="App-container-c" >1</div>
<div className="App-container-c" >1</div>
<div className="App-container-c" >1</div>

<div className="App-container-c" >1</div>
<div className="App-container-c" >1</div>
<div className="App-container-c" >1</div>
<div className="App-container-c" >1</div>
</div> */}




    </>
  );
}

export default App;
