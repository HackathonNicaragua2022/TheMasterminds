import React, { Component } from 'react'
import Pared from './Pared';


export default class cubication extends Component {
  render() {
    return (
      <div className='container mt-5 cont-text'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <h3>Tipo de Contruccion</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <select name="tipoC" class="form-select" aria-label="Default select example">
          <option value="value1">Pared</option>
          <option value="value3">Pilar</option>
          </select>
          </div>
        </div>
        if (true) {
            <Pared/>
          }
      </div>
    )
  }
}
