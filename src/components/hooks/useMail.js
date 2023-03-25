import { useDispatch, useSelector } from "react-redux";
import { inboxActions } from "../store/inbox-slice";
import { useEffect } from "react";

const useMail = async(sent = true) => {
    const loggedEmail = useSelector((currState) => currState.auth.email);
    const dispatch = useDispatch();

    const fetchMail = async() => {
        let url;
        if (sent) {
            url = `https://mail-box-client-271ae-default-rtdb.firebaseio.com/${loggedEmail}/sent.json`;
        } else {
            url = `https://mail-box-client-271ae-default-rtdb.firebaseio.com/${loggedEmail}/inbox.json`;
        }

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
        if (sent) {
            let newArray2 = [];
            if (!!data) {
                newArray2 = Object.keys(data).map((mail) => {
                    return {
                        id: mail,
                        email: data[mail].email,
                        body: data[mail].body,
                        read: data[mail].read,
                        subject: data[mail].subject
                    };
                });
                dispatch(inboxActions.sentBoxHandler({
                    newArray2: newArray2,
                }));
                //     dispatch(inboxActions.sentMailRead(newArray2))
            }
        } else {
            let newArray = [];
            if (!!data) {
                newArray = Object.keys(data).map((mail) => {
                    return {
                        id: mail,
                        email: data[mail].email,
                        body: data[mail].body,
                        read: data[mail].read,
                        subject: data[mail].subject
                    };
                });
                dispatch(
                    inboxActions.inboxHandler({
                        newArray: newArray,
                    })
                );
                //  dispatch(inboxActions.inboxMailRead(newArray))
            }
        }
    };

    useEffect(() => {
        setInterval(() => {
            console.log("rendering...")
            fetchMail()
        }, 2000);
    }, []);

    return null;
};

export default useMail;