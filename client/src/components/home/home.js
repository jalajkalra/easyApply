import React from 'react';
import Body from '../Body/body';
import ClientCarousel from '../carousel/carousel';
import Footer from '../footer/footer';
import ClientNav from '../Navbars/clientSideNavbar/navbar';

const Home = (props)=>{
    return(
        <>
            <ClientNav/>
            <ClientCarousel/>
            <Body/>
            <Footer/>
        </>
    )
}
export default Home;
