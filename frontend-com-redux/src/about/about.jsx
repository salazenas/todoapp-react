import React from 'react'
import PageHeader from '../template/pageHeader';

export default props => (
    <div>
        <PageHeader name='Sobre' small='Nós'></PageHeader>

        <h2>Propósito</h2>
        <p>Disponibilizar uma ferramenta capaz de gerenciar tarefas de forma simples e objetiva.</p>

        <h2>Como usar</h2>
        <ol>
            <li>Insira um valor no campo Tarefa</li>
            <li>Escolha uma ação disponível ao lado do campo Tarefa. Existem três ações (Adicionar, pesquisar e limpar pesquisa - disponibilizadas nessa ordem)</li>
            <li>A descrição das tarefas serão apresentadas de acordo com a ação feita anteriormente. Para interagir com uma descrição, escolha uma ação ao lado da descrição desejada.</li>
        </ol>

        <h2>Algum problema com a aplicação? Nos ajude a melhorar!</h2>
        <p>Clique <a href='https://github.com/salazenas/todoapp-react/issues/new'>aqui</a> para abrir um ticket e descrever o que precisa ser feito.</p>

    </div>
)