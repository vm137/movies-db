/* eslint-disable import/no-extraneous-dependencies */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ movie: {} }),
}));
