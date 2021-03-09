import React, { useEffect, useState } from 'react';
import ClientNav from '../Navbars/clientSideNavbar/navbar';
import classes from './company.module.css';
import Footer from '../footer/footer';
import { NavLink } from 'react-router-dom';
import {GetCompanies} from '../../utilities/apiIntegration';

const Company = () => {
    const [data,updateData] = useState([]);
    useEffect(()=>{
        (async()=>{
            const res = await GetCompanies();
            if(res.message==="success"&&res.companies!==undefined&&res.companies.length>0){
                updateData(res.companies);
            }
        })()
    },[])
    return (
        <>
            <ClientNav />
            <center>
                <h3 className={classes.H3}>
                    EXPLORE COMPANIES
                </h3>
                <h3 className={classes.p3}>
                    Browse Offices Before You Apply
                </h3>
            </center>
            <div className={classes.Form}>
               
                <div className="my-5">
                <h4 className={classes.H4}>THE EASSYAPPLY TEAM PICKS</h4>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                {
                                    data.length>0?data.map((d,key)=>
                                        <div className="col-md-4 col-10 mx-auto" key={key}>
                                            <div class="card">
                                                <img src={d.images[0]} class="card-img-top" alt='image' />
                                                <div class="card-body">
                                                    <h5 class="card-title">{d.companyName}</h5>
                                                    <p class="card-text">{d.description}</p>
                                                    <NavLink to={`/companyabouts/${d._id}`} class="btn btn-primary">EXPLORE</NavLink>
                                                </div>
                                            </div>
                                        </div>    
                                    ):null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Company;