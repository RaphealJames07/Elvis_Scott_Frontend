/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    userToken: "",
   
};

const features = createSlice({
    name: "curve_portal",
    initialState,
    reducers: {
        userData: (state, {payload}) => {
            state.user = payload;
            console.log("User Data:", payload);
        },
        
        loginToken: (state, {payload}) => {
            state.userToken = payload;
            console.log("User Token:", payload);
        },
        logout: (state) => {
            state.user = {};
            state.userToken = "";
        },
       
    },
});

export const {userData, logout, loginToken} =
    features.actions;

export default features.reducer;
