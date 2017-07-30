import React, { Component } from 'react';

const HOC = (WrappedComponent) => {
  class MyComponent extends Component {
    constructor() {
      super();

      this.state = {
        isExpanded: false,
      };
      this.focusLastElement = false;
    }

    handleKeyDown = (e) => {
      switch (e.keyCode) {
        case 13: // ENTER
        case 32: // SPACE
        case 40: // DOWN
          this.focusLastElement = false;
          this.handleToggleClick();
          break;
        case 38: // UP
        this.focusLastElement = true;
          this.handleToggleClick();
          break;
      }
    }

    handleToggleClick = () => {
      this.setState(prevState => ({
        isExpanded: !prevState.isExpanded,
      }))
    }

    render() {
      return (
        <WrappedComponent
          focusLastElement={this.focusLastElement}
          onMenuButtonClick={this.handleToggleClick}
          onMenuButtonKeyDown={this.handleKeyDown}
          isExpanded={this.state.isExpanded}
        />
      );
    }
  }

  return MyComponent;
};

export default HOC;
