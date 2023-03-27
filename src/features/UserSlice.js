import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        listofusers: []
    },
    reducers: {
        addUser(state, action) {
            let data = action.payload;
            state.listofusers.push(data);
        }
    }
})
export default UserSlice.reducer;
export const { addUser } = UserSlice.actions;
