import * as React from 'react';
import { Link } from 'react-router';
import GlobalContext from '../context/GlobalContext';
import Card from '../components/Card';

export default function Home() {

    const { fetchPersons, persons } = React.useContext(GlobalContext);

    React.useEffect(() => {
        fetchPersons();

    }, [])

    return (
        <div className='m-12 grid grid-cols-3 gap-5'>
            {persons.map(e =>
                <Card key={e.id} person={e} />
            )}
        </div>
    )
}