import { configureStore } from "@reduxjs/toolkit";
import storageSlice from "./slices/storageSlice";


export const store = configureStore({
    reducer: {
        laundaryBooking: storageSlice,
    },
})

window.store_ = store;   //  We can check in any place in console:  store_.getState()