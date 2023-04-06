import axios, { AxiosInstance } from "axios";

const tarefa: AxiosInstance = axios.create({
    baseURL : "https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados",
    timeout: 2000,
    headers:{
        'Content-Type': 'aplication/json'
    }
})

export default tarefa;