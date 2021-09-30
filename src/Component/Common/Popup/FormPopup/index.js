import React,{ PureComponent } from 'react';
import { SubmitBtn,CancelBtn } from '../../Button';
import { Popup, PopupActions, PopupContents } from '../index';

class FormPopup extends PureComponent {

    render(){
        const{children,onSubmit,onCancel,...otherProps}=this.props
        return(
            <form className="form" onSubmit={onSubmit} >
           
            <Popup {...otherProps} >
            <PopupContents>
                {
                    React.Children.map(children,x=>x)
                }
            </PopupContents>
          <PopupActions>
            <SubmitBtn/>
            <CancelBtn onClick={onCancel}/>
          </PopupActions>
            </Popup>
            </form>
        )
    }
}

export {FormPopup}

