import React from 'react';
import { AuthContext } from "../provider/auth/context"

const useAuthContext = () =>{
    const authData = React.useContext(AuthContext);
    return authData;
}

export {useAuthContext};
