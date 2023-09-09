import React, { useContext, useReducer } from 'react'
import Reducer from './Reducer'

const initialstate = {
    users: [
        { id: 1, name: "user One" },
        { id: 2, name: "user Two" },
        { id: 3, name: "user Three" },
    ]
}

const AppContext = React.createContext(initialstate)

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialstate)

    // ----- Action ------ //

    const deleteUser = (id) => {
        dispatch({
            type: 'DELETE_USER',
            payload: id
        })
    }

    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }

    return <AppContext.Provider value={{
        users: state.users,
        deleteUser,
        addUser,
    }}>
        {children}
    </AppContext.Provider>
}

const useGlobleContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobleContext }