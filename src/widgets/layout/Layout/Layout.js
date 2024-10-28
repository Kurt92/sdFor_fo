import React from 'react';
import { Outlet } from 'react-router-dom';
import {Header} from "../Header";
import LeftNavbar from "../Navbar/ui/LeftNavbar";

const Layout = () => {
    return (
        <>
            <Header />
            <div className="flex">
                <LeftNavbar />
                <Outlet />
            </div>
        </>
    );
};

export default Layout;