import React ,{ useContext, useState , useEffect} from 'react';
import {ContextCategorie} from "./ContextCategorie"

import { Link } from 'react-router-dom';
import Pagination from '../Pagination';

const ListCategorie = () => {
    const [firstRender ,setFirstRender]=useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const {allcategorie,data, itemsPerPage,totalPages}=useContext(ContextCategorie);
    useEffect(() => {
        if (!firstRender) {
            allcategorie();
            setFirstRender(true) 
        }
    }, [firstRender,allcategorie])
    const handlePageChange = page => {
        setCurrentPage(page);
      };
    
      let paginatedCategorie;
      if (currentPage === 1) {
        paginatedCategorie = data.slice(0, itemsPerPage);
      } else {
        paginatedCategorie= data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
      }
      
      const [searchField, setsearchField] = useState("");
      const filtreedcategory = paginatedCategorie.filter((category) =>
        category.nom.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
        <section className="py-10 bg-white sm:py-14 lg:py-14">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Selectionez une  Categorie pour debuter</h2>
            </div>
            <div class="mt-4 flex items-center justify-center sm:mt-0 sm:justify-end sm:space-x-7 ">
            <input type="text" name="" id="" placeholder="Chercher" className=" m-1 items-center rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:inline-flex"
                          onChange={(e)=>setsearchField(e.target.value)}
             />
            </div>
            <div className="grid grid-cols-1 gap-5 mt-8 sm:mt-8 sm:grid-cols-2 xl:grid-cols-3 sm:gap-8 xl:gap-12">
               
                {
                    filtreedcategory?.map(categorie=>{
                        return( 
                        <div className="relative overflow-hidden transition-all duration-200 bg-gray-100 rounded-xl hover:bg-gray-200">
                        <div className="p-6 lg:px-10 lg:py-8">
                            <div className="flex items-center justify-start space-x-8">
                                <svg className="flex-shrink-0 w-10 h-10 text-gray-600 md:w-12 md:h-12" viewBox="0 0 60 60" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44 52H16C11.6 52 8 48.4 8 44V20H52V44C52 48.4 48.4 52 44 52Z" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M40 26V18C40 12.5 35.5 8 30 8C24.5 8 20 12.5 20 18V26" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M36 34H24V42H36V34Z" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div className="flex-shrink-0 w-px h-12 bg-gray-200"></div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 sm:text-base lg:text-sm">
                                        <Link href="#" title="">
                                            {categorie.nom}
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                    <p className="mt-2 text-sm font-medium text-gray-500">  {categorie.description.length>40?categorie.description.substring(0,40)+"...":categorie.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                    })
                }   
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

export default ListCategorie;