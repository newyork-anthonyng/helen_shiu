// TODO: Need link to resume
import React, { Component } from 'react';
import Link from 'next/link';
import HOC from '../HOC';
import Navigatable from '../Navigatable';
import { breakpoint, mainColor } from '../../utility/styles';

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
    const { focusLastElement, onMenuButtonClick, onMenuButtonKeyDown, isExpanded, onMenuButtonFocus } = this.props;

    return (
      <header>
        <style jsx>{`
          h1 {
            color: ${mainColor};
            font-size: 44px;
            font-weight: 400;
            margin: 0;
          }

          p {
            font-size: 14px;
            font-weight: 300;
            line-height: 21px;
            margin: 0;
          }

          span {
            color: ${mainColor};
          }

          @media (min-width: ${breakpoint}px) {
            h1 {
              font-size: 98px;
            }

            p {
              font-size: 20px;
              line-height: 30px;
            }
          }

        `}</style>
        <h1>Helen Shiu</h1>
        <p>
          I am a NYC based graphic designer, currently at RBX Active. If you’d like
          to see more work, collaborate,
          or say hello, lets
          <span
            tabIndex={0}
            onClick={onMenuButtonClick}
            onKeyDown={onMenuButtonKeyDown}
            onFocus={onMenuButtonFocus}
          >
          &nbsp;stay in touch
          </span>!
        </p>

        {isExpanded && this.renderContactLinks(focusLastElement)}
      </header>
    );
  }
}

export default HOC(Header);
