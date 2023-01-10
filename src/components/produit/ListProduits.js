import React ,{useContext,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import Select from "react-select";
import Pagination from '../Pagination';
import {ContextProduit} from'./ContextProduit'
import {Context} from '../../Context'

const ListProduits = () => {
    const {allproduit,produitlist, itemsPerPage,totalPages}=useContext(ContextProduit);
    const { setLanguageSelected,languageSelected,traduction } = useContext(Context);
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
    {traduction("pomme")}
    console.log(languageSelected)

    
  }, [firstRender ,allproduit,produitlist,languageSelected ,traduction])
  
  const [criteria , setCriteria]=useState("nom");
  const [search ,setChearch]=useState();

 
  
const handleSearchChange = event => {
     setChearch(event.target.value)
  }

const handleCriteriaChange = event => {
    setCriteria(event.target.value);
  }
  
  
  console.log(criteria , search)
  let paginatedPrduit;
  if (currentPage === 1) {
    paginatedPrduit = produitlist.slice(0, itemsPerPage);
  } else {
    paginatedPrduit = produitlist.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }
  const filtreedProduits = paginatedPrduit.filter(product => {
    if (typeof criteria === 'string' && typeof search === 'string') {
      if (criteria === 'nom') {
        return typeof product.nom === 'string' && product.nom.toLowerCase().includes(search.toLowerCase());
      } else if (criteria === 'prix') {
        return product.prix <= search;
      } else if (criteria === 'categorie') {
        return product.categorieList.some(c => c.nom.toLowerCase().includes(search.toLowerCase()));
      }else if(criteria==='boutique'){
        return product.boutique.nom.toLowerCase().includes(search.toLowerCase());
      } 
      else {
        return true;
      }
    } else {
      return true;
    }
  });
  
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Nos Meilleurs produits</h2>
            </div>
            <div class="mt-5 flex items-center justify-center sm:mt-0 sm:justify-end sm:space-x-7">
            <input type="text" placeholder="Chercher" className=" m-1 items-center rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:inline-flex"
            onChange={handleSearchChange}
            />
        <select className=" m-2 items-center rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:inline-flex" 
        
        value={criteria} onChange={handleCriteriaChange}>
          <option value="nom">nom</option>
          <option value="prix">prix</option>
          <option value="categorie">categorie</option>
          <option value="boutique">boutique</option>
        </select>
            </div>
            <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 sm:gap-6">
                {filtreedProduits.map((produit)=>{
          
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