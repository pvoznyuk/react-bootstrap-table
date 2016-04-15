# react-bootstrap-table

It's a fork of [react-bootstrap-table](https://github.com/AllenFang/react-bootstrap-table) but with extra feature:
- it supports extra panels between rows

Explore an example on [examples](https://github.com/pvoznyuk/react-bootstrap-table/tree/master/examples/js) folder</br>

## Usage
### a.Install
```bash
npm install react-bootstrap-table-extra-panels --save
```

### Quick Demo
```js
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
```