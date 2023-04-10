import { createContext, useContext, useState } from "react";
import { LoteriaProps, } from "../types";


interface ResultadoContext {
  resultado: LoteriaProps,
  setResultado: (resultado: LoteriaProps) => void
}
const Contexto = createContext<ResultadoContext | null>(null);


export default function Provider({ children }: any) {
  const [resultado, setResultado] = useState<LoteriaProps>({
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
  });
  // const [lotofacil, setlotoFacil] = useState({} as Props);

  return (
    <Contexto.Provider value={{ resultado, setResultado }}>
      {children}
    </Contexto.Provider>
  );
}

export function useResultado() {
  const context = useContext(Contexto);
  if (!context) throw new Error("useResultado must be used within a Provider");
  const { resultado, setResultado } = context;
  return { resultado, setResultado };
}