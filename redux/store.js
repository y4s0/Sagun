import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import customerReducer from "./reducers";

const rootReducer = combineReducers({
    customerReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))