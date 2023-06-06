import { combineReducers } from "redux";
import userReducer from "./user/userSlice";
import contatoReducer from "./Contato/contatoSlice";

const rootReducer = combineReducers({
    userReducer,
    contatoReducer
})

export default rootReducer