import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

const Nest = () => <h1>Nest</h1>;
const Pooh = () => <h1>Pooh</h1>;
const Other = (props) => {
  console.log(props);
 return <h1>Other</h1>;
}

class Work extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/work/nest" component={Nest} />
          <Route path="/work/pooh" component={Pooh} />
          <Redirect to="/" />
        </Switch>
        <p>
          Some info
        </p>
        <footer>© 2017 Helen Shiu. All rights reserved.</footer>
      </div>
    );
  }
}

export default Work;
