import React, {useState} from 'react'

let a, b, area, auxi, porcetaje, result = 0;
// let materialBase;

function CubicationPared(){
  // switch (materialBase) {
  //   case 'Ladrillo':
  //     s = 0.0801;
  //     break;
  //     case 'Bloque':
  //       s = 0.0801;
  //       break;
  //       case 'Piedra Cantera':
  //     break;
  //   default:
  //     break;
  // }
  area = a*b;
  console.log(area);
  auxi = Math.ceil(area * 12);
  console.log(auxi);
  porcetaje = (auxi * 5 / 100);
  console.log(porcetaje);
  result = Math.ceil(auxi + porcetaje);
}

export default function Pared() {
  const [materialB, setMaterialB] = useState('');
  const [altura, setAltura] = useState(0);
  const [ancho, setAncho] = useState(0);
  // materialBase = materialB;
  a = altura;
  b = ancho;
  console.log(a);
  console.log(b);
  return (
    <div>
        <div className='row cont-card'>
          <div className='col-md-12 col-sm-12 cont-title'>
            <h2>Cubicacion de Pared</h2>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese Material Base</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <select name="tipoC" className="form-select" aria-label="Default select example" onChange={ (e) => setMaterialB(e.target.value)}>
          <option value="Ladrillo">Ladrillo</option>
          <option value="Bloque">Bloque</option>
          <option value="Piedra Cantera">Piedra Cantera</option>
          </select>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese altura de pared en mt</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <input className='form-control' type='number' onChange={(e) => setAltura(e.target.value)}/>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese ancho de pared en mt</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <input className='form-control' type='number' onChange={ (e) => setAncho(e.target.value)}/>
          </div>
          <div className='col-12 mt-3'>
          <button className='btn btn-primary' onClick={CubicationPared({materialB,altura,ancho})}>Calcular</button>
          </div>
          </div>
          <div className='row cont-card'>
          <div className='col-md-12 col-sm-12 cont-title'>
            <h2>Resultado</h2>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Material Base:</h5>
            <p>{materialB}</p>
            <p>12 C$</p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Cantidad</h5>
            <p>{result}</p>
            <p>12 C$</p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Cemento:</h5>
            <p>50g</p>
            <p>12 C$</p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Arena:</h5>
            <p>234kg</p>
            <p>12 C$</p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Agua:</h5>
            <p>234ltr</p>
            <p>12 C$</p>
          </div>
          </div>
      </div>
  )
}

