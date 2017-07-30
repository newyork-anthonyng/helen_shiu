// TODO: Need link to resume
import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
  constructor() {
    super();

    this.contactLinks = [
      { text: 'Email', href: 'mailto:helen.shiu@outlook.com' },
      { text: 'Resume', href: '#resume' },
      { text: 'LinkedIn', href: 'https://www.linkedin.com/in/helen-shiu-62384027' },
    ];
    this.state = {
      isExpanded: false,
    };
  }

  toggleContactInfo = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  renderContactLinks = () => {
    const contactLinks = this.contactLinks.map((link, i) => (
      <li key={i}>
        <Link href={link.href}>
          <a>{link.text}</a>
        </Link>
      </li>
    ));

    return (
      <ul>
        {contactLinks}
      </ul>
    );
  }

  render() {
    return (
      <header>
        <h1>Helen Shiu</h1>
        <p>
          I am a NYC based graphic designer, currently at RBX Active. If you’d like
          to see more work, collaborate,
          or say hello, lets <span onClick={this.toggleContactInfo}>stay in touch!</span>
        </p>

        {this.state.isExpanded && this.renderContactLinks()}
      </header>
    );
  }
}

export default Header;
