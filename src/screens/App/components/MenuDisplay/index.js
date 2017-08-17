import React, { Component, Children } from 'react';
import T from 'prop-types';

class MenuDisplay extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible && this.props.visible) {
      this.focus();
    }
  }

  focus = () => {
    let nextChildIndex = 0;
    if (this.props.shouldFocusOnLastElement) {
      nextChildIndex = Children.count(this.props.children) - 1;
    }

    this.focusOnElement(nextChildIndex);
  }

  focusOnElement = (index) => {
    this.refs[`child-${index}`].focus();
  }

  handleKeyDown = (index) => {
    return (e) => {
      let nextFocusableChildIndex;
      const childrenCount = Children.count(this.props.children);

      switch (e.keyCode) {
        case 38: // UP
          e.preventDefault();
          nextFocusableChildIndex = index - 1;
          if (nextFocusableChildIndex < 0) {
            nextFocusableChildIndex = childrenCount - 1;
          }
          break;
        case 40: // DOWN
          e.preventDefault();
          nextFocusableChildIndex = index + 1;
          if (nextFocusableChildIndex >= childrenCount) {
            nextFocusableChildIndex = 0;
          }
          break;
      }

      if (nextFocusableChildIndex !== undefined) {
        this.refs[`child-${nextFocusableChildIndex}`].focus();
      }
    }
  }

  renderChildren = () => {
    return Children.map(this.props.children, (child, index) => {
      return (
        <li>
        {React.cloneElement(child, {
          ref: `child-${index}`,
          tabIndex: -1,
          onKeyDown: this.handleKeyDown(index),
          role: 'menuitem',
        })}
        </li>
      );
    })
  }

  render() {
    const { shouldFocusOnLastElement, visible, ...otherProps } = this.props;
    const style = {
      visibility: visible ? '' : 'hidden',
    };

    return (
      <ul {...otherProps} style={style}>
        {this.renderChildren()}
      </ul>
    );
  }
}

MenuDisplay.defaultProps = {
  shouldFocusOnLastElement: false,
  visible: false,
};

MenuDisplay.propTypes = {
  shouldFocusOnLastElement: T.bool,
  visible: T.bool,
};

export default MenuDisplay;
