import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const storageSlice = createSlice({
    name: 'storage',
    initialState,
    reducers: {
        newUser: (state, action) => {
            state.users.push(action.payload)
            console.log(action.payload)
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        
        reservTime: (state, action) => {
          state.reserve.push(action.payload)
         },
    }
})

export const { reservTime, deleteTime, newUser } = storageSlice.actions