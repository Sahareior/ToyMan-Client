import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Shared/Nav';

const Layout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Layout;