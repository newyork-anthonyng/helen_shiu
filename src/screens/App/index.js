import React, { Component } from 'react';
import Footer from 'components/Footer';
import Menu from './components/Menu';
import MenuButton from './components/MenuButton';
import MenuDisplay from './components/MenuDisplay';
import TargetBlankLink from './components/TargetBlankLink';
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
            <TargetBlankLink href="mailto:helen.shiu@outlook.com">Email</TargetBlankLink>
            <TargetBlankLink href="#">Resume</TargetBlankLink>
            <TargetBlankLink href="https://www.linkedin.com/in/helen-shiu-62384027">LinkedIn</TargetBlankLink>
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

  render() {
    return (
      <div>
        {this.renderHeading()}
        {this.renderWork()}

        <Footer className={styles.footer} />
      </div>
    );
  }
}

export default App;
