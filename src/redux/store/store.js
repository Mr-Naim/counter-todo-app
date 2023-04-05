import { configureStore } from "@reduxjs/toolkit";
import counterStateChanger from "../state/counter/counterSlice"
import todoReducer from "../state/todo/todoSlice"

export default configureStore({

    reducer:{
        counter:counterStateChanger,
        todo:todoReducer

    }
})