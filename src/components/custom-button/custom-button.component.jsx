import React from 'react';
import './custom-button.styles.scss';

//...otherProps should contain key value pairs which are standardly accpeted by button tag
const CustomButton = ({children,isGoogleSignIn, ...otherProps}) => (
    
    <button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherProps}>
        {children}
        {alert("Into CustomButton Component")}
    </button>
);


export default CustomButton;