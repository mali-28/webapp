import { props } from 'bluebird';
import React from 'react';
const Input = (props) => {
        // let x = document.getElementsByName(name);
        // if(x.length < 1){}
    return <>
       <input name={props.name} type={props.type || "text"} onChange={props.change}/>

    </>
}

export default Input;