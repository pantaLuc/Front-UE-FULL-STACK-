import { React, useState ,useContext, useEffect} from "react";
import { MultiSelect } from "react-multi-select-component";
import {ContextBoutique} from "./ContextBoutique"
import LigneisteBoutique from "./LigneListeBoutique"


const AddHoraire = (props) => {
  const [firstRender ,setFirstRender]=useState(false)
  const [lisIdHoraire ,setLisIdHoraire]=useState([])
  const [idlundi ,setIdLundi]=useState();
  const [idmardi ,setIdMardi]=useState();
  const [idmercredo ,setIdMercredi]=useState();
  const [jours, setjours] = useState({
    lundi:'',
  mardi:'',
  mercredi:''
  });
  const {state ,allintervalle,data}=useContext(ContextBoutique);
  useEffect(() => {
    if (!firstRender) {
      allintervalle();
      setFirstRender(true)
    }
}, [firstRender ,allintervalle]);
let options = data.map(item => ({
  label: item.ouverture +"-"+ item.fermeture,
  value: item.id
}));
console.log(options)


  
  return (
    <div className="bg-white py-4 sm:py-16 lg:py-5">
      {console.log(jours)}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-base font-bold text-gray-900">
            Choix des Horaires
          </p>
        </div>

        <div className="mt-6 rounded-2xl ring-1 ring-gray-300">
          <table className="min-w-full lg:divide-y lg:divide-gray-200">
            <thead className="hidden lg:table-header-group">
              <tr>
                <td
                  width="50%"
                  className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-400"
                >
                  Jours de semaines
                </td>

                <td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-400">
                  estCongé
                </td>

                <td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-400">
                  Selection plage
                </td>

                <td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-400">
                  Ajouter plage horaire
                </td>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
                <LigneisteBoutique jour="LUNDI" idhorairevalidate={(e)=>setjours((prevState) => ({
                ...prevState,
                lundi: e,
              }))}/>
                <LigneisteBoutique jour="MARDI" idhorairevalidate={(e)=>setjours((prevState) => ({
                ...prevState,
                mardi: e,
              }))}/>
                <LigneisteBoutique jour="MERCREDI" idhorairevalidate={(e)=>setjours((prevState) => ({
                ...prevState,
                mercredi: e,
              }))}/>
               
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default AddHoraire;
