import { combineReducers } from "redux";
import postReducer from "../postReducer/postReducer";

const rootReducer = combineReducers({
    post: postReducer
})

export default rootReducer;