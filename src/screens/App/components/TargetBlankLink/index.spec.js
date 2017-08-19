import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import TargetBlankLink from './';

it('should render correctly', () => {
  const wrapper = shallow(
    <TargetBlankLink href="/foo">
      Link to Foo
    </TargetBlankLink>
  );

  expect(toJSON(wrapper)).toMatchSnapshot();
});
