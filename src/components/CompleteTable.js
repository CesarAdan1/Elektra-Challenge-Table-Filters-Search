import React, { Component } from 'react'
import DescriptionRow from './DescriptionRow';


export default class CompleteTable extends Component {
    render() {
        const filterText = this.props.filterText;
        const isInStock = this.props.isInStock;
    
        const rows = [];
    
        this.props.data.forEach((element) => {
          if (element.nombre.toLowerCase().indexOf(filterText) === -1 &&
          element.nombre.indexOf(filterText) === -1 && 
          element.nombre.toUpperCase().indexOf(filterText) === -1
          && element.descripcion.toLowerCase().indexOf(filterText) === -1 &&
          element.descripcion.indexOf(filterText) === -1 && 
          element.descripcion.toUpperCase().indexOf(filterText) === -1
          ) {
            return;
          }
          if (isInStock && !element.onStack) {
            return;
          }
          
          rows.push(
            <DescriptionRow
              element={element}
              key={element.nombre}
            />
          );
        
        });
    
        return (
          <table className="container">
              <tr>
                <th>Nombre del Producto</th>
                <th>Descripción</th>
              </tr>
            <tbody>{rows}</tbody>
          </table>
        );
      }
    }
    