import { shallow } from 'enzyme';
import React from 'react';
import SingleMovie from './SingleMovie';
import testData from './__fixtures__/testMovie.json';

const showSearchBlock = jest.fn();

describe('<SingleMovie />', () => {
  it('renders matching snapshot', () => {
    const wrapper = shallow(<SingleMovie
      movieR={testData}
      showSearchBlock={showSearchBlock}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('click "back" button', () => {
    const onClickJest = jest.fn();
    const wrapper = shallow(<SingleMovie
      movieR={testData}
      showSearchBlock={onClickJest}
    />);

    const button = wrapper.find('.btn-search');
    expect(button.length).toBe(1);
    button.simulate('click');

    expect(onClickJest.mock.calls.length).toEqual(1);
  });
});
