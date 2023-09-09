const Reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            return {
                users: state.users.filter(user => {
                    return user.id !== action.payload
                })
            }

        case 'ADD_USER':
            return {
                ...state,
                users: [action.payload, ...state.users],
            }

        default:
            return state
    }
}

export default Reducer