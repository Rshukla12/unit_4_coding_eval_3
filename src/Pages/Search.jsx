import { useParams } from "react-router-dom";

const Search = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>Search</div>
    )
}

export default Search;