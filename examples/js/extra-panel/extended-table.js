/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

export default class ExtendedTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      condition: { id: 2 },
      extraPanelContent: (
        <div>
          <p>Some content.</p>
        </div>
      )
    };
  }

  render() {
    return (
      <BootstrapTable data={ products } extraPanel={ this.state.extraPanelContent } extraPanelRow={ this.state.condition } >
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
