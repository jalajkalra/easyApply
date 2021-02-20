import React from 'react';
import classes from "./footer.module.css"
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import Logo from '../Logo/logo';

const Footer = (props)=>{
    return(
        <div style={{marginTop:'10px'}}>
            <div className={classes.Footer} style={{backgroundColor:"#1B1B1D",backgroundSize:"100% 100%"}} >
                <center>
                    <h2>
                        <Logo/>
                    </h2>
                </center>
                <ul className={classes.U}>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Team</a>
                    <a href="#">Privacy</a>
                </ul>
            </div>
            <div className={classes.Img}>
                <img src={instagram} alt="Social" className={classes.Social}/>
                <img src={facebook} alt="Social" className={classes.Social}/>
                <img src={twitter} alt="Social" className={classes.Social}/>
                <img src={linkedin} alt="Social" className={classes.Social}/>
                <span style={{float:'right',color:'white'}} className={classes.Copyright}>Copyright <i className="far fa-copyright"></i> 2021 easyapply. All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer;