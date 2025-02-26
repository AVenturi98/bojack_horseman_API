import * as React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router';

export default function DefaultLayout() {

    return (
        <>
            <header className='text-red-500'>
                NAV
            </header>
            <Outlet />
        </>
    )
}