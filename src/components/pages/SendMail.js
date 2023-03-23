import React, { Fragment } from "react";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from "./SendMail.module.css";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { enableMapSet } from "immer";

const SendMail = () => {
    const currEmail = useSelector((state) => state.auth.email);
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");

    let content;
    const onEditorStateChange = (event) => {
        content = event.getCurrentContent().getPlainText();
    }

    const sendEmailHandler = (e) => {
        setEmail(e.target.value);
    }
    const sendSubjectHandler = (e) => {
        setSubject(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();

        const obj = {
            email: email,
            body: content,
            subject: subject
        }
        const regex = /[.@]/g;
        const emailId = obj.email.replace(regex, "");

        const postData = async() => {
            const sent = await fetch(`https://mail-box-client-271ae-default-rtdb.firebaseio.com/${currEmail}/sent.json`, {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    body: content,
                    subject: subject
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await sent.json();
            console.log(data);

            const inbox = await fetch(`https://mail-box-client-271ae-default-rtdb.firebaseio.com/${currEmail}/inbox.json`, {
                method: "POST",
                body: JSON.stringify({
                    email: currEmail,
                    body: content,
                    subject: subject
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data2 = await inbox.json();
            console.log(data2)
        };
        postData();
        setEmail("");
        setText("")

    };
    return ( <
        Fragment >
        <
        h1 style = {
            { textAlign: "center" } } > SEND EMAIL: < /h1> <
        Form onSubmit = { submitHandler }
        className = { classes.box } >
        <
        div >
        <
        p > From: { currEmail } < /p> <
        /div> <
        div >
        <
        Form.Group controlId = "To" >
        <
        Form.Label > To: < /Form.Label> <
        Form.Control type = "email"
        placeholder = "Example@gmail.com"
        value = { email }
        onChange = { sendEmailHandler }
        required /
        >
        <
        /Form.Group> <
        /div> <
        div >
        <
        Form.Group controlId = "To" >
        <
        Form.Label > Subject < /Form.Label> <
        Form.Control type = "text"
        placeholder = "Subject"
        value = { subject }
        onChange = { sendSubjectHandler }
        required /
        >
        <
        /Form.Group> <
        /div> <
        br / >
        <
        div >
        <
        label htmlFor = "text " > Compose email: < /label> {
            /* <textarea
                       className={classes.textArea}
                        value={text}
                         onChange={(e) => setText(e.target.value)}
                             placeholder="Type your message here"
                                       /> */
        } <
        Editor
        //  editorState={editorState}
        className = { classes.box }
        placeholder = "Type your message here"

        toolbarClassName = "toolbarClassName"
        wrapperClassName = "wrapperClassName"
        editorClassName = "editorClassName"
        onEditorStateChange = { onEditorStateChange }
        /> <
        /div> <
        div >
        <
        Button type = "submit" > Send < /Button> <
        /div> <
        /Form> <
        /Fragment>
    );
};
export default SendMail