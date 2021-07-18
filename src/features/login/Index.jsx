import React, { useContext } from 'react';
import Input from '../../component/Input';
import Button from '../../component/Button';
import { useAuthContext } from '../../hooks/auth';

const Index = () => {
    const { name, email, password, setName, setEmail, setPassword, registerUser } = useAuthContext();

    const changeInput = (e) => {
        const value = e.target.value;
        const attribute = e.target.name;

        if (attribute === "name") {
            setName(value);
            setEmail(email);
            setPassword(password);
        }
        if (attribute === "email") {
            setName(name);
            setEmail(value);
            setPassword(password);
        }
        if (attribute === "password") {
            setName(name);
            setEmail(email);
            setPassword(value);
        }


    }
    const submit = (e) => {
        e.preventDefault();
        registerUser();
    }


    return <>
        <div className="main">
            <div className="div-login">
                <div className='title'><h1>SignUp</h1></div>
                <div className='login-form'>
                    <Input change={changeInput} value={name} name='name' />
                    <Input change={changeInput} value={email} name="email" type='email' />
                    <Input change={changeInput} value={password} name='password' type="password" />
                    <br />
                    <Button click={submit} title="Login" />

                </div>
            </div>
        </div>
    </>
}

export default Index;