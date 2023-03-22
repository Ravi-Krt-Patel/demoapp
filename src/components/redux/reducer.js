
const init = {
	count:500,
	loginStatus:false,
	appName:'Counter Application',
}

const blog = {
	data:[],
	dataStatus:false
}

export const counterReducer = ( store=init, {type,payload})=>{
	switch(type){
		case "INC_COUNT":
			return {...store,count:store.count+payload}
		case "DEC_COUNT":
			return {...store, count:store.count-payload}
		default:
			return store;
	}
}


export const getBlogReducer = (store=blog,{type,payload}) =>{

	switch(type){
		case "GET_BLOG":
			return {...store,data:[...payload],dataStatus:true};
		default:
			return store;
	}

}