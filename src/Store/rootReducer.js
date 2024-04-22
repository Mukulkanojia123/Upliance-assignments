import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import richTextReducer from "./slice/RichTextSlice";


const rootReducer = combineReducers({
    user: userReducer,
    richText: richTextReducer
});

export default rootReducer;
