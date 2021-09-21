import React, {memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import  {Route, BrowserRouter as Router, Switch ,NavLink} from 'react-router-dom';
import { Container } from '@material-ui/core';
import axios from 'axios';
import * as axiosGlobal from '../axios';
import {mapDispatchToProps,mapStateToProps} from '../ReduxStore';
import {ErrorPage} from '../Component/Common'
import './style.scss';
import MeetingRoomBooking from '../Component/MeetingRoomBooking'
import InterviewRecord from '../Component/InterviewRecord'
import Companies from '../Component/Companies'
import Welcome from '../Component/Welcome'
import Jobs from '../Component/Jobs'
import ApiCall from '../Component/Common/ApiCall';



const components=[
     Welcome
    ,InterviewRecord
    ,MeetingRoomBooking
    ,Companies
    ,Jobs
]


const Routing=(props)=>{
  const {apiCall}=props
    let [routes,setRoutes]=useState([]);
   
    
  
    

    const calcRouteSet=(r)=>{
      r.map((r)=>{
        r.component=(connect(mapStateToProps,mapDispatchToProps)(ApiCall(components.find((x,i)=>{
            return (x.name && x.name|| x.type.name) ===r.name
        }))))
        r.main=()=><r.component currentMenu={r} {...props}/>
        r.sidebar=()=>r.title
        return r;
    })
      setRoutes(r)
    }

    useEffect(()=>{
        let   r=[ {name:"Welcome",path:"/",exact:true,title:"Welcome"}]
        
        calcRouteSet(r);
        apiCall.postCall({ url:"common/GetMenulist",onError:()=>  calcRouteSet(r),  onSuccess:(m)=>{
          calcRouteSet(m.data)
        } } )
       
     
    },
    [])
    
   

    return (
        <Router>
            <header className={"application-header"}>
                {"Weby"}
            </header> 
            <div className="menu-body"> 
                <div className="menu-list">
                    {
                        routes.map((x)=><NavLink activeClassName="active"  key={x.name} exact={x.exact} to={x.path} >{x.title}</NavLink>)
                    }
                </div>
                <CusSwitch routes={routes}/>
            </div>
        </Router>
    )
}

const CusSwitch=memo((props)=>{
    const {routes,...otherProps}=props
    return(
      <Container fixed>
        <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<div className="menu-title" >{route.title}</div>}
              />
            ))}
            <Router children={<div className="menu-title" >Error</div>}/>
          </Switch>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main/>}
              />
             
            ))}
             <Router children={<ErrorPage />}/>
          </Switch>
         
        </Container>
        )
})


export default (ApiCall(Routing));
