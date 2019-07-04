const initialState = { description: '', list: [] }

export default (state = initialState, { type, payload }) => {

    switch (type) {

        case 'DESCRIPTION_CHANGED':
            return { ...state, description: payload }
        case 'TODO_SEARCHED':
            return { ...state, list: payload }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}
