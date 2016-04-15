import React, { Component } from 'react';

class ExtraPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>1</span>
    );
  }
}

ExtraPanel.defaultProps = {
  name: 'extraPanel'
};

export default ExtraPanel;
