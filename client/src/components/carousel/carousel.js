import React from 'react';
import {Button,Form} from 'react-bootstrap';
import Classes from './carousel.module.css';
import carousel from '../../assets/carousel.jpg';

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
                <h1 className={Classes.H1}>Make Your Move</h1>
                <p className={Classes.P}>Search for jobs at companies whose people, perks, and values align</p>
                <p className={Classes.P}> with your unique professional needs.</p>
                <div className={Classes.Centered}>
                    <Form.Control 
                        size="lg" 
                        type="text" 
                        placeholder="Find a career in.." 
                        style={{border:'none',borderRadius:'0',borderRight:'0.5px solid #ddd'}}
                    />
                    <Form.Control 
                        size="lg" 
                        type="text" 
                        placeholder="Near me" 
                        style={{border:'none',borderRadius:'0'}}
                    />
                    <Button>Search</Button>
                </div>
            </center>
            <center>
                <h2 className={Classes.Label}>Get an exclusive look inside hundreds of companies hiring now</h2>
            </center>
        </div>
    )
}
export default ClientCarousel;