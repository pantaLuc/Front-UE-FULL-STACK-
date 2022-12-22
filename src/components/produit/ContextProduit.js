import React, { useMemo, useReducer, useState } from "react"
import axios  from "axios";

const produit={
    nom: "",
    description: "",
    categorieList: {},
    imageUrl: "",
    prix: 0,
    boutique: {},
    quantité: 0,
    listproduit:[]
}

function reducer(state,action){
    switch(action.type){
        case "addproduit":{
           return axios.post(`http://localhost:8080/produit`, {
                nom: state.nom,
                description: state.description,
                categorieList: state.categorieList,
                imageUrl: state.imageUrl,
                prix: state.prix,
                boutique: state.boutique,
                quantité: state.quantité,
              })
              .then((response) => {
                console.log(response.data);
              }, (error) => {
                console.log( "l'erreur " ,error.message);
              });
        }
        case "allproduit":{
            return axios.get(`http://localhost:8080/produit/list`)
               .then((response) => {
                state.listproduit=response.data
               }, (error) => {
                 console.log( "l'erreur " ,error.message);
               });
         }
        default:{

        }
    }
}
//creation du context 
export const ContextProduit=React.createContext()

//cretation du provider
const ProviderProduit=({children})=>{
    const[state ,dispatch]=useReducer(reducer ,produit)
    const addproduit=()=>{
         dispatch({
            type:"addproduit"
        })
    }
    const allproduit=()=>{
        dispatch({
            type:"allproduit",
            payload:state.listproduit
        })
    }
    const value=useMemo(()=>{
        return {
            state,
            addproduit,
            allproduit
        }
    },[state.listproduit])
    
    return <ContextProduit.Provider value={value}>{children}</ContextProduit.Provider>
}

export default ProviderProduit;