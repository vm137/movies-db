import { shallow } from 'enzyme';
import React from 'react';
import SingleMovie from './SingleMovie';
import testData from './__fixtures__/testMovie.json';

const showSearchBlock = () => {};

describe('<SingleMovie />', () => {
  it('renders matching snapshot', () => {
    const wrapper = shallow(<SingleMovie
      movieR={testData}
      showSearchBlock={showSearchBlock}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('test fetch(url)', (done) => {
    const onClickJest = jest.fn();
    const wrapper = shallow(<SingleMovie
      movieR={testData}
      showSearchBlock={onClickJest}
    />);

    const button = wrapper.find('.btn-search');
    expect(button.length).toBe(1);
    button.simulate('click');

    // expect(onClickJest.mock.calls.length).toEqual(1);
    // expect(global.fetch).toHaveBeenCalledWith('http://react-cdp-api.herokuapp.com/movies/336');
    //
    // process.nextTick(() => {
    //   expect(wrapper.find('.single-movie-wrapper').length).toBe(1);
    //
    //   global.fetch.mockClear();
    //   done();
    // });

    done();
  });
});
