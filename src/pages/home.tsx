import { useContexto } from '../hooks';
import { useEffect, useState } from 'react';
import loteria from '../services/loteria';
import Mega from './mega';
import Loto from './loto';
import "../components/pagesCss/home.css"


const Home = () => {
    const { setResultado } = useContexto();
    const [isLoading, setIsLoading] = useState(true);
    const { resultado } = useContexto();

    useEffect(() => {
        const fetchResultado = async () => {
            try {
                const response = await loteria.get();
                setResultado(response);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };
        const timeoutId = setTimeout(() => {
            fetchResultado();
        }, 1500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [setResultado]);

    return (
        <>
            {isLoading ? (
                <div className="Loading">
                <div className="lds-ellipsis">Carregando<div></div><div></div><div></div><div></div></div>
                </div>
            ) : (
                <div className="form">
                    {resultado.megasena.numeroDoConcurso ? (
                        <>
                            <Mega></Mega>
                            <Loto></Loto>
                        </>
                    ) : (
                        <div>Erro ao carregar resultado da loteria</div>
                    )}
                </div>
            )}
        </>
    );
};
export default Home;