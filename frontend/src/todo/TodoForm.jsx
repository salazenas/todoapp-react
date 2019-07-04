import React from 'react'
import Grid from '../template/grid';
import IconButton from '../template/IconButton';

export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <div className='form-group'>
                <Grid cols='12 10 10'>
                    <label htmlFor="description">Tarefa:</label>
                    <input type="text" id='description' name='description' className='form-control'
                        placeholder='Adicione uma tarefa' value={props.description}
                        onChange={props.handleChange} onKeyUp={keyHandler} />
                </Grid>
                <Grid cols='10 2 2 2'>
                    <label htmlFor="options">Tarefa:</label>
                    <div name='options'>
                        <IconButton style='primary' icon='plus' onClick={props.handleAdd} />
                        <IconButton style='info' icon='search' onClick={props.handleSearch} />
                        <IconButton style='default' icon='close' onClick={props.handleClear} />
                    </div>
                </Grid>
            </div>
        </div>
    )
}