import { useEffect } from 'react';
import './App.css';

import Home from './pages/home';
import loteria from './services/loteria';
import { useResultado } from './context/Contexto';
function App() {
  const {setResultado} = useResultado()
  useEffect(()=>{
    loteria.get()
    .then((r)=> setResultado(r))
    console.log("opa");
    
  },[setResultado])
  return (
    <Home/>
  );
}

export default App;
