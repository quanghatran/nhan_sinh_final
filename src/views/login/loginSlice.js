import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
	name: "login",
	initialState: { name: "" },
	reducers: {
		addUser: (state, action) => {
			state.name = action.payload.name;
		},
		updateUser: (state, action) => {
			state.name = action.payload;
		},
	},
});

const { reducer, actions } = login;
export const { addUser, updateUser } = actions;
export default reducer;
