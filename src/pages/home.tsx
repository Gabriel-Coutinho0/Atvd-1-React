import { useContexto } from '../hooks';
import { useEffect } from 'react';
import loteria from '../services/loteria';
import Mega from './mega';
import Loto from './loto';


const Home = () => {
    const { setResultado } = useContexto()
    useEffect(() => {
        loteria.get()
            .then((r) => setResultado(r))
        console.log("opa");

    }, [setResultado])
    const { resultado } = useContexto();
    console.log(resultado);
    


    return (
        <>
            {resultado.megasena.numeroDoConcurso ?
                <div className='form'>
                    <Mega></Mega>
                    <Loto></Loto>
                </div> :
                <div className='Loading'>Carregando</div>
            }

        </>

    );
}

export default Home;