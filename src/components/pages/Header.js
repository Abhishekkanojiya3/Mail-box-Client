import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useHistory } from "react-router-dom";

const Header = () => {

        const dispatch = useDispatch();
        const history = useHistory();
        const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
        const inbox = useSelector((currState) => currState.inbox.inbox);
        const sentbox = useSelector((currState) => currState.inbox.sentbox);

        const extractInboxValue = (inbox, read) => {
            let extractedInboxValue = inbox.map((mail) => mail[read]);
            return extractedInboxValue;
        };
        let totalInboxUnread = 0;
        const unreadInboxMail = extractInboxValue(inbox, "read");
        unreadInboxMail.forEach((v) => (v ? v : totalInboxUnread++));


        const extractSentValue = (sentbox, read) => {
            let extractedSentValue = sentbox.map((mail) => mail[read]);
            return extractedSentValue;
        };
        let totalSentUnread = 0;
        const unreadSentMail = extractSentValue(sentbox, "read");
        unreadSentMail.forEach((v) => (v ? v : totalSentUnread++));

        const logoutHandler = () => {
            dispatch(authActions.logout());
            history.replace("/");
        };

        const sendHandler = () => {
            history.replace("/Sent");
        };
        const inboxHandler = () => {
            history.replace('/MailInbox')
        }
        const composeHandler = () => {
            history.replace("/SendMail");
        };

        return ( <
                nav className = "navbar navbar-dark bg-primary" >
                <
                h1 > Mail Box < /h1> {
                    isLoggedIn && < Button className = "btn btn-warning "
                    onClick = { composeHandler } >
                        Compose Mail <
                        /Button>} {
                            isLoggedIn && < Button className = "btn btn-warning "
                            onClick = { inboxHandler } >
                                Inbox({ totalInboxUnread }) <
                                /Button>} {
                                    isLoggedIn && ( <
                                        Button className = "btn btn-warning "
                                        onClick = { sendHandler } >
                                        Sent Box({ totalSentUnread }) <
                                        /Button>
                                    )
                                }

                            {
                                isLoggedIn && < Button className = "btn btn-warning float-right"
                                onClick = { logoutHandler } >
                                    Logout <
                                    /Button>} <
                                    /nav>
                            );
                        };

                    export default Header;