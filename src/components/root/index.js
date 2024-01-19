import React from 'react';
import Navigation from '../navigation';
// import Outlet
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Navigation/>
            {/* Add an Outlet*/}
            <Outlet/>
        </>
    );
};

export default Root;