import { useDispatch, shallowEqual } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../Redux/Auth/actions";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Login = () => {
    const { isAuth } = useSelector(state=>state.auth, shallowEqual);    
    const dispatch = useDispatch();
    
    const handleLogin = () => {
        dispatch( loginUser() );
    };

    if ( isAuth ) return <Redirect to="/" />;

    return (
        <Container>
            <Typography variant="h3">Click to Login</Typography>
            <Button variant="contained" onClick={handleLogin}>Login</Button>
        </Container>
    )
}

export default Login;