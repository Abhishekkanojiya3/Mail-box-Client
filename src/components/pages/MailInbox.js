import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inboxActions } from "../store/inbox-slice";
import { objActions } from "../store/obj-slice";
import { useHistory } from "react-router-dom";
import classes from './SendMail.module.css'
const MailInbox = () => {
        const loggedEmail = useSelector((state) => state.auth.email);
        const dispatch = useDispatch();
        const inbox = useSelector((state) => state.inbox.inbox);
        const history = useHistory();

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
                        body: data[mail].body,
                        read: data[mail].read,
                    };
                });
                console.log(newArray);
                dispatch(
                    inboxActions.inboxHandler({
                        newArray: newArray,
                    })
                );
                dispatch(inboxActions.inboxMailRead(newArray));
            }
        };
        useEffect(() => {
            getData();
        }, []);
        const inboxMailReadFetching = (mail) => {
            const updateData = async(mail) => {
                try {
                    const response = await fetch(
                        `https://mail-box-client-271ae-default-rtdb.firebaseio.com//${loggedEmail}/inbox/${mail.id}.json`, {
                            method: "PUT",
                            body: JSON.stringify({
                                ...mail,
                                read: true,
                            }),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    const data = await response.json();
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            };
            updateData(mail);
        };

        const openMailHandler = (obj) => {
            dispatch(objActions.objHandler(obj));
            dispatch(inboxActions.inboxMailRead(obj));

            const mail = inbox.find((mail) => {
                return mail.id === obj.id;
            });
            inboxMailReadFetching(mail);
            history.replace("/MailDetail");
        };

        const deleteHandler = async(obj) => {
            try {
                const del = await fetch(`https://mail-box-client-271ae-default-rtdb.firebaseio.com//${loggedEmail}/inbox/${obj.id}.json`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                const data = await del.json();
                console.log(data);
                getData();
            } catch (err) {
                alert(err.message)
            }
        };
        return ( <
            Fragment >
            <
            h1 className = "text-center" > INBOX < /h1> <
            ul > {
                inbox.map((obj) => ( <
                        div key = { obj.id } >
                        <
                        table className = "table" >
                        <
                        tbody >
                        <
                        tr >
                        <
                        td > { obj.email } < /td> <
                        td onClick = { openMailHandler.bind(null, obj) } > { obj.body } < /td> <
                        td onClick = { openMailHandler.bind(null, obj) } > { obj.subject } < /td>

                        <
                        td > {!!obj.read ? "read" : < b > "Unread" < /b>}</td >
                                <
                                /tr> <
                                td >
                                <
                                button
                            className = "btn btn-primary"
                            onClick = { deleteHandler.bind(null, obj) } >
                            Delete <
                            /button> <
                            /td> <
                            /tbody> <
                            /table> <
                            /div>
                        ))
                } <
                /ul> <
                /Fragment>
            )


        };
        export default MailInbox;