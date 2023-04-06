import {LoteriaProps } from "../types"
import tarefa from "./tarefa"
class Loteria{
     async get():Promise<LoteriaProps>{
       const {data} = await tarefa.get("")
       return data
    }
}

const loteria = new Loteria()
export default loteria