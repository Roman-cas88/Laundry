import { createSlice } from "@reduxjs/toolkit";


export const storageSlice = createSlice({
    name: 'storage',
    initialState: {
        users:[],
        reserve:[]
},
    reducers: {
        reservTime: (state, action) => {
          state.reserve.push(action.payload)
         },
        deleteTime: (state, action) => {

        }
    }
})

export const { reservTime, deleteTime } = storageSlice.actions