import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import PageLayout from './components/WorkPageLayout';

import Nest from './components/Nest';
import SwimTribe from './components/SwimTribe';
import Wanderer from './components/Wanderer';
import Pooh from './components/WinnieThePooh';

class Work extends Component {
  render() {
    return (
      <PageLayout>
        <Switch>
          <Route path="/work/nest" component={Nest} />
          <Route path="/work/pooh" component={Pooh} />
          <Route path="/work/swimtribe" component={SwimTribe} />
          <Route path="/work/wanderer" component={Wanderer} />
          <Redirect to="/" />
        </Switch>
      </PageLayout>
    );
  }
}

export default Work;
