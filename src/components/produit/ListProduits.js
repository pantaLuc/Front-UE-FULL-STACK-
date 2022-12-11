import React from 'react';
import { Link } from 'react-router-dom';

const ListProduits = () => {
 const produits=[
    {
        image:"https://img.freepik.com/photos-gratuite/chemise-decontractee-affaires-blanc-photoshoot-exterieur-gros-plan_53876-119744.jpg",
        nom:"Chemise Casual",
        prix :"200",
        quantité:"122"
    },

    {
        image:"https://img.freepik.com/vecteurs-libre/doudoune-sans-manches-noire-maquette-gilet-duvet_107791-1608.jpg",
        nom:"Veste sans Manche",
        prix :"120",
        quantité:"192"
    },

 ]

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Nos Meilleurs produits</h2>
            </div>
    
            <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 sm:gap-6">
                {produits.map(({image ,nom ,prix ,quantité} ,id)=>{
          
                        return(  <div  key={id} className="relative overflow-hidden bg-white rounded-lg shadow-lg group">
                        <div className="absolute z-10 top-5 left-5">
                            <div className="inline-flex items-center justify-center text-xs font-bold text-white bg-gray-800 rounded-full w-9 h-9">{quantité}</div>
                        </div>
                        <div className="overflow-hidden aspect-w-4 aspect-h-3">
                            <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={image} alt="" />
                        </div>
                        <div className="px-5 py-5">
                            <h3 className="text-base font-bold text-gray-900">
                                <Link  title="">
                                    {nom}
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                </Link>
                            </h3>
                            <div className="flex mt-1.5 items-center justify-between space-x-4">
                                <div className="flex flex-wrap items-center">
                                    <p className="mr-2 text-sm font-bold text-gray-900">{prix}</p>
                                    <p className="text-sm font-bold text-gray-500">
                                        <del> {prix} </del>
                                    </p>
                                </div>
                                <div className="flex items-center space-x-px">
                                    
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
          
            </div>
        </div>
    </section>
    );
};

export default ListProduits;