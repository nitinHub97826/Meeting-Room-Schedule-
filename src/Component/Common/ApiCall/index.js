import React ,{Component,memo}from 'react';
import axios from 'axios';
import {apiUrl} from '../../../Constant'

const  ApiCall=(WrappedComponent) =>{
    // ...and returns another component...
    return class extends Component {
      constructor(props) {
        super(props);
     
      }
   
      postCall = async (params) => {
        const { url, payload={}, onError, onSuccess } = params	
        
    await  axios.post(
         `${apiUrl}${url}` ,
          payload,
        ).then(function (response) {
          
       
          onSuccess && onSuccess(response);
        })
        .catch(function (error) {
          console.log('error',error)
          onError && onError(error);
        });
      }
      componentDidMount() {
     
      }
  
  
      render() {
       
        // ... and renders the wrapped component with the fresh data!
        // Notice that we pass through any additional props
        const {postCall}=this

        return <WrappedComponent apiCall={{"postCall":postCall}} {...this.props} />;
      }
    };
  }
  export default ApiCall;