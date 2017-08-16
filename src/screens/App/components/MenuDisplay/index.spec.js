import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import MenuDisplay from './';

const defaultProps = {
  shouldFocusOnLastElement: false,
};

it('should render children correctly', () => {
  const wrapper = shallow(
    <MenuDisplay {...defaultProps}>
      <h1>First</h1>
      <h1>Second</h1>
      <h1>Third</h1>
    </MenuDisplay>
  );

  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should focus on first element by default', () => {
  const wrapper = mount(
    <MenuDisplay {...defaultProps}>
      <h1>First</h1>
      <h1>Second</h1>
      <h1>Third</h1>
    </MenuDisplay>
  );

  const firstElement = wrapper.find('h1').get(0);

  expect(document.activeElement).toEqual(firstElement);;
});

it('should focus on last element when shouldFocusOnLastElement is true', () => {
  const wrapper = mount(
    <MenuDisplay {...defaultProps} shouldFocusOnLastElement>
      <h1>First</h1>
      <h1>Second</h1>
      <h1>Third</h1>
    </MenuDisplay>
  );

  const lastElement = wrapper.find('h1').get(2);

  expect(document.activeElement).toEqual(lastElement);
});

describe('When pressing down arrow', () => {
  it('should focus on next element', () => {
    const wrapper = mount(
      <MenuDisplay {...defaultProps}>
        <h1>First</h1>
        <h1>Second</h1>
        <h1>Third</h1>
      </MenuDisplay>
    );

    const firstElement = wrapper.find('h1').at(0);
    firstElement.simulate('keydown', { keyCode: 40 });

    const secondElement = wrapper.find('h1').get(1);
    expect(document.activeElement).toEqual(secondElement);
  });

  it('should focus on first element, if focus is currently on last element', () => {
    const wrapper = mount(
      <MenuDisplay {...defaultProps}>
        <h1>First</h1>
        <h1>Second</h1>
        <h1>Third</h1>
      </MenuDisplay>
    );

    const lastElement = wrapper.find('h1').at(2);
    lastElement.simulate('keydown', { keyCode: 40 });

    const firstElement = wrapper.find('h1').get(0);
    expect(document.activeElement).toEqual(firstElement);
  });
});

describe('When pressing up arrow', () => {
  it('should focus on previous element', () => {
    const wrapper = mount(
      <MenuDisplay {...defaultProps}>
        <h1>First</h1>
        <h1>Second</h1>
        <h1>Third</h1>
      </MenuDisplay>
    );

    const lastElement = wrapper.find('h1').at(2);
    lastElement.simulate('keydown', { keyCode: 38 });

    const secondElement = wrapper.find('h1').get(1);
    expect(document.activeElement).toEqual(secondElement);
  });

  it('should focus on last element, if focus is currently on first element', () => {
    const wrapper = mount(
      <MenuDisplay {...defaultProps}>
        <h1>First</h1>
        <h1>Second</h1>
        <h1>Third</h1>
      </MenuDisplay>
    );

    const firstElement = wrapper.find('h1').at(0);
    firstElement.simulate('keydown', { keyCode: 38 });

    const lastElement = wrapper.find('h1').get(2);
    expect(document.activeElement).toEqual(lastElement);
  });
});
