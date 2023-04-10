import "./descricao.css"

const Descricao = ({dado}:any) => {
    return (
        <div className='descricao-mega'>
            Estimativa do prêmio do proximo concurso. Sorteio {dado}:
        </div>
    );
}

export default Descricao;