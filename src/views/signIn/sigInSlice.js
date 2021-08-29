import { createSlice } from "@reduxjs/toolkit";

const signIn = createSlice({
	name: "signIn",
	initialState: { email: "" },
	reducers: {
		signInVerifyEmail: (state, action) => {
			state.email = action.payload;
		},
	},
});

const { reducer, actions } = signIn;
export const { signInVerifyEmail } = actions;
export default reducer;
