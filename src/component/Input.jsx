import { props } from 'bluebird';
import React from 'react';
const Input = (props) => {

    return <>
       <input type={props.type || text} onChange={props.change}/>

    </>
}

export default Input;