import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/robot.png';
import Classes from './Logo.module.css';

const Logo = ()=>{
    return(
        <Link to="/" style={{textDecoration:'none'}}> 
            <div className={Classes.Combine}>
                <img src={logo} alt="Easyapply" className={Classes.Img}/>
                <h1 className={Classes.Brand}><span className={Classes.SubStyle}>easy</span>apply</h1>
            </div>
        </Link>
    )
}
export default Logo;