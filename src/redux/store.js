import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const store = configureStore({
    reducer:rootReducer,
    middleware: [logger,thunk]
})

export default store