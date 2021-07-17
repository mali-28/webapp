import React, { useContext } from 'react';
import Input from '../../component/Input';
import Button from '../../component/Button';
import { useAuthContext } from '../../hooks/auth';

const Index = () => {
    const {name, setName} = useContext(useAuthContext)
    
    return <>
       <div className="main">
           <div className="div-login">
               <div className='title'><h1>SignUp</h1></div>
               <div className='login-form'>
               <Input name='name'/>
               <Input name="email" type='email'/>
               <Input name='password' tyoe="password"/>
               <br/>
                   <Button title ="Login"/>


               </div>
           </div>
       </div>
    </>
}

export default Index;