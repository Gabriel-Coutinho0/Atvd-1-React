import trevoMega from '../assets/trevo-megasena.png'
import CabecalhoMega from '../components/cabecalho/cabecalhoMega';
import Concurso from '../components/concurso/concurso';
import Descricao from '../components/descricao/descricao';
import NmrSorteadoMega from '../components/nmrsSorteado/nmrSorteadoMega';
import ValorAcumuladoMega from '../components/valorAcumulado/valorAcumuladoMega';
import Vencedores from '../components/vencedores/vencedores';
import { useContexto } from '../hooks';
import { Linha } from '../styles/sytle';




const Mega = () => {
    const { resultado } = useContexto();
    function verficarGanhadores() {
        if (resultado.megasena.quantidadeGanhadores === 1) {
            return " GANHADOR"
        }
        return " GANHADORES"
    }

    return (
        <>
            <div className='container'>
                {resultado.megasena && (
                    <p>{resultado.megasena.acumulado}</p>
                )}
                <div className='coluna'>
                    <CabecalhoMega img={trevoMega} titulo="MEGA-SENA" />
                    <Descricao dado={resultado.megasena.dataProximoConcurso} />
                    <ValorAcumuladoMega dado={resultado.megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
                </div>
                <div className='coluna'>
                    <NmrSorteadoMega dado={resultado.megasena.dezenas} />
                    <Vencedores dado={resultado.megasena.acumulado} dado2={resultado.megasena.quantidadeGanhadores} info={verficarGanhadores()}/>
                    <Concurso dado={`${resultado.megasena.numeroDoConcurso} - ${resultado.megasena.dataPorExtenso} `} />
                </div>
            </div>
            <Linha></Linha>
        </>
    );
}

export default Mega;