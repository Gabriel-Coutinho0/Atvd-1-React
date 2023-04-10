import './vencedores.css'



const Vencedores = ({ dado,dado2,info }: any) => {
    return (
        <div className='vencedores' >
            <p>{dado ? "ACUMULADO" : dado2 + info}</p>
        </div >
    )
}

export default Vencedores;