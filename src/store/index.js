import { configureStore } from "@reduxjs/toolkit";
import { calculatorSlice } from "./calculator/CalculatorSlice";

export const store =configureStore({
    reducer:{
        [calculatorSlice.name]:calculatorSlice.reducer,
    }


})