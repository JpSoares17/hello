import estilos from './estilo.module.css'


export function Tarefas(){
    return (
        <section className={estilos.tarefas}>
            <h2 className={estilos.subtitulo}>Minhas Tarefas</h2>
            <ol>
                <li>Cortar a grama</li>
                <li>Limpar a casa</li>
            </ol>
        </section>
    )
}