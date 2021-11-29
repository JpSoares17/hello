import estilos from './estilo.module.css'

export function Dashboard(){
    return (
        <section className={estilos.dashboard}>
            <h1 className={estilos.titulo}>Bem-vindo</h1>
            <p className={estilos.texto}>Este app foi feito com o intuito de você, que está sem tempo para se organizar, tentar listar suas tarefas e riscar as que já estão concluídas. Se te ajudei de alguma forma divulgue o link desta página com seu amigo, ficarei muito agradecido</p>
            <img src="http://www.setesys.com.br/wp-content/uploads/2012/06/Captura-de-tela-2012-06-05-a%CC%80s-16.55.12.png" alt="Tarefas" className={estilos.imagem} />
        </section>
    )
}