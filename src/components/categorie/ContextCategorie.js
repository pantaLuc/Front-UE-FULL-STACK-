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
            return axios.get(`http://localhost:8080/categorie/list`)
               .then((response) => {
                state.listcategorie=response.data
               }, (error) => {
                 console.log( "l'erreur " ,error.message);
               });
         }
        default:{

        }
    }
}
//creation du context 
export const ContextCategorie=React.createContext()

//cretation du provider
const ProviderCategorie=({children})=>{
    const[state ,dispatch]=useReducer(reducer ,categorie)
    const addcategorie=()=>{
        !! state.nom && state.description && dispatch({
            type:"addcategorie"
        })
    }
    const allcategorie=()=>{
        dispatch({
            type:"allcategorie",
            payload:state.listcategorie
        })
    }
    const value=useMemo(()=>{
        return {
            state,
            addcategorie,
            allcategorie
        }
    },[state.listcategorie])
    
    return <ContextCategorie.Provider value={value}>{children}</ContextCategorie.Provider>
}

export default ProviderCategorie;