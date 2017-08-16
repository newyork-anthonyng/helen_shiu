import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Menu from './';
import MenuDisplay from '../MenuDisplay';
import MenuButton from '../MenuButton';

it('should return correctly', () => {
  const wrapper = mount(
    <Menu>
      <MenuButton><a>Toggle Menu</a></MenuButton>
      <MenuDisplay>
        <h1>First</h1>
        <h1>Second</h1>
        <h1>Third</h1>
      </MenuDisplay>
    </Menu>
  );

  expect(toJSON(wrapper)).toMatchSnapshot();
});

describe('It should toggle Menu Display', () => {
  it('when clicking button', () => {
    const wrapper = mount(
      <Menu>
        <MenuButton><a>Toggle Menu</a></MenuButton>
        <MenuDisplay>
          <h1>First</h1>
          <h1>Second</h1>
          <h1>Third</h1>
        </MenuDisplay>
      </Menu>
    );

    const menuButton = wrapper.find(MenuButton);
    menuButton.simulate('click');
    expect(wrapper.find(MenuDisplay).length).toEqual(1);
    expect(document.activeElement).toEqual(wrapper.find('h1').get(0));

    menuButton.simulate('click');
    expect(wrapper.find(MenuDisplay).length).toEqual(0);
  });

  it('when pressing Space Bar', () => {
    const wrapper = mount(
      <Menu>
        <MenuButton><a>Toggle Menu</a></MenuButton>
        <MenuDisplay>
          <h1>First</h1>
          <h1>Second</h1>
          <h1>Third</h1>
        </MenuDisplay>
      </Menu>
    );
    const SPACE_BAR = 32;

    const menuButton = wrapper.find(MenuButton);
    menuButton.simulate('keydown', { keyCode: SPACE_BAR });
    expect(wrapper.find(MenuDisplay).length).toEqual(1);
    expect(document.activeElement).toEqual(wrapper.find('h1').get(0));

    menuButton.simulate('keydown', { keyCode: SPACE_BAR });
    expect(wrapper.find(MenuDisplay).length).toEqual(0);
  });

  it('when pressing Enter', () => {
    const wrapper = mount(
      <Menu>
        <MenuButton><a>Toggle Menu</a></MenuButton>
        <MenuDisplay>
          <h1>First</h1>
          <h1>Second</h1>
          <h1>Third</h1>
        </MenuDisplay>
      </Menu>
    );
    const ENTER_KEY = 13;

    const menuButton = wrapper.find(MenuButton);
    menuButton.simulate('keydown', { keyCode: ENTER_KEY });
    expect(wrapper.find(MenuDisplay).length).toEqual(1);
    expect(document.activeElement).toEqual(wrapper.find('h1').get(0));

    menuButton.simulate('keydown', { keyCode: ENTER_KEY });
    expect(wrapper.find(MenuDisplay).length).toEqual(0);
  });
});

it('should open Menu Display and focus on last element when pressing Up arrow', () => {
  const wrapper = mount(
    <Menu>
      <MenuButton><a>Toggle Menu</a></MenuButton>
      <MenuDisplay>
        <h1>First</h1>
        <h1>Second</h1>
        <h1>Third</h1>
      </MenuDisplay>
    </Menu>
  );

  const menuButton = wrapper.find(MenuButton);
  menuButton.simulate('keydown', { keyCode: 38 });

  expect(wrapper.find(MenuDisplay).length).toEqual(1);
  expect(document.activeElement).toEqual(wrapper.find('h1').get(2));
});

it('should open Menu Display and focus on first element when pressing Down arrow', () => {
  const wrapper = mount(
    <Menu>
      <MenuButton><a>Toggle Menu</a></MenuButton>
      <MenuDisplay>
        <h1>First</h1>
        <h1>Second</h1>
        <h1>Third</h1>
      </MenuDisplay>
    </Menu>
  );

  const menuButton = wrapper.find(MenuButton);
  menuButton.simulate('keydown', { keyCode: 40 });

  expect(wrapper.find(MenuDisplay).length).toEqual(1);
  expect(document.activeElement).toEqual(wrapper.find('h1').get(0));
});

it('should focus on correct element when clicking on Menu Button, after previously pressing Up arrow', () => {
  const wrapper = mount(
    <Menu>
      <MenuButton><a>Toggle Menu</a></MenuButton>
      <MenuDisplay>
        <h1>First</h1>
        <h1>Second</h1>
        <h1>Third</h1>
      </MenuDisplay>
    </Menu>
  );
  const menuButton = wrapper.find(MenuButton);
  menuButton.simulate('keydown', { keyCode: 38 });

  menuButton.simulate('click'); // Close the menu display
  menuButton.simulate('click'); // Reopen the menu display

  expect(document.activeElement).toEqual(wrapper.find('h1').get(0));
});
