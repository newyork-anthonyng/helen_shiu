// TODO: Implement ARIA menu control here
// https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton
import React, { Component } from 'react';
import Toggle from '../Toggle';
import Navigatable from '../Navigatable';

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

  renderWorkLinks = (focusLastElement) => {
    return (
      <Navigatable focusLastElement={focusLastElement} aria-labelledby={this.buttonID}>
        {
          this.workLinks.map((link, i) => (
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
          <div>
            <h2
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
              role="button"
              aria-haspopup="true"
              aria-controls={this.contentID}
              aria-expanded={isExpanded ? "true" : null}
              tabIndex={0}
            >
              Work
            </h2>

            {isExpanded && this.renderWorkLinks(focusLastElement)}
          </div>
        )
      }

      </Toggle>
    );
  }
}

export default Work;
