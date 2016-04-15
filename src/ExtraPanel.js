import React, { Component } from 'react';

class ExtraPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className='react-bs-table-extra-content-wrapper'>
        <td colSpan='3' className='react-bs-table-extra-content-cell'>
          <div className='react-bs-table-extra-content'>
            { this.props.children }
          </div>
        </td>
      </tr>
    );
  }
}

ExtraPanel.defaultProps = {
  name: 'extraPanel'
};

export default ExtraPanel;
