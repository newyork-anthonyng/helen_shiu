import React, { Component, Children, cloneElement } from 'react';
import MenuDisplay from '../MenuDisplay';
import MenuButton from '../MenuButton';

class Menu extends Component {
  constructor() {
    super();

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
    // 38 => UP
    // 40 => DOWN
    // 13 => ENTER
    // 32 => SPACE_BAR
    if (!/(38|40|32|13)/.test(e.keyCode)) return;

    const shouldFocusOnLastElement = e.keyCode === 38;

    this.setState(prevState => ({
      isMenuVisible: !prevState.isMenuVisible,
      shouldFocusOnLastElement,
    }));
  }

  renderChildren = () => {
    return Children.map(this.props.children, child => {
      if (child.type === MenuDisplay) {
        if (this.state.isMenuVisible) {
          return cloneElement(child, {
            shouldFocusOnLastElement: this.state.shouldFocusOnLastElement,
          });
        }
        return null;
      } else if (child.type === MenuButton) {
        return cloneElement(child, {
          onClick: this.handleMenuButtonClick,
          onKeyDown: this.handleMenuButtonKeyDown,
        });
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
