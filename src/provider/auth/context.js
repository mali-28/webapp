import React from 'react';

const AuthContext = React.createContext({
    name : '',
    email : '',
    password : '',
    setName : () => {},
    setemail : () => {},
    setPassword : () => {}

})

export {AuthContext};