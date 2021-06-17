import React from 'react';
import Body from '../Body/body';
import ClientCarousel from '../carousel/carousel';
import Footer from '../footer/footer';
import ClientNav from '../Navbars/clientSideNavbar/navbar';

const Home = (props)=>{
    return(
        <div id="matomoHome">
            <ClientNav/>
            <ClientCarousel/>
            <Body/>
            <Footer/>
        </div>
    )
}
export default Home;
