import estilos from './estilo.module.css'

export function NovaTarefa(){
    return (
        <section className={estilos.nova_tarefa}>
            <h2 className={estilos.titulo}>Nova Tarefa</h2>
            <form action="#" method="post">
                <input type="text" placeholder="Descrição"/>
                <input type="submit" value="Cadastrar"/>
            </form>
        </section>
    )
}