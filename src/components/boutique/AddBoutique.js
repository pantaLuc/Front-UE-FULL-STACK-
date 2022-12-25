import React ,{useState,useContext} from "react";
import AddHoraire from "./AddHoraire";
import {ContextBoutique} from "./ContextBoutique"

const AddBoutique = () => {
  const [listesdeshoraires ,setListesdeshoraires]=useState([])
  const [alerte ,setAlerte]=useState(false)

  const {state ,data,addboutique}=useContext(ContextBoutique);
  const listHoraire=(e)=>{
    setListesdeshoraires(e)
  }
  const ajouterBoutique=(e)=>{
    if(listesdeshoraires.length!=7){
      alert("Vérifiez que vous avez validez toutes les horaires.")
      setAlerte(true)
    }else{
      state.horaireList=listesdeshoraires;
      state.utilisateur=null;
      console.log(state.dateCreationBoutique)
      console.log(new Date(state.dateCreationBoutique));
      addboutique();
    }
    console.log(listesdeshoraires)
  }
  return (
    <div className="py-3  sm:py-3 lg:py-3">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl pt-7">
          Ajoutez une Boutique!
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
          Renseignez les elements suivant pour Creer votre boutique
        </p>
      </div>
      
      
      {alerte?
            (<div className="py-5 bg-transparent">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto">
                    <div className="border border-red-300 rounded-lg bg-red-50">
                        <div className="p-3">
                            <div className="flex items-start justify-between">
                                <svg className="flex-shrink-0 w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="ml-3">
                                    <p className="text-sm font-bold text-red-900">Erreur !</p>
                                    <p className="text-sm mt-0.5 font-medium text-red-900">Vérifiez que vous avez validez toutes les horaires.</p>
                                </div>

                                <div className="pl-3 ml-auto">
                                    <button type="button" className="inline-flex bg-red-50 rounded-lg -m1.5 p-1.5 text-red-500 hover:bg-red-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-500" 
                                    onClick={() => setAlerte(false)}>
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>):null
            }
      <form action="#" method="POST">
        <div className="grid grid-flow-row sm:grid-flow-col gap-3 justify-center w-full h-full px-4 py-5 sm:p-4">
          <div className="flex justify-center text-3xl border-2 border-transparent rounded-xl p-6 bg-transparent shadow-lg">
            <div className="bg-white py-4 sm:py-3 lg:py-5">
              <div>
                <p className="text-base font-bold text-gray-900"></p>
              </div>
              <div className="py-8 bg-white">
                <div className="mt-6 rounded-2xl ring-0 ">
                  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-xl mx-auto">
                      <div>
                        <label
                          htmlFor=""
                          className="block text-sm font-bold text-gray-900"
                        >
                          {" "}
                          Nom de la Boutique
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Nom de la boutique"
                            className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                            onChange={(e)=>{
                              state.nom = e.target.value;
                           }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-xl mx-auto">
                      <div>
                        <label
                          htmlFor=""
                          className="block text-sm font-bold text-gray-900"
                        >
                          Date Création{" "}
                        </label>
                        <div className="relative flex mt-2">
                          <input
                            type="datetime-local"
                            name=""
                            id=""
                            placeholder=""
                            className="datepicker block w-full px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                            onChange={(e)=>{
                              state.dateCreationBoutique = e.target.value;
                           }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-4 flex justify-center text-6xl border-2 border-transparent rounded-xl p-6 bg-transparent shadow-sm">
            <AddHoraire listHoraire={listHoraire}/>
          </div>
        </div>
      </form>
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center p-8">
      <button class="h-14 px-5 shadow-lg shadow-black text-red-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100"
       onClick={(e)=>{
        e.preventDefault();
        ajouterBoutique();
    }}
      >Ajoutez la boutique</button>
      </div>
    </div>
  );
};

export default AddBoutique;
