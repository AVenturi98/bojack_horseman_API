import * as React from 'react';
import { Link } from 'react-router';

export default function Card({ person }) {

    const { id, name, quote, image } = person

    return (
        <div className='border-2 border-white p-3'>
            <Link to={`/${id}`}>
                <div>{name}</div>
            </Link>
        </div>
    )
}