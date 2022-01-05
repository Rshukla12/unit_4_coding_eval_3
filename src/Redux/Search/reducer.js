import { searchConstants } from "./actionTypes";

const initSearch = {
    isLoading: true,
    isError: false,
    error: null,
    data: []
};

const searchReducer = ( state=initSearch, action ) => {
    switch( action.type ) {
        case ( searchConstants.SEARCH_REQUEST ): {
            return {
                ...state,
                isLoading: true
            }
        }
        case ( searchConstants.SEARCH_FAILED ): {
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.payload.err
            }
        }
        case ( searchConstants.SEARCH_SUCCESS ): {
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
            }
        }

        default : {
            return state;
        }
    }
};

export default searchReducer;