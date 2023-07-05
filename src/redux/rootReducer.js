import { combineReducers } from "redux";
import userReducer from "./user/userSlice";
import contatoReducer from "./Contato/contatoSlice";
import { apiSlice } from "./user/apiSlice";

const rootReducer = combineReducers({ userReducer, contatoReducer, [apiSlice.reducerPath]: apiSlice.reducer })

export default rootReducer