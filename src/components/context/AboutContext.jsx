
import { createContext } from "react";



import { useState } from "react";


 export const AppContext = createContext();


 export const AppProvider = ({children})=>{

	const AboutData = {
		title:"this is my about data"
	}
	const AboutData2 = {
		title:"this is my about data"
	}
	const AboutData3 = {
		title:"this is my about data"
	}
	
	const [counter, setCounter] = useState(0);
	const count = 5;
	const handleCounter = (props)=>{
		// setCounter(counter+props);
		count=count+props
	}





	

	return <AppContext.Provider value={{AboutData,AboutData2,AboutData3,counter,handleCounter,setCounter,count}} >
		{children}
	</AppContext.Provider>
}

// export { 
// 	AppContext,
// 	AppProvider
// }