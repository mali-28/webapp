import React from 'react';
import Index from   "./features/login/Index";
import AuthProvider from './provider/auth/index';
function App() {
  return (
    <AuthProvider>
    <Index/>
    </AuthProvider>
  );
}

export default App;
