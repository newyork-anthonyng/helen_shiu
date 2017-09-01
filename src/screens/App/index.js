import React, { Component } from 'react';
import Footer from 'components/Footer';
import Menu from './components/Menu';
import MenuButton from './components/MenuButton';
import MenuDisplay from './components/MenuDisplay';
import TargetBlankLink from './components/TargetBlankLink';
import styles from './styles.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      url: '#'
    };
  }

  renderBody = () => {
    switch(this.state.url) {
      case '#work':
        return this.renderWorkBody();
      case '#contact':
        return this.renderContactBody();
      case '#':
      default:
        return this.renderHomeBody();
    }
  }

  renderHomeBody() {
    return (
      <p>
        I'm a NYC based graphic designer with a tax & accounting background, currently at RBX Active.
      </p>
    );
  }

  renderWorkBody() {
    return (
      <div>
        <TargetBlankLink href="#">RBX Active</TargetBlankLink>
        <TargetBlankLink href="/work/wanderer">Wanderer</TargetBlankLink>
        <TargetBlankLink href="/work/swimtribe">Swim Tribe</TargetBlankLink>
        <TargetBlankLink href="/work/nest">Nest</TargetBlankLink>
        <TargetBlankLink href="/work/pooh">The Complete Tales of Winnie the Pooh</TargetBlankLink>
      </div>
    );
  }

  renderContactBody() {
    return (
      <div>
        <TargetBlankLink href="mailto:helen.shiu@outlook.com">Email</TargetBlankLink>
        <TargetBlankLink href="#">Resume</TargetBlankLink>
        <TargetBlankLink href="https://www.linkedin.com/in/helen-shiu-62384027">LinkedIn</TargetBlankLink>
      </div>
    );
  }

  render() {
    return (
      <div>
        <nav>
          <a href="#" onClick={() => this.setState({ url: '#' })} >Helen Shiu</a>
          <a href="#work" onClick={() => this.setState({ url: '#work' })}>Work</a>
          <a href="#contact" onClick={() => this.setState({ url: '#contact' })}>Contact</a>
        </nav>

        {this.renderBody()}

        <Footer />
      </div>
    );
  }
}

// class App extends Component {
//   renderHeading = () => {
//     return (
//       <header>
//         <h1>Helen Shiu</h1>
// 
//         <Menu>
//           <p className={styles.inlineText}>
//             I am a NYC based graphic designer, currently at RBX Active.
//             If you'd like to see more work, collaborate, or say hello,
//           </p>
//           <MenuButton><span className={styles.menuButton}>&nbsp;let's stay in touch!</span></MenuButton>
// 
//           <MenuDisplay className={styles.headingMenuDisplay}>
//             <TargetBlankLink href="mailto:helen.shiu@outlook.com">Email</TargetBlankLink>
//             <TargetBlankLink href="#">Resume</TargetBlankLink>
//             <TargetBlankLink href="https://www.linkedin.com/in/helen-shiu-62384027">LinkedIn</TargetBlankLink>
//           </MenuDisplay>
//         </Menu>
//       </header>
//     );
//   }
// 
//   renderWork = () => {
//     return (
//       <Menu>
//         <MenuButton><h2 className={styles.menuButton}>Work</h2></MenuButton>
//         <MenuDisplay className={styles.workMenuDisplay}>
//           <TargetBlankLink href="#">RBX Active</TargetBlankLink>
//           <TargetBlankLink href="/work/wanderer">Wanderer</TargetBlankLink>
//           <TargetBlankLink href="/work/swimtribe">Swim Tribe</TargetBlankLink>
//           <TargetBlankLink href="/work/nest">Nest</TargetBlankLink>
//           <TargetBlankLink href="/work/pooh">The Complete Tales of Winnie the Pooh</TargetBlankLink>
//         </MenuDisplay>
//       </Menu>
//     );
//   }
// 
//   render() {
//     return (
//       <div>
//         {this.renderHeading()}
//         {this.renderWork()}
// 
//         <Footer className={styles.footer} />
//       </div>
//     );
//   }
// }

export default App;
