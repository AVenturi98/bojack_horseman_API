import * as React from 'react';
import axios from "axios";

const GlobalContext = React.createContext()

export function GlobalProvider({ children }) {

    const [persons, setPersons] = React.useState([])


    function fetchPersons() {
        axios.get('http://localhost:3033/bj')
            .then(res => {
                setPersons(res.data)
                console.log(res)
            })
            .catch(err => {
                console.error('Error from fetchPerson to GlobalContext', err)
            })
    }

    return (
        <GlobalContext.Provider value={{ fetchPersons, persons }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext