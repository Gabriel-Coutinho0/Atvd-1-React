import { useContext } from "react";
import { Contexto } from "../context/Contexto";

function UseContexto() {
    const context = useContext(Contexto);
    return context;
  }

export default UseContexto