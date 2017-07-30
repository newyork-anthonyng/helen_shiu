// TODO: Implement ARIA menu control here
// https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton
import React, { Component } from 'react';
import Link from 'next/link';

class Work extends Component {
  constructor() {
    super();

    this.workLinks = [
      { text: 'RBX Active', href: 'rbx-active' },
      { text: 'Wanderer', href: 'wanderer' },
      { text: 'Swim Tribe', href: 'swim-tribe' },
      { text: 'Nest', href: 'nest' },
      { text: 'The Complete Tales of Winnie the Pooh', href: 'winnie-the-pooh' },
    ];

    this.state = {
      isExpanded: false,
    };
  }

  renderWorkLinks = () => {
    const workLinks = this.workLinks.map((link, i) => (
      <li key={i}>
        <Link href={link.href}>
          <a>{link.text}</a>
        </Link>
      </li>
    ));

    return (
      <ul>
        {workLinks}
      </ul>
    );
  }

  toggleWork = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  render() {
    return (
      <div>
        <h2 onClick={this.toggleWork}>Work</h2>

        {this.state.isExpanded && this.renderWorkLinks()}
      </div>
    );
  }
}

export default Work;
