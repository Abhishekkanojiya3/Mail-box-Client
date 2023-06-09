import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./SendMail.module.css";

const MailDetail = () => {
    const currEmail = useSelector((currState) => currState.auth.email);

    const specificEmail = useSelector((currState) => currState.obj.specificEmail);
    console.log("currEmail:", currEmail);
    console.log("specificEmail:", specificEmail);

    return ( <
        Fragment >
        <
        div className = { classes.box } >
        <
        div className = "container" >
        <
        h1 className = "text-center" > Mail < /h1> <
        table className = "table" >
        <
        tbody >
        <
        tr >
        <
        td >
        <
        h3 > To: { currEmail } < /h3> <
        /td> <
        /tr> {
            /* <tr>
                            <td>
                              <h4>from: {specificEmail.email}</h4>
                            </td>
                          </tr> */
        } <
        tr >
        <
        td >
        <
        h6 > Subject: { specificEmail.subject } < /h6> <
        /td> <
        /tr>

        <
        tr >
        <
        td >
        <
        h6 > Message: { specificEmail.body } < /h6> <
        /td> <
        /tr> <
        /tbody> <
        /table> <
        /div> <
        /div> <
        /Fragment>
    );
};

export default MailDetail;