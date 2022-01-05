import { createStore } from "redux";
import authReducer from "./Auth/reducer";

const store = createStore( authReducer );

export default store;