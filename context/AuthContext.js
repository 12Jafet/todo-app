import React from 'react'

const AuthContext = React.createContext({
    userName: null,
    setUserName: () => { }
});

export default AuthContext