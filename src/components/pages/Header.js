import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useHistory } from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const logoutHandler = () => {
        dispatch(authActions.logout());
        history.replace("/");
    };


    const sendHandler = () => {
        history.replace("/SendMail");
    };

    return ( <
        nav className = "navbar navbar-dark bg-primary" >
        <
        h1 > Mail Box < /h1> <
        Button className = "btn btn-warning "
        onClick = { sendHandler } >
        Compose Mail <
        /Button>

        <
        Button className = "btn btn-warning float-right"
        onClick = { logoutHandler } >
        Logout <
        /Button> <
        /nav>
    );
};

export default Header;