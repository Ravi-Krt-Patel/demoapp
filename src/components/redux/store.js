
import {combineReducers, legacy_createStore as createStore,applyMiddleware,compose} from "redux";

import {counterReducer,getBlogReducer} from "./reducer";

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rooReducer = combineReducers({
      counterReducer:counterReducer,
	  getBlogReducer

})

export const store = createStore(
	rooReducer,
	composeEnhancers(applyMiddleware(thunk))
	)