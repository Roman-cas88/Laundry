import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


export const storageSlice = createSlice({
    name: 'storage',
    initialState,
    reducers: {
        reservTime: (state, action, date) => {

        },
        deleteTime: (state, action, date) => {

        }
    }
})

export const { reservTime, deleteTime } = storageSlice.actions