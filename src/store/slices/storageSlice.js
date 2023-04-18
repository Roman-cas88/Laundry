import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


export const storageSlice = createSlice({
    name: 'storage',
    initialState,
    reducers: {
        reservTime: (state, date, reservTime, action ) => {
            // state[date].time.reservTime = action
        },
        deleteTime: (state, action, date) => {

        }
    }
})

export const { reservTime, deleteTime } = storageSlice.actions