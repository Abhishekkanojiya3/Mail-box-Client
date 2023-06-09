import { Fragment } from 'react';
import Signup from './components/Signup';
import DummyScreen from './components/pages/DummyScreen';
import { Route } from 'react-router-dom';
import SendMail from './components/pages/SendMail';
import Header from './components/pages/Header';
import MailInbox from './components/pages/MailInbox';
import MailDetail from './components/pages/MailDetail';
import Sent from './components/pages/Sent';

function App() {
    return ( <
        Fragment >
        <
        Header / >
        <
        br / >
        <
        Route path = '/'
        exact >
        <
        Signup / >
        <
        /Route> <
        Route path = '/DummyScreen'
        exact >
        <
        DummyScreen / >
        <
        /Route> <
        Route path = "/SendMail"
        exact >
        <
        SendMail / >
        <
        /Route> <
        Route path = "/MailInbox"
        exact >
        <
        MailInbox / >
        <
        /Route> <
        Route path = "/MailDetail"
        exact >
        <
        MailDetail / >
        <
        /Route> <
        Route path = "/Sent"
        exact >
        <
        Sent / >
        <
        /Route>

        <
        /Fragment>

    );
}

export default App;