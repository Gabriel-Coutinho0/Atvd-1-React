import './nmrSorteado.css'

const NmrSorteadoMega = ({dado}:any) => {
    return (
        <div className="coluna-dezenas-mega">
            <ul>{dado ? dado.map((elementos:any) =>
                <li>
                    {elementos}
                </li>
            ) : ""}</ul>
        </div>
    );
}

export default NmrSorteadoMega;