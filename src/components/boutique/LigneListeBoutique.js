import { React, useState ,useContext, useEffect} from "react";
import { MultiSelect } from "react-multi-select-component";
import {ContextBoutique} from "./ContextBoutique"


const LigneisteBoutique = (props) => {
    const [showaddintervalle ,setShowaddintervalle]=useState(false)

    const [selected, setSelected] = useState([]);
    const [validate, setValidate] = useState(false);
    const [disableconge, setDisableconge] = useState(false);
    const [conge, setConge] = useState(false);
    const [disable, setDisable] = useState(true);
    const {state ,allintervalle,addhoraire,data,idhoraire,addintervalle}=useContext(ContextBoutique);
    let options = data.map(item => ({
        label: item.ouverture +"-"+ item.fermeture,
        value: item.id
      }));
      useEffect(() => {
        {idhoraire&&props.idhorairevalidate(idhoraire)}
    
    }, [idhoraire]);
    
      const validateLigne=async(e)=>{
        e.preventDefault();
        setDisable(true);
        setDisableconge(true);
        state.joursemaine=props.jour;
        state.estEnCongé=conge;
        state.intervalleHeure = selected.map(item => ({id:item.value}));
        await addhoraire();
        setValidate(true);
        console.log(state.intervalleHeure)
      }

  return (
    <>
    <tr className={validate?"line-through opacity-50":""}>
        
        <td  className="whitespace-nowrap px-6 py-4 text-sm font-bold text-gray-900">
                        {props.jour}
                        <MultiSelect 
                        className="mt-1 lg:hidden"
                          options={options}
                          value={selected}
                          onChange={setSelected}
                          labelledBy="Select"
                          disabled={disable}
                        />
                      </td>

                      <td class="whitespace-nowrap px-3 py-2 text-right text-sm font-bold text-gray-900 lg:text-left">
                      <div>
                          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          onChange={(e) => ((e.target.value==="Oui"?(setDisable(true)&&setConge(true)):(setDisable(false)&&setConge(false))))}
                          disabled={disableconge}>
                          <option value="Oui">Oui</option>
                          <option value="No">Non</option>
                          </select>
                      </div>
                    <div class="mt-1 flex items-center justify-end space-x-1 font-medium lg:hidden">
                    <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                  </button>
                    </div>
                  </td>

                      <td className="hidden whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900 lg:table-cell">
                        <MultiSelect
                          options={options}
                          value={selected}
                          onChange={setSelected}
                          labelledBy="Select"
                          disabled={disable}
                        />
                      </td>

                  <td class="hidden whitespace-nowrap px-8 py-3 text-sm font-medium text-gray-900 lg:table-cell">
                    <div class=" items-center space-x-1">
                    <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
                   disabled={validate} onClick={(e)=>{
                    e.preventDefault();setShowaddintervalle(true)}}>
                          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                      </button>
                    </div>
                  </td>
                  <td class="hidden whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900 lg:table-cell">
                    <div class="inline-flex items-center space-x-1">
                    <button class="items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
                    onClick={(e)=>{validateLigne(e)}}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                      </button>
                    </div>
                  </td>
              </tr>
              {showaddintervalle ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Ajoutez un intervalle
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowaddintervalle(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                    <div className="w-full max-w-md bg-white shadow-lg rounded-xl">
                    <div className="px-3 py-4 sm:p-4">

                        <form action="#" method="POST" className="mt-3">
                            <div className="space-y-2">
                                <div>
                                    <label for="" className="text-sm font-bold text-gray-900"> Ouverture</label>
                                    <div className="mt-1">
                                        <input type="time" name="" id="" placeholder="Lait de coco" className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                        onChange={(e)=>{
                                          state.ouverture = e.target.value;
                                       }}/>
                                    </div>
                                </div>
                                <div>
                                    <label for="" className="text-sm font-bold text-gray-900"> Fermeture</label>
                                    <div className="mt-1">
                                        <input type="time" name="" id="" placeholder="Lait de coco" className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                        onChange={(e)=>{
                                          state.fermeture = e.target.value;
                                       }}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="reset"
                    onClick={() => setShowaddintervalle(false)}
                  >
                    Fermer
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={(e)=>{
                      e.preventDefault();
                      addintervalle();
                      allintervalle();
                      setShowaddintervalle(false);
                  }}
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );}
  export default LigneisteBoutique;
