import React, { PureComponent } from 'react';

class TargetBlankLink extends PureComponent {
  focus = () => {
    if(this.link) {
      this.link.focus();
    }
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        ref={link => { this.link = link; }}
        {...rest}
      >
        {children}
      </a>
    );
  }
}

export default TargetBlankLink;
