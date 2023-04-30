import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { useSelector } from 'react-redux';

const storageSlice = createSlice({
    name: 'laundaryStore',   //laundaryBooking
    initialState,
    reducers: {
        newUser: (state, action) => {
            state.users.push(action.payload)      
            localStorage.setItem('user', JSON.stringify(action.payload));
          },
        
        reservTime: (state, action) => {
          state.reserve.push(action.payload)
         },
    }
})

export default storageSlice.reducer;
export const { reservTime, deleteTime, newUser } = storageSlice.actions;
export const useStorage = () => useSelector((state) => state.laundaryBooking);
export const useSelectorUsers = () => useSelector((state) => state.laundaryBooking.users);