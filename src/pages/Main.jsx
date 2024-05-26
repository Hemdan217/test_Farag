/* eslint-disable react/prop-types */
import { Outlet, useLocation } from "react-router-dom";
import Home from "./Home";
import { useEffect } from "react";
import AOS from 'aos';

function Main() {
    const { pathname } = useLocation();

    useEffect(() => {
        console.log('AOS in Active')
        AOS.init();
    }, [])


    if (pathname === '/') return (<Home />);

    return (<Outlet />)
}

export default Main