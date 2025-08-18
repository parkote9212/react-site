import {createSlice} from "@reduxjs/toolkit";

const redux_slice = createSlice(
{
    name: "counter",
    initialState: { value: 0},
    reducers: {
        increasement: (state) => {
            state.value +=1;
        },
        decreasement: (state) => {
            state.value -=1;
        },
        increasmentByAmount: (state, action) => {
            state.value += action.payload;
        },
        
    },

});

export const { increasement, decreasement, increasmentByAmount} =
redux_slice.actions;

export default redux_slice.reducer;