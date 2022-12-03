import React from 'react';
import { Link } from 'react-router-dom';

const ListBoutique = () => {
    const boutiques=[
        {
            nom:"Maroquinerie Ichraq",
            proprietaire:"",
            telephone:"",
            image:"https://img.freepik.com/free-photo/close-up-accessories-details-stylish-woman-walking-city-warm-fur-coat-winter-season-cold-weather-holding-leather-handbag-legs-boots-footwear-street-fashion-trend_285396-4720.jpg"

        },
        {
            nom:"Friperie Bobigny",
            proprietaire:"Safae Jerradi",
            telephone:"",
            image:"https://img.freepik.com/free-photo/defocussed-man-choosing-shirt-from-rail-shop_23-2148175633.jpg"
        },
        {
            nom:"Zara Shop",
            proprietaire:"Ichraq Elaidi",
            telephone:"",
            image:"https://img.freepik.com/free-photo/pretty-elegant-dark-skinned-woman-beige-jacket-smiles-looks-front-holds-hanger-with-white-knitted-sweater_197531-24100.jpg"
        },
        {
            nom:"Izac ",
            proprietaire:"Ichraq Elaidi",
            telephone:"",
            image:"https://img.freepik.com/free-photo/shoemaker-workshop-making-shoes_171337-12296.jpg"
        }

    ]
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Selectionez une  Boutique pour debuter</h2>
            </div>
    
            <div className="grid grid-cols-1 gap-5 mt-8 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3 sm:gap-8 xl:gap-12">
               {
                boutiques.map(({nom ,proprietaire ,telephone ,image } ,id)=>{

                    return(
                        
                          <div key={id} className="relative overflow-hidden bg-white shadow-xl rounded-xl  shadow-gray-400/10  transition-all duration-200">
                            <div className="p-1">
                              <div className="sm:flex">
                                <div className="shrink-1">
                                <img className="object-cover h-auto mx-auto rounded-xl w-52 sm:mx-0" src={image} alt=""></img>
                                  <div className="mt-4">
                                    <Link
                                      className="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-bold tracking-widest text-gray-500  transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                                      role="button">
                                       Voir la boutique
                                    </Link>
                                  </div>
                                </div>
                  
                                <div className="mt-6 sm:ml-8 sm:mt-0">
                                  <p className="text-xs font-bold text-gray-900">
                                    {nom}
                                  </p>
                  
                                  <ul className="mt-5 space-y-5">
                                    <li className="flex items-center justify-between">
                                      <p className="text-xs  tracking-wide text-gray-500 ">
                                        Crée Le:
                                      </p>
                                      <div className="flex items-end justify-center">
                                        <p className="text-xs  text-gray-900">
                                          11 jan 2021
                                        </p>
                                      </div>
                                    </li>
                  
                                    <li className="flex items-center justify-between">
                                      <p className="text-xs  tracking-wide text-gray-500 ">
                                        Ouvert :
                                      </p>
                                      <p className="text-xs font-bold text-gray-900">
                                         oui
                                      </p>
                                    </li>
                  
                                    <li className="flex items-center justify-between">
                                      <p className="text-xs  tracking-wide text-gray-500 ">
                                        heure : 
                                      </p>
                                      <p className="text-xs font-bold text-gray-900">
                                        12h-15h
                                      </p>
                                    </li>
                                  </ul>
                  
                                 
                                 
                                </div>
                              </div>
                            </div>
                          </div>
                       
              
                    )

                })
               }



            
               
            </div>
        </div>
    </section>
    );
};

export default ListBoutique;