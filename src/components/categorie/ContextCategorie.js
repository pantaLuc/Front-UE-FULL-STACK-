import React, { useCallback, useMemo, useReducer, useState } from "react"
import axios  from "axios";

const categorie={
    nom:"",
    description:"",
    listcategorie:[]
}

function reducer(state,action){
    switch(action.type){
        case "addcategorie":{
           return axios.post(`http://localhost:8080/categorie`, {
                nom: state.nom,
                description: state.description
              })
              .then((response) => {
                console.log(response.data);
              }, (error) => {
                console.log( "l'erreur " ,error.message);
              });
        }
        case "allcategorie":{
            return {
                ...state,
                listcategorie:action.data
            }
         }
        default:return state
    }
}
//creation du context 
export const ContextCategorie=React.createContext()

//cretation du provider
const ProviderCategorie=({children})=>{
    const[state ,dispatch]=useReducer(reducer ,categorie)
    const[data ,setData]=useState([])
    const addcategorie=()=>{
        !! state.nom && state.description && dispatch({
            type:"addcategorie"
        })
    }
    const allcategorie= async()=>{
       let tab=await axios.get(`http://localhost:8080/categorie/list`)
        .then((response) => {
            setData(response.data)
        }, (error) => {
          console.log( "l'erreur " ,error.message);
        });
        dispatch({
            type:"allcategorie",
            data
        })
    }
    const value=useMemo(()=>{
        return {
            state,
            data,
            addcategorie,
            allcategorie
        }
    },[state ,addcategorie ,allcategorie ,data])
    
    return <ContextCategorie.Provider value={value}>{children}</ContextCategorie.Provider>
}

export default ProviderCategorie;