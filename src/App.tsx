import { useEffect } from 'react';
import './App.css';
import Home from './pages/home';
import loteria from './services/loteria';
import { useContexto } from './hooks';
import { Provider } from './context/Contexto';
function App() {

  return (
    <Provider>
        <Home/>
    </Provider>
  
  );
}

export default App;
