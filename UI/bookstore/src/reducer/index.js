import {combineReducers} from "redux";
import DisplayBooks from "./getreducer"
const rootReducers=combineReducers({
    allBooks:DisplayBooks
    
})
export default rootReducers;