// TODO: Need link to resume
import React, { Component } from 'react';
import Link from 'next/link';
import HOC from '../HOC';
import Navigatable from '../Navigatable';
import { contactLinks } from '../../utility/info';
import { breakPoint, mainColor, letterSpacing } from '../../utility/styles';

class Header extends Component {
  constructor() {
    super();

    this.buttonID = 'buttonID';
    this.contentID = 'contentID';
  }
  renderContactLinks = (isExpanded, focusLastElement) => {
    return (
      <Navigatable shouldFocus={isExpanded} focusLastElement={focusLastElement} aria-labelledby={this.buttonID}>
        {
          contactLinks.map((link, i) => (
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
            letter-spacing: ${letterSpacing}px;
            line-height: 30px;
            margin: 8px 0 0 0;
          }

          span {
            color: ${mainColor};
          }

          @media (min-width: ${breakPoint}px) {
            h1 {
              font-size: 98px;
            }

            p {
              font-size: 20px;
              line-height: 40px;
            }
          }
        `}</style>
        <style jsx global> {`
          .foo li {
            font-size: 14px;
            letter-spacing: ${letterSpacing}px;
            margin-bottom: 18px;
          }

          @media (min-width: ${breakPoint}px) {
            .foo ul {
              margin: 20px auto 0;
              max-width: 420px;
            }

            .foo li {
              border-left: 1px solid white;
              display: inline-block;
              font-size: 20px;
              padding: 0 20px;
            }

            .foo li:first-of-type {
              border-left: none;
            }

            .foo li:last-of-type {
              padding-right: 0;
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
            role="button"
            aria-haspopup="true"
            aria-controls={this.contentID}
            aria-expanded={isExpanded ? "true" : null}
          >
          &nbsp;stay in touch
          </span>!
        </p>

        <div style={{ visibility: isExpanded ? 'visible' : 'hidden' }} className="foo">
          {this.renderContactLinks(isExpanded, focusLastElement)}
        </div>
      </header>
    );
  }
}

export default HOC(Header);
