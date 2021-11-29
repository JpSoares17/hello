import React from 'react';
import './App.css';
import { Rotas } from './rotas/index';

function App() {
  return (
     <div className="App">
       <header>
         <section className="Home">
           <a href="/">Home</a>
           <a href="/tarefas">Minhas Tarefas</a><br />
           <a href="/nova-tarefa">Adicionar Tarefa</a>
         </section>
       </header>
       <main>
         <Rotas />
       </main>
       <footer>
        <section className="Rodape">
          <p>IFPI | Instituto Federal do Piauí - Técnico em Desenvolvimento de Sistemas - TDS</p>
        </section>
       </footer>
     </div>
  );
}

export default App;
