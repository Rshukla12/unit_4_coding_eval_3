import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getSearch } from "../Redux/Search/actions";

const Search = () => {
    const { isAuth } = useSelector(state=>state.auth, shallowEqual);    
    const { data, isLoading, isError, error  } = useSelector(state=>state.search, shallowEqual);    
    
    const { search } = useLocation();
    const dispatch = useDispatch();
    const res = search.slice(search.indexOf("=") + 1 );
    
    useEffect( () => {
        res && dispatch( getSearch( res, 1, 10 ) );
    }, [res]); 

    return (
        <div>Search {res} { data }</div>
    )
}

export default Search;