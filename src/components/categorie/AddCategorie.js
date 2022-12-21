import React , { useContext , useState , useEffect} from 'react';
import {ContextCategorie} from "./ContextCategorie"

const AddCategorie = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [firstRender ,setFirstRender]=useState(false)
    const {state ,addcategorie,allcategorie,data}=useContext(ContextCategorie);
    useEffect(() => {
        if (!firstRender) {
            allcategorie();
            setFirstRender(true)
        }
    }, [firstRender])
   console.log(state.listcategorie)
    return (
        
        <div className="flex flex-wrap -mx-3 mb-6 bg-gray-100">
        <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-4">
        <div class="bg-white py-12 sm:py-16 lg:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center sm:justify-between">
            <div>
                <p class="text-xl font-bold text-gray-900">Categories</p>
                <p class="mt-1 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>
            </div>

            <div class="mt-4 flex items-center justify-start sm:mt-0 sm:justify-end sm:space-x-7">
                <button type="button" class="hidden items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:inline-flex" 
                    onClick={() => setShowModal(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> Ajouter Categorie
                </button>

                <div class="inline-flex items-center justify-end">
                <label for="sort" class="text-base font-medium text-gray-900 sm:text-sm"> trier: </label>
                <select id="sort" name="sort" class="block w-full rounded-lg border-none border-gray-300 py-2 pl-1 pr-10 text-base focus:border-indigo-600 focus:outline-none focus:ring-indigo-600 sm:text-sm">
                    <option>plus</option>
                </select>
                </div>
            </div>
            </div>

            <div class="mt-4 flex flex-col lg:mt-8">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <table class="min-w-full lg:divide-y lg:divide-gray-200">
                    <thead class="hidden lg:table-header-group">
                    <tr>
                        <th class="py-3.5 px-4 text-left text-xs font-medium uppercase tracking-widest text-gray-500">nom</th>

                        <th class="py-3.5 px-4 text-left text-xs font-medium uppercase tracking-widest text-gray-500">categorie</th>

                        <th class="py-3.5 px-4 text-left text-xs font-medium uppercase tracking-widest text-gray-500">nombre produits</th>

                        <th class="relative py-3.5 pl-4 pr-4 md:pr-0">
                        <span class="sr-only"> Actions </span>
                        </th>
                    </tr>
                    </thead>

                    <tbody>

                    {data?.map(categorie=>{

                    return <tr class="bg-gray-50" >
                        <td class="whitespace-nowrap px-4 py-4 align-top text-sm font-bold text-gray-900 lg:align-middle">
                        <div class="flex items-center">{categorie.nom}</div>
                        <div class="mt-1 space-y-2 pl-11 font-medium lg:hidden">
                            <div class="flex items-center">0</div>

                            <div class="flex items-center space-x-4 pt-3">
                            <button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">modifier</button>

                            <button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <svg class="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                supprimer
                            </button>
                            </div>
                        </div>
                        </td>

                        <td class="hidden whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell">
                        <div class="flex items-center">jhvhvhv</div>
                        </td>

                        <td class="hidden whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell">
                        <div class="flex items-center">0</div>
                        </td>

                        <td class="hidden whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell">
                        <div class="flex items-center">November 9, 2021</div>
                        </td>

                        <td class="hidden whitespace-nowrap px-4 py-4 lg:table-cell">
                        <div class="flex items-center space-x-4">
                            <button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Edit Details</button>

                            <button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <svg class="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Remove
                            </button>
                        </div>
                        </td>
                    </tr>
                    
                  })}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
      {showModal ? (
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
                    Ajoutez une  Categorie
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                    <div className="w-full max-w-md bg-white shadow-lg rounded-xl">
                    <div className="px-3 py-4 sm:p-4">
                        <p className="mt-2 text-sm font-medium text-gray-500">Entrez une categorie explicite permettant de mieux referencer vos produits</p>

                        <form action="#" method="POST" className="mt-3">
                            <div className="space-y-2">
                                <div>
                                    <label for="" className="text-sm font-bold text-gray-900"> Nom  Categorie</label>
                                    <div className="mt-1">
                                        <input type="text" name="" id="" placeholder="Lait de coco" className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                        onChange={(e)=>{
                                            state.nom = e.target.value;
                                         }}
                                        />
                                    </div>
                                </div>
                            
                                <div>
                                <label for="" class="block text-sm font-bold text-gray-900"> Description </label>
                                    <div class="mt-1">
                                        <textarea name="" id="" placeholder="Decrire un produit " rows="3" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                        onChange={(e)=>{
                                            state.description = e.target.value;
                                         }}></textarea>
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
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={(e)=>{
                        e.preventDefault();
                        addcategorie();
                        setShowModal(false);
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
    </div>
    );
};
export default AddCategorie;