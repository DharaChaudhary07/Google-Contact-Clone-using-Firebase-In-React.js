import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import  rootReducer from "./Service/Reducers/index"
const composeEnhancers = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
  composeEnhancers(applyMiddleware(thunk))
); 

export default store;