import { Fragment } from 'react';
import Signup from './components/Signup';
import DummyScreen from './components/pages/DummyScreen';
import { Route } from 'react-router-dom';

function App() {
    return ( <
        Fragment >
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
        /Route>

        <
        /Fragment>

    );
}

export default App;