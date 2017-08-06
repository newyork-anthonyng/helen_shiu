import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './screens/NotFound';

const Found = () => <h1>Welcome!!!</h1>;

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Found} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
