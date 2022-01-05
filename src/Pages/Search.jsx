import { Redirect, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getSearch } from "../Redux/Search/actions";
import Container from "@mui/material/Container";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import Pagination from "../Components/Pagination";
import { Grid } from "@mui/material";
import GitCard from "../Components/GitCard";

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
    const { data, isLoading, isError  } = useSelector(state=>state.search, shallowEqual);    
    const res = search.slice(search.indexOf("=") + 1 );
    
    const [ page, setPage ] = useState(1);
    const [ perPage, setPerPage ] = useState(5);
    
    const styles = useStyles();

    const handlePerPage = (e) => {
        setPage(1);
        setPerPage(e.target.value)
    }

    useEffect( () => {
        res && dispatch( getSearch( res, page, perPage ) );
    }, [res, perPage, page, dispatch]); 

    if ( !isAuth ) return <Redirect to="/login" />

    return (
        <Container>
            {
                isLoading ? (
                    <div className={styles.loading}>...Loading</div>
                ) : isError ? (
                    <div>Something went wrong</div>
                ) : (
    
                    <Container className={styles.root}>
                        <FormControl >
                            <InputLabel id="per-page">Per Page</InputLabel>
                            <Select color="secondary" labelId="per-page" value={perPage} onChange={handlePerPage} label="Per Page" >
                                { 
                                    [5, 10, 30, 50, 70, 100].map(item => (
                                        <MenuItem value={item} key={item*100}>{item}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <Grid container spacing={2}>
                                {
                                    data.map( repo => (
                                        <Grid item xl={4} lg={4} md={6} sm={12}>
                                            <GitCard
                                                name={repo.name}
                                                url={repo.url}
                                                fullName={repo.full}
                                                owner={repo.owner}
                                            />
                                                
                                        </Grid>
                                    ))
                                }
    
                        </Grid>
                        <Pagination n={10} active={page} onChange={setPage}/>
                    </Container>
                )
            }
        </Container>
    )
}

export default Search;