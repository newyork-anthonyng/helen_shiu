import React, { Component } from 'react';
import HoverEffectLink from "./components/HoverEffectLink";
import Footer from 'components/Footer';
import { Link } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import styles from './styles.css';
import cx from "classnames";

const Home = () => (
  <p className={styles.home}>
    I&apos;m a NYC based graphic designer with a tax & accounting background, currently at RBX Active.
  </p>
);

const Work = () => (
  <ol className={styles.work}>
    <li><HoverEffectLink href="#" target="_blank" rel="noopener noreferrer">RBX Active</HoverEffectLink></li>
    <li><HoverEffectLink href="/work/wanderer" target="_blank" rel="noopener noreferrer">Wanderer</HoverEffectLink></li>
    <li><HoverEffectLink href="/work/swimtribe" target="_blank" rel="noopener noreferrer">Swim Tribe</HoverEffectLink></li>
    <li><HoverEffectLink href="/work/nest" target="_blank" rel="noopener noreferrer">Nest</HoverEffectLink></li>
    <li><HoverEffectLink href="/work/pooh" target="_blank" rel="noopener noreferrer">The Complete Tales of Winnie the Pooh</HoverEffectLink></li>
  </ol>
)

const Contact = () => (
  <ul className={styles.contact}>
    <li><a href="mailto:helen.shiu@outlook.com">Email</a></li>
    <li><a href="https://drive.google.com/file/d/0B5c48vRzSDJWUXhPMHFjd2RCaVpSZzQyNzREMFo2T2owTEtj/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
    <li><a href="https://www.linkedin.com/in/helen-shiu-62384027" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
  </ul>
);

const NoMatch = () => (
  <Redirect to="/" />
);

const TitleScreen = ({ open }) => {
  const className = cx("titleOverlay", styles.titleScreen, { [styles.titleScreenActive]: open });

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
