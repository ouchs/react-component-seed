import React, { Component } from 'react';

export default class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sc-demo">
        {this.props.children}
      </div>
    )
  }
}
