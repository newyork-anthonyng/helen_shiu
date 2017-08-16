import React, { Component, Children } from 'react';
import T from 'prop-types';

class MenuDisplay extends Component {
  componentDidMount() {
    let nextChildIndex = 0;
    if (this.props.shouldFocusOnLastElement) {
      nextChildIndex = Children.count(this.props.children) - 1;
    }

    this.refs[`child-${nextChildIndex}`].focus();
  }

  handleKeyDown = (index) => {
    return (e) => {
      let nextFocusableChildIndex;
      const childrenCount = Children.count(this.props.children);

      switch (e.keyCode) {
        case 38: // UP
          nextFocusableChildIndex = index - 1;
          if (nextFocusableChildIndex < 0) {
            nextFocusableChildIndex = childrenCount - 1;
          }
          break;
        case 40: // DOWN
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
      return React.cloneElement(child, {
        ref: `child-${index}`,
        tabIndex: -1,
        onKeyDown: this.handleKeyDown(index),
      });
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

MenuDisplay.defaultProps = {
  shouldFocusOnLastElement: false,
};

MenuDisplay.propTypes = {
  shouldFocusOnLastElement: T.bool,
};

export default MenuDisplay;
