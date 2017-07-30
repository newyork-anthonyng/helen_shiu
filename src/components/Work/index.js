import React, { Component } from 'react';
import Navigatable from '../Navigatable';
import HOC from '../HOC';

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
    const { focusLastElement, onMenuButtonClick, onMenuButtonKeyDown, isExpanded, onMenuButtonFocus } = this.props;

    return (
      <div>
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

        {isExpanded && this.renderWorkLinks(focusLastElement)}
      </div>
    );
  }
}

export default HOC(Work);
