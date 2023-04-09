// import { Contexto, Provider } from "../context/Contexto";
import trevoMega from '../assets/trevo-megasena.png'
import trevoLoto from '../assets/trevo-lotofacil.png'
import '../styles/home.css'
import { Linha, LotoFacil, MegaSena } from "../styles/sytle";
import { useResultado } from '../context/Contexto';

const Home = () => {
    // const [response, setResponse] = useState({} as LoteriaProps)
    // const { megasena, lotofacil } = useContext(Contexto)

    const { resultado } = useResultado();
    let qtd;
    function verficarGanhadores() {
        if (resultado.megasena.quantidadeGanhadores === 1) {
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
                    <div className='header-container'>
                        <div className='imagem-header'><img src={trevoMega}></img></div>
                        <div className='titulo-mega'><h3 >MEGA-SENA</h3></div>
                    </div>
                    <div className='descricao-mega'>
                        Estimativa do prêmio do proximo concurso. Sorteio {resultado.megasena.dataProximoConcurso}:
                    </div>
                    <div className='mega-valor'>
                        <h2>{resultado.megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
                        {/* megaSena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }):"" */}
                        {/* {resultado.megasena.acumulado ? "ACUMULADO" : ""} */}
                    </div>
                </div>
                <div className='coluna'>
                    <div className="coluna-dezenas">
                        <ul>{resultado.megasena.dezenas ? resultado.megasena.dezenas.map((elementos) =>
                            <li>
                                {elementos}
                            </li>
                        ) : ""}</ul>
                    </div>
                    <div className='vencedores-mega'>
                        <p>{resultado.megasena.acumulado ? "ACUMULADO" : resultado.megasena.quantidadeGanhadores + verficarGanhadores()}</p>
                    </div>
                    <div className='concurso-mega'>
                    <p>Concurso {resultado.megasena.numeroDoConcurso}- {resultado.megasena.dataPorExtenso}</p>
                    </div>
                </div>
            </div>
            <Linha></Linha>
            <div className='container-2'>
                <div className='coluna-2'>
                    <LotoFacil><img src={trevoLoto}></img> LOTOFÁCIL</LotoFacil>
                    <p>Estimativa de prêmio do proximo concurso. Sorteio em {resultado.lotofacil.dataProximoConcurso}:</p>
                    <div>
                    <p>R$: {resultado.lotofacil.valorEstimadoProximoConcurso}</p>
                    </div>
                </div>
                <div className='coluna-2'>
                    <p>{resultado.lotofacil.dezenas}</p>
                    <p>{resultado.lotofacil.quantidadeGanhadores} GANHADORES</p>
                    <p>Concurso {resultado.lotofacil.numeroDoConcurso}- {resultado.lotofacil.dataPorExtenso}</p>

                </div>
            </div>


        </div>
    );
}

export default Home;