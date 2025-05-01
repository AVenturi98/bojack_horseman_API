import * as React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

// Components
import ShowCard from '../components/ShowCard';
import Episodes from '../components/Episodes';
import Modal from '../components/Modal';

export default function Show() {

    const { id } = useParams();

    const [person, setPerson] = React.useState([]); // set Person
    const [presencePerson, setPresencePerson] = React.useState([]); // set Presence Person
    const [seasonPresencePerson, setSeasonPresencePerson] = React.useState([]); // set Season Presence Person
    const [showMore, setShowMore] = React.useState(false); // set Show More
    const [isLoading, setIsLoading] = React.useState(true); // set Is Loading
    const [seasonSelected, setSeasonSelected] = React.useState('');


    React.useEffect(() => {

        setIsLoading(true);

        axios.get(`http://localhost:3033/bj/${id}`)
            .then(res => {
                setPerson(res.data);
                setPresencePerson(res.data.presence);
                setSeasonPresencePerson(res.data.season);
                // console.log('Presence', res.data.presence);
                // console.log('Person', res.data);
                // console.log('Season', res.data.season);
                ;
            })
            .catch(err => {
                console.error('Error to Show page', err)
            })
            .finally(() => {
                setIsLoading(false);
            })

    }, [id]);


    //Filtro le stafione affinchè non si ripetano le stesse
    const filteredPresenceSeason = seasonPresencePerson.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);

    // Ordino gli episodi in base al numero
    const sorted = [...presencePerson].sort((a, b) => {
        const numA = parseInt(a.episode_n.match(/\d+/));
        const numB = parseInt(b.episode_n.match(/\d+/));
        return numA - numB;
    });


    return (
        <>
            {isLoading ?
                <div className='flex justify-center items-center h-screen'>
                    Caricamento...
                </div>

                :
                <div className='flex flex-col justify-center items-center '>
                    <ShowCard person={person} />
                    <div>
                        <h2 className='text-4xl'>Questo personaggio è: </h2>
                        <p className='font-bold my-5'>
                            Presente in:
                            <span className='ml-2 font-normal italic'>
                                {`${presencePerson.length} episodi`}
                            </span>
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setShowMore(!showMore)}
                        className='text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out'>
                        Vedi di più
                    </button>
                </div>}

            <Modal
                show={showMore}
                onClose={() => setShowMore(false)}
                title='Vedi tutto sugli episodi'
                content={
                    <Episodes
                        callbackShow={() => setShowMore(!showMore)}
                        callbackSelect={(e) => setSeasonSelected(e.target.value)}
                        presenceSeason={filteredPresenceSeason}
                        seasonSelected={seasonSelected}
                        sorted={sorted}
                        seasonSelectedInfo={filteredPresenceSeason[seasonSelected - 1]} />}
            />
        </>
    )
}