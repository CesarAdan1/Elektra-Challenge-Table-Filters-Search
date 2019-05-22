import React, { Component } from 'react';
import FilterStack from './FilterStack';
import FilterSearch from './FilterSearch';
import axios from 'axios';

export default class Tables extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
          
        }
    }
  
    componentDidMount() {
        axios.get('https://cesaradan1.github.io/products_description-api-v1/data.json')
            .then( response => {
                this.setState({
                    key: response.data.key,
                    nombre: response.data.nombre,
                    descripcion: response.data.descripcion,
                    onStack: response.data.onStack
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

  render() {
     
    return (
        <div>
            <FilterSearch />
            <FilterStack />
            <table className="customers">
                        <tr>
                        <th>Producto</th> 
                        <th>Descripción</th>
                        <th>Disponibilidad</th>
                        </tr>
            {this.state.data.map(data => {
                 const { key, nombre, descripcion, onStack } = data
                return (
                    <tr key={ key }>
                            <td>{ nombre }</td>
                            <td>{ descripcion }</td>
                            <td>{ onStack } </td>
                        </tr>  
                )
            })}
                        
            </table>
        </div>
      
    )
  }
}
