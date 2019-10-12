import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import homePage from './components/HomePage/index';
import rentPage from './components/RentHouse/index';


const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route exact path="/" component={homePage} />
            <Route exact path="/demo" component={rentPage} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
serviceWorker.unregister();