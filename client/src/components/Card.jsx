import * as React from 'react';
import { Link } from 'react-router';

export default function Card({ person }) {

    const { id, name, quote, image } = person

    return (
        <div className='p-3 border-2 border-white rounded-md'>
            <Link to={`/${id}`}>
                <div className='flex justify-between items-center'>
                    <div className='img-box'>
                        <img
                            src={`/image-person/${image}`}
                            alt={`${name}-photo`} />
                    </div>
                    <div className='w-[60%] text-center'>{name}</div>
                </div>
            </Link>
        </div>
    )
}