import React, { useMemo, useReducer, useState } from "react"
import axios  from "axios";

const boutique={
    nom: "",
    dateCreationBoutique: "",
    horaireList: {},
    utilisateur: "",
    joursemaine:"",
    intervalleHeure:[],
    estEnCongé:false,
    listintervalle:[],
}

function reducer(state,action){
    switch(action.type){
        case "addhoraire":{
            return {...state}
         }
        case "allintervalle":{
            return {
                ...state,
                listintervalle:action.data
            }
         }
        default:return state
    }
}
//creation du context 
export const ContextBoutique=React.createContext()

//cretation du provider
const ProviderBoutique=({children})=>{
    const[state ,dispatch]=useReducer(reducer ,boutique)
    const[data ,setData]=useState([]);
    const[idhoraire ,setIdhoraire]=useState();
    const addhoraire=async()=>{
       await axios.post(`http://localhost:8080/horaire/create`, {
                joursemaine: state.joursemaine,
                intervalleHeure: state.intervalleHeure,
                estEnCongé: state.estEnCongé
               })
               .then((response) => {
                setIdhoraire(response.data.id)
                 console.log(response.data);
               }, (error) => {
                 console.log( "l'erreur " ,error.message);
               });
        dispatch({
            type:"addhoraire"
        })
    };
    const allintervalle= async()=>{
        await axios.get(`http://localhost:8080/intervalleheure/list`).then((response)=>{
         setData(response.data);
        }).catch((error)=>{
         console.log( "l'erreur " ,error.message);
        });
        
         dispatch({
             type:"allintervalle",
             data
         })
     };
    const value=useMemo(()=>{
        return {
            state,
            data,
            idhoraire,
            allintervalle,
            addhoraire
        }
    },[state.listintervalle,addhoraire,allintervalle])
    
    return <ContextBoutique.Provider value={value}>{children}</ContextBoutique.Provider>
}

export default ProviderBoutique;