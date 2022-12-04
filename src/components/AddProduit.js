import React from 'react';

const AddProduit = () => {
    return (
        <div className=" bg-gray-100">
        <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl">
                <div className="px-3 py-4 sm:p-4">
                    <p className="text-xl font-bold text-gray-900">Ajoutez un produit</p>
                    <p className="mt-2 text-sm font-medium text-gray-500">remplissz le formulaire pour Ajouter un produit</p>

                    <form action="#" method="POST" className="mt-3">
                        <div className="space-y-2">
                            <div>
                                <label for="" className="text-sm font-bold text-gray-900"> Nom  produit</label>
                                <div className="mt-1">
                                    <input type="text" name="" id="" placeholder="Lait de coco" value="" className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                </div>
                            </div>
                            <div>
                                <label for="" className="text-sm font-bold text-gray-900"> Url image</label>
                                <div className="mt-1">
                                    <input type="text" name="" id="" placeholder="https://images.unsplash.com/photo-146506078.jpg" value="" className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                </div>
                            </div>
                            <div>
                                <label for="" class="block text-sm font-bold text-gray-900"> Prix </label>
                                <div class="relative flex mt-1">
                                    <div class="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">Euro</div>

                                    <input type="number" name="" id="" placeholder="$ 0.00" value="" class="flex-1 block w-full min-w-0 px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                </div>
                            </div>
                            <div>
                                <label for="" class="block text-sm font-bold text-gray-900"> Quantité </label>
                                <div class="relative flex mt-1">
                                    <div class="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">nombre</div>

                                    <input type="number" name="" id="" placeholder="$ 0.00" value="" class="flex-1 block w-full min-w-0 px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                </div>
                            </div>
                            <div>
                              <label for="" class="block text-sm font-bold text-gray-900"> Description </label>
                                <div class="mt-1">
                                    <textarea name="" id="" placeholder="Decrire un produit " value="" rows="3" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"></textarea>
                                </div>
                            </div>
                            <div>
                                <label for="" className="text-sm font-bold text-gray-900"> Categorie </label>
                                <div className="mt-1">
                                    <select className="block w-full py-1 pl-3 pr-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm form-multiselect"  multiple>
                                        <option>Maroquirie Ichraq</option>
                                        <option>Zara</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                                <label for="" className="text-sm font-bold text-gray-900"> Boutique </label>
                                <div className="mt-1">
                                    <select className="block w-full py-3 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                        <option>Maroquirie Ichraq</option>
                                        <option>Zara</option>
                                    </select>
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

export default AddProduit;