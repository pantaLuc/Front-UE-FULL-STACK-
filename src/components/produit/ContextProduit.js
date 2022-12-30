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
            return {...state}
        }
         case "allproduit":{
            return {
                ...state,
                listproduit:action.data
            }
         }
         case "deleteProduit":{
            return{
                ...state
            }
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
    const[produitlist ,setProduitlist]=useState([]);

    const addproduit=async()=>{
        axios.post(`http://localhost:8080/produit`, {
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
         dispatch({
            type:"addproduit"
        })
    }
    
    const allproduit= async()=>{
        await axios.get(`http://localhost:8080/produit/list`)
        .then((response) => {
            setProduitlist(response.data)
        }, (error) => {
          console.log( "l'erreur " ,error.message);
        });
         dispatch({
             type:"allproduit",
             produitlist
         })
     };
     const deleteProduit=async(e)=>{
        await axios
      .delete(`${process.env.REACT_APP_API_URL}/produit?id=${e}`)
      .then(
        (response) => {
          window.location.reload();
          console.log(response.data);
        },
        (error) => {
          console.log("l'erreur ", error.message);
        }
      );
    dispatch({
      type: "deleteProduit",
    });
     }
    const value=useMemo(()=>{
        return {
            state,
            produitlist,
            addproduit,
            allproduit,
            deleteProduit
        }
    },[state.listproduit])
    
    return <ContextProduit.Provider value={value}>{children}</ContextProduit.Provider>
}

export default ProviderProduit;