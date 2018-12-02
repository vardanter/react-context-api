import React from 'react';
import Home from "../../home";
import wrapper from '../../hoc/wrapper';
import withLayoutWrapper from '../../hoc/layout';
import compose from '../../../helpers/compose';
import { Route, Switch } from "react-router-dom";

import './main.css';
import Test from "../../test";

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/test" component={Test}/>
        </Switch>
    )
};
export default compose(
    wrapper,
    withLayoutWrapper
)(Main);