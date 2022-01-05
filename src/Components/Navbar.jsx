import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <AppBar sx={{display: "flex", flexDirection: "row", gap: "2rem", justifyContent: "center", padding: "1rem"}}>
            <Link style={{color: "white", textDecoration: "none"}} to="/">Home</Link>
            <Link style={{color: "white", textDecoration: "none"}} to="/search?q=">Search</Link>
            <Link style={{color: "white", textDecoration: "none"}} to="/login">Login</Link>
        </AppBar>
    );
};

export default Navbar;
