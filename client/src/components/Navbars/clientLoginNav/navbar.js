import React from 'react';
import {Navbar} from 'react-bootstrap';
import Logo from '../../Logo/logo';

const ClientLoginNav = ()=>{
    return(
        <>
            <Navbar style={{background:'rgb(0, 19, 38)'}}>
                <Navbar.Brand>
                    <Logo/>
                </Navbar.Brand>
            </Navbar>
        </>
    )
}
export default ClientLoginNav;