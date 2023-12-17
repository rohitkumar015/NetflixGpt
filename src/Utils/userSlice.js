import {  createSlice } from "@reduxjs/toolkit";

export  const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      
      return action.payload;
      
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});
// console.log(userSlice);
// console.log(userSlice.actions);
export const {addUser,removeUser}=userSlice.actions
export default userSlice.reducer
