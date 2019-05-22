import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import CompleteTable  from './components/CompleteTable'
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isInStock: false
    };
    
    this.filterTextTable = this.filterTextTable.bind(this);
    this.availableInStock = this.availableInStock.bind(this);
  }

  filterTextTable(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  availableInStock(isInStock) {
    this.setState({
      isInStock: isInStock
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          isInStock={this.state.isInStock}
          onFilterTextChange={this.filterTextTable}
          onInStockChange={this.availableInStock}
        />
        <CompleteTable
          data={this.props.data}
          filterText={this.state.filterText}
          isInStock={this.state.isInStock}
        />
      </div>
    );
  }
}

export default App;
