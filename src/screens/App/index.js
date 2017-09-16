import React, { Component } from 'react';
import Footer from 'components/Footer';
import { Link } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import styles from './styles.css';

const Home = () => (
  <p>
    I'm a NYC based graphic designer with a tax & accounting background, currently at RBX Active.
  </p>
);

const Work = () => (
  <div>
    <a href="#">RBX Active</a>
    <a href="/work/wanderer">Wanderer</a>
    <a href="/work/swimtribe">Swim Tribe</a>
    <a href="/work/nest">Nest</a>
    <a href="/work/pooh">The Complete Tales of Winnie the Pooh</a>
  </div>
)

const Contact = () => (
  <div>
    <a href="mailto:helen.shiu@outlook.com">Email</a>
    <a href="#">Resume</a>
    <a href="https://www.linkedin.com/in/helen-shiu-62384027">LinkedIn</a>
  </div>
);

const NoMatch = () => (
  <Redirect to="/" />
);

class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <nav className={styles.nav}>
          <Link to="/">Helen Shiu</Link>

          <div className={styles.secondaryNav}>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
