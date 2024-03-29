
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from'../images/fullStack.png'
const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    const Links = [
        {
          to :"/product",
          name:"Produits"
        }
        ,
        {
            to :"/categorie",
            name:"Categorie"
        },
        {
            to :"/boutique",
            name:"Boutique"
          }
      ]
      
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
       
        <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
            <div className="flex-shrink-0">
                <Link href="/"  to ="/" title="" className="flex">
                    <img className="w-auto h-9 lg:h-11" src={logo} alt="" />
                </Link>
            </div>

            <button type="button" 
                 onClick={()=>setNavbar(navbar)}
            className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>

                
            </button>
            
            <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
             
             {
                Links?.map(({ to ,name }, id)=>{
                   return( <Link key={id} to={to} className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                         {name}
                    </Link>)
                })
             }
                
             
            </div>
            

            <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <div class="center ml-4 mr-auto max-w-xs flex-1">
                <label for="" class="sr-only"> Search </label>
                <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    </div>

                    <input type="search" name="" id="" class="block w-full rounded-lg border border-gray-300 py-2 pl-10 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm" placeholder="rechercher" />
                </div>
            </div>

                <Link to="/signup" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                    Sign up
                </Link>
                <Link to="/signin" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                    Sign in
                </Link>
            </div>
        </nav>

        <nav className="flex flex-col py-4 space-y-2 lg:hidden">
              
        {
                Links?.map(({ to ,name }, id)=>{
                   return( <Link key={id} to={to} className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                         {name}
                    </Link>)
                })
             }
                
             
        </nav>
        
    </div>
    );
};

export default NavBar;