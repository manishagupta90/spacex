import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent/HomeComponent';

const routes = (
  <Switch>
    <Route exact path='/' component={HomeComponent} />
    <Route exact path='*' component={() => 'not found'} />
  </Switch>
);

export default routes;
