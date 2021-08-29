import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
	name: "login",
	initialState: { name: "", email: "" },
	reducers: {
		addUser: (state, action) => {
			state.name = action.payload.name;
		},
		updateUser: (state, action) => {
			state.name = action.payload;
		},
		verifyEmail: (state, action) => {
			state.email = action.payload;
		},
	},
});

const { reducer, actions } = login;
export const { addUser, updateUser, verifyEmail } = actions;
export default reducer;
