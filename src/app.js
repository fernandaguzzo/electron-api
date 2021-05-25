import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import DeliverymenList from './screens/DeliverymenList';

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/deliverymenList" component={DeliverymenList} />
            </Switch>
        </HashRouter>
    );
}

export default App;