import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import ExpensDash from '../components/ExpensDash';
import CreatePage from '../components/AddExpens';
import EditPage from '../components/EditPage';
import HelpPage from '../components/Help';
import notFound from '../components/404';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpensDash} exact={true} />
                <Route path='/create' component={CreatePage} />
                <Route path='/edit/:id' component={EditPage} />
                <Route path='/help' component={HelpPage} />
                <Route component={notFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
