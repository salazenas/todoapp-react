import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending, remove } from './todoActions'

import IconButton from '../template/IconButton';

const todoList = props => {

    const renderRows = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>{todo.done ? 'Concluído' : 'Pendente'}</td>
                <td>
                    <IconButton title="Marcar como concluído" style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)}></IconButton>
                    <IconButton title="Marcar como pendente" style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(todo)}></IconButton>
                    <IconButton title="Remover" style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Status</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(todoList)