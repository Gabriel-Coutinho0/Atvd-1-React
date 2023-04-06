import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props,  } from "../types";
import loteria from "../services/loteria";

const Contexto = createContext({} as LoteriaProps);

function Provider({ children }: any) {
  const [megasena, setMegaSena] = useState({}as Props);
  const [lotofacil, setlotoFacil] = useState({} as Props);

  useEffect(()=> {
    (async ()=> {
      const resp = await loteria.get();
      setMegaSena(resp.megasena)
      setlotoFacil(resp.lotofacil)
    })();
  },[]);

  return (
    <Contexto.Provider value={{ megasena,lotofacil }}>
      {children}
    </Contexto.Provider>
  );
}

export { Contexto, Provider };