import { useLocation } from "react-router-dom";

const Search = () => {
    const { search } = useLocation();
    const res = search.slice(search.indexOf("=") + 1 );
    
    return (
        <div>Search {res}</div>
    )
}

export default Search;