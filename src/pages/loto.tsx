import trevoLoto from '../assets/trevo-lotofacil.png'
import CabecalhoLoto from "../components/cabecalho/cabecalhoLoto";
import Concurso from "../components/concurso/concurso";
import Descricao from "../components/descricao/descricao";
import NmrSorteadoLoto from "../components/nmrsSorteado/nmrSorteadoLoto";
import ValorAcumuladoLoto from "../components/valorAcumulado/valorAcumuladoLoto";
import Vencedores from "../components/vencedores/vencedores";
import "../components/pagesCss/page.css"
import { useContexto } from "../hooks";
import { Linha } from '../styles/sytle';



const Loto = () => {
    const { resultado } = useContexto();
    
    function verficarGanhadores() {
        if (resultado.lotofacil.quantidadeGanhadores === 1) {
            return " GANHADOR"
        }
        return " GANHADORES"
    }


    return (

        <>
         <div className='container'>
            <div className='coluna-2'>
                <CabecalhoLoto img={trevoLoto} titulo={"LOTOFÁCIL"} ></CabecalhoLoto>
                <Descricao dado={resultado.lotofacil.dataProximoConcurso} />
                <ValorAcumuladoLoto dado={resultado.lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
            </div>
            <div className='coluna-3'>
                <NmrSorteadoLoto dado={resultado.lotofacil.dezenas} />
                <Vencedores dado={resultado.lotofacil.acumulado} dado2={resultado.lotofacil.quantidadeGanhadores} info={verficarGanhadores()}/>
                <Concurso dado={`${resultado.lotofacil.numeroDoConcurso} - ${resultado.lotofacil.dataPorExtenso} `} />

            </div>
            </div>
            <Linha />

        </>

    );
}

export default Loto;