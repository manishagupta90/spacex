import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent/HomeComponent';

const routes = (
  <Switch>
    <Route path='/' component={HomeComponent} />
    <Route path='*' component={() => 'not found'} />
  </Switch>
);

export default routes;
