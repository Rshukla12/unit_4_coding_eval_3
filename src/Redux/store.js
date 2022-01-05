import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./Auth/reducer";
import searchReducer from "./Search/reducer";

const rootReducer = combineReducers({ auth: authReducer, search: searchReducer  });

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore( rootReducer, composeEnhancers(
    applyMiddleware(
        thunk
    )
));

export default store;