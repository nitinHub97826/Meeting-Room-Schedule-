import React, {memo} from 'react'
import PropTypes from 'prop-types';  

const Button=memo((props)=>{
    const {title,design,...otherProps}=props
    return (
                <button title={title} className={`btn ${design}`}  {...otherProps}>{title}</button>
    )
})
export default Button;

Button.propTypes = {  
    design: PropTypes.oneOf(['primary', 'default']).isRequired,
}  
Button.defaultProps = {  
    design: "default"
}  