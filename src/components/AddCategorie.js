import React from 'react';

const AddCategorie = () => {
    return (
        <div className=" bg-gray-100">
        <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl">
                <div className="px-3 py-4 sm:p-4">
                    <p className="text-xl font-bold text-gray-900">Ajoutez une  Categorie</p>
                    <p className="mt-2 text-sm font-medium text-gray-500">Entrez une categorie explicite permettant de mieux referencer vos produits</p>

                    <form action="#" method="POST" className="mt-3">
                        <div className="space-y-2">
                            <div>
                                <label for="" className="text-sm font-bold text-gray-900"> Nom  Categorie</label>
                                <div className="mt-1">
                                    <input type="text" name="" id="" placeholder="Lait de coco" value="" className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                </div>
                            </div>
                           
                           
                            <div>
                              <label for="" class="block text-sm font-bold text-gray-900"> Description </label>
                                <div class="mt-1">
                                    <textarea name="" id="" placeholder="Decrire un produit " value="" rows="3" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"></textarea>
                                </div>
                            </div>
                          
                            
                            
                        </div>

                        <div className="flex items-center justify-end mt-5 space-x-4">
                            <button
                                type="reset"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
                            >
                                Supprimer
                            </button>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                            >
                                Ajouter 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AddCategorie;