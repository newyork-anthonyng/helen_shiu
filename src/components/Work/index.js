import React, { Component } from 'react';
import Navigatable from '../Navigatable';
import HOC from '../HOC';
import { workLinks } from '../../utility/info';
import { breakPoint, mainColor } from '../../utility/styles';

class Work extends Component {
  constructor() {
    super();

    this.contentID = 'contentId';
    this.buttonID = 'buttonId';
    this.linkHrefs = {};
  }

  renderWorkLinks = (isExpanded, focusLastElement) => {
    return (
      <Navigatable shouldFocus={isExpanded} focusLastElement={focusLastElement} aria-labelledby={this.buttonID}>
        {
          workLinks.map((link, i) => (
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
      <div>
        <style jsx>{`
          h2 {
            color: ${mainColor}
            display: inline-block;
            font-size: 26px;
            font-weight: 400;
            margin: 65px 0 0 0;
          }

          .bar {
            margin-bottom: 60px;
          }

          @media (min-width: ${breakPoint}px) {
            h2 {
              font-size: 37px;
              margin-top: 82px;
            }

            .bar {
              margin-bottom: 120px;
            }
          }
        `}</style>
        <h2
          onClick={onMenuButtonClick}
          onKeyDown={onMenuButtonKeyDown}
          onFocus={onMenuButtonFocus}
          role="button"
          aria-haspopup="true"
          aria-controls={this.contentID}
          aria-expanded={isExpanded ? "true" : null}
          tabIndex={0}
        >
          Work
        </h2>

        <div style={{ visibility: isExpanded ? 'visible' : 'hidden' }} className="bar">
          {this.renderWorkLinks(isExpanded, focusLastElement)}
        </div>
      </div>
    );
  }
}

export default HOC(Work);
