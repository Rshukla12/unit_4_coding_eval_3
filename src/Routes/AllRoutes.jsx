import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Search from "../Pages/Search";

const AllRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/search">
                <Search />
            </Route>
        </Switch>
    )
}

export default AllRoutes;