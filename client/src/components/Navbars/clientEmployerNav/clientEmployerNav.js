import React from 'react';
import {Nav,Navbar,Button} from 'react-bootstrap';
import Logo from '../../Logo/logo';
import Classes from '../clientSideNavbar/navbar.module.css';

const ClientEmployerNav = ()=>{
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Logo/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link className={Classes.Links} href="#deets">What We Do</Nav.Link>
                        <Nav.Link className={Classes.Links} href="#memes">Resources</Nav.Link>
                        <Nav.Link className={Classes.Links} href="#memes2">Partners</Nav.Link>
                        <Nav.Link className={Classes.Links} href="/companyLogin">Dashboard</Nav.Link>
                        <Button size="lg" variant="light" className={Classes.Button}>GET STARTED</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default ClientEmployerNav;