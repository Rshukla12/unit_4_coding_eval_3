import { useSelector, shallowEqual } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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
})

const Home = () => {
    const { isAuth } = useSelector(state=>state.auth, shallowEqual);    
    const [query, setQuery] = useState("")
    const history = useHistory();
    const styles = useStyles();

    if ( !isAuth ) return <Redirect to="/login" />;

    const handleSearch = () => {
        history.push(`/search?q=${query}`);
    }

    return (
        <Container className={styles.root}>
            <Typography variant="h3">Search for Git Repos</Typography>
            <TextField 
                variant="outlined"
                label="Repo Name"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
            />    
            <Button variant="contained" onClick={handleSearch} >Search</Button>
        </Container>
    );
}

export default Home;