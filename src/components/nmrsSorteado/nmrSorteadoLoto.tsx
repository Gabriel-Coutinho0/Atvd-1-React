import './nmrSorteado.css'

const NmrSorteadoLoto = ({dado}:any) => {
    return (
        <div className="coluna-dezenas-loto">
            <ul>{dado ? dado.map((elementos: any) =>
                <li>
                    {elementos}
                </li>
            ) : ""}</ul>
        </div>
    );
}

export default NmrSorteadoLoto;