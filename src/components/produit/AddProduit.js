import React ,{ useState ,useContext ,useEffect} from 'react';
import {ContextProduit} from "./ContextProduit"
import {ContextCategorie} from '../categorie/ContextCategorie'
import {ContextBoutique} from '../boutique/ContextBoutique'
import { MultiSelect } from "react-multi-select-component";
import jwt_decode from "jwt-decode";
import Select from 'react-select';


const AddProduit = () => {
    const datauser =JSON.parse(localStorage.getItem("data"));
    const user= datauser?jwt_decode(datauser):"";
    const [selectedCat, setSelectedCat] = useState([]);
    const [selectedBoutique, setSelectedBoutique] = useState("");
    const [showModal, setShowModal] = React.useState(false);
    const {state ,addproduit,allproduit,produitlist}=useContext(ContextProduit);
    const {allcategorie,data}=useContext(ContextCategorie);
    const {allboutique,datalisteboutique,datalisteboutiquebyuser,allboutiquebyuser}=useContext(ContextBoutique);
    const [firstRender ,setFirstRender]=useState(false);
    useEffect(() => {
      
      if (!firstRender) {
          allcategorie();
          allboutique();
          allboutiquebyuser(user.sub);
          allproduit();
          setFirstRender(true) 
      }
      console.log(produitlist)
    }, [firstRender ,allcategorie,allproduit])
    let optionscat = data.map(categorie => ({
      label: categorie.nom,
      value: categorie.id
    }));
    let optionsbout = datalisteboutiquebyuser.map(boutique => ({
      label: boutique.nom,
      value: boutique.id
    }));
    const ajouterproduit=async(e)=>{
      e.preventDefault();
      state.boutique={id:selectedBoutique.value}
      state.categorieList = selectedCat.map(categorie => ({id:categorie.value}));
      await addproduit();
      setShowModal(false);
    }
    return (
        <div className=" bg-gray-100">
       <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-4">
        <div class="bg-white py-12 sm:py-16 lg:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center sm:justify-between">
            <div>
                <p class="text-xl font-bold text-gray-900">Produits</p>
            </div>

            <div class="mt-4 flex items-center justify-start sm:mt-0 sm:justify-end sm:space-x-7">
                <button type="button" class="hidden items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:inline-flex" 
                    onClick={() => setShowModal(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> Ajouter Produit
                </button>

            </div>
            </div>

            <div class="mt-4 flex flex-col lg:mt-8">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <table class="min-w-full lg:divide-y lg:divide-gray-200">
                    <thead class="hidden lg:table-header-group">
                    <tr>
                        <th class="py-3.5 px-4 text-left text-xs font-medium uppercase tracking-widest text-gray-500">nom</th>

                        <th class="py-3.5 px-4 text-left text-xs font-medium uppercase tracking-widest text-gray-500">description</th>

                        <th class="py-3.5 px-4 text-left text-xs font-medium uppercase tracking-widest text-gray-500">catégorie (s) </th>

                        <th class="py-3.5 px-4 text-left text-xs font-medium uppercase tracking-widest text-gray-500">prix</th>

                        <th class="py-3.5 px-4 text-left text-xs font-medium uppercase tracking-widest text-gray-500">Boutique</th>

                        <th class="py-3.5 px-4 text-left text-xs font-medium uppercase tracking-widest text-gray-500">Qte</th>

                        <th class="relative py-3.5 pl-4 pr-4 md:pr-0">
                        <span class="sr-only"> Actions </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                    {produitlist.map(produit => (
                      <tr class="border-b border-gray-200 hover:bg-gray-100" >
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center"><span className="font-medium">{produit.nom}</span></div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center"><span className="font-medium">{produit.description}</span></div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center">
                          {produit.categorieList?produit.categorieList.map(categorie => (
                            <span className="font-medium">*{categorie.nom}</span>
                            
                          )):""}
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center"><span className="font-medium">{produit.prix}</span></div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center">
                            <span className="font-medium">{produit.boutique.nom}</span>
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center"><span className="font-medium">{produit.quantité}</span></div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center"><span className="font-medium">xxx</span></div>
                        </td>
                        </tr>))}
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
                  <h3 className="text-3xl font-semibold">Ajoutez un produit</h3>
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
                    <p className="mt-2 text-sm font-medium text-gray-500">remplissz le formulaire pour Ajouter un produit</p>

                    <form action="#" method="POST" className="mt-3">
                        <div className="space-y-2">
                            <div>
                                <label for="" className="text-sm font-bold text-gray-900"> Nom  produit</label>
                                <div className="mt-1">
                                    <input type="text" name="" id="" placeholder="Lait de coco"  className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                    onChange={(e)=>{
                                        state.nom = e.target.value;
                                     }} />
                                </div>
                            </div>
                            <div>
                                <label for="" className="text-sm font-bold text-gray-900"> Url image</label>
                                <div className="mt-1">
                                    <input type="text" name="" id="" placeholder="https://images.unsplash.com/photo-146506078.jpg"  className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" 
                                    onChange={(e)=>{
                                        state.imageUrl = e.target.value;
                                     }}/>
                                </div>
                            </div>
                            <div className='flex flex-wrap -mx-2 mb-2'>
                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label for="" class="block text-sm font-bold text-gray-900"> Prix </label>
                                    <div class="relative flex mt-1">
                                        <div class="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">Euro</div>

                                        <input type="number" name="" id="" placeholder="$ 0.00"  class="flex-1 block w-full min-w-0 px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" 
                                        onChange={(e)=>{
                                            state.prix = e.target.value;
                                         }}
                                        />
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                <label for="" class="block text-sm font-bold text-gray-900"> Quantité </label>
                                <div class="relative flex mt-1">
                                    <div class="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">nombre</div>

                                    <input type="number" name="" id="" placeholder="$ 0.00"  class="flex-1 block w-full min-w-0 px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" 
                                    onChange={(e)=>{
                                        state.quantité = e.target.value;
                                     }}/>
                                </div>
                            </div>
                            </div>
                            
                            
                            <div>
                              <label for="" class="block text-sm font-bold text-gray-900"> Description </label>
                                <div class="mt-1">
                                    <textarea name="" id="" placeholder="Decrire un produit "  rows="3" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                    onChange={(e)=>{
                                        state.description = e.target.value;
                                     }}></textarea>
                                </div>
                            </div>
                            <div>
                                <label for="" className="text-sm font-bold text-gray-900"> Categorie </label>
                                <div className="mt-1">
                                      <MultiSelect 
                                        options={optionscat}
                                        value={selectedCat}
                                        onChange={setSelectedCat}
                                        labelledBy="Select"
                                      />
                                </div>
                            </div>
                            
                            <div>
                                <label for="" className="text-sm font-bold text-gray-900"> Boutique </label>
                                <div className="mt-1">
                                <Select 
                                        options={optionsbout}
                                        value={selectedBoutique}
                                        onChange={setSelectedBoutique}
                                        labelledBy="Select"
                                      />
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
                    onClick={(e)=>{ajouterproduit(e)}}>
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
export default AddProduit;