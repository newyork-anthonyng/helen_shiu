import React, { Component } from 'react';

class Toggle extends Component {
  constructor() {
    super();

    this.state = {
      isExpanded: false,
    };
  }

  handleToggleClick = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  render() {
    return this.props.children(this.state.isExpanded, this.handleToggleClick);
  }
}

export default Toggle;
