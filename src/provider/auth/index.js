
import React from 'react';
import {AuthContext} from './context'
const AuthProvider = (props) =>{
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
   
     const ProviderValue = {
         name,
         email,
         password,
         setName,
         setEmail,
         setPassword
     }

    return <>
      <AuthContext.Provider value={ProviderValue}>
          {props.children}
      </AuthContext.Provider>
    </>
}

export default AuthProvider;