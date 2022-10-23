import React, { Component } from 'react'

export default class Pilar extends Component {
  render() {
    return (
      <div className='row cont-card'>
          <div className='col-md-12 col-sm-12 cont-title'>
            <h2>Cubicacion de Pilar</h2>
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
