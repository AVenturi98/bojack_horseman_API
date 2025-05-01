import * as React from 'react';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';

export default function DefaultLayout() {

    const navigate = useNavigate()

    return (
        <>
            <header className='text-red-500'>
                <button
                    type="button"
                    onClick={() => navigate(-1)}>
                    BACK
                </button>
            </header>
            <Outlet />
        </>
    )
}