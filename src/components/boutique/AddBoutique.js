import React from "react";
import AddHoraire from "./AddHoraire";

const AddBoutique = () => {
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
                            placeholder=""
                            className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
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
                          {" "}
                          Image Boutique{" "}
                        </label>
                        <div className="relative flex mt-2">
                          <div className="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">
                            https://
                          </div>

                          <input
                            type="url"
                            name=""
                            id=""
                            placeholder="example.com"
                            className="flex-1 border block w-full min-w-0 px-4 py-3 placeholder-gray-500 border-gray-300 rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
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
                            type="date"
                            name=""
                            id=""
                            placeholder=""
                            className="datepicker block w-full px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
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
            <AddHoraire />
          </div>
        </div>
      </form>
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center p-8">
      <button class="h-14 px-5 shadow-lg shadow-black text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">Ajoutez la boutique</button>
      </div>
    </div>
  );
};

export default AddBoutique;
