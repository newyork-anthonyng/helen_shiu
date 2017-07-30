// TODO: Implement ARIA menu control here
// https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton
import React, { Component } from 'react';
import Link from 'next/link';
import Toggle from '../Toggle';

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

    this.contentID = 'contentId';
    this.buttonID = 'buttonId';
    this.linkHrefs = {};
  }

  renderWorkLinks = () => {
    const workLinks = this.workLinks.map((link, i) => (
      <li
        key={i}
        role="none"
      >
        <Link href={link.href}>
          <a
            role="menuitem"
            tabIndex={-1}
            ref={'link-' + i}
          >{link.text}</a>
        </Link>
      </li>
    ));

    return (
      <ul
        role="menu"
        aria-labelledby={this.buttonID}
      >
        {workLinks}
      </ul>
    );
  }

  render() {
    return (
      <Toggle>
      {
        (isExpanded, handleToggleClick) => (
          <div>
            <h2
              onClick={handleToggleClick}
              onKeyDown={(e) => {
                switch (e.keyCode) {
                  case 13: // ENTER
                  case 32: // SPACE
                  case 38: // UP
                  case 40: // DOWN
                    console.log(this.refs);
                    console.log(this.ref);
                    handleToggleClick();
                    // this.refs['link-0'].focus();
                    break;
                }
              }}
              role="button"
              aria-haspopup="true"
              aria-controls={this.contentID}
              aria-expanded={isExpanded ? "true" : null}
              tabIndex={0}
            >
              Work
            </h2>

            {this.renderWorkLinks()}
          </div>
        )
      }

      </Toggle>
    );
  }
}

export default Work;
