import { Component } from 'react';

export default class Utils extends Component {
  static preventPressEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }
}
