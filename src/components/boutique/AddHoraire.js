import { React, useState ,useContext, useEffect} from "react";
import {ContextBoutique} from "./ContextBoutique"
import LigneListeBoutique from "./LigneListeBoutique"


const AddHoraire = (props) => {
  const [firstRender ,setFirstRender]=useState(false)
  const [lisIdHoraire ,setLisIdHoraire]=useState([])
  const {state ,allintervalle,data}=useContext(ContextBoutique);
  useEffect(() => {
    if (!firstRender) {
      allintervalle();
      setFirstRender(true)
    }
    const unique = lisIdHoraire.filter((obj, index) => {
      return index === lisIdHoraire.findIndex(o => obj.id === o.id );
    });
    (unique.length===7 && props.listHoraire(unique))
    console.log(unique.length);

}, [firstRender ,allintervalle,data]);
let options = data.map(item => ({
  label: item.ouverture +"-"+ item.fermeture,
  value: item.id
}));
console.log(options)

  return (
    <div className="bg-white py-4 sm:py-4 lg:py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-base font-bold text-gray-900">
            Choix des Horaires
          </p>
        </div>

        <div className="mt-1 rounded-2xl ring-1 ring-gray-300">
          <table className="min-w-full lg:divide-y lg:divide-gray-200 mb-6 mt-3">
            <thead className="hidden lg:table-header-group">
              <tr>
                <td
                  className="whitespace-normal px-4 py-2 text-sm font-medium text-gray-400"
                >
                  Jours de semaines
                </td>

                <td className="whitespace-normal px-4 py-2 text-sm font-medium text-gray-400">
                  est en Congé
                </td>

                <td className="whitespace-normal px-4 py-4 text-sm font-medium text-gray-400">
                  Selection plage
                </td>

                <td className="whitespace-normal px-1 py-1 text-sm font-medium text-gray-400">
                  Ajouter plage horaire
                </td>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
                <LigneListeBoutique jour="LUNDI" idhorairevalidate={
                   (e)=>lisIdHoraire.push({id:e}) 
                }/>
                <LigneListeBoutique jour="MARDI" idhorairevalidate={
                   (e)=>lisIdHoraire.push({id:e}) 
                }/>
                <LigneListeBoutique jour="MERCREDI" idhorairevalidate={
                   (e)=>lisIdHoraire.push({id:e}) 
                }/>
                <LigneListeBoutique jour="JEUDI" idhorairevalidate={
                   (e)=>lisIdHoraire.push({id:e}) 
                }/>
                <LigneListeBoutique jour="VENDREDI" idhorairevalidate={
                   (e)=>lisIdHoraire.push({id:e}) 
                }/>
                <LigneListeBoutique jour="SAMEDI" idhorairevalidate={
                   (e)=>lisIdHoraire.push({id:e}) 
                }/>
                <LigneListeBoutique  jour="DIMANCHE" idhorairevalidate={
                   (e)=>lisIdHoraire.push({id:e}) 
                }/>
            </tbody>
          </table>
        </div>
      </div>
    
    </div>
  );
};

export default AddHoraire;
