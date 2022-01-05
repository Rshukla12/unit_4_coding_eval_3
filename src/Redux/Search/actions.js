import axios from "axios";
import { searchConstants } from "./actionTypes.js";

export const requestSearch = () => ({
    type: searchConstants.SEARCH_REQUEST,
    payload: {
        isLoading: true
    }
});

export const failSearch = (err) => ({
    type: searchConstants.SEARCH_FAILED,
    payload: {
        err: err,
        isLoading: false,
        isError: true
    }
});

export const successSearch = ( res ) => ({
    type: searchConstants.SEARCH_SUCCESS,
    payload: {
        data: res,
        isLoading: false
    }
});

export const getSearch = ( q, p, perPage ) => ( dispatch ) => {
    dispatch( requestSearch() );
    axios.get( "https://api.github.com/search/repositories" , {
            params: {
                q: q,
                page: p,
                per_page: perPage
            }
        }
    )
    .then( res => {
        dispatch( successSearch( res.data ) );
    })
    .catch( err => {
        dispatch( failSearch( err ) );
    });
};