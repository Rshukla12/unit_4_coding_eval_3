import { Redirect, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getSearch } from "../Redux/Search/actions";
import Container from "@mui/material/Container";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { FormControl, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "40%",
        margin: "5rem auto",
        paddingTop: "2rem"
    }
});

const Search = () => {
    const { search } = useLocation();
    const dispatch = useDispatch();
    
    const { isAuth } = useSelector(state=>state.auth, shallowEqual);    
    const { data, isLoading, isError, error  } = useSelector(state=>state.search, shallowEqual);    
    const res = search.slice(search.indexOf("=") + 1 );
    
    const [ page, setPage ] = useState(1);
    const [ perPage, setPerPage ] = useState(10);
    
    const styles = useStyles();

    const handlePerPage = (e) => {
        setPage(1);
        setPerPage(e.target.value)
    }

    useEffect( () => {
        res && dispatch( getSearch( res, perPage, page ) );
        console.log( perPage, data )
    }, [res, perPage, page, dispatch]); 

    if ( !isAuth ) return <Redirect to="/login" />

    return (
        <Container className={styles.root}>
            <FormControl >
                <InputLabel id="per-page">Per Page</InputLabel>
                <Select color="secondary" labelId="per-page" value={perPage} onChange={handlePerPage} label="Per Page" >
                    { 
                        [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(item => (
                            <MenuItem value={item} >{item}</MenuItem>
                        ))
                    }
                </Select>
                

            </FormControl>
            Search
        </Container>
    )
}

export default Search;