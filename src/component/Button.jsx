import React from 'react';
const Button  = (props) => {
   return <>
   <button type="button" onClick={props.click}>{props.buttonTitle}</button>
   </>
}

export default Button; 
