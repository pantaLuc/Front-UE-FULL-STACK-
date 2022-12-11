import React from 'react';
import Pagination from '../Pagination';

const ListCategorie = () => {
    const categorie=[
        {
            image:"",
            nom:"Chaussure",
            nombrePrduit:122
        },
        {
            image:"",
            nom:"Literie",
            nombrePrduit:112
        },
        {
            image:"",
            nom:"Beauté",
            nombrePrduit:2
        } 
    ]
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Selectionez une  Categorie pour debuter</h2>
            </div>
    
            <div className="grid grid-cols-1 gap-5 mt-8 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3 sm:gap-8 xl:gap-12">
               
                {
                    categorie?.map(({image ,nom,nombreProduit} ,id)=>{
                        return( 
                        <div  key={id} className="relative overflow-hidden transition-all duration-200 bg-gray-100 rounded-xl hover:bg-gray-200">
                        <div className="p-6 lg:px-10 lg:py-8">
                            <div className="flex items-center justify-start space-x-8">
                                <svg className="flex-shrink-0 w-10 h-10 text-gray-600 md:w-12 md:h-12" viewBox="0 0 60 60" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44 52H16C11.6 52 8 48.4 8 44V20H52V44C52 48.4 48.4 52 44 52Z" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M40 26V18C40 12.5 35.5 8 30 8C24.5 8 20 12.5 20 18V26" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M36 34H24V42H36V34Z" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div className="flex-shrink-0 w-px h-12 bg-gray-200"></div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 sm:text-base lg:text-lg">
                                        <a href="#" title="">
                                            {nom}
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm font-medium text-gray-500"> {toString(nombreProduit)} Disponible</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                    })
                }
               <Pagination/>
            </div>
        </div>
    </section>
    );
};

export default ListCategorie;