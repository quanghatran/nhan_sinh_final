// import userReducer from "./userSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../views/login/loginSlice";
import signInReducer from "../views/signIn/sigInSlice";
import userReducer from "./userSlice";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
// 	key: "root",
// 	storage,
// };

const rootReducer = combineReducers({
	login: loginReducer,
	user: userReducer,
	signIn: signInReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

const store = configureStore({
	reducer: rootReducer,
});

export default store;
