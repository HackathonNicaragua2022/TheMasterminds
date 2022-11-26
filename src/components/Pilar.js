import React, { Component,useState  } from 'react'


let a=0,b=0, c=0, resultado =0, aren =0, cement=0, piedrin=0, Agua=0;
export default class Pilar extends Component {
  
  resultado= a*b*c;
  aren = resultado * 9.73;
  cement = resultado * 0.52;
  piedrin = resultado * 0.53;
  Agua = resultado * 0.187;


    render() {
   

 const [altura, setAltura] = useState(0);
 const [ancho, setAncho] = useState(0);
 const[largo, setLargo] =useState(0);
 a = altura;
 b = ancho;
 c=largo;

    
    
    return (
     <div>
      <div className='row cont-card animate__animated animate__flipInX'>
          <div className='col-md-12 col-sm-12 cont-title'>
            <h2>Cubicacion de Pilar</h2>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese altura de pared en mt</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <input className='form-control' type='number' onChange={(e) => setAltura (e.target.value)}/>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese largo de pared en mt</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <input className='form-control' type='number' onChange={ (e) => setLargo(e.target.value)}/>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese ancho de pared en mt</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <input className='form-control' type='number' onChange={ (e) => setAncho(e.target.value)}/>
          </div>
          <div className='col-12 mt-3'>
          </div>
        </div>

        <div className='row cont-card animate__animated animate__flipInX'>
          <div className='col-md-12 col-sm-12 cont-title'>
            <h2>Resultado</h2>
          </div>
          
          <div className='col-md-2 col-sm-6'>
            <h5>Cantidad</h5>
            <p>{8} Unid</p>
            <p></p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Cemento:</h5>
            <p>{cement} Kg</p>
            <p></p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Arena:</h5>
            <p>{aren}M3</p>
            <p></p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Agua:</h5>
            <p>{Agua}ltr</p>
            <p></p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Piedrin:</h5>
            <p>{piedrin}</p>
            
          </div>
          </div>
        </div>
    

    )
  }
}
