import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptShow: true
    },
    reducers: {
        toggleGptSearch: (state, action) => {
            state.gptShow = !state.gptShow;
        }
    }
});



export const { toggleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;