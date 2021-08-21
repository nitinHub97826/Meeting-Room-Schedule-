import React, {memo, useEffect, useState } from 'react';
import  {Route, BrowserRouter as Router, Switch ,NavLink} from 'react-router-dom';
import './style.scss';
import MeetingRoomBooking from '../MeetingRoomBooking'
import InterviewRecord from '../InterviewRecord'
import Welcome from '../Welcome'
import ErrorPage from '../ErrorPage'
import { Container } from '@material-ui/core';

const components=[
    Welcome,
    InterviewRecord,
    MeetingRoomBooking
]





const Routing=()=>{
   
    let [routes,setRoutes]=useState([]);
   
    useEffect(()=>{
        let   r=[
            {name:"Welcome",path:"/",exact:true,title:"Welcome"},
            {name:"MeetingRoomBooking",path:"/MeetingRoomBooking",exact:true,title:"Meeting Room Booking"},
            {name:"InterviewRecord",path:"/InterviewRecord",exact:true,title:"Interview Record"}
        ]
        r.map((r)=>{
            r.component=components.find(x=>{
                return (x.name && x.name|| x.type.name) ===r.name
            })
            r.main=()=><r.component />
            r.sidebar=()=>r.title
            return r;
        })
      setRoutes(r)
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
                children={<route.main />}
              />
             
            ))}
             <Router children={<ErrorPage />}/>
          </Switch>
       
        </Container>
        )
})


export default Routing;
