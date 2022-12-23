import { React, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
const options = [
  { label: "11-12h", value: 1 },
  { label: "13-14", value: 2 },
  { label: "15-16H", value: 3,},
];
const AddHoraire = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div className="bg-white py-4 sm:py-16 lg:py-5">
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
                  Selection plage
                </td>

                <td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-400">
                  estCongé
                </td>

                <td className="whitespace-normal px-6 py-4 text-sm font-medium text-gray-400">
                  Action
                </td>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td
                  width="50%"
                  className="whitespace-nowrap px-6 py-4 text-sm font-bold text-gray-900"
                >
                  Lundi
                  <MultiSelect 
                  className="mt-1 lg:hidden"
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                  />
                </td>

                <td className="hidden whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell">
                  <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                  />
                </td>

               

            <td class="whitespace-nowrap px-6 py-4 text-right text-sm font-bold text-gray-900 lg:text-left">
                <div>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
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

            <td class="hidden whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell">
              <div class="inline-flex items-center space-x-1">
              <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                </button>
              </div>
            </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default AddHoraire;
