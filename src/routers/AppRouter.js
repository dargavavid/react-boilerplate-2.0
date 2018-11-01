import React from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const AppRouter = (props) => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/ingredients" component={IngredientPage} exact={true}/>
                <Route path="/ingredients/add" component={IngredientAdder} exact={true}/>
                <Route path="/ingredients/edit" component={IngredientEditor} exact={true}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;