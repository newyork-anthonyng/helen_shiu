import React, { Component } from 'react';
import Menu from './components/Menu';
import MenuButton from './components/MenuButton';
import MenuDisplay from './components/MenuDisplay';
import styles from './styles.css';

class App extends Component {
  renderHeading = () => {
    return (
      <div>
        <h1>Helen Shiu</h1>

        <Menu>
          I am a NYC based graphic designer, currently at RBX Active.
          If you'd like to see more work, collaborate, or say hello,
          <MenuButton><span>let's stay in touch!</span></MenuButton>

          <MenuDisplay>
            <a href="#">Email</a>
            <a href="#">Resume</a>
            <a href="#">LinkedIn</a>
          </MenuDisplay>
        </Menu>
      </div>
    );
  }

  renderWork = () => {
    return (
      <Menu>
        <MenuButton><h2>Work</h2></MenuButton>
        <MenuDisplay>
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
      </div>
    );
  }
}

export default App;
