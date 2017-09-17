import React, { Component } from 'react';
import Footer from 'components/Footer';
import { Link } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import styles from './styles.css';
import cx from "classnames";

const Home = () => (
  <p className={styles.home}>
    I'm a NYC based graphic designer with a tax & accounting background, currently at RBX Active.
  </p>
);

const Work = () => (
  <ul className={styles.work}>
    <li><a href="#">RBX Active</a></li>
    <li><a href="/work/wanderer">Wanderer</a></li>
    <li><a href="/work/swimtribe">Swim Tribe</a></li>
    <li><a href="/work/nest">Nest</a></li>
    <li><a href="/work/pooh">The Complete Tales of Winnie the Pooh</a></li>
  </ul>
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

const TitleScreen = ({ open }) => {
  const className = cx(styles.titleScreen, { [styles.titleScreenActive]: open });

  return (
    <div className={className}>
      <h1>Helen Shiu</h1>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      // isTitleScreenOpen: true
      isTitleScreenOpen: false
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        isTitleScreenOpen: false
      });
    }, 1000);
  }

  render() {
    return (
      <div className={styles.body}>
        <TitleScreen open={this.state.isTitleScreenOpen} />

        <nav className={styles.nav}>
          <Link className={styles.homeLink} to="/">Helen Shiu</Link>

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

        <Footer className={styles.footer} />
      </div>
    );
  }
}

export default App;
