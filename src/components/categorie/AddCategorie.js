import React, { useContext, useState, useEffect } from "react";
import { ContextCategorie } from "./ContextCategorie";
import ReactPaginate from "react-paginate";
const AddCategorie = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModalupdate, setShowModalupdate] = React.useState(false);
  const [firstRender, setFirstRender] = useState(false);
  const [offset, setOffset] = useState(0);

  const {
    state,
    addcategorie,
    delcategorie,
    allcategorie,
    updatecategorie,
    data,
    pageCount,
    perPage,
  } = useContext(ContextCategorie);

  useEffect(() => {
    if (!firstRender) {
      allcategorie();
      setFirstRender(true);
    }
  }, [firstRender, offset, allcategorie]);
  const slice = data?.slice(offset, offset + perPage);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };
  const [searchField, setsearchField] = useState("");
  const filtreedcategory = slice.filter((category) =>
    category.nom.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="flex flex-wrap -mx-3 mb-6 bg-gray-100">
      <div className="flex items-center justify-center w-full h-full px-3 py-4 sm:p-4">
        <div class="bg-white py-12 sm:py-16 lg:py-20">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center sm:justify-between">
              <div>
                <p class="text-xl font-bold text-gray-900 m-3">Categories</p>
              </div>

              <div class="mt-4 flex items-center justify-end sm:mt-0 sm:justify-end sm:space-x-7">
                <button
                  type="button"
                  class="hidden items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:inline-flex"
                  onClick={() => setShowModal(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>{" "}
                  Ajouter Categorie
                </button>
              </div>
              <div class="mt-4 flex items-center justify-end sm:mt-0 sm:justify-end sm:space-x-3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Chercher"
                  className="hidden m-1 items-center rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:inline-flex"
                  onChange={(e) => setsearchField(e.target.value)}
                />
              </div>
            </div>

            <div class="mt-4 flex flex-col lg:mt-8">
              <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-3 lg:-mx-5">
                <div className="bg-white  rounded my-6">
                  <table className="min-w-max w-full table-auto">
                    <thead class="">
                      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">nom</th>

                        <th class="py-3 px-6 text-left">description</th>

                        <th class="py-3 px-6 text-center">Actions</th>
                      </tr>
                    </thead>

                    <tbody className="text-gray-600 text-sm font-light">
                      {filtreedcategory?.map((categorie) => {
                        return (
                          <tr class="border-b border-gray-200 hover:bg-gray-100">
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <span className="font-medium">
                                  {categorie.nom}
                                </span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                              <span class="">
                                {categorie.description.length > 45
                                  ? categorie.description.substring(0, 40) +
                                    ".."
                                  : categorie.description}
                              </span>
                            </td>
                            <td class="py-3 px-6 text-center ">
                              <div class="flex item-center justify-center">
                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                  <button
                                    type="button"
                                    class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                    onClick={(e) => {
                                      state.categorieupdate = categorie;
                                      setShowModalupdate(true);
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                      />
                                    </svg>
                                  </button>
                                </div>
                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                  <button
                                    type="button"
                                    class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                    onClick={(e) => {
                                      state.iddelete = categorie.id;
                                      e.preventDefault();
                                      delcategorie();
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <ReactPaginate
                    previousLabel={"<<"}
                    previousClassName="relative inline-flex items-center justify-center px-1 py-1 text-sm font-bold text-gray-400 bg-white border border-gray-200 w-9 rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10"
                    nextLabel={">>"}
                    nextLinkClassName="relative inline-flex items-center justify-center px-1 py-1 text-sm font-bold text-gray-400 bg-white border border-gray-200 w-9 rounded-r-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10"
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName="flex cursor-pointer list-none justify-center space-x-6 p-5"
                    disabledClassName="border-1 border-solid  px-1 py-1"
                    activeClassName="border-1 border-solid  px-1 py-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Ajoutez une Categorie
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
                    <p className="mt-2 text-sm font-medium text-gray-500">
                      Entrez une categorie explicite permettant de mieux
                      referencer vos produits
                    </p>

                    <form action="#" method="POST" className="mt-3">
                      <div className="space-y-2">
                        <div>
                          <label
                            for=""
                            className="text-sm font-bold text-gray-900"
                          >
                            {" "}
                            Nom Categorie
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Lait de coco"
                              className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                              onChange={(e) => {
                                state.nom = e.target.value;
                              }}
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            for=""
                            class="block text-sm font-bold text-gray-900"
                          >
                            {" "}
                            Description{" "}
                          </label>
                          <div class="mt-1">
                            <textarea
                              name=""
                              id=""
                              placeholder="Decrire un produit "
                              rows="3"
                              class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                              onChange={(e) => {
                                state.description = e.target.value;
                              }}
                            ></textarea>
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
                    onClick={(e) => {
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
      {showModalupdate ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modifier une Categorie
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
                    <form action="#" method="POST" className="mt-3">
                      <div className="space-y-2">
                        <div>
                          <label
                            for=""
                            className="text-sm font-bold text-gray-900"
                          >
                            {" "}
                            Nom Categorie
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              defaultValue={state.categorieupdate.nom}
                              name=""
                              id=""
                              placeholder="Lait de coco"
                              className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                              onChange={(e) => {
                                state.categorieupdate.nom = e.target.value;
                              }}
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            for=""
                            class="block text-sm font-bold text-gray-900"
                          >
                            {" "}
                            Description{" "}
                          </label>
                          <div class="mt-1">
                            <textarea
                              name=""
                              defaultValue={state.categorieupdate.description}
                              id=""
                              placeholder="Decrire un produit "
                              rows="3"
                              class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                              onChange={(e) => {
                                state.categorieupdate.description =
                                  e.target.value;
                              }}
                            ></textarea>
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
                    onClick={() => setShowModalupdate(false)}
                  >
                    Fermer
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      updatecategorie();
                      setShowModalupdate(false);
                    }}
                  >
                    Modifier
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
