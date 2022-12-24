import { React, useState ,useContext, useEffect} from "react";
import { MultiSelect } from "react-multi-select-component";
import {ContextBoutique} from "./ContextBoutique"


const LigneisteBoutique = (props) => {
    
    const [selected, setSelected] = useState([]);
    const [validate, setValidate] = useState(false);
    const [disableconge, setDisableconge] = useState(false);
    const [conge, setConge] = useState(false);
    const [disable, setDisable] = useState(true);
    const {state ,allintervalle,addhoraire,data,idhoraire}=useContext(ContextBoutique);
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
        
        <td width="50%" className="whitespace-nowrap px-6 py-4 text-sm font-bold text-gray-900">
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

                      <td class="whitespace-nowrap px-6 py-4 text-right text-sm font-bold text-gray-900 lg:text-left">
                      <div>
                          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          onChange={(e) => ((e.target.value=="Oui"?(setDisable(true)&&setConge(true)):(setDisable(false)&&setConge(false))))}
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

                      <td className="hidden whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell">
                        <MultiSelect
                          options={options}
                          value={selected}
                          onChange={setSelected}
                          labelledBy="Select"
                          disabled={disable}
                        />
                      </td>

                  <td class="hidden whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell">
                    <div class="inline-flex items-center space-x-1">
                    <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
                   disabled={validate} onClick={(e)=>{
                    e.preventDefault();}}>
                          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                      </button>
                    </div>
                  </td>
                  <td class="hidden whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell">
                    <div class="inline-flex items-center space-x-1">
                    <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
                    onClick={(e)=>{validateLigne(e)}}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                      </button>
                    </div>
                  </td>
              </tr>
    </>
  );}
  export default LigneisteBoutique;
