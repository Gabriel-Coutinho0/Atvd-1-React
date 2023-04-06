import React, { useEffect, useState} from 'react';
import './App.css';
import { LoteriaProps, MegaSenaProps, Props } from './types';
import loteria from './services/loteria';
import trevoMega from './images/trevo-megasena.png'
import trevoLoto from './images/trevo-lotofacil.png'
function App() {
  const [response, setResponse] = useState({} as LoteriaProps)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function obter() {
    loteria.get()
    .then(r=>setResponse(r))
    // console.log(response.lotofacil);
  }
  // eslint-disable-next-line no-cond-assign
 
  
  useEffect(()=>{
    obter()
  },[obter])
  return (
    <div >
    <div>
    
    {/* <button onClick={obter}>aasd</button> */}
    <div className=''>
    <img src={trevoMega}></img> 
    <p>MEGA SENA</p>
    <p> Estimativa de prêmio do proximo concurso. Sorteio em {response.megasena.dataProximoConcurso}:</p>
    <p> R$ {response.megasena.valorEstimadoProximoConcurso}</p>
    </div>
    <div>
      <p> {response.megasena.dezenas}</p>
      <p>ACUMULADO arrumar {response.megasena.acumulado}</p>
      <p> Concurso {response.megasena.numeroDoConcurso} - {response.megasena.dataPorExtenso}</p>
    </div>
    <div>
      <img src={trevoLoto}></img> 
      <p>LOTOFÁCIL</p>
    </div>
    </div>

  </div>
  );
}

export default App;
