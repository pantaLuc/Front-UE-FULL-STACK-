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
    ouverture:"",
    fermeture:"",
    listBoutique:[],
    listBoutiquebyuser:[],
    username:""
}

function reducer(state,action){
    switch(action.type){
        case "addboutique":{
            return {...state}
         }
        case "addintervalle":{
            return {...state}
         }
        case "addhoraire":{
            return {...state}
         }
        case "allintervalle":{
            return {
                ...state,
                listintervalle:action.data
            }
         }
        case "allboutique":{
            return {
                ...state,
                listBoutique:action.data
            }
         }
        case "allboutiquebyuser":{
            return {
                ...state,
                listBoutiquebyuser:action.data
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
    const[datalisteboutique ,setDatalistboutique]=useState([]);
    const[datalisteboutiquebyuser ,setDatalistboutiquebyuser]=useState([]);
    const[idhoraire ,setIdhoraire]=useState();
    const addboutique=async()=>{
       await axios.post(`http://localhost:8080/boutique/create`, {
                nom: state.nom,
                dateCreationBoutique: state.dateCreationBoutique,
                horaireList: state.horaireList,
                utilisateur: state.utilisateur
               })
               .then((response) => {
                window.location.reload();
                 console.log(response.data);
               }, (error) => {
                 console.log( "l'erreur " ,error.message);
               });
        dispatch({
            type:"addboutique"
        })
    };
    const addintervalle=async()=>{
       await axios.post(`http://localhost:8080/intervalleheure`, {
                ouverture: state.ouverture,
                fermeture: state.fermeture
               })
               .then((response) => {
                //window.location.reload();
                 console.log(response.data);
               }, (error) => {
                 console.log( "l'erreur " ,error.message);
               });
        dispatch({
            type:"addintervalle"
        })
    };
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
    const allboutique= async()=>{
        await axios.get(`http://localhost:8080/boutique/list`).then((response)=>{
        setDatalistboutique(response.data);
        }).catch((error)=>{
         console.log( "l'erreur " ,error.message);
        });
        
         dispatch({
             type:"allboutique",
             data
         })
     };
    const allboutiquebyuser= async(e)=>{
        await axios.get(`http://localhost:8080/boutique/searchboutiques?username=${e}`).then((response)=>{
            setDatalistboutiquebyuser(response.data);
        }).catch((error)=>{
         console.log( "l'erreur " ,error.message);
        });
        
         dispatch({
             type:"allboutiquebyuser",
             data
         })
     };
    const value=useMemo(()=>{
        return {
            state,
            data,
            datalisteboutique,
            datalisteboutiquebyuser,
            idhoraire,
            allintervalle,
            addhoraire,
            addboutique,
            addintervalle,
            allboutique,
            allboutiquebyuser
        }
    },[state.listintervalle,addhoraire,allintervalle,addboutique,addintervalle])
    
    return <ContextBoutique.Provider value={value}>{children}</ContextBoutique.Provider>
}

export default ProviderBoutique;