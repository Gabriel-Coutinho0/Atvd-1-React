import { createContext, useState } from "react";
import { LoteriaProps, ResultadoContext, } from "../types";

const Contexto = createContext({} as ResultadoContext);


function Provider({ children }: any) {
  const [loaded,setLoaded] = useState(false)
  const [resultado, setResultado] = useState({
    megasena: {
      acumulado: false,
      concursoEspecial: false,
      dataApuracao: "",
      dataPorExtenso: "",
      dataProximoConcurso: "",
      dezenas: [],
      numeroDoConcurso: 0,
      quantidadeGanhadores: 0,
      tipoJogo: "",
      valorEstimadoProximoConcurso: 0,
      valorPremio: 0,
    }, lotofacil: {acumulado: false,
      concursoEspecial: false,
      dataApuracao: "",
      dataPorExtenso: "",
      dataProximoConcurso: "",
      dezenas: [],
      numeroDoConcurso: 0,
      quantidadeGanhadores: 0,
      tipoJogo: "",
      valorEstimadoProximoConcurso: 0,
      valorPremio: 0,}
  } as LoteriaProps
  );

  return (
    <Contexto.Provider value={{ resultado, setResultado }}>
      {children}
    </Contexto.Provider>
  );
}
export {Contexto, Provider}

// export function useResultado() {
//   const context = useContext(Contexto);
//   if (!context) throw new Error("useResultado must be used within a Provider");
//   const { resultado, setResultado } = context;
//   return { resultado, setResultado };
// }