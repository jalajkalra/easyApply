import React, { useEffect } from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import Home from './components/home/home';
import ClientLogin from './components/clientAccount/login';
import Employers from './components/Employers/employers';
import ClientRegistration from './components/clientAccount/registration';
import job from './components/Jobs/job';
import company from './components/companyprofiles/company';
import companyabouts from './components/companyabout/companyabouts';
import viewjob from './components/viewjob/viewjob';
import { useDispatch } from 'react-redux';
import { checkAuthState } from './entities/action/action';
import {checkCompanyAuthState} from './entities/action/companyAction';
import Admin from "./layouts/Admin.js";
import CompanyLogin from './components/clientAccount/companyLogin';
import { useMatomo } from '@datapunt/matomo-tracker-react'

const App = ()=>{
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(checkAuthState());
    dispatch(checkCompanyAuthState());
  },[])
  const { trackPageView } = useMatomo()
  React.useEffect(() => {
    trackPageView(trackPageView({
        href: window.location.pathname+window.location.search, // optional
      }))
  }, [])
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={ClientLogin}/>
      <Route exact path="/companyLogin" component={CompanyLogin}/>
      <Route exact path="/registration" component={ClientRegistration}/>
      <Route exact path="/employers" component={Employers}/>
      <Route exact path="/job" component={job}/>
      <Route exact path="/company" component={company}/>
      <Route exact path="/company/:id" component={companyabouts}/>
      <Route exact path="/job/:id" component={viewjob}/>
      <Route path="/admin" component={Admin} />
    </Switch>
  );
}

export default withRouter(App);
