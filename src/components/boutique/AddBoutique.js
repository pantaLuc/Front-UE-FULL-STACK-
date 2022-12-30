import React, { useState, useContext, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Context } from "../../Context";
import AddHoraire from "./AddHoraire";
import { ContextBoutique } from "./ContextBoutique";
import jwt_decode from "jwt-decode";

const AddBoutique = () => {
  const [listesdeshoraires, setListesdeshoraires] = useState([]);
  const [alerte, setAlerte] = useState(false);
  const {
    state,
    datalisteboutiquebyuser,
    addboutique,
    allboutiquebyuser,
    perPage,
  } = useContext(ContextBoutique);
  const [firstRender, setFirstRender] = useState(false);
  const [offset, setOffset] = useState(0);
  const { getCookie, searchByUsername, userId } = useContext(Context);
  const data = getCookie();
  const user = data ? jwt_decode(data) : "";

  useEffect(() => {
    if (!firstRender) {
      searchByUsername(user.sub);
      allboutiquebyuser(user.sub);
      setFirstRender(true);
    }
  }, [firstRender, offset, allboutiquebyuser, user, searchByUsername]);

  const slice = datalisteboutiquebyuser?.slice(offset, offset + perPage);

  console.log("la liste", slice);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };
  const [searchField, setsearchField] = useState("");
  const filtreedBoutique = slice.filter((boutique) =>
    boutique.nom.toLowerCase().includes(searchField.toLowerCase())
  );
  console.log("filter", filtreedBoutique);
  //la liste des horaires
  const listHoraire = (e) => {
    setListesdeshoraires(e);
  };
  const ajouterBoutique = (e) => {
    if (listesdeshoraires.length !== 7) {
      alert("Vérifiez que vous avez validez toutes les horaires.");
      setAlerte(true);
    } else {
      state.horaireList = listesdeshoraires;
      state.utilisateur = { id: userId.id };
      console.log(state.dateCreationBoutique);
      console.log(new Date(state.dateCreationBoutique));
      addboutique();
    }
    console.log(listesdeshoraires);
  };
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6 bg-gray-100">
        <div className="flex items-center justify-center w-full h-full px-3 py-4 sm:p-4">
          <div class="bg-white py-12 sm:py-16 lg:py-20">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="sm:flex sm:items-center sm:justify-between">
                <div>
                  <p class="text-xl font-bold text-gray-900 m-3">Boutiques</p>
                </div>
                <div class="mt-4 flex items-center justify-start sm:mt-0 sm:justify-end sm:space-x-7">
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
                    Ajouter Boutique
                  </button>
                </div>
                <div class="mt-4 flex items-center justify-start sm:mt-0 sm:justify-end sm:space-x-7">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Chercher"
                    className="hidden m-1 items-center rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:inline-flex"
                  />
                </div>
              </div>
              <div class="mt-4 flex flex-col lg:mt-8">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-3 lg:-mx-5">
                  <div className="bg-white  rounded my-6">
                    <table className="min-w-max w-full table-auto">
                      <thead class="">
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                          <th className="py-3 px-6 text-left">Nom</th>

                          <th class="py-3 px-6 text-left">Date de création</th>

                          <th class="py-3 px-6 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 text-sm font-light">
                        {filtreedBoutique?.map((boutiq) => {
                          return (
                            <tr class="border-b border-gray-200 hover:bg-gray-100">
                              <td class="py-3 px-6 text-left whitespace-nowrap">
                                <div class="flex items-center">
                                  <div class="mr-2">
                                    <img
                                      src={
                                        boutiq.image
                                          ? boutiq.img
                                          : "https://img.freepik.com/vecteurs-libre/achetez-signe-que-nous-sommes-ouverts_52683-38687.jpg"
                                      }
                                      className="object-contain"
                                      width="24"
                                      height="24"
                                      alt=""
                                    />
                                  </div>
                                  <span class="font-medium">{boutiq.nom}</span>
                                </div>
                              </td>
                              <td class="py-3 px-6 text-center">
                                <span class="">
                                  {boutiq.dateCreationBoutique}
                                </span>
                              </td>
                              <td class="py-3 px-6 text-center">
                                <div class="flex item-center justify-center">
                                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                    <button
                                      type="button"
                                      class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                      onClick={(e) => {
                                        //state.categorieupdate=categorie;
                                        //setShowModalupdate(true)
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
                                        //state.iddelete=categorie.id
                                        e.preventDefault();
                                        // delcategorie();
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
                    <ReactPaginate />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-4 mx-auto max-w-8xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Ajout Boutique</h3>
                </div>
                {/*body*/}
                <div className="relative p-2 flex-auto">
                  <div className="py-2 sm:py-3 lg:py-3">
                    {alerte ? (
                      <div className="py-3 bg-transparent">
                        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-2xl">
                          <div className="max-w-1xl mx-auto">
                            <div className="border border-red-300 rounded-lg bg-red-50">
                              <div className="p-3">
                                <div className="flex items-start justify-between">
                                  <svg
                                    className="flex-shrink-0 w-5 h-5 text-red-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <div className="ml-3">
                                    <p className="text-sm font-bold text-red-900">
                                      Erreur !
                                    </p>
                                    <p className="text-sm mt-0.5 font-medium text-red-900">
                                      Vérifiez que vous avez validez toutes les
                                      horaires.
                                    </p>
                                  </div>

                                  <div className="pl-3 ml-auto">
                                    <button
                                      type="button"
                                      className="inline-flex bg-red-50 rounded-lg -m1.5 p-1.5 text-red-500 hover:bg-red-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-500"
                                      onClick={() => setAlerte(false)}
                                    >
                                      <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M6 18L18 6M6 6l12 12"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-full">
                      <form>
                        <div class="md:flex ">
                          <div class="m-3 md:shrink-0">
                            <div className="mt-3 rounded-2xl ring-0 ">
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
                                        placeholder="Nom de la boutique"
                                        className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                        onChange={(e) => {
                                          state.nom = e.target.value;
                                        }}
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
                                        onChange={(e) => {
                                          state.image = e.target.value;
                                        }}
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
                                        type="datetime-local"
                                        name=""
                                        id=""
                                        placeholder=""
                                        className="datepicker block w-full px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                        onChange={(e) => {
                                          state.dateCreationBoutique =
                                            e.target.value;
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="max-w-full">
                            <AddHoraire listHoraire={listHoraire} />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
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
                      ajouterBoutique();
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
    </>
  );
};

export default AddBoutique;
