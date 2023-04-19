import { createSlice } from "@reduxjs/toolkit";


export const storageSlice = createSlice({
    name: 'storage',
    initialState: [],
    reducers: {
        reservTime: (state, action) => {
          
         },
        deleteTime: (state, action) => {

        }
    }
})

export const { reservTime, deleteTime } = storageSlice.actions