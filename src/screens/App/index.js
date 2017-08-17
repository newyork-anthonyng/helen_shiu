import React, { Component } from 'react';
import Menu from './components/Menu';
import MenuButton from './components/MenuButton';
import MenuDisplay from './components/MenuDisplay';
import styles from './styles.css';

class App extends Component {
  renderHeading = () => {
    return (
      <header>
        <h1>Helen Shiu</h1>

        <Menu>
          <p className={styles.inlineText}>
            I am a NYC based graphic designer, currently at RBX Active.
            If you'd like to see more work, collaborate, or say hello,
          </p>
          <MenuButton><span className={styles.menuButton}>&nbsp;let's stay in touch!</span></MenuButton>

          <MenuDisplay className={styles.headingMenuDisplay}>
            <a href="#">Email</a>
            <a href="#">Resume</a>
            <a href="#">LinkedIn</a>
          </MenuDisplay>
        </Menu>
      </header>
    );
  }

  renderWork = () => {
    return (
      <Menu>
        <MenuButton><h2 className={styles.menuButton}>Work</h2></MenuButton>
        <MenuDisplay className={styles.workMenuDisplay}>
          <a href="#">RBX Active</a>
          <a href="#">Wanderer</a>
          <a href="#">Swim Tribe</a>
          <a href="#">Nest</a>
          <a href="#">The Complete Tales of Winnie the Pooh</a>
        </MenuDisplay>
      </Menu>
    );
  }

  renderFooter = () => {
    return (
      <footer className={styles.footer}>
        © 2017 Helen Shiu. All rights reserved.
      </footer>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeading()}
        {this.renderWork()}
        {this.renderFooter()}
      </div>
    );
  }
}

export default App;
