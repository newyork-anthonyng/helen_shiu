import React, { Component, Children, cloneElement } from 'react';
import MenuDisplay from '../MenuDisplay';
import MenuButton from '../MenuButton';
import uuid from '../../utilities/uuid';

class Menu extends Component {
  constructor() {
    super();

    this.UUID = uuid();

    this.state = {
      isMenuVisible: false,
      shouldFocusOnLastElement: false,
    };
  }

  handleMenuButtonClick = () => {
    this.setState(prevState => ({
      isMenuVisible: !prevState.isMenuVisible,
      shouldFocusOnLastElement: false,
    }));
  }

  handleMenuButtonKeyDown = (e) => {
    e.persist();

    if (e.keyCode === 38 || e.keyCode === 40) {
      // pressing UP or DOWN arrows
      this.setState(prevState => ({
        isMenuVisible: true,
        shouldFocusOnLastElement: e.keyCode === 38,
      }), () => {
        if (this.refs.MenuDisplay) this.refs.MenuDisplay.focus();
      });
    } else if (e.keyCode === 13 || e.keyCode === 32) {
      // pressing ENTER or SPACE_BAR
      this.setState(prevState => ({
        isMenuVisible: !prevState.isMenuVisible,
      }));
    }
  }

  renderChildren = () => {
    return Children.map(this.props.children, child => {
      if (child.type === MenuDisplay) {
        if (this.state.isMenuVisible) {
          const menuDisplayProps = {
            shouldFocusOnLastElement: this.state.shouldFocusOnLastElement,
            ref: 'MenuDisplay',
            'aria-labelledby': `${this.UUID}-button`,
            id: `${this.UUID}-display`,
          };
          return cloneElement(child, menuDisplayProps);
        }
        return null;
      } else if (child.type === MenuButton) {
        const menuButtonProps = {
          onClick: this.handleMenuButtonClick,
          onKeyDown: this.handleMenuButtonKeyDown,
          'aria-controls': `${this.UUID}-display`,
          id: `${this.UUID}-button`,
        };
        if (this.state.isMenuVisible) {
          menuButtonProps['aria-expanded'] = 'true';
        }

        return cloneElement(child, menuButtonProps);
      }
      return child;
    });
  }

  render() {
    return (
      <div>
        {this.renderChildren()}
      </div>
    );
  }
}

export default Menu;
