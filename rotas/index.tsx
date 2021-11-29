import {Route, Routes} from 'react-router-dom'
import { NovaTarefa } from '../paginas/NovaTarefa'
import { Tarefas } from '../paginas/Tarefas'
import { Dashboard } from '../paginas/Dashboard'

export function Rotas(){
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/nova-tarefa" element={<NovaTarefa />} />
        </Routes>
  )

}