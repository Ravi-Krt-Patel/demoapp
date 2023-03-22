import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { AppProvider } from './components/context/AboutContext';
import {Provider as ReduxProvider} from "react-redux";
import {store} from "./components/redux/store";
const root = ReactDOM.createRoot(document.getElementById('final'));
root.render(

    <BrowserRouter>
      <AppProvider>
        <ReduxProvider store={store} >
            <App></App>
        </ReduxProvider>
      </AppProvider>
      
    </BrowserRouter>
      
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
