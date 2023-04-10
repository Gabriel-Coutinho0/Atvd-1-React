// import { Contexto, Provider } from "../context/Contexto";
import trevoMega from '../assets/trevo-megasena.png'
import trevoLoto from '../assets/trevo-lotofacil.png'
import '../styles/home.css'
import { Linha } from "../styles/sytle";
import { useResultado } from '../context/Contexto';
import CabecalhoMega from '../components/cabecalho/cabecalhoMega';
import CabecalhoLoto from '../components/cabecalho/cabecalhoLoto';
import Descricao from '../components/descricao/descricao';
import ValorAcumuladoMega from '../components/valorAcumulado/valorAcumuladoMega';
import NmrSorteadoMega from '../components/nmrsSorteado/nmrSorteadoMega';
import Vencedores from '../components/vencedores/vencedores';
import Concurso from '../components/concurso/concurso';
import ValorAcumuladoLoto from '../components/valorAcumulado/valorAcumuladoLoto';
import NmrSorteadoLoto from '../components/nmrsSorteado/nmrSorteadoLoto';


const Home = () => {
    // const [response, setResponse] = useState({} as LoteriaProps)
    // const { megasena, lotofacil } = useContext(Contexto)

    const { resultado } = useResultado();
    let qtd;
    function verficarGanhadoresMega() {
        if (resultado.megasena.quantidadeGanhadores === 1) {
            qtd = " ganhador"
        }
        else {
            qtd = " ganhadores"
        }
        return qtd
    }
    function verficarGanhadoresLoto() {
        if (resultado.lotofacil.quantidadeGanhadores === 1) {
            qtd = " ganhador"
        }
        else {
            qtd = " ganhadores"
        }
        return qtd
    }
    return (
        <div className='form'>
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
                    <Vencedores dado={resultado.megasena.acumulado} dado2={resultado.megasena.quantidadeGanhadores} info={verficarGanhadoresMega()} />
                    <Concurso dado={`${resultado.megasena.numeroDoConcurso} - ${resultado.megasena.dataPorExtenso} `} />
                </div>
            </div>
            <Linha></Linha>
            <div className='container'>
                <div className='coluna-2'>
                    <CabecalhoLoto img={trevoLoto} titulo={"LOTOFÁCIL"} ></CabecalhoLoto>
                    <Descricao dado={resultado.lotofacil.dataProximoConcurso}/>
                    <ValorAcumuladoLoto dado={resultado.lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
                </div>
                <div className='coluna-2'>
                    <NmrSorteadoLoto dado={resultado.lotofacil.dezenas} />
                    <Vencedores dado={resultado.lotofacil.acumulado} dado2={resultado.lotofacil.quantidadeGanhadores} info={verficarGanhadoresLoto()}/>
                    <Concurso dado={`${resultado.lotofacil.numeroDoConcurso} - ${resultado.lotofacil.dataPorExtenso} `} />

                </div>
            </div>
            <Linha/>

        </div>
    );
}

export default Home;