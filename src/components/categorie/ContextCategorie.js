import React, { useReducer } from "react"
import axios  from "axios";

const categorie={
    nom:"",
    description:""
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
    const value={
        state,
        addcategorie
    }
    return <ContextCategorie.ProviderCategorie value={value}>{children}</ContextCategorie.ProviderCategorie>
}

export default ProviderCategorie;