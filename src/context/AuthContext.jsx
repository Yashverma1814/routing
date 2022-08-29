import React from "react";
import axios from 'axios'
export const AuthContext = React.createContext();

export const AuthContextProvider = ({children}) =>{

    const [token,setToken] = React.useState('');
    const [loading,setLoading] = React.useState(false)


    const handleLogin = (body) => {
        setLoading(true);
        axios({
            method: "post",
            url: "https://reqres.in/api/login",
            data: body
        }).then(res => {
            setToken(res.data)
            console.log(res.data)
        }).catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }

    const value = {
        token,
        loading,
        handleLogin
    }

    return(<AuthContext.Provider value={value}>{children}</AuthContext.Provider>)
}