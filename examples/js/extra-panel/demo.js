/* eslint max-len: 0 */
import React from 'react';
import ExtendedTable from './../extra-panel/extended-table';

import renderLinks from '../utils';

import { Col, Panel } from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={ 8 } mdOffset={ 1 }>
        <Panel header={ 'react-bootstrap-table with extra content' }>
          { renderLinks('extra-panel/extended-table') }
          <ExtendedTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
