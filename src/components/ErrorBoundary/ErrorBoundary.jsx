// @flow

import React from 'react';

type Props = {
  children: Object,
}

type State = {
  error: Object,
  errorInfo: Object
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: '', errorInfo: '' };
  }

  componentDidCatch(error: Object, info: Object) {
    this.setState({
      error,
      errorInfo: info,
    });
  }

  render() {
    const { children } = this.props;
    const { error, errorInfo } = this.state;
    if (errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return children;
  }
}
