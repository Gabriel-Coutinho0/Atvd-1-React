// import { Contexto, Provider } from "../context/Contexto";
import { useContext, useEffect, useState } from 'react';
import { LoteriaProps } from '../types';
import loteria from '../services/loteria';
import trevoMega from '../images/trevo-megasena.png'
import trevoLoto from '../images/trevo-lotofacil.png'
import { Linha, LotoFacil, MegaSena } from "./sytle";
import { useResultado } from '../context/Contexto';

const Home = () => {
    // const [response, setResponse] = useState({} as LoteriaProps)
    // const { megasena, lotofacil } = useContext(Contexto)

    const { resultado } = useResultado();
    return (
        <div>
            <div >
                <div>
                    {/* <Provider>
                        {megasena ? (<p>{megasena.dataPorExtenso}</p>):<div></div>} */}
                    {resultado.megasena && (
                        <p>{resultado.megasena.acumulado}</p>
                    )}
                    <div className=''>
                        <Linha>
                            <img src={trevoMega}></img>
                            <MegaSena>Mega-Sena</MegaSena>
                            {resultado.megasena.acumulado ? "ACUMULADO" : ""}

                        </Linha>
                        <LotoFacil>Lotofácil</LotoFacil>
                        <img src={trevoLoto}></img>


                        {/*
                            <p>MEGA SENA</p> */}
                        {/* <p> Estimativa de prêmio do proximo concurso. Sorteio em {response.megasena.dataProximoConcurso}:</p> */}
                        {/* <p> R$ {megasena.dataApuracao}</p> */}
                    </div>
                    <div>
                        {/* <p> {response.megasena.dezenas}</p> */}
                        {/* <p>ACUMULADO arrumar {response.megasena.acumulado}</p> */}
                        {/* <p> Concurso {response.megasena.numeroDoConcurso} - {response.megasena.dataPorExtenso}</p> */}
                    </div>

                    {/* </Provider> */}

                </div>

            </div>
        </div>
    );
}

export default Home;