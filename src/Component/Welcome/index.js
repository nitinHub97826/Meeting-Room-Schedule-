import React from 'react';
import { data } from './data.js';
import './index.scss';


 const Card = ({style={},children}) => {
  
     
    return (
       
        <div style={{
            backgroundColor:'#fff', 
            border:"1px solid",
            padding:'10px',
            marginBottom:'10px'
            ,...style}}>
              {
                 React.Children.map(children,x=>x)
              }
            </div>
      
    )
 }

 const RenderItem=(x)=>{
    return (
    <Card>
        <div className='m-row' >
            <div className='m-info-lable'>{`Box No`}</div> 
            <div className='m-info-value'>{x.boxNo}</div>
            </div> 
            <div className='m-row'>
            <div className='m-info-lable'>{`Weight (kg)`}</div>
            <div className='m-info-value'>{x.weight}</div>
            </div>
            <div className='m-row'> 
            <div className='m-info-lable'>{`Awb No`}</div> 
            <div className='m-info-value'>{x.awbNo}</div>
            </div>
            <div className='m-row'>
            <div className='m-info-lable'>{`Header`}</div>
            <div className='m-info-value'>{x.header}</div>
            </div>
    </Card>
    )
}

const Welcome = () => {
    return (
        <div>
            <span>Welcome to Weby</span>
            {
                data.map(x => <RenderItem key={x.boxNo} {...x} />)
            }
        </div>
    )
}
export default Welcome;
