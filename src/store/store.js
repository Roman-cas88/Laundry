import { configureStore } from "@reduxjs/toolkit";
import { storageSlice } from "./slices/storageSlice";


export const store = configureStore({
    reducer: {
        laundaryBooking: storageSlice.reducer,
    },
})