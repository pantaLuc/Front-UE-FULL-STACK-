import axios  from "axios";
import React, { useMemo, useReducer } from "react";
import jwt_decode from "jwt-decode";

const user={
    username:"",
    password:"",
    firstName:"",
    lastName:"",
    token:"",
};



function reducer(state,action){
    switch(action.type){
        case "signin":{
           return axios.post(`http://localhost:8080/user/signin`, {
                username: state.username,
                password: state.password
              })
              .then((response) => {
                state.token=response.data;
                 const jwt=jwt_decode(state.token)
               //  const date=new Date(jwt)
                 if(jwt.roles[0].authority){
                    console.log("c'est un admin")
                 }else{
                    console.log("c'est un Vendeur-livreur")
                 }
               
              }, (error) => {
                console.log( "l' erreur " ,error.message);
              });
        }
        case "signup":{
            axios.post(`http://localhost:8080/user/signup`, {
                username: state.username,
                password: state.password,
                firstName:state.firstName,
                lastName:state.lastName
                
              })
              .then((response) => {
                console.log(response)
              }, (error) => {
                console.log( "l' erreur " ,error.message);
              });
        }
        default:return state
    };
};
//creation du context 
export const Context=React.createContext()


//cretation du provider
const Provider=({children})=>{
    const[state ,dispatch]=useReducer(reducer ,user);
    const signin=()=>{
        !! state.username && state.password && dispatch({
            type:"signin"
        })
    }
    const signup=()=>{
        !!state.username&&!!state.password&&
        !!state.firstName&&
        !!state.lastName && dispatch({type:"signup"})
    };
    const regexUsername = new RegExp("^.{4,4}$|^.{5,5}$");
    const regexPass = new RegExp("^(?=^[a-zA-Z!@#$%^&*]*[A-Z][a-zA-Z!@#$%^&*]*$)(?=^[a-zA-Z0-9]*[!@#$%^&*][a-zA-Z0-9]*$).{8}$");
    const value=useMemo(()=>{
        return {
            state,
            signin,
            signup,
            regexPass,
            regexUsername
        }
    } ,[state.token])
    
    
    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider;