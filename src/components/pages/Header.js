import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

        const dispatch = useDispatch();
        const history = useHistory();
        const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

        const logoutHandler = () => {
            dispatch(authActions.logout());
            history.replace("/");
        };



        const sendHandler = () => {
            history.replace("/SendMail");
        };
        const inboxHandler = () => {
            history.replace('/MailInbox')
        }

        return ( <
                nav className = "navbar navbar-dark bg-primary" >
                <
                h1 > Mail Box < /h1> {
                    isLoggedIn && < Button className = "btn btn-warning "
                    onClick = { sendHandler } >
                        Compose Mail <
                        /Button>} {
                            isLoggedIn && < Button className = "btn btn-warning "
                            onClick = { inboxHandler } >
                                Inbox <
                                /Button>}

                            {
                                isLoggedIn && < Button className = "btn btn-warning float-right"
                                onClick = { logoutHandler } >
                                    Logout <
                                    /Button>} <
                                    /nav>
                            );
                        };

                    export default Header;