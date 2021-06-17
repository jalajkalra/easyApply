import React from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import Logo from '../../Logo/logo';
import Classes from './navbar.module.css';
import {useSelector,useDispatch} from 'react-redux';
import {Logout} from '../../../entities/action/action';

const ClientNav = ()=>{
    const isLoggedIn = useSelector(state=>state.account.isLoggedIn);
    const dispatch = useDispatch();
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Brand>
                    <Logo/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link id="matomoJobsClick" className={Classes.Links} href="/job">Jobs</Nav.Link>
                        <Nav.Link id="matomoCompaniesClick" className={Classes.Links} href="/company">Companies</Nav.Link>
                        <Nav.Link id="matomoEmployeesClick" className={`${Classes.Employers} ${Classes.Links}`} href="/employers">Employers</Nav.Link>
                        {
                            isLoggedIn?
                                <NavDropdown title="Account" id="basic-nav-dropdown" > 
                                        <NavDropdown.Item>My Account</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item  onClick={()=>dispatch(Logout())}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            :<Nav.Link className={Classes.Links} href="/login">SIGNIN</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default ClientNav;