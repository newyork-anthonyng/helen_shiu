import React, { Children, cloneElement } from 'react';
import T from 'prop-types';
import noop from '../../utilities/noop';

const MenuButton = ({
  children,
  onClick,
  onKeyDown,
  ...otherProps
}) => {
  return cloneElement(Children.only(children), {
    onClick,
    onKeyDown,
    tabIndex: 0,
    role: 'button',
    'aria-haspopup': 'true',
    ...otherProps,
  });
};

MenuButton.defaultProps = {
  onClick: noop,
  onKeyDown: noop,
};

MenuButton.propTypes = {
  onClick: T.func.isRequired,
  onKeyDown: T.func.isRequired,
};

export default MenuButton;
