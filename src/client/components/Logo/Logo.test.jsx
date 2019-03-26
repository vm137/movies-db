import { render } from 'enzyme';
import React from 'react';

import Logo from './Logo';

describe('Logo', () => {
  it('renders matching snapshot', () => {
    const wrapper = render(<Logo />);

    expect(wrapper).toMatchSnapshot();
  });
});
