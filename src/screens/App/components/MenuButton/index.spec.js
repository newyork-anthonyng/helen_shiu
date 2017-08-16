import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import MenuButton from './';
import noop from '../../utilities/noop';

const defaultProps = {
  onClick: noop,
  onKeyDown: noop,
};

it('should render correctly', () => {
  const wrapper = shallow(
    <MenuButton {...defaultProps}>
      <h1>Open Menu</h1>
    </MenuButton>
  );

  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should run callback when clicking on button', () => {
  const cb = jest.fn();
  const wrapper = shallow(
    <MenuButton {...defaultProps} onClick={cb}>
      <h1>Open Menu</h1>
    </MenuButton>
  );

  wrapper.simulate('click');

  expect(cb).toHaveBeenCalledTimes(1);
});

it('should run callback when pressing key', () => {
  const cb = jest.fn();
  const wrapper = shallow(
    <MenuButton {...defaultProps} onKeyDown={cb}>
      <h1>Open Menu</h1>
    </MenuButton>
  );

  wrapper.simulate('keydown');

  expect(cb).toHaveBeenCalledTimes(1);
});
