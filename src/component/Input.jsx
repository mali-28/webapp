import { props } from 'bluebird';
import React from 'react';
const Input = (props) => {
        // let x = document.getElementsByName(name);
        // if(x.length < 1){}
    return <>
       <input name={props.name} value={props.value} type={props.type || "text"} onChange={props.change}/>

    </>
}

export default Input;