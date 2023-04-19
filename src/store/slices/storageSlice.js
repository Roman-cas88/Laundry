import { createSlice } from "@reduxjs/toolkit";


export const storageSlice = createSlice({
    name: 'storage',
    initialState: {
        users:[],
        reserve:[]
},
    reducers: {
        newUser: (state, action) => {
            state.users.push(action.payload)
        },
        
        reservTime: (state, action) => {
          state.reserve.push(action.payload)
         },
    }
})

export const { reservTime, deleteTime } = storageSlice.actions