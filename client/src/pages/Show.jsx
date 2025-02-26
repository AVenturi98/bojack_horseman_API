import * as React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function Show() {

    const { id } = useParams();

    const [person, setPerson] = React.useState([]);

    React.useEffect(() => {
        axios.get(`http://localhost:3033/bj/${id}`)
            .then(res => {
                setPerson(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.error('Error to Show page', err)
            })

    }, [id])

    return (
        <>
            <div>
                {person.name}
            </div>
            <div>
                {person.quote}
            </div>
        </>
    )
}