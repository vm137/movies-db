import React from 'react';
import { shallow, mount } from 'enzyme/build';
import ErrorBoundary from './ErrorBoundary';

const ChildComponent = () => null;

describe('<ErrorBoundary />', () => {
  it('throws error', () => {
    const error = new Error('test');
    const wrapper = mount(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>,
    );
    wrapper.find(ChildComponent).simulateError(error);
  });

  it('renders child component', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>,
    );
    wrapper.find(ChildComponent);
  });
});
