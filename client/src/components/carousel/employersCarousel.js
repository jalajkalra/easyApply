import React from 'react';
import {Button} from 'react-bootstrap';
import Classes from './carousel.module.css';
import carousel from '../../assets/body1.jpg';

const ClientCarousel = ()=>{
    return(
        <div>
            <div className={Classes.BackDrop}></div>
            <img
                className={Classes.MainCarousel}
                src={carousel}
                alt="First slide"
            />
            <center className={Classes.AlignCarousel}>
                <h1 className={Classes.H1}>You need to hire quality talent.</h1>
                <p className={Classes.P}>So you need a story that resonates with candidates.</p>
                <center style={{marginTop:'15px'}}> 
                    <Button size="lg" variant="light">Get Started</Button>
                </center>
            </center>
        </div>
    )
}
export default ClientCarousel;