import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/IconButton';

import { changeDescription, search, add, clear } from './todoActions'

class TodoForm extends Component {

    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, clear, search, description } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { description } = this.props

        return (
            <div role='form' className='todoForm'>
                <div className='form-group'>
                    <Grid cols='12 10 10'>
                        <label htmlFor="description">Tarefa:</label>
                        <input type="text" id='description' name='description' className='form-control'
                            placeholder='Adicione uma tarefa' value={description}
                            onChange={this.props.changeDescription} onKeyUp={this.keyHandler} />
                    </Grid>
                    <Grid cols='10 2 2 2'>
                        <label htmlFor="options">Ação:</label>
                        <div name='options'>
                            <IconButton title="Adicionar" style='primary' icon='plus' onClick={() => this.props.add(description)} />
                            <IconButton title="Pesquisar" style='info' icon='search' onClick={() => this.props.search()} />
                            <IconButton title="Limpar" style='default' icon='close' onClick={this.props.clear} />
                        </div>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)