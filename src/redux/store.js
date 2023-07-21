import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { apiSlice } from "./apiSlice";
import rootReducer from "./rootReducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger, apiSlice.middleware]
})

export default store