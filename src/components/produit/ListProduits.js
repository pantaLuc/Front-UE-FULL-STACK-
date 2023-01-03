import React ,{useContext,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import {ContextProduit} from'./ContextProduit'

const ListProduits = () => {
    const {allproduit,produitlist, itemsPerPage,totalPages}=useContext(ContextProduit);
    const [firstRender ,setFirstRender]=useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = page => {
        setCurrentPage(page);
      };
    
    useEffect(() => {
    if (!firstRender) {
        allproduit();
        setFirstRender(true) 
    }
    console.log(produitlist)
  }, [firstRender ,allproduit,produitlist])


  let paginatedPrduit;
  if (currentPage === 1) {
    paginatedPrduit = produitlist.slice(0, itemsPerPage);
  } else {
    paginatedPrduit = produitlist.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }
console.log("element par page",itemsPerPage)
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Nos Meilleurs produits</h2>
            </div>
    
            <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 sm:gap-6">
                {paginatedPrduit.map((produit)=>{
          
                        return(  <div className="relative overflow-hidden bg-white rounded-lg shadow-lg group">
                        <div className="absolute z-10 top-5 left-5">
                            <div className="inline-flex items-center justify-center text-xs font-bold text-white bg-gray-800 rounded-full w-9 h-9">{produit.quantité}</div>
                        </div>
                        <div className="overflow-hidden aspect-w-4 aspect-h-3">
                            <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" 
                            src={produit.imageUrl?produit.imageUrl:"https://img.freepik.com/free-vector/online-wishes-list-concept-illustration_114360-3900.jpg"} alt="" />
                        </div>
                        <div className="px-5 py-5">
                            <h3 className="text-base font-bold text-gray-900">
                                <Link  title="">
                                    {produit.nom}
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                </Link>
                            </h3>
                            <div className="flex mt-1.5 items-center justify-between space-x-4">
                                <div className="flex flex-wrap items-center">
                                    <p className="text-sm font text-gray-900">{produit.description}</p>
                                </div>
                            </div>
                            <div className="flex mt-1.5 items-center justify-between space-x-4">
                                <div className="flex flex-wrap items-center">
                                    <p className="mr-2 text-sm font-bold text-gray-900">{produit.prix}</p>
                                    <p className="text-sm font-bold text-gray-500">€</p>
                                </div>
                                <div className="flex items-center space-x-px">
                                    
                                </div>
                            </div>
                        </div>
                    </div>)
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

export default ListProduits;