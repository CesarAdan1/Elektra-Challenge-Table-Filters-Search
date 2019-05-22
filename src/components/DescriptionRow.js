import React, { Component } from 'react'

export default class DescriptionRow extends Component {
    render() {
        const element = this.props.element;
        const descripcion = element.onStack ? 
              element.descripcion :
            <span style={{ color:'red' }}>
            {element.descripcion}
            </span>
        const name = element.onStack ?
          element.nombre :
          <span style={{ color: 'red' }}>
            {element.nombre}
          </span>;
    
        return (
          <tr>
            <td>{name}</td>
            <td>{descripcion}</td>
          </tr>
        );
    }
}
