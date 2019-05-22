import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
          this.filterTextTable = this.filterTextTable.bind(this);
          this.availableInStock = this.availableInStock.bind(this);
        }
        
        filterTextTable(e) {
          this.props.onFilterTextChange(e.target.value);
        }
        
        availableInStock(e) {
          this.props.onInStockChange(e.target.checked);
        }
    
    render() {
        return (
            <form className="header-navigation-area">
              <input
                type="text"
                name="search"
                placeholder="Buscar..."
                value={this.props.filterText}
                onChange={this.filterTextTable}
              />
              <p >
                <input
                  type="checkbox"
                  checked={this.props.isInStock}
                  onChange={this.availableInStock}
                />
                Checar disponibilidad en Tienda
              </p>
            </form>
        );
    }
}

export default SearchBar;