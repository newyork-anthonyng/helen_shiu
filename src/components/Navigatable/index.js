import React, {
  Children,
  Component,
  cloneElement,
} from 'react';

class Navigatable extends Component {
  constructor() {
    super();

    this.uuid = Math.random();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.shouldFocus && this.props.shouldFocus) {
      if (this.props.focusLastElement) {
        this.refs[`link-${Children.count(this.props.children) - 1}-${this.uuid}`].focus();
      } else {
        this.refs[`link-0-${this.uuid}`].focus();
      }
    }
  }

  handleKeyDown = (index) => {
    return (e) => {
      switch (e.keyCode) {
        case 38: // UP
          this.navigateUp(index);
          break;
        case 40: // DOWN
          this.navigateDown(index);
          break;
      }
    }
  }

  navigateUp = (index) => {
    let prevIndex = index - 1;
    if (prevIndex < 0) {
      prevIndex = Children.count(this.props.children) - 1;
    }

    this.refs[`link-${prevIndex}-${this.uuid}`].focus();
  }

  navigateDown = (index) => {
    let nextIndex = index + 1;
    if (nextIndex >= Children.count(this.props.children)) {
      nextIndex = 0;
    }

    this.refs[`link-${nextIndex}-${this.uuid}`].focus();
  }

  render() {
    const { focusLastElement, shouldFocus, ...props } = this.props;

    return (
      <ul {...props}>
        {
          Children.map(this.props.children, (child, i) => (
            <li
              key={i}
              onKeyDown={this.handleKeyDown(i)}
            >
            {
              cloneElement(child, {
                tabIndex: -1,
                ref: `link-${i}-${this.uuid}`,
              })
            }
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Navigatable;
