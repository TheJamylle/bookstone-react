import React from 'react';
import { Route, BrowserRouter, HashRouter, Switch } from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewBook from './pages/NewBook';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/books/new" component={NewBook} />
            </Switch>
        </BrowserRouter>
    );
}