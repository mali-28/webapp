
import React from 'react';
import {AuthContext} from './context';
import useAuthContainer from '../../container/auth';
const AuthProvider = (props) =>{
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { createUser } = useAuthContainer();
    const registerUser = () =>{
        if(name === ""){
            alert('please enter a name')
        }else if(email === ""){
            alert('please enter an email')
        }else if(password === ""){
            alert('please enter password')
        }else{
            createUser();
            alert('Succesfully submitted')
        }
        
    }
     const ProviderValue = {
         name,
         email,
         password,
         setName,
         setEmail,
         setPassword,
         registerUser
     }

    return <>
      <AuthContext.Provider value={ProviderValue}>
          {props.children}
      </AuthContext.Provider>
    </>
}

export default AuthProvider;