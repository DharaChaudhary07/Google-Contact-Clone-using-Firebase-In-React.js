import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import authReducer from "./contactReducer";

const rootReducer = combineReducers({
     contactReducer ,
     authReducer 
});

export default rootReducer; 