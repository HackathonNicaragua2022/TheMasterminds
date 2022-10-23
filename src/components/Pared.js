import React, { Component } from 'react'



export default class Pared extends Component {
  render() {
    return (
      <div className='row cont-card'>
          <div className='col-md-12 col-sm-12 cont-title'>
            <h2>Cubicacion de Pared</h2>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese Material Base</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <select name="tipoC" className="form-select" aria-label="Default select example">
          <option value="1">Ladrillo</option>
          <option value="2">Bloque</option>
          <option value="2">Piedra Cantera</option>
          </select>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese altura de pared en mt</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <input className='form-control' type='number'/>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese ancho de pared en mt</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <input className='form-control' type='number'/>
          </div>
          <div className='col-12 mt-3'>
          <button className='btn btn-primary'>Calcular</button>
          </div>
        </div>
    )
  }
}
