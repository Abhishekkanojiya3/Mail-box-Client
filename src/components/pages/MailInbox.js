import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inboxActions } from "../store/inbox-slice";

const MailInbox = () => {
    const loggedEmail = useSelector((state) => state.auth.email);
    const dispatch = useDispatch();
    const inbox = useSelector((state) => state.inbox.inbox);

    console.log(inbox);

    const getData = async() => {
        const get = await fetch(`https://mail-box-client-271ae-default-rtdb.firebaseio.com/${loggedEmail}/inbox.json`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await get.json();
        console.log(data);
        let newArray = [];
        if (!!data) {
            newArray = Object.keys(data).map((mail) => {
                return {
                    id: mail,
                    email: data[mail].email,
                    subject: data[mail].subject,
                    body: data[mail].body
                };
            });
            console.log(newArray);
            dispatch(
                inboxActions.inboxHandler({
                    newArray: newArray,
                })
            );
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return ( <
        Fragment >
        <
        ul > {
            inbox.map((arr) => ( <
                li key = { arr.id } >
                <
                span style = {
                    { marginRight: "1em" } } > Email: { arr.email } < /span><br / >
                <
                span style = {
                    { marginRight: "1em" } } > Subject: { arr.subject } < /span><br / >
                <
                span > Body: { arr.body } < /span> <
                /li>
            ))
        } <
        /ul> <
        /Fragment>
    )


};
export default MailInbox;