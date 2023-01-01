import axios  from "axios";
import React, { useMemo, useReducer, useState  } from "react";
import jwt_decode from "jwt-decode";
import { useCallback } from "react";
import Cookies from "js-cookie";



const user={
    username:"",
    password:"",
    firstName:"",
    lastName:"",
};



function reducer(state,action){
    switch(action.type){
        case "signin":{
           return {
            ...state
           }
        }
        case "signup":{
           return {
            ...state
           }
        }
        case "isValidToken":{
          return{
            ...state ,
          }
        }
        case"getCookie":{
          return {
            ...state
          }
        }
        case "searchUser":{
          return{
            ...state
          }
        }
        default:return state
    };
};
//creation du context 
export const Context=React.createContext()


//cretation du provider
const Provider=({children})=>{
    const[state ,dispatch]=useReducer(reducer ,user);
    const[token , setToken]=useState()
    const[tokeValid ,setTokenValid]=useState(false)
    const[userId ,setUserId]=useState()
    
    //signin
    const signin=useCallback(async()=>{
      !! state.username && state.password &&
      await axios.post(`http://localhost:8080/user/signin`, {
         username: state.username,
         password: state.password
       })
       .then((response) => {
         const data=response.data;
          const jwt=jwt_decode(data)
          setToken(data)
        //  const date=new Date(jwt)
       // localStorage.setItem('data',JSON.stringify(data))
       setTokenValid(data)
        Cookies.set('token' ,data)
          if(jwt.roles[0].authority==="Admin"){
             console.log("c'est un admin")
          }else{
             console.log("c'est un Vendeur-livreur")
          }
        
       }, (error) => {
         console.log( "l' erreur " ,error.message);
       });
       dispatch({
           type:"signin"
       })
    },[token]);

   //signup
    const signup=async ()=>{
        !!state.username&&!!state.password&&
        !!state.firstName&&
        !!state.lastName && 
        await axios.post(`http://localhost:8080/user/signup`, {
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
        
        dispatch({type:"signup"})
    };
    //get COOKie 
    const getCookie=()=>{
      return Cookies.get("token")
    };
    // is valid
    const isValidToken=async(e)=>{
      await axios.get(`http://localhost:8080/user/validToken?token=${e}`).then((response)=>{
        console.log("du provider",response.data)
        setTokenValid(response.data)
    }).catch((error)=>{
     console.log( "l'erreur " ,error.message);
    });
    }

    const searchByUsername=async(e)=>{
        await axios.get(`http://localhost:8080/user/searchNom?username=${e}`).then((response)=>{
          console.log("Le user",response.data)
           setUserId(response.data)
      }).catch((error)=>{
      console.log( "l'erreur " ,error.message);
      });
    }
    const regexUsername = new RegExp("^.{4,4}$|^.{8,8}$");
    const regexPass = new RegExp("^(?=^[a-zA-Z!@#$%^&*]*[A-Z][a-zA-Z!@#$%^&*]*$)(?=^[a-zA-Z0-9]*[!@#$%^&*][a-zA-Z0-9]*$).{8}$");
    const value=useMemo(()=>{
        return {
            state,
            signin,
            signup,
            regexPass,
            regexUsername,
            token,
            tokeValid,
            getCookie,
            isValidToken,
            userId,
            searchByUsername
        }
    } ,[token ,signin ,tokeValid ,searchByUsername])
    
    
    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider;