import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { ContextBoutique } from "./ContextBoutique";

const ListBoutique = () => {
  const { allboutique, datalisteboutique,itemsPerPage,totalPages,getFormattedDate } =
    useContext(ContextBoutique);
  const [firstRender, setFirstRender] = useState(false);
 
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!firstRender) {
      allboutique();
      setFirstRender(true);
    }
  }, [firstRender, allboutique]);
  const handlePageChange = page => {
    setCurrentPage(page);
  };
  let  paginatedBoutique;
  if (currentPage === 1) {
    paginatedBoutique = datalisteboutique.slice(0, itemsPerPage);
  } else {
    paginatedBoutique= datalisteboutique.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }
  
 
  const [searchField, setsearchField] = useState("");
  const filtreedBoutique = paginatedBoutique.filter((boutique) =>
    boutique.nom.toLowerCase().includes(searchField.toLowerCase())
  );

  const currentDay = new Date()
    .toLocaleString("fr-FR", { weekday: "long" })
    .toLowerCase();
    const storeStatus = horaireList => {
      // Use the Date object to get the current day of the week as a string in French
      const currentDay = new Date().toLocaleString('fr-FR', { weekday: 'long' }).toLowerCase();
      // Find the element in the list that corresponds to the current day of the week
      const horaireForDay = horaireList.find(horaire => horaire.joursemaine.toLowerCase() === currentDay);
      // If there is no element for the current day of the week, return a message indicating that the store is closed
      if (!horaireForDay) {
        return `Le magasin est fermé le ${currentDay}.`;
      }
      // If the store is closed on the current day, return a message indicating that the store is closed
      if (horaireForDay.estEnCongé) {
        return `Le magasin est fermé le ${currentDay}.`;
      }
      // Concatenate the open and close times for each interval into a single string
      const times = horaireForDay.intervalleHeure.map(interval => {
        const openTime = interval.ouverture.substring(0, 5);
        const closeTime = interval.fermeture.substring(0, 5);
        return `${openTime} à ${closeTime}`;
      }).join(', ');
      if (!times){
        return `Le magasin est fermé ce ${currentDay}.`;
      }
      // Return a message indicating the open and close times for the day
      return `Ouvert de ${times} ce ${currentDay}.`;
    }
  

  return (
    <section className="py-10 bg-white sm:py-14 lg:py-14">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Selectionez une Boutique pour debuter
          </h2>
        </div>
        <div class="mt-4 flex items-center justify-center sm:mt-0 sm:justify-end sm:space-x-7 ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Chercher"
            className=" m-1 items-center rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:inline-flex"
            onChange={(e) => setsearchField(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 mt-8 sm:mt-8 sm:grid-cols-2 xl:grid-cols-3 sm:gap-8 xl:gap-12">
          {filtreedBoutique.map((boutique) => {
            return (
              <div className="relative overflow-hidden bg-white shadow-xl rounded-xl  shadow-gray-400/10  transition-all duration-200">
                <div className="p-2 m-1">
                  <div className="sm:flex">
                    <div className="shrink-1">
                      <img
                        className="object-cover h-auto mx-auto rounded-xl w-52 sm:mx-0"
                        src={
                          boutique.image
                            ? boutique.image
                            : "https://img.freepik.com/free-vector/shop-with-sign-we-are-open_23-2148547718.jpg"
                        }
                        alt=""
                      ></img>
                      <div className="mt-4">
                        <Link
                          className="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-bold tracking-widest text-gray-500  transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                          role="button"
                        >
                          Voir la boutique
                        </Link>
                      </div>
                    </div>

                    <div className="mt-8 sm:ml-6 sm:mt-0">
                      <p className="text-xs font-bold text-gray-900">
                        {boutique.nom}
                      </p>

                      <ul className="mt-5 space-y-4">
                        <li className="flex items-center justify-between">
                          <p className="text-xs  tracking-wide text-gray-500 ">
                            Crée le:
                          </p>
                          <div className="flex items-start justify-center">
                            <p className="text-xs  text-gray-900">
                              {getFormattedDate(boutique.dateCreationBoutique)}
                            </p>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <p className="text-xs  tracking-wide text-gray-500 ">
                          propriétaire:
                          </p>
                          <div className="flex items-start justify-center">
                            <p className="text-xs  text-gray-900">
                             {boutique.utilisateur.firstName}
                            </p>
                          </div>
                        </li>
                        
                        <li className="flex items-start justify-between">
                          <div className="flex items-start justify-center">
                            <p className="text-xs  text-gray-900">
                              {storeStatus(boutique.horaireList)}
                            </p>
                          </div>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination
             currentPage={currentPage}
             totalPages={totalPages}
             handlePageChange={handlePageChange}
            />
      </div>
    </section>
  );
};

export default ListBoutique;
