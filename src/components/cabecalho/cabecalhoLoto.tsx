import './cabecalho.css'
const CabecalhoLoto = ({img, titulo}:any) => {
    return ( 
        <div className='header-container'>
                        <div className='imagem-header'><img src={img}></img></div>
                        <div className='titulo-loto'><h3 >{titulo}</h3></div>
                    </div>
     );
}
 
export default CabecalhoLoto;