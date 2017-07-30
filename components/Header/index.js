// TODO: Need link to resume
import React, { Component } from 'react';
import Link from 'next/link';
import Toggle from '../Toggle';
import Navigatable from '../Navigatable';

class Header extends Component {
  constructor() {
    super();

    this.contactLinks = [
      { text: 'Email', href: 'mailto:helen.shiu@outlook.com' },
      { text: 'Resume', href: '#resume' },
      { text: 'LinkedIn', href: 'https://www.linkedin.com/in/helen-shiu-62384027' },
    ];
  }

  renderContactLinks = (focusLastElement) => {
    return (
      <Navigatable focusLastElement={focusLastElement} aria-labelledby={this.buttonID}>
        {
          this.contactLinks.map((link, i) => (
            <a
              role="menuitem"
              href={link.href}
              target="_blank"
              key={i}
            >
              {link.text}
            </a>
          ))
        }
      </Navigatable>
    );
  }

  render() {
    let focusLastElement = false;

    return (
      <Toggle>
        {
          (isExpanded, handleToggleClick) => (
            <header>
              <h1>Helen Shiu</h1>
              <p>
                I am a NYC based graphic designer, currently at RBX Active. If you’d like
                to see more work, collaborate,
                or say hello, lets
                <span
                  tabIndex={0}
                  onClick={handleToggleClick}
                  onKeyDown={(e) => {
                    switch (e.keyCode) {
                      case 13: // ENTER
                      case 32: // SPACE
                      case 40: // DOWN
                        handleToggleClick();
                        break;
                      case 38: // UP
                        handleToggleClick();
                        focusLastElement = true;
                        break;
                    }
                  }}
                >
                &nbsp;stay in touch!
                </span>
              </p>

              {isExpanded && this.renderContactLinks(focusLastElement)}
            </header>
          )
        }
      </Toggle>
    );
  }
}

export default Header;
