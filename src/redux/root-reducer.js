import { combineReducers } from "redux";
import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
    userReducer
})

export default rootReducer