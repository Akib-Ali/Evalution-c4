import { legacy_createStore,combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import companyreducer from "./Redux/reducer";


const rootReducer = combineReducers( { ecommerceData:companyreducer });

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ 
|| compose

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)))