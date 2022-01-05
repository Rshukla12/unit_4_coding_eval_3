import { loadData, saveData } from "../../utils/LocalStorage";
import { authConstants } from "./actionTypes";

const isAuth = loadData( "Auth" );

const initAuth = {
    isAuth: !!isAuth
};

const authReducer = ( state=initAuth, action ) => {
    switch(action.type) {
        case ( authConstants.LOGIN_USER ): {
            saveData( "Auth", true );
            return {
                ...state,
                isAuth: true
            }
        }
        case ( authConstants.LOGOUT_USER ): {
            saveData( "Auth", false );
            return {
                ...state,
                isAuth: false
            }
        }
        default : {
            return state;
        }
    }
};

export default authReducer;