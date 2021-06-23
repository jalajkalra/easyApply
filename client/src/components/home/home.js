import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import Body from '../Body/body';
import ClientCarousel from '../carousel/carousel';
import Footer from '../footer/footer';
import ClientNav from '../Navbars/clientSideNavbar/navbar';

const Home = (props)=>{
    const [open,updateOpen] = useState(false);
    return(
        <div id="matomoHome">
            <ClientNav/>
            <Button variant="danger" style={{float:'right'}} onClick={()=>updateOpen(!open)}>Click to open</Button>
            <ClientCarousel/>
            <div id="sidebar-heading" 
                style={{position:'absolute',background:'pink',left:0,top:0,bottom:0,width:open?'70%':'0vw',zIndex:100}}>

            </div>
            <Body/>
            <Footer/>
        </div>
    )
}
export default Home;
